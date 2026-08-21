import type { APIRoute } from "astro";
import { z } from "zod";
import { clientKey, rateLimit } from "@/lib/api/rate-limit";
import { deliverLead, json } from "@/lib/mail/send";

export const prerender = false;

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const contactSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.email(),
  company: z.string().min(1).max(200),
  message: z.string().min(10).max(8000),
  website: z.string().max(200).optional().default(""),
  role: z.string().max(80).optional().default(""),
  resource: z.string().max(80).optional().default(""),
});

async function readPayload(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    const resume = form.get("resume");
    const file = resume instanceof File && resume.size > 0 ? resume : null;

    return {
      fields: {
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        company: String(form.get("company") ?? ""),
        message: String(form.get("message") ?? ""),
        website: String(form.get("website") ?? ""),
        role: String(form.get("role") ?? ""),
        resource: String(form.get("resource") ?? ""),
      },
      file,
    };
  }

  const body: unknown = await request.json();
  const record = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  return {
    fields: {
      name: String(record.name ?? ""),
      email: String(record.email ?? ""),
      company: String(record.company ?? ""),
      message: String(record.message ?? ""),
      website: String(record.website ?? ""),
      role: String(record.role ?? ""),
      resource: String(record.resource ?? ""),
    },
    file: null as File | null,
  };
}

export const POST: APIRoute = async ({ request }) => {
  const limited = rateLimit(clientKey(request, "contact"));
  if (!limited.ok) {
    return json(
      { error: "Too many requests. Try again shortly." },
      429,
    );
  }

  try {
    const { fields, file } = await readPayload(request);
    const parsed = contactSchema.safeParse(fields);

    if (!parsed.success) {
      return json(
        { error: "Invalid payload", details: z.flattenError(parsed.error) },
        400,
      );
    }

    const data = parsed.data;

    if (data.website.trim().length > 0) {
      return json({ ok: true });
    }

    if (file) {
      if (file.size > MAX_RESUME_BYTES) {
        return json({ error: "Resume must be 5 MB or smaller." }, 400);
      }
      if (file.type && !ALLOWED_RESUME.has(file.type)) {
        return json({ error: "Resume must be a PDF or Word document." }, 400);
      }
    }

    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      data.role ? `Role: ${data.role}` : null,
      data.resource ? `Resource: ${data.resource}` : null,
      "",
      data.message,
    ].filter((line): line is string => line !== null);

    let attachments:
      | { filename: string; content: string; contentType?: string }[]
      | undefined;

    if (file) {
      const bytes = new Uint8Array(await file.arrayBuffer());
      let binary = "";
      bytes.forEach((byte) => {
        binary += String.fromCharCode(byte);
      });
      attachments = [
        {
          filename: file.name || "resume",
          content: btoa(binary),
          contentType: file.type || undefined,
        },
      ];
    }

    const subject = data.role
      ? `Application: ${data.role} — ${data.name}`
      : data.resource
        ? `Resource request: ${data.resource} — ${data.name}`
        : `Contact: ${data.name} (${data.company})`;

    await deliverLead(
      {
        subject,
        text: lines.join("\n"),
        replyTo: data.email,
        attachments,
      },
      {
        type: "contact",
        ...data,
        hasResume: Boolean(file),
      },
    );

    return json({ ok: true });
  } catch {
    return json({ error: "Invalid request" }, 400);
  }
};
