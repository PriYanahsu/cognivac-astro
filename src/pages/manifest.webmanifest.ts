import type { APIRoute } from "astro";

/** Port of app/manifest.ts — emitted as a static /manifest.webmanifest. */
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: "Cognivac",
      short_name: "Cognivac",
      description:
        "Enterprise AI & Software Development — agents, ML, GenAI, and cloud platforms.",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#2B0B59",
      icons: [
        {
          src: "/icons/logo.svg",
          sizes: "any",
          type: "image/svg+xml",
        },
      ],
    }),
    { headers: { "Content-Type": "application/manifest+json" } }
  );
