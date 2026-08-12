import type { NavItem } from "@/types";
import { NAV_ROUTES } from "@/constants/site";

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
        description: "The founders and the bench behind the work",
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
      // The parent is a disclosure button, not a link, so without this row
      // there is no way to reach /services itself from the nav — only to
      // land part-way down it on one capability's anchor.
      {
        label: "All Services",
        href: NAV_ROUTES.services,
        description: "Every capability, and what each one ships",
      },
      {
        label: "AI Agents",
        href: `${NAV_ROUTES.services}#ai-agents`,
        description: "Autonomous agents for enterprise workflows",
      },
      {
        label: "Machine Learning",
        href: `${NAV_ROUTES.services}#machine-learning`,
        description: "Custom ML models and pipelines",
      },
      {
        label: "Generative AI",
        href: `${NAV_ROUTES.services}#generative-ai`,
        description: "LLM apps, RAG, and copilots",
      },
      {
        label: "Cloud & DevOps",
        href: `${NAV_ROUTES.services}#cloud`,
        description: "Scalable cloud-native platforms",
      },
      {
        label: "Automation",
        href: `${NAV_ROUTES.services}#automation`,
        description: "Intelligent process automation",
      },
      // The services page has six capabilities; this menu listed five, so
      // `#apps` was a section with no way in from the nav.
      {
        label: "Enterprise Applications",
        href: `${NAV_ROUTES.services}#apps`,
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
        href: `${NAV_ROUTES.industries}#fintech`,
        description: "AI for banking, payments, and risk",
      },
      {
        label: "Retail",
        href: `${NAV_ROUTES.industries}#retail`,
        description: "Personalization and supply chain AI",
      },
      {
        label: "Manufacturing",
        href: `${NAV_ROUTES.industries}#manufacturing`,
        description: "Predictive ops and quality systems",
      },
      {
        label: "SaaS",
        href: `${NAV_ROUTES.industries}#saas`,
        description: "Product intelligence and growth",
      },
    ],
  },
  {
    label: "Resources",
    href: NAV_ROUTES.blog,
    children: [
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
