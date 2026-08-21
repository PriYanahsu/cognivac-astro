import { NAV_ROUTES } from "@/constants/site";

export const SUPPORT_PAGE = {
  label: "Support",
  title: "Managed AI operations after the build",
  description:
    "The Optimize step on our process page is a product: drift monitoring, retraining, eval harnesses, on-call, and an SLA. Sold as a retainer, not a hope.",
  highlights: ["Named on-call", "Eval harness included", "Monthly review against the metrics we set"],
} as const;

export const SUPPORT_OFFERS = [
  {
    id: "monitor",
    title: "Drift monitoring",
    body: "Input, output, and performance drift against the eval set from delivery. Alerts go to a channel your operators already live in — not a dashboard we are the only login for.",
  },
  {
    id: "retrain",
    title: "Retraining cadence",
    body: "A schedule, a rollback, and a cost envelope. Retrain is a change we can undo, not a weekend experiment in production.",
  },
  {
    id: "evals",
    title: "Eval harnesses",
    body: "The suite that decided the system could ship keeps running. Prompt, model, and retrieval changes do not land without it.",
  },
  {
    id: "oncall",
    title: "On-call",
    body: "A named engineer in your hours, with a documented severity matrix. This is not a ticket pool and it is not a chatbot.",
  },
] as const;

export const SUPPORT_SLAS = [
  { severity: "Sev-1", window: "15-minute ack", meaning: "Production down or unsafe outputs in a consequential flow" },
  { severity: "Sev-2", window: "2-hour ack", meaning: "Degraded quality or a failing eval that has not yet hit users" },
  { severity: "Sev-3", window: "Next business day", meaning: "Improvements, cost, and non-urgent drift" },
] as const;

export const SUPPORT_CTA = {
  label: "Talk through a retainer",
  href: NAV_ROUTES.contact,
} as const;
