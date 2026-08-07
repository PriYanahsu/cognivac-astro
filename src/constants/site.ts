export const SITE_CONFIG = {
  name: "Cognivac",
  tagline: "Enterprise AI & Software Development",
  description:
    "Cognivac builds intelligent software, AI agents, and enterprise platforms that turn complexity into competitive advantage.",
  url: import.meta.env.PUBLIC_SITE_URL ?? "https://cognivac.com",
  email: "hello@cognivac.com",
  phone: "+1 (555) 010-2400",
  address: "San Francisco, CA",
  social: {
    linkedin: "https://linkedin.com/company/cognivac",
    github: "https://github.com/cognivac",
    youtube: "https://youtube.com/@cognivac",
    x: "https://x.com/cognivac",
  },
} as const;

export const NAV_ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  industries: "/industries",
  caseStudies: "/case-studies",
  blog: "/blog",
  careers: "/careers",
  contact: "/contact",
} as const;
