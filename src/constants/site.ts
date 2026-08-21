export const SITE_CONFIG = {
  name: "Cognivac",
  legalName: "Cognivac Technologies, Inc.",
  tagline: "Enterprise AI & Software Development",
  description:
    "Cognivac builds intelligent software, AI agents, and enterprise platforms that turn complexity into competitive advantage.",
  url: import.meta.env.PUBLIC_SITE_URL ?? "https://cognivac.com",
  email: "hello@cognivac.com",
  address: "San Francisco, CA",
  /**
   * Cal.com embed URL for /contact#book. Empty string hides the calendar
   * rather than rendering a dead iframe.
   */
  calUrl: import.meta.env.PUBLIC_CAL_URL ?? "",
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
  security: "/security",
  pricing: "/pricing",
  support: "/support",
  integrations: "/integrations",
  technology: "/technology",
  resources: "/resources",
  thankYou: "/thank-you",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  dpa: "/dpa",
  subprocessors: "/subprocessors",
  aiUsage: "/ai-usage-policy",
  accessibility: "/accessibility",
} as const;

export const servicePath = (slug: string) => `/services/${slug}`;
export const industryPath = (slug: string) => `/industries/${slug}`;
export const blogPath = (slug: string) => `/blog/${slug}`;
export const resourcePath = (slug: string) => `/resources/${slug}`;
