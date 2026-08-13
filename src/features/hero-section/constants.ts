import { NAV_ROUTES } from "@/constants/site";

export const HERO_CONTENT = {
  label: "AI SOFTWARE PARTNER FOR ENTERPRISE TEAMS",
  /**
   * The same claim, short enough to hold one line on a 390px phone. The full
   * label wraps to two lines up there, and a two-line eyebrow above a
   * four-line headline reads as one grey block rather than as a label.
   */
  labelShort: "AI SOFTWARE PARTNER",
  title: "Building Intelligent Software That Accelerates Business Growth",
  /**
   * One sentence, outcome-led. The service list this replaced belongs in the
   * solutions deck, not above the fold.
   */
  description:
    "COGNIVAC designs, builds, and scales the AI systems that carry enterprise teams from pilot to production — faster decisions, less operational friction, measurable growth.",
  primaryCta: { label: "Schedule Consultation", href: NAV_ROUTES.contact },
  secondaryCta: { label: "Explore Solutions", href: NAV_ROUTES.services },
  /**
   * "Schedule Consultation" is a bigger ask than it looks — the reader does
   * not know whether it costs them a call or a sales pipeline. This is the
   * `<24h response` figure from the proof strip, moved to the point of
   * decision instead of left 400px below it.
   */
  ctaNote: "We reply within 24 hours.",
  trustedAvatars: [
    { initials: "AR", image: "/images/clients/ar.webp", name: "Client AR" },
    { initials: "SM", image: "/images/clients/sm.webp", name: "Client SM" },
    { initials: "DK", image: "/images/clients/dk.webp", name: "Client DK" },
    { initials: "NT", image: "/images/clients/nt.webp", name: "Client NT" },
  ],
  trustedText: "Trusted by 100+ clients worldwide",
  trustedHref: "#testimonials",
};

/**
 * Decorative pipeline under the hero copy. Kept to four stages on purpose —
 * this is a glanceable path, not the five-step engagement rail in ProcessSection.
 */
export const HERO_PIPELINE = {
  label: "From brief to production",
  cta: { label: "How we work", href: "#process" },
} as const;

export const HERO_STAGES = [
  {
    id: "discover",
    index: "01",
    label: "Discover",
    detail: "Scope · Requirements",
    icon: "ScanSearch",
  },
  {
    id: "design",
    index: "02",
    label: "Design",
    detail: "Architecture · UX",
    icon: "Layers",
  },
  {
    id: "build",
    index: "03",
    label: "Build",
    detail: "Frontend · Backend · AI",
    icon: "Cpu",
  },
  {
    id: "deliver",
    index: "04",
    label: "Deliver",
    detail: "Deploy · Support · Scale",
    icon: "Rocket",
  },
] as const;

/**
 * Delivery figures under the hero. Static row from `lg` up; marquee only on
 * the narrow viewports where five stats genuinely cannot sit side by side.
 *
 * Every entry here has to be a number we can defend on a call. The brief's
 * `N projects` placeholder was pulled rather than shipped — one visibly fake
 * stat makes a reader discount the five real ones next to it. Add it back
 * with the true shipped count and it earns its slot again.
 */
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
