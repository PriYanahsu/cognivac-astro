import { NAV_ROUTES } from "@/constants/site";

export const FOUNDERS_CONTENT = {
  label: "The Founders",
  title: "Two people are accountable for your engagement",
  description:
    "Not a sales team that hands you to a delivery team you have never met. The people who scope the work are the people who ship it — and their names are on it.",
} as const;

/**
 * The strip under the founder cards. Its job is to answer the question the
 * cards provoke — "so it is just the two of them?" — and to hand that question
 * to the team page rather than trying to answer it here.
 */
export const TEAM_STRIP = {
  label: "Behind them",
  title: "A senior bench, assembled per engagement",
  description:
    "Engineers, ML specialists, design, and delivery. No juniors on billable work, and no rotating cast — the pod that starts your build is the pod that finishes it.",
  cta: { label: "Meet the team", href: NAV_ROUTES.team },
} as const;
