/**
 * Shared home-page data. Section-specific copy now lives in each section's own
 * feature folder (src/features/<section>/constants.ts). The arrays below stay
 * here because /services, /industries, and /case-studies also consume them.
 */
import type {
  ServiceItem,
  IndustryItem,
  CaseStudyItem,
  StatItem,
  TestimonialItem,
  FaqItem,
} from "@/types";
import { NAV_ROUTES } from "@/constants/site";

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Autonomous and assisted agents that execute multi-step work across your tools and data.",
    icon: "Bot",
    href: `${NAV_ROUTES.services}#ai-agents`,
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description:
      "Custom models, MLOps pipelines, and evaluation frameworks built for production scale.",
    icon: "Brain",
    href: `${NAV_ROUTES.services}#machine-learning`,
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description:
      "LLM applications, RAG systems, copilots, and content platforms with enterprise guardrails.",
    icon: "Sparkles",
    href: `${NAV_ROUTES.services}#generative-ai`,
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Cloud-native architectures, DevOps, and infrastructure that scale with your AI workloads.",
    icon: "Cloud",
    href: `${NAV_ROUTES.services}#cloud`,
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Intelligent process automation that connects people, systems, and decisions.",
    icon: "Workflow",
    href: `${NAV_ROUTES.services}#automation`,
  },
  {
    id: "apps",
    title: "Enterprise Applications",
    description:
      "Web, mobile, and internal platforms designed for speed, security, and usability.",
    icon: "AppWindow",
    href: `${NAV_ROUTES.services}#apps`,
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "fintech",
    title: "FinTech",
    description: "Risk, fraud, personalization, and ops intelligence for financial institutions.",
    image: "/images/industries/fintech.svg",
    href: `${NAV_ROUTES.industries}#fintech`,
  },
  {
    id: "retail",
    title: "Retail",
    description: "Demand forecasting, customer intelligence, and supply chain optimization.",
    image: "/images/industries/retail.svg",
    href: `${NAV_ROUTES.industries}#retail`,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Predictive maintenance, quality vision, and plant-floor automation.",
    image: "/images/industries/manufacturing.svg",
    href: `${NAV_ROUTES.industries}#manufacturing`,
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Product AI features, usage intelligence, and growth automation.",
    image: "/images/industries/saas.svg",
    href: `${NAV_ROUTES.industries}#saas`,
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "1",
    title: "Enterprise knowledge copilots for a Fortune 500 manufacturer",
    description:
      "Unified technical documentation into a governed GenAI assistant used by 12,000 engineers.",
    category: "Generative AI",
    image: "/images/case-studies/case-1.svg",
    href: NAV_ROUTES.caseStudies,
    metric: "3.4x faster answers",
  },
  {
    id: "2",
    title: "Fraud detection ML that adapts in real time",
    description:
      "Rebuilt a payments risk engine with continuous learning and explainable decisions.",
    category: "Machine Learning",
    image: "/images/case-studies/case-2.svg",
    href: NAV_ROUTES.caseStudies,
    metric: "41% fewer false positives",
  },
  {
    id: "3",
    title: "Agentic ops platform for a global logistics network",
    description:
      "Automated exception handling across warehouses with human-in-the-loop oversight.",
    category: "AI Agents",
    image: "/images/case-studies/case-3.svg",
    href: NAV_ROUTES.caseStudies,
    metric: "18 hrs saved weekly",
  },
];

export const STATS: StatItem[] = [
  {
    id: "1",
    value: 120,
    suffix: "+",
    label: "AI systems shipped to production",
  },
  {
    id: "2",
    value: 40,
    suffix: "M+",
    label: "Automated decisions processed monthly",
  },
  {
    id: "3",
    value: 98,
    suffix: "%",
    label: "Client retention across engagements",
  },
  {
    id: "4",
    value: 25,
    suffix: "+",
    label: "Industries served worldwide",
  },
  {
    id: "5",
    value: 4.9,
    suffix: "",
    decimals: 1,
    label: "Average delivery satisfaction score",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Cognivac didn't just build a model—they built an operating system for how our teams use AI every day.",
    name: "Priya Raman",
    role: "Chief Digital Officer",
    company: "Northline Financial",
  },
  {
    id: "2",
    quote:
      "From architecture to rollout, the team operated like an extension of our engineering org. Production-ready from day one.",
    name: "Marcus Chen",
    role: "VP of Engineering",
    company: "Orbit Commerce",
  },
  {
    id: "3",
    quote:
      "We evaluated five AI partners. Cognivac was the only one who could speak fluently about agents, governance, and UX.",
    name: "Elena Voss",
    role: "Head of AI Strategy",
    company: "Helix Manufacturing",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "1",
    question: "What kinds of AI projects does Cognivac take on?",
    answer:
      "We specialize in AI agents, machine learning systems, generative AI applications, cloud platforms, automation, and enterprise software. Engagements typically span discovery, architecture, build, and production hardening.",
  },
  {
    id: "2",
    question: "How do you approach AI governance and security?",
    answer:
      "Every engagement includes threat modeling, access controls, evaluation harnesses, audit logging, and deployment patterns suited to your compliance requirements. We design for explainability and human oversight where decisions are high-stakes.",
  },
  {
    id: "3",
    question: "Do you work with existing internal teams?",
    answer:
      "Yes. We embed with your product and engineering teams, transfer knowledge continuously, and leave you with documentation, runbooks, and ownership—not a black box.",
  },
  {
    id: "4",
    question: "How long does a typical engagement take?",
    answer:
      "Pilots often ship in 6–10 weeks. Full platform builds vary from a quarter to multi-phase programs depending on scope, data readiness, and integration complexity.",
  },
  {
    id: "5",
    question: "Can Cognivac modernize legacy systems alongside AI?",
    answer:
      "Absolutely. Many of our strongest outcomes combine AI capability with API modernization, cloud migration, and workflow redesign so intelligence has a solid foundation.",
  },
];
