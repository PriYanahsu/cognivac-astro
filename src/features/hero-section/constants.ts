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
    /**
     * Encoded from the 1536x1024 original rather than reusing the services
     * card's copy, which is 960x540. The hero panel is tall and crops on
     * height, so it was scaling 540 source pixels across the better part of a
     * viewport — around 3x on a retina screen, which is what "breaking"
     * looked like. This source carries nearly twice the vertical pixels and
     * the full 3:2 frame the 16:9 card copy had already cropped away.
     */
    image: "/images/hero/ml-pipeline-1536.webp",
    srcset:
      "/images/hero/ml-pipeline-768.webp 768w, /images/hero/ml-pipeline-1152.webp 1152w, /images/hero/ml-pipeline-1536.webp 1536w",
    /** Both forms of the visual declare the same `sizes` on purpose: the
     *  hidden one is still in the DOM, and matching candidates keep the two
     *  of them to a single download. */
    sizes: "(min-width: 1024px) 50vw, 100vw",
    width: 1536,
    height: 1024,
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
