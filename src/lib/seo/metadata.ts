import { SITE_CONFIG } from "@/constants/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Astro has no `Metadata` export, so this returns a plain object that
 * `Layout.astro` renders into <head>. Field-for-field equivalent to the
 * Next.js version: canonical, Open Graph, Twitter card, and robots.
 */
export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  image: string;
  siteName: string;
  locale: string;
  type: string;
  noIndex: boolean;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  image = "/images/og-default.png",
  noIndex = false,
}: PageMetadataInput): PageMetadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle =
    path === "" || path === "/" ? title : `${title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    canonical: url,
    image,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    noIndex,
  };
}
