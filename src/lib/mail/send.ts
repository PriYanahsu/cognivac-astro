import { SITE_CONFIG } from "@/constants/site";

const RESEND_URL = "https://api.resend.com/emails";

export interface MailAttachment {
  filename: string;
  content: string;
  contentType?: string;
}

export interface OutboundMail {
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: MailAttachment[];
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export { json };

/**
 * Best-effort delivery. A missing API key logs and still returns ok so a
 * misconfigured preview never 500s a form. CRM webhook failures are swallowed
 * after one attempt for the same reason.
 */
export async function deliverLead(
  mail: OutboundMail,
  crmPayload?: Record<string, unknown>,
): Promise<{ delivered: boolean; reason?: string }> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL ?? SITE_CONFIG.email;
  const from = import.meta.env.FROM_EMAIL ?? `Cognivac <${SITE_CONFIG.email}>`;

  let delivered = false;
  let reason: string | undefined;

  if (!apiKey) {
    console.info("[mail] RESEND_API_KEY unset; logging only", {
      subject: mail.subject,
      text: mail.text.slice(0, 500),
    });
    reason = "logged";
  } else {
    try {
      const res = await fetch(RESEND_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject: mail.subject,
          text: mail.text,
          reply_to: mail.replyTo,
          attachments: mail.attachments?.map((file) => ({
            filename: file.filename,
            content: file.content,
            content_type: file.contentType,
          })),
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("[mail] Resend rejected", res.status, detail.slice(0, 400));
        reason = "resend-failed";
      } else {
        delivered = true;
      }
    } catch (error) {
      console.error("[mail] Resend network error", error);
      reason = "resend-network";
    }
  }

  const webhook = import.meta.env.CRM_WEBHOOK_URL;
  if (webhook && crmPayload) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
      });
    } catch (error) {
      console.error("[mail] CRM webhook failed", error);
    }
  }

  return { delivered, reason };
}
