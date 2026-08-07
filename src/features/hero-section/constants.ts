import { NAV_ROUTES } from "@/constants/site";

export const HERO_CONTENT = {
  label: "AI SOFTWARE PARTNER FOR ENTERPRISE TEAMS",
  title: "Building Intelligent Software That Accelerates Business Growth",
  /**
   * One sentence, outcome-led. The service list this replaced belongs in the
   * solutions deck, not above the fold.
   */
  description:
    "COGNIVAC designs, builds, and scales the AI systems that carry enterprise teams from pilot to production — faster decisions, less operational friction, measurable growth.",
  primaryCta: { label: "Schedule Consultation", href: NAV_ROUTES.contact },
  secondaryCta: { label: "Explore Solutions", href: NAV_ROUTES.services },
  trustedAvatars: ["AR", "SM", "DK", "NT"],
  trustedText: "Trusted by 100+ clients worldwide",
};

/**
 * Four numbers directly under the hero, no heading — the brief puts the
 * delivery record before the pitch, so it is the second thing read.
 *
 * Replaced the industries marquee, which scrolled fourteen sector names with
 * no logos behind them: that is a list of markets, not evidence of shipping.
 *
 * ⚠️ `projects` is still the brief's placeholder. Every other figure here is
 * verifiable, and one soft number in a row of four discredits the other three.
 * Fill it from the real shipped count before this goes live.
 */
export const PROOF_STRIP = {
  /** Not rendered — the row carries no heading, so this labels it for screen readers. */
  label: "Delivery record",
  stats: [
    { id: "delivered", value: "$200k+ delivered", detail: "founder, Top Rated" },
    { id: "experience", value: "25+ yrs", detail: "senior leadership" },
    { id: "projects", value: "N projects", detail: "shipped to production" },
    { id: "team", value: "6–8 engineers", detail: "senior only" },
  ],
} as const;
