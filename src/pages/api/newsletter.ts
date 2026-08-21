import type { APIRoute } from "astro";
import { z } from "zod";
import { clientKey, rateLimit } from "@/lib/api/rate-limit";
import { deliverLead, json } from "@/lib/mail/send";

export const prerender = false;

const newsletterSchema = z.object({
  email: z.email(),
  website: z.string().max(200).optional().default(""),
});

export const POST: APIRoute = async ({ request }) => {
  const limited = rateLimit(clientKey(request, "newsletter"), { limit: 6 });
  if (!limited.ok) {
    return json({ error: "Too many requests. Try again shortly." }, 429);
  }

  try {
    const body: unknown = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return json(
        { error: "Invalid payload", details: z.flattenError(parsed.error) },
        400,
      );
    }

    const { email, website } = parsed.data;

    if (website.trim().length > 0) {
      return json({ ok: true });
    }

    await deliverLead(
      {
        subject: `Newsletter: ${email}`,
        text: `New newsletter signup: ${email}`,
        replyTo: email,
      },
      { type: "newsletter", email },
    );

    return json({ ok: true });
  } catch {
    return json({ error: "Invalid request" }, 400);
  }
};
