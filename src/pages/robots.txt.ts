import type { APIRoute } from "astro";

/** Port of app/robots.ts — emitted as a static /robots.txt at build time. */
const siteUrl = "https://cognivac.com";

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain" } }
  );
