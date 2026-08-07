import { NAV_ROUTES } from "@/constants/site";

export const PROCESS_CONTENT = {
  label: "How We Work",
  title: "You always know who owns it and what ships next",
  description:
    "Engagements begin with business discovery, not a technology pitch. From there the path is the same every time — and you can see where you are on it.",
} as const;

export const PROCESS_STEPS = [
  {
    id: "discovery",
    index: "01",
    title: "Discovery",
    description:
      "Objectives, constraints, existing systems, and the operational pain behind the request.",
  },
  {
    id: "roadmap",
    index: "02",
    title: "Roadmap",
    description:
      "Scope, milestones, and the success metrics we will be measured against.",
  },
  {
    id: "build",
    index: "03",
    title: "Design & Build",
    description:
      "Experience and architecture designed together, engineered into the workflows you already run.",
  },
  {
    id: "launch",
    index: "04",
    title: "Launch",
    description:
      "Monitoring, cloud readiness, documentation, and handover to the people who operate it.",
  },
  {
    id: "optimize",
    index: "05",
    title: "Optimize",
    description:
      "Ongoing feature work, tuning, and support as load, data, and the business change.",
  },
] as const;

/** Answers the question a CTO has but rarely asks out loud on a first call. */
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
