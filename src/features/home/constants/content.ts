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
    image: "/images/industries/fintech.webp",
    href: `${NAV_ROUTES.industries}#fintech`,
  },
  {
    id: "retail",
    title: "Retail",
    description: "Demand forecasting, customer intelligence, and supply chain optimization.",
    image: "/images/industries/retail.webp",
    href: `${NAV_ROUTES.industries}#retail`,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Predictive maintenance, quality vision, and plant-floor automation.",
    image: "/images/industries/manufacturing.webp",
    href: `${NAV_ROUTES.industries}#manufacturing`,
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Product AI features, usage intelligence, and growth automation.",
    image: "/images/industries/saas.webp",
    href: `${NAV_ROUTES.industries}#saas`,
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "1",
    slug: "enterprise-knowledge-copilots",
    title: "Enterprise knowledge copilots for a Fortune 500 manufacturer",
    description:
      "Unified technical documentation into a governed GenAI assistant used by 12,000 engineers.",
    category: "Generative AI",
    image: "/images/case-studies/case-1.webp",
    href: `${NAV_ROUTES.caseStudies}/enterprise-knowledge-copilots`,
    metric: "3.4x faster answers",
  },
  {
    id: "2",
    slug: "real-time-fraud-detection",
    title: "Fraud detection ML that adapts in real time",
    description:
      "Rebuilt a payments risk engine with continuous learning and explainable decisions.",
    category: "Machine Learning",
    image: "/images/case-studies/case-2.webp",
    href: `${NAV_ROUTES.caseStudies}/real-time-fraud-detection`,
    metric: "41% fewer false positives",
  },
  {
    id: "3",
    slug: "agentic-logistics-operations",
    title: "Agentic ops platform for a global logistics network",
    description:
      "Automated exception handling across warehouses with human-in-the-loop oversight.",
    category: "AI Agents",
    image: "/images/case-studies/case-3.webp",
    href: `${NAV_ROUTES.caseStudies}/agentic-logistics-operations`,
    metric: "18 hrs saved weekly",
  },
  /*
   * 4–6 are named after the service line that sold them, not the technology
   * inside them — "Pilot rescue" is a line on the services deck, "Generative
   * AI" is not. The first three keep their technology categories because the
   * case-studies page has shipped with them; new work should read the way the
   * services section does.
   */
  {
    id: "4",
    slug: "field-service-platform",
    title: "A field service platform built from nothing in one quarter",
    description:
      "Took a specialist contractor from spreadsheets and a group chat to a web and mobile product their crews use on site.",
    category: "Product Build",
    image: "/images/case-studies/case-4.webp",
    href: `${NAV_ROUTES.caseStudies}/field-service-platform`,
    metric: "11 weeks to first crews",
  },
  {
    id: "5",
    slug: "claims-assistant-pilot-rescue",
    title: "A stalled claims assistant taken the rest of the way",
    description:
      "An insurer's document AI had demoed well for a year without going live. We shipped the production half it was missing.",
    category: "Pilot Rescue",
    image: "/images/case-studies/case-5.webp",
    href: `${NAV_ROUTES.caseStudies}/claims-assistant-pilot-rescue`,
    metric: "6 weeks to production",
  },
  {
    id: "6",
    slug: "retail-data-foundation",
    title: "The data groundwork a retail group's forecasting was missing",
    description:
      "Reconciled two decades of records across eleven systems into one trusted source before a single model was trained on it.",
    category: "Data Platform",
    image: "/images/case-studies/case-6.webp",
    href: `${NAV_ROUTES.caseStudies}/retail-data-foundation`,
    metric: "11 systems reconciled",
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
  {
    id: "4",
    quote:
      "Weekly demos on real data, never slides. We always knew what was working — including the week the honest answer was 'not much yet'.",
    name: "Sofia Almeida",
    role: "Director of Data Platform",
    company: "Meridian Logistics",
  },
  {
    id: "5",
    quote:
      "They argued us out of half our roadmap in the first workshop. That one conversation saved us a quarter of build time.",
    name: "James Okonkwo",
    role: "Chief Operating Officer",
    company: "Verity Insurance",
  },
  {
    id: "6",
    quote:
      "Handover was an actual handover — runbooks, evaluation suites, and two of our own engineers shipping changes without calling them.",
    name: "Hannah Brill",
    role: "Head of Platform Engineering",
    company: "Larkspur Retail",
  },
];

export const FAQ_CONTENT = {
  label: "FAQ",
  title: "Questions teams ask before we start",
  description:
    "The five things a CTO usually wants settled before a kickoff call. If yours is not here, send it — a short reply is faster than more reading.",
  cta: { label: "Ask us directly", href: NAV_ROUTES.contact },
} as const;

export const FAQS: FaqItem[] = [
  {
    id: "1",
    tag: "Scope",
    question: "What kinds of AI projects does Cognivac take on?",
    answer:
      "We specialize in AI agents, machine learning systems, generative AI applications, cloud platforms, automation, and enterprise software. Engagements typically span discovery, architecture, build, and production hardening.",
  },
  {
    id: "2",
    tag: "Security",
    question: "How do you approach AI governance and security?",
    answer:
      "Every engagement includes threat modeling, access controls, evaluation harnesses, audit logging, and deployment patterns suited to your compliance requirements. We design for explainability and human oversight where decisions are high-stakes.",
  },
  {
    id: "3",
    tag: "Collaboration",
    question: "Do you work with existing internal teams?",
    answer:
      "Yes. We embed with your product and engineering teams, transfer knowledge continuously, and leave you with documentation, runbooks, and ownership—not a black box.",
  },
  {
    id: "4",
    tag: "Timeline",
    question: "How long does a typical engagement take?",
    answer:
      "Pilots often ship in 6–10 weeks. Full platform builds vary from a quarter to multi-phase programs depending on scope, data readiness, and integration complexity.",
  },
  {
    id: "5",
    tag: "Foundations",
    question: "Can Cognivac modernize legacy systems alongside AI?",
    answer:
      "Absolutely. Many of our strongest outcomes combine AI capability with API modernization, cloud migration, and workflow redesign so intelligence has a solid foundation.",
  },
];
