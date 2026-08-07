import { NAV_ROUTES } from "@/constants/site";

export const CASE_HIGHLIGHTS_CONTENT = {
  label: "Proof",
  title: "Systems running in production, with the numbers to show it",
  description:
    "Three engagements where the work reached real users, real load, and real audits — not a slide deck.",
  cta: { label: "View all case studies", href: NAV_ROUTES.caseStudies },
} as const;

/** Metric split out so the number can carry the visual weight on each card. */
export const CASE_METRICS: Record<string, { value: string; label: string }> = {
  "1": { value: "3.4×", label: "faster answers for 12,000 engineers" },
  "2": { value: "41%", label: "fewer false positives in payments risk" },
  "3": { value: "18 hrs", label: "saved weekly across warehouse ops" },
};
