export const PROBLEM_CONTENT = {
  label: "The Challenge",
  title: "Most AI initiatives stall between proof-of-concept and production.",
  description:
    "The demo lands. Then it meets real data, real users, and real compliance — and the gap that opens has nothing to do with the model. It is everything that has to be true before a system can be trusted to run the business.",
  pivot: "Cognivac is built for the part that comes after the demo.",
} as const;

export const PROBLEM_POINTS = [
  {
    id: "data",
    index: "01",
    tag: "Data readiness",
    title: "Data that was never production-ready",
    description:
      "A pilot runs on a clean extract. Production runs on live systems, half-filled records, and edge cases nobody wrote down.",
  },
  {
    id: "ownership",
    index: "02",
    tag: "Ownership",
    title: "No owner once the pilot team disbands",
    description:
      "The prototype works, the team rotates off, and nobody is accountable for uptime, drift, or the next release.",
  },
  {
    id: "governance",
    index: "03",
    tag: "Governance",
    title: "No path through security review",
    description:
      "Access control, audit trails, data residency, and model governance arrive as blockers instead of requirements — and the rollout stops cold.",
  },
  {
    id: "integration",
    index: "04",
    tag: "Integration",
    title: "Systems that refuse to talk to each other",
    description:
      "The model is ready. The ERP, CRM, and warehouse are not. Integration work balloons until the pilot quietly expires.",
  },
  {
    id: "reliability",
    index: "05",
    tag: "Reliability",
    title: "No ops layer for models in production",
    description:
      "Latency spikes, silent failures, and drift go unnoticed because the monitoring was built for apps — not for inference.",
  },
  {
    id: "adoption",
    index: "06",
    tag: "Adoption",
    title: "Teams that never absorb the change",
    description:
      "Workflows, training, and incentives never catch up. The system ships, usage stalls, and leadership calls it a miss.",
  },
] as const;
