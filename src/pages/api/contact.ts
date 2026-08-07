import type { APIRoute } from "astro";
import { z } from "zod";

/**
 * Port of app/api/contact/route.ts.
 *
 * This is the only route in the project that is not prerendered — everything
 * else is static HTML. `zod` stays here because it runs on the server, so it
 * never reaches the browser bundle.
 */
export const prerender = false;

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  company: z.string().min(1),
  message: z.string().min(10),
});

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return json(
        { error: "Invalid payload", details: z.flattenError(parsed.error) },
        400
      );
    }

    // Placeholder: wire to CRM / email provider in production
    console.info("[contact]", parsed.data);

    return json({ ok: true });
  } catch {
    return json({ error: "Invalid request" }, 400);
  }
};
