import { NAV_ROUTES } from "@/constants/site";

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: NAV_ROUTES.about },
  { label: "Team", href: NAV_ROUTES.team },
  { label: "Careers", href: NAV_ROUTES.careers },
  { label: "Contact", href: NAV_ROUTES.contact },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "All Services", href: NAV_ROUTES.services },
  { label: "AI Agents", href: `${NAV_ROUTES.services}#ai-agents` },
  { label: "Machine Learning", href: `${NAV_ROUTES.services}#machine-learning` },
  { label: "Generative AI", href: `${NAV_ROUTES.services}#generative-ai` },
  { label: "Cloud & DevOps", href: `${NAV_ROUTES.services}#cloud` },
  { label: "Automation", href: `${NAV_ROUTES.services}#automation` },
] as const;

export const FOOTER_RESOURCE_LINKS = [
  { label: "Case Studies", href: NAV_ROUTES.caseStudies },
  { label: "Blog", href: NAV_ROUTES.blog },
  { label: "Industries", href: NAV_ROUTES.industries },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
] as const;
