/**
 * Copy for /team. The people themselves live in `@/constants/people` — this
 * file is only the argument built around them, so a hire never means editing
 * a page.
 */
export const TEAM_PAGE = {
  hero: {
    title: "The people who will actually be on your engagement",
    description:
      "Small, senior, and named. You meet the founders on the first call, and the engineers who build the system are the ones you will still be talking to at handover.",
  },
  founders: {
    label: "The Founders",
    title: "Both founders stay on the work",
    description:
      "One owns the technical outcome, the other owns delivery. Neither role is handed to an account manager once the contract is signed.",
  },
  bench: {
    label: "The Bench",
    title: "Specialists, grouped by what they are accountable for",
    description:
      "An engagement draws two to six of these people. They stay on it start to finish, so the context you paid to build never has to be rebuilt for a new face.",
  },
  staffing: {
    label: "How We Staff",
    title: "How a bench becomes your team",
    description:
      "The four rules we do not bend, because every one of them is a way engagements go wrong when they are broken.",
    note: "Hiring is deliberate and slow — we add people when the work is already there.",
  },
} as const;

export const STAFFING_RULES = [
  {
    id: "senior",
    title: "Senior only, on billable work",
    description:
      "Nobody learns the craft on your budget. Every engineer on an engagement has shipped and operated production systems before.",
  },
  {
    id: "pod",
    title: "Pods of two to six",
    description:
      "Large enough to carry a real roadmap, small enough that everyone holds the whole picture in their head. Scaled by adding pods, not bodies.",
  },
  {
    id: "lead",
    title: "One named lead, start to finish",
    description:
      "A single person accountable for what ships and when. Not a rotation, not a queue, and not a different name on each status call.",
  },
  {
    id: "overlap",
    title: "Real overlap with your hours",
    description:
      "At least four hours a day where your team and ours are both awake, so a blocked decision costs hours instead of days.",
  },
] as const;
