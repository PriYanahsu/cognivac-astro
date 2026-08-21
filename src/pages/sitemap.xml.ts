import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { CASE_STUDIES } from "@/features/home/constants/content";
import { SERVICE_PAGES } from "@/features/services/constants";
import { INDUSTRY_PAGES } from "@/features/industries/constants";
import { RESOURCES } from "@/features/resources/constants";
import { NAV_ROUTES } from "@/constants/site";

const siteUrl = "https://cognivac.com";

const routes = [
  NAV_ROUTES.home,
  NAV_ROUTES.about,
  NAV_ROUTES.team,
  NAV_ROUTES.services,
  NAV_ROUTES.industries,
  NAV_ROUTES.caseStudies,
  NAV_ROUTES.blog,
  NAV_ROUTES.careers,
  NAV_ROUTES.contact,
  NAV_ROUTES.security,
  NAV_ROUTES.pricing,
  NAV_ROUTES.support,
  NAV_ROUTES.integrations,
  NAV_ROUTES.technology,
  NAV_ROUTES.resources,
  NAV_ROUTES.privacy,
  NAV_ROUTES.terms,
  NAV_ROUTES.cookies,
  NAV_ROUTES.dpa,
  NAV_ROUTES.subprocessors,
  NAV_ROUTES.aiUsage,
  NAV_ROUTES.accessibility,
];

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const lastModified = new Date().toISOString();

  const extra = [
    ...CASE_STUDIES.map((study) => `/case-studies/${study.slug}`),
    ...SERVICE_PAGES.map((page) => `/services/${page.slug}`),
    ...INDUSTRY_PAGES.map((page) => `/industries/${page.slug}`),
    ...RESOURCES.map((page) => page.href),
    ...posts.map((post) => `/blog/${post.id}`),
  ];

  const urls = [...routes, ...extra]
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
