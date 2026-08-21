import { NAV_ROUTES, servicePath } from "@/constants/site";
import { CLAIMS } from "@/constants/claims";

export const SERVICE_SLUGS = {
  "ai-agents": "ai-agent-development",
  "machine-learning": "machine-learning",
  "generative-ai": "generative-ai",
  cloud: "cloud-devops",
  automation: "automation",
  apps: "enterprise-applications",
} as const;

export type ServiceId = keyof typeof SERVICE_SLUGS;

export const SERVICE_ANCHOR_REDIRECTS: Record<string, string> = {
  "ai-agents": servicePath(SERVICE_SLUGS["ai-agents"]),
  "machine-learning": servicePath(SERVICE_SLUGS["machine-learning"]),
  "generative-ai": servicePath(SERVICE_SLUGS["generative-ai"]),
  cloud: servicePath(SERVICE_SLUGS.cloud),
  automation: servicePath(SERVICE_SLUGS.automation),
  apps: servicePath(SERVICE_SLUGS.apps),
};

export const DELIVERABLES: Record<string, readonly string[]> = {
  "ai-agents": [
    "Agent architecture and tool design",
    "Evaluation harness and guardrails",
    "Human-in-the-loop escalation paths",
  ],
  "machine-learning": [
    "Feature pipelines and training infrastructure",
    "MLOps: versioning, rollback, monitoring",
    "Drift detection and retraining cadence",
  ],
  "generative-ai": [
    "RAG retrieval with permission scoping",
    "Prompt and output governance",
    "Grounding, citations, and audit trails",
  ],
  cloud: [
    "Infrastructure as code and CI/CD",
    "Multi-environment and cost controls",
    "Observability and incident runbooks",
  ],
  automation: [
    "Process mapping and exception design",
    "Integration across ERP, CRM, and internal tools",
    "Rollout with fallback to manual paths",
  ],
  apps: [
    "Web, mobile, and internal platforms",
    "Design system and accessibility",
    "Auth, roles, and audit logging",
  ],
};

export const ENGAGEMENT_MODELS = [
  {
    id: "fixed",
    title: "Fixed-scope project",
    description:
      "A defined outcome, milestone schedule, and fixed commercial envelope. Best when the problem is well understood.",
    fit: "Clear brief, firm budget",
    band: `From $${CLAIMS.pricing.fixedScopeFromUsd.value.toLocaleString("en-US")}`,
    href: NAV_ROUTES.pricing,
  },
  {
    id: "pod",
    title: "Dedicated pod",
    description:
      "A standing team of engineers plus a named PM working your roadmap sprint over sprint, with scope that can flex.",
    fit: "Multi-quarter programs",
    band: `From $${CLAIMS.pricing.podMonthlyFromUsd.value.toLocaleString("en-US")} / month`,
    href: NAV_ROUTES.pricing,
  },
  {
    id: "augmentation",
    title: "Team augmentation",
    description:
      "Senior engineers embedded into your existing squads, working your process, your board, your standards.",
    fit: "Capacity or skill gap",
    band: `From $${CLAIMS.pricing.augmentationWeeklyFromUsd.value.toLocaleString("en-US")} / week`,
    href: NAV_ROUTES.pricing,
  },
] as const;

export interface ServicePage {
  id: ServiceId;
  slug: string;
  title: string;
  heroTitle: string;
  description: string;
  problem: string;
  approach: readonly string[];
  outcomes: readonly string[];
  stack: readonly string[];
}

export const SERVICE_PAGES: readonly ServicePage[] = [
  {
    id: "ai-agents",
    slug: SERVICE_SLUGS["ai-agents"],
    title: "AI Agent Development",
    heroTitle: "Agents that complete the job, not just the demo",
    description:
      "Autonomous and assisted agents that execute multi-step work across your tools and data, with evaluation and a human in the loop wherever the stakes are high.",
    problem:
      "Most agent pilots die the week they meet a real exception. The happy path works in a notebook; production needs tools, permissions, retries, and an audit trail.",
    approach: [
      "Map the workflow as a graph: tools, state, failure modes, and who escalates.",
      "Bound the agent with evals before it can act — not after the first incident.",
      "Ship with tracing, cost controls, and a fallback to the current process.",
    ],
    outcomes: [
      "A named owner for every tool the agent can call",
      "An evaluation harness you can rerun on every prompt or model change",
      "Escalation paths that a person actually uses",
    ],
    stack: ["LangGraph", "Python", "TypeScript", "pgvector", "OpenTelemetry"],
  },
  {
    id: "machine-learning",
    slug: SERVICE_SLUGS["machine-learning"],
    title: "Machine Learning",
    heroTitle: "Models that stay honest after month six",
    description:
      "Custom models, feature pipelines, and MLOps — versioned, monitored, and cheap enough to retrain when the data drifts.",
    problem:
      "The first model is rarely the problem. The second one exposes missing labels, no rollback, and a dashboard nobody watches.",
    approach: [
      "Start from the decision the model is supposed to change, then the data that actually exists.",
      "Treat training, serving, and monitoring as one system with a rollback path.",
      "Put cost and latency next to accuracy so the model that ships is the one you can run.",
    ],
    outcomes: [
      "Feature pipelines with lineage you can explain to audit",
      "Drift detection with a retraining cadence, not a hope",
      "A serving path your platform team will operate",
    ],
    stack: ["Python", "PyTorch", "MLflow", "Feast", "Kubernetes"],
  },
  {
    id: "generative-ai",
    slug: SERVICE_SLUGS["generative-ai"],
    title: "Generative AI",
    heroTitle: "LLM systems grounded in your corpus, not the public internet",
    description:
      "RAG, copilots, and generation workflows with permission scoping, citations, and a latency budget you can defend.",
    problem:
      "Un-grounded generation is a liability. Enterprise buyers need answers that cite a document the asker is allowed to see, in time a person will wait.",
    approach: [
      "Scope retrieval to the caller's permissions before the first chunk is fetched.",
      "Measure groundedness and p95 together — a correct answer that takes eight seconds does not ship.",
      "Keep the model swappable. The retrieval and eval layers are the product.",
    ],
    outcomes: [
      "Permission-aware retrieval, not a shared vector dump",
      "Citations on every answer that claims a source",
      "Prompt and output logs a security team can read",
    ],
    stack: ["pgvector", "LangGraph", "TypeScript", "Python", "OpenTelemetry"],
  },
  {
    id: "cloud",
    slug: SERVICE_SLUGS.cloud,
    title: "Cloud & DevOps",
    heroTitle: "Infrastructure that survives the first traffic spike",
    description:
      "Cloud-native platforms, CI/CD, and cost controls for AI workloads — environments you can recreate from code.",
    problem:
      "AI systems fail in boring ways: a GPU node that cannot scale, a secret in a notebook, a bill nobody forecast.",
    approach: [
      "Everything in Terraform or equivalent. No snowflake accounts.",
      "Separate training, staging, and production with the same shape.",
      "Budgets and alerts on the meters that actually move — tokens, GPUs, egress.",
    ],
    outcomes: [
      "Reproducible environments from a repo, not a wiki",
      "Observability the on-call actually uses",
      "A cost report that maps to the workload, not the invoice total",
    ],
    stack: ["Terraform", "Kubernetes", "AWS", "GCP", "Azure"],
  },
  {
    id: "automation",
    slug: SERVICE_SLUGS.automation,
    title: "Automation",
    heroTitle: "The work that eats the week, handled end to end",
    description:
      "Intelligent process automation across ERP, CRM, and internal tools — with a person in the loop wherever a wrong step is expensive.",
    problem:
      "RPA that breaks on a UI change is not automation. The durable version lives in APIs, exceptions, and a fallback a person can run.",
    approach: [
      "Map the current process including the exceptions, not the happy path on the slide.",
      "Integrate at the system of record. Screen-scraping is a last resort and labelled as one.",
      "Roll out with the manual path still available until the exception rate is known.",
    ],
    outcomes: [
      "A process map both operations and engineering signed",
      "Integrations that survive a vendor UI change",
      "Exception queues a person can clear in the same shift",
    ],
    stack: ["TypeScript", "Python", "Kafka", "Salesforce", "SAP"],
  },
  {
    id: "apps",
    slug: SERVICE_SLUGS.apps,
    title: "Enterprise Applications",
    heroTitle: "Internal platforms people open twice",
    description:
      "Web, mobile, and internal tools with a design system, real auth, and the audit logging procurement will ask for.",
    problem:
      "The AI is useless if the interface around it is a prototype. Adoption is a product problem, not a model problem.",
    approach: [
      "Design and engineering in the same loop. No throw-over-the-wall mockups.",
      "Auth, roles, and audit from the first vertical slice — not a hardening phase.",
      "A performance budget with numbers, defended in review.",
    ],
    outcomes: [
      "A design system your team can extend after we leave",
      "WCAG 2.2 AA tested, not asserted",
      "Role-based access with an immutable audit log",
    ],
    stack: ["TypeScript", "React", "Astro", "PostgreSQL", "SSO / SAML"],
  },
];
