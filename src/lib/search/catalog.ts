import { NAV_ROUTES } from "@/constants/site";
import { SERVICE_PAGES } from "@/features/services/constants";
import { INDUSTRY_PAGES } from "@/features/industries/constants";
import { RESOURCES } from "@/features/resources/constants";

export interface SearchEntry {
  title: string;
  href: string;
  description: string;
  category: string;
}

export const STATIC_SEARCH_INDEX: SearchEntry[] = [
  { title: "Home", href: NAV_ROUTES.home, description: "Enterprise AI and software development.", category: "Pages" },
  { title: "About", href: NAV_ROUTES.about, description: "Mission, positioning, and how we work.", category: "Pages" },
  { title: "Team", href: NAV_ROUTES.team, description: "Founders and how a pod is staffed.", category: "Pages" },
  { title: "Services", href: NAV_ROUTES.services, description: "Capabilities and engagement models.", category: "Services" },
  { title: "Industries", href: NAV_ROUTES.industries, description: "FinTech, retail, manufacturing, SaaS.", category: "Industries" },
  { title: "Case studies", href: NAV_ROUTES.caseStudies, description: "Work that reached production.", category: "Pages" },
  { title: "Blog", href: NAV_ROUTES.blog, description: "Notes from the engineering floor.", category: "Insights" },
  { title: "Careers", href: NAV_ROUTES.careers, description: "Open roles.", category: "Pages" },
  { title: "Contact", href: NAV_ROUTES.contact, description: "Talk to an engineer.", category: "Pages" },
  { title: "Security", href: NAV_ROUTES.security, description: "Residency, training policy, DPA, questionnaires.", category: "Pages" },
  { title: "Pricing", href: NAV_ROUTES.pricing, description: "Discovery workshop and engagement bands.", category: "Pages" },
  { title: "Support", href: NAV_ROUTES.support, description: "Managed AI operations retainer.", category: "Pages" },
  { title: "Integrations", href: NAV_ROUTES.integrations, description: "Salesforce, SAP, Snowflake, MCP, and more.", category: "Pages" },
  { title: "Technology", href: NAV_ROUTES.technology, description: "The stack: LangGraph, MLflow, pgvector, Terraform, Kafka.", category: "Pages" },
  { title: "Resources", href: NAV_ROUTES.resources, description: "Assessments, agendas, comparisons.", category: "Resources" },
  { title: "Privacy", href: NAV_ROUTES.privacy, description: "Privacy policy.", category: "Legal" },
  { title: "Terms", href: NAV_ROUTES.terms, description: "Website terms.", category: "Legal" },
  { title: "Cookies", href: NAV_ROUTES.cookies, description: "Cookie settings.", category: "Legal" },
  { title: "DPA", href: NAV_ROUTES.dpa, description: "Data processing addendum.", category: "Legal" },
  { title: "Subprocessors", href: NAV_ROUTES.subprocessors, description: "Vendor list.", category: "Legal" },
  { title: "AI usage policy", href: NAV_ROUTES.aiUsage, description: "How we use AI on client work.", category: "Legal" },
  { title: "Accessibility", href: NAV_ROUTES.accessibility, description: "Accessibility statement.", category: "Legal" },
  ...SERVICE_PAGES.map((page) => ({
    title: page.title,
    href: `/services/${page.slug}`,
    description: page.description,
    category: "Services",
  })),
  ...INDUSTRY_PAGES.map((page) => ({
    title: page.title,
    href: `/industries/${page.slug}`,
    description: page.description,
    category: "Industries",
  })),
  ...RESOURCES.map((page) => ({
    title: page.title,
    href: page.href,
    description: page.excerpt,
    category: "Resources",
  })),
];
