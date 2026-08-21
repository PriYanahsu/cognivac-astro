import { createPageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/constants/site";

export const homeMetadata = createPageMetadata({
  title: `${SITE_CONFIG.name} | Enterprise AI & Software Development`,
  description: SITE_CONFIG.description,
  path: "/",
  image: "/images/og/home.png",
});
