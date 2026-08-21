import { createPageMetadata } from "@/lib/seo";

/**
 * In the Next build this lived beside the component in features/about/index.tsx.
 * Astro components cannot export values for import, so page metadata moves to a
 * sibling module — the same pattern is used in every feature folder.
 */
export const aboutMetadata = createPageMetadata({
  title: "About Us",
  description:
    "Cognivac is a service-based software development company with AI integration at its core — we design, build, and support custom systems as a long-term engineering partner.",
  path: "/about",
  image: "/images/og/about.png",
});
