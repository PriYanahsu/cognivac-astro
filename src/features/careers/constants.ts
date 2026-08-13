export interface Role {
  id: string;
  title: string;
  location: string;
  type: string;
  discipline: string;
  summary: string;
  /** What the person is accountable for, in the words the work happens in. */
  owns: readonly string[];
  /** What we read a CV for. Deliberately short — the list is a filter, not a wall. */
  looking: readonly string[];
}

/**
 * Open roles.
 *
 * `owns` and `looking` exist so the listing can answer the two questions a
 * candidate has before they write anything — what would I actually do, and am
 * I who they mean — without a click out to a job board. Keep both to three or
 * four lines: past that the list stops being scannable and the accordion is
 * hiding a page rather than a paragraph.
 */
export const ROLES: readonly Role[] = [
  {
    id: "ml-engineer",
    title: "Senior ML Engineer",
    location: "Remote / San Francisco",
    type: "Full-time",
    discipline: "Applied ML",
    summary:
      "Own model design, evaluation, and production deployment for client engagements across risk, forecasting, and document intelligence.",
    owns: [
      "Model design and the evaluation harness that decides whether it ships",
      "Training and inference pipelines, including their cost profile",
      "Drift monitoring and the retraining cadence after handover",
    ],
    looking: [
      "Models you took to production and still supported six months later",
      "Comfort explaining a tradeoff to a non-technical client sponsor",
      "Python, and one of PyTorch or JAX in depth",
    ],
  },
  {
    id: "frontend",
    title: "Staff Frontend Engineer",
    location: "Remote / New York",
    type: "Full-time",
    discipline: "Product Engineering",
    summary:
      "Lead the interface layer on enterprise platforms — design systems, accessibility, and the performance budget that keeps them fast.",
    owns: [
      "The design system a client's own team will extend after we leave",
      "Accessibility to WCAG 2.2 AA, tested rather than asserted",
      "A performance budget with numbers attached, defended in review",
    ],
    looking: [
      "Interfaces at a scale where a component decision was expensive to undo",
      "React and TypeScript, and opinions about both",
      "A record of raising the standard of the codebase you joined",
    ],
  },
  {
    id: "architect",
    title: "AI Solutions Architect",
    location: "Remote",
    type: "Full-time",
    discipline: "Architecture",
    summary:
      "Sit with clients in discovery, shape the technical approach, and stay accountable for it through delivery.",
    owns: [
      "Discovery: the questions asked before an approach is proposed",
      "The architecture, and the written case for why it is that one",
      "Staying on the engagement while it is built, not just while it is sold",
    ],
    looking: [
      "Systems you designed and then watched survive their own launch",
      "Fluency across data, integration, and the cloud they run on",
      "Willingness to tell a client their idea is the wrong one",
    ],
  },
  {
    id: "platform",
    title: "Platform / DevOps Engineer",
    location: "Remote / Bengaluru",
    type: "Full-time",
    discipline: "Infrastructure",
    summary:
      "Build the deployment, observability, and cost controls that let small teams run production systems for large clients.",
    owns: [
      "Infrastructure as code across every environment we hand over",
      "Observability: the dashboards and alerts an on-call actually uses",
      "Cost controls, and the report that shows they are working",
    ],
    looking: [
      "Production ownership, including the incidents that came with it",
      "Terraform or Pulumi, Kubernetes, and one major cloud in depth",
      "A bias for the boring option that keeps working",
    ],
  },
];

export const BENEFITS = [
  "Remote-first with optional hubs",
  "Annual learning and conference budget",
  "Hardware of your choice",
  "Paid certification for cloud and ML tracks",
  "Flexible hours across time zones",
  "Health cover for you and dependents",
];

export const WHAT_ITS_LIKE = [
  {
    id: "ownership",
    title: "You own systems, not tickets",
    description:
      "Engineers here talk directly to the client, shape the approach, and stay with the system after launch. No layer of translation in between.",
    art: "linear-gradient(135deg,#1e4fd8,#163db0)",
  },
  {
    id: "variety",
    title: "New domain every few quarters",
    description:
      "Services work means fintech risk one year and plant-floor vision the next. The engineering compounds; the boredom does not set in.",
    art: "linear-gradient(135deg,#3f7bb0,#bfe3ff)",
  },
  {
    id: "standards",
    title: "Standards are not negotiable",
    description:
      "Tests, docs, and reviews are part of delivery. You will not be asked to ship something you would be embarrassed to hand over.",
    art: "linear-gradient(135deg,#0f0f12,#252529)",
  },
];
