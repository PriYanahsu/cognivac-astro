export const PLATFORM_CONTENT = {
  label: "How It Fits Together",
  title: "An integrated stack for enterprise intelligence",
  description:
    "Four layers that work together — so models, data, workflows, and context stay aligned from prototype to production.",
} as const;

export const PLATFORM_LAYERS = [
  {
    id: "ai",
    index: "01",
    title: "AI",
    subtitle: "Models & Agents",
    description:
      "Model selection, agent orchestration, evaluation harnesses, and guardrails you can audit.",
    gradient: "from-[#1e4fd8] to-[#163db0]",
  },
  {
    id: "data",
    index: "02",
    title: "Data",
    subtitle: "Pipelines & Quality",
    description:
      "Ingestion, lineage, and validation so what reaches the model is what you think it is.",
    gradient: "from-[#3a3a3e] to-[#1a1a1c]",
  },
  {
    id: "workflow",
    index: "03",
    title: "Workflow",
    subtitle: "Orchestration",
    description:
      "Human-in-the-loop routing, retries, and escalation paths wired into the tools teams already use.",
    gradient: "from-[#163db0] to-[#0f2a7a]",
  },
  {
    id: "context",
    index: "04",
    title: "Context",
    subtitle: "Knowledge & Memory",
    description:
      "Retrieval, permissions, and memory scoped to the person asking — not the whole corpus.",
    gradient: "from-[#0ea5e9] to-[#163db0]",
  },
] as const;

/** Real stack names — highest signal-to-space ratio for a technical reader. */
export const PLATFORM_STACK = [
  "Python",
  "TypeScript",
  "AWS",
  "Azure",
  "GCP",
  "PostgreSQL",
  "pgvector",
  "Kubernetes",
  "LangGraph",
  "MLflow",
  "Terraform",
  "Kafka",
] as const;
