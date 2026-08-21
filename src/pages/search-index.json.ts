import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { STATIC_SEARCH_INDEX } from "@/lib/search/catalog";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const index = [
    ...STATIC_SEARCH_INDEX,
    ...posts.map((post) => ({
      title: post.data.title,
      href: `/blog/${post.id}`,
      description: post.data.excerpt,
      category: "Insights",
    })),
  ];

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
