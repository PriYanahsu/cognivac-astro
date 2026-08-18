import { NAV_ROUTES } from "@/constants/site";

export const HERO_CONTENT = {
  label: "AI SOFTWARE PARTNER FOR ENTERPRISE TEAMS",
  labelShort: "AI SOFTWARE PARTNER",
  /**
   * Split rather than one string so one word can carry the accent. One word,
   * not the "Intelligent Software" phrase: the phrase is wide enough that
   * every column width breaks it across two lines, and a colour that starts
   * mid-line and ends mid-the-next reads as a highlighter mark rather than as
   * emphasis.
   */
  title: {
    lead: "Building",
    accent: "Intelligent",
    tail: "Software That Accelerates Business Growth",
  },
  description:
    "COGNIVAC designs, builds, and scales the AI systems that carry enterprise teams from pilot to production — faster decisions, less operational friction, measurable growth.",
  primaryCta: { label: "Schedule Consultation", href: NAV_ROUTES.contact },
  secondaryCta: { label: "Explore Solutions", href: NAV_ROUTES.services },
  ctaNote: "We reply within 24 hours.",
  /**
   * The mesh-into-pipeline render, not the dashboard one. This is an AI
   * engineering partner, and the dashboard image sells a finished SaaS
   * product — the thing a client would already own before calling. This one
   * is the work itself: scattered signal resolved into something that runs.
   * It also picks up the node-and-edge motif of the network canvas behind it,
   * so the column and its background read as one drawing.
   *
   * Shared with the "AI inside your existing product" service card further
   * down the page.
   */
  visual: {
    image: "/images/solutions/ml-integration.webp",
    alt: "A neural network of nodes and edges converging into a single running pipeline",
  },
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
