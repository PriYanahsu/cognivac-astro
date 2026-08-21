import { NAV_ROUTES } from "@/constants/site";

export const CTA_CONTENT = {
  label: "Ready To Build",
  title: "Let's engineer the AI systems your business can trust.",
  /** Names the cost (30 min) and the return (an opinion) — converts far better than "Contact us". */
  description:
    "A 30-minute technical discussion. No pitch deck. You'll leave with an architecture opinion whether or not we end up working together.",
  primaryCta: { label: "Book a Consultation", href: `${NAV_ROUTES.contact}#book` },
  secondaryCta: { label: "See how we work", href: NAV_ROUTES.about },
  reassurances: [
    "No sales qualification call first",
    "Talks to an engineer, not an account manager",
    "NDA on request before we start",
  ],
} as const;
