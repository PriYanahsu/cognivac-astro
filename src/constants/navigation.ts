import type { NavItem } from "@/types";
import { NAV_ROUTES, servicePath, industryPath } from "@/constants/site";
import { SERVICE_SLUGS } from "@/features/services/constants";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: NAV_ROUTES.about,
    children: [
      {
        label: "About Us",
        href: NAV_ROUTES.about,
        description: "Our mission, vision, and leadership",
      },
      {
        label: "Team",
        href: NAV_ROUTES.team,
        description: "The founders and how a pod is staffed",
      },
      {
        label: "Careers",
        href: NAV_ROUTES.careers,
        description: "Join the Cognivac team",
      },
      {
        label: "Contact",
        href: NAV_ROUTES.contact,
        description: "Talk with our specialists",
      },
    ],
  },
  {
    label: "Solutions",
    href: NAV_ROUTES.services,
    children: [
      {
        label: "All Services",
        href: NAV_ROUTES.services,
        description: "Every capability, and what each one ships",
      },
      {
        label: "AI Agents",
        href: servicePath(SERVICE_SLUGS["ai-agents"]),
        description: "Autonomous agents for enterprise workflows",
      },
      {
        label: "Machine Learning",
        href: servicePath(SERVICE_SLUGS["machine-learning"]),
        description: "Custom ML models and pipelines",
      },
      {
        label: "Generative AI",
        href: servicePath(SERVICE_SLUGS["generative-ai"]),
        description: "LLM apps, RAG, and copilots",
      },
      {
        label: "Cloud & DevOps",
        href: servicePath(SERVICE_SLUGS.cloud),
        description: "Scalable cloud-native platforms",
      },
      {
        label: "Automation",
        href: servicePath(SERVICE_SLUGS.automation),
        description: "Intelligent process automation",
      },
      {
        label: "Enterprise Applications",
        href: servicePath(SERVICE_SLUGS.apps),
        description: "Web, mobile, and internal platforms",
      },
    ],
  },
  {
    label: "Industries",
    href: NAV_ROUTES.industries,
    children: [
      {
        label: "All Industries",
        href: NAV_ROUTES.industries,
        description: "Every sector we deliver in",
      },
      {
        label: "FinTech",
        href: industryPath("fintech"),
        description: "AI for banking, payments, and risk",
      },
      {
        label: "Retail",
        href: industryPath("retail"),
        description: "Personalization and supply chain AI",
      },
      {
        label: "Manufacturing",
        href: industryPath("manufacturing"),
        description: "Predictive ops and quality systems",
      },
      {
        label: "SaaS",
        href: industryPath("saas"),
        description: "Product intelligence and growth",
      },
    ],
  },
  {
    label: "Resources",
    href: NAV_ROUTES.resources,
    children: [
      {
        label: "Resources",
        href: NAV_ROUTES.resources,
        description: "Briefs, agendas, and comparisons",
      },
      {
        label: "Blog",
        href: NAV_ROUTES.blog,
        description: "Insights on AI and engineering",
      },
      {
        label: "Case Studies",
        href: NAV_ROUTES.caseStudies,
        description: "Outcomes from real engagements",
      },
      {
        label: "Security",
        href: NAV_ROUTES.security,
        description: "Residency, DPA, and questionnaires",
      },
      {
        label: "Pricing",
        href: NAV_ROUTES.pricing,
        description: "Discovery workshop and build bands",
      },
    ],
  },
  {
    label: "Careers",
    href: NAV_ROUTES.careers,
  },
  {
    label: "Contact",
    href: NAV_ROUTES.contact,
  },
];
