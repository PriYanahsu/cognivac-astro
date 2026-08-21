/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_CAL_URL?: string;
  readonly RESEND_API_KEY?: string;
  readonly CONTACT_TO_EMAIL?: string;
  readonly FROM_EMAIL?: string;
  readonly CRM_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
