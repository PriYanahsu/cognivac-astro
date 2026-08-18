import { NAV_ROUTES } from "@/constants/site";

export const HERO_CONTENT = {
  label: "AI SOFTWARE PARTNER FOR ENTERPRISE TEAMS",
  labelShort: "AI SOFTWARE PARTNER",
  title: "Building Intelligent Software That Accelerates Business Growth",
  description:
    "COGNIVAC designs, builds, and scales the AI systems that carry enterprise teams from pilot to production — faster decisions, less operational friction, measurable growth.",
  primaryCta: { label: "Schedule Consultation", href: NAV_ROUTES.contact },
  secondaryCta: { label: "Explore Solutions", href: NAV_ROUTES.services },
  ctaNote: "We reply within 24 hours.",
};

export const PROOF_STRIP = {
  /** Not rendered — the row carries no heading, so this labels it for screen readers. */
  label: "Delivery record",
  stats: [
    /** Marketplace badges ("Top Rated") read as freelancer, not as the
     *  enterprise partner the hero label claims. Same figure, own framing. */
    { id: "delivered", value: "$200k+ delivered", detail: "in client engagements" },
    { id: "experience", value: "25+ yrs", detail: "senior leadership" },
    { id: "team", value: "6–8 engineers", detail: "senior only" },
    { id: "uptime", value: "99.9% uptime", detail: "production SLAs" },
    { id: "response", value: "<24h response", detail: "engagement kickoff" },
  ],
} as const;
