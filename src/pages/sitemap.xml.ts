import type { APIRoute } from "astro";
import { CASE_STUDIES } from "@/features/home/constants/content";

/** Port of app/sitemap.ts — emitted as a static /sitemap.xml at build time. */
const siteUrl = "https://cognivac.com";
const routes = [
  "/",
  "/about",
  "/team",
  "/services",
  "/industries",
  "/case-studies",
  "/blog",
  "/careers",
  "/contact",
];

/**
 * Individual study pages are generated from the same array that generates the
 * routes themselves, so a study added to CASE_STUDIES is never left out of the
 * sitemap by hand.
 */
const studyRoutes = CASE_STUDIES.map((study) => `/case-studies/${study.slug}`);

export const GET: APIRoute = () => {
  const lastModified = new Date().toISOString();

  const urls = [...routes, ...studyRoutes]
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
