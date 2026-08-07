import type { APIRoute } from "astro";

/** Port of app/sitemap.ts — emitted as a static /sitemap.xml at build time. */
const siteUrl = "https://cognivac.com";
const routes = [
  "/",
  "/about",
  "/services",
  "/industries",
  "/case-studies",
  "/blog",
  "/careers",
  "/contact",
];

export const GET: APIRoute = () => {
  const lastModified = new Date().toISOString();

  const urls = routes
    .map((path) => {
      const loc = `${siteUrl}${path === "/" ? "" : path}`;
      const changefreq = path === "/" ? "weekly" : "monthly";
      const priority = path === "/" ? "1.0" : "0.7";

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
