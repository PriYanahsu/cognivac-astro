import { NAV_ROUTES } from "@/constants/site";

export const PROCESS_CONTENT = {
  label: "How We Work",
  title: "You always know what ships next, and who owns it",
  description:
    "Engagements begin with business discovery, not a technology pitch. From there the path is the same every time — five steps, each with a window and a deliverable you can hold us to.",
} as const;

/**
 * Rendered here as the timeline, and again as plain cards on the services and
 * about pages. `id`, `index`, `title` and `description` are the shared contract
 * those pages read — keep descriptions short enough to survive a five-column
 * card. `deliverable` is used by this section only.
 *
 * Deliberately no per-step timeframe: the five steps sit on one screen here, and
 * a "Weeks 3–10" chip on every row both crowded that and promised a schedule
 * before anyone has described the work. The one honest number lives in
 * ENGAGEMENT_FACTS instead.
 */
export const PROCESS_STEPS = [
  {
    id: "discovery",
    index: "01",
    title: "Discovery",
    description:
      "We map the outcome you need, the constraints around it, and the systems it has to live inside — before any technology is chosen.",
    details: [
      "Working sessions with the people who own the outcome",
      "An audit of the systems and data you already run",
      "The failure modes that stalled earlier attempts",
    ],
    deliverable: "A written problem statement both sides sign off on",
  },
  {
    id: "roadmap",
    index: "02",
    title: "Roadmap",
    description:
      "Scope, milestones, and the numbers we agree to be measured against — costed before a line of code is written.",
    details: [
      "Milestones with dates and a named owner each",
      "Success metrics agreed up front, not after launch",
      "Fixed scope, dedicated pod, or staff augmentation",
    ],
    deliverable: "A costed roadmap with named milestones and owners",
  },
  {
    id: "build",
    index: "03",
    title: "Design & Build",
    description:
      "Experience and architecture designed together, engineered into the workflows your team already runs.",
    details: [
      "Increments you can use, not demo",
      "Evaluation and guardrails wired in from day one",
      "Your engineers in the repo alongside ours",
    ],
    deliverable: "Working software in your environment every two weeks",
  },
  {
    id: "launch",
    index: "04",
    title: "Launch",
    description:
      "Production hardening, monitoring, and handover to the people who will operate the system every day.",
    details: [
      "Load, security, and cost review before go-live",
      "Dashboards and alerts on thresholds that matter",
      "Training and runbooks for your operators",
    ],
    deliverable: "Runbooks, dashboards, and a trained internal team",
  },
  {
    id: "optimize",
    index: "05",
    title: "Optimize",
    description:
      "Tuning, feature work, and support as load, data, and the business change around the system.",
    details: [
      "Monthly review against the metrics set in step 02",
      "Model, prompt, and cost tuning as usage grows",
      "A roadmap that keeps moving with your priorities",
    ],
    deliverable: "A named team on call, and a backlog that keeps moving",
  },
] as const;

/** Answers the questions a CTO has but rarely asks out loud on a first call. */
export const ENGAGEMENT_PANEL = {
  label: "Engagement at a glance",
  note: "Most engagements start within two weeks of the first call.",
} as const;

export const ENGAGEMENT_FACTS = [
  { id: "milestone", label: "First working milestone", value: "4–6 weeks" },
  { id: "team", label: "Typical team shape", value: "2–6 engineers + PM" },
  {
    id: "models",
    label: "Engagement models",
    value: "Fixed scope · Dedicated pod · Staff augmentation",
  },
  {
    id: "contact",
    label: "Point of contact",
    value: "One named lead, start to finish",
  },
] as const;

export const PROCESS_CTA = {
  label: "Talk through your roadmap",
  href: NAV_ROUTES.contact,
} as const;

/** Micro-label above each step's deliverable line. */
export const PROCESS_DELIVERABLE_LABEL = "What you get";
