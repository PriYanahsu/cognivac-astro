import { NAV_ROUTES, servicePath } from "@/constants/site";
import { SERVICE_SLUGS } from "@/features/services/constants";

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: NAV_ROUTES.about },
  { label: "Team", href: NAV_ROUTES.team },
  { label: "Careers", href: NAV_ROUTES.careers },
  { label: "Contact", href: NAV_ROUTES.contact },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "All Services", href: NAV_ROUTES.services },
  { label: "AI Agents", href: servicePath(SERVICE_SLUGS["ai-agents"]) },
  { label: "Machine Learning", href: servicePath(SERVICE_SLUGS["machine-learning"]) },
  { label: "Generative AI", href: servicePath(SERVICE_SLUGS["generative-ai"]) },
  { label: "Cloud & DevOps", href: servicePath(SERVICE_SLUGS.cloud) },
  { label: "Automation", href: servicePath(SERVICE_SLUGS.automation) },
  { label: "Enterprise Applications", href: servicePath(SERVICE_SLUGS.apps) },
] as const;

export const FOOTER_RESOURCE_LINKS = [
  { label: "Case Studies", href: NAV_ROUTES.caseStudies },
  { label: "Blog", href: NAV_ROUTES.blog },
  { label: "Resources", href: NAV_ROUTES.resources },
  { label: "Industries", href: NAV_ROUTES.industries },
  { label: "Security", href: NAV_ROUTES.security },
  { label: "Pricing", href: NAV_ROUTES.pricing },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: NAV_ROUTES.privacy },
  { label: "Terms of Service", href: NAV_ROUTES.terms },
  { label: "Cookie Policy", href: NAV_ROUTES.cookies },
  { label: "DPA", href: NAV_ROUTES.dpa },
  { label: "Subprocessors", href: NAV_ROUTES.subprocessors },
  { label: "AI usage", href: NAV_ROUTES.aiUsage },
  { label: "Accessibility", href: NAV_ROUTES.accessibility },
] as const;
