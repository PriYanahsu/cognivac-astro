/**
 * In-memory sliding window. Fine for a single serverless instance; a flood
 * can still fan out across isolates. Swap for Upstash if that becomes a problem.
 */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function rateLimit(
  key: string,
  { limit = 8, windowMs = 10 * 60 * 1000 }: { limit?: number; windowMs?: number } = {},
): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (current.count >= limit) {
    return {
      ok: false,
      retryAfterSec: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { ok: true };
}

export function clientKey(request: Request, route: string): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  return `${route}:${ip}`;
}
