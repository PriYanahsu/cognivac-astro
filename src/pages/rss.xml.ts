import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_CONFIG, NAV_ROUTES } from "@/constants/site";

export const GET: APIRoute = async () => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const items = posts
    .map((post) => {
      const url = `${SITE_CONFIG.url}/blog/${post.id}`;
      const date = post.data.date.toISOString();
      return `    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      <description><![CDATA[${post.data.excerpt}]]></description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Cognivac Insights</title>
    <link>${SITE_CONFIG.url}${NAV_ROUTES.blog}</link>
    <description>Notes from the engineering floor.</description>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
