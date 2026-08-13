export const SITE_CONFIG = {
  name: "Cognivac",
  legalName: "Cognivac Technologies, Inc.",
  tagline: "Enterprise AI & Software Development",
  description:
    "Cognivac builds intelligent software, AI agents, and enterprise platforms that turn complexity into competitive advantage.",
  url: import.meta.env.PUBLIC_SITE_URL ?? "https://cognivac.com",
  email: "hello@cognivac.com",
  phone: "+1 (555) 010-2400",
  address: "San Francisco, CA",
  social: {
    linkedin: {
      href: "https://linkedin.com/company/cognivac",
      handle: "company/cognivac",
    },
    github: {
      href: "https://github.com/cognivac",
      handle: "cognivac",
    },
    youtube: {
      href: "https://youtube.com/@cognivac",
      handle: "@cognivac",
    },
    x: {
      href: "https://x.com/cognivac",
      handle: "@cognivac",
    },
  },
} as const;

export const NAV_ROUTES = {
  home: "/",
  about: "/about",
  team: "/team",
  services: "/services",
  industries: "/industries",
  caseStudies: "/case-studies",
  blog: "/blog",
  careers: "/careers",
  contact: "/contact",
} as const;
