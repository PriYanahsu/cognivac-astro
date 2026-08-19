import { NAV_ROUTES } from "@/constants/site";

/**
 * Wireframe slot 4 · Services — by problem, not tech.
 *
 * Every `title` names the buyer's situation, not the technology behind it, so a
 * reader picks the line that sounds like their week rather than decoding a
 * capability menu. `short` labelled the tab strip the wheel used to need; the
 * grid shows full titles, so nothing reads it today — kept for the next place
 * that wants a two-word name for an offer.
 *
 * ORDER IS THE ENGAGEMENT ARC, and the grid reads it left to right, top to
 * bottom:
 *   1–4  build   — what we make for you
 *   5–6  fix     — what we do when something already exists and stalled
 *   7–8  run     — what happens after it is live
 *   9    staff   — how we resource all of the above
 * At nine entries the three-column grid fills exactly, so the arc ends on a
 * full row. Adjacent `color` values are kept in different hue families, since
 * the whole set is on screen at once.
 *
 * ⚠️ `stats` on the first five are inherited from the previous copy and still
 * unverified; each pair stayed with the capability it originally described. The
 * last four are new and equally unconfirmed. Check all of them before launch.
 */
export const SERVICE_OFFERS = [
  // ── Build ──────────────────────────────────────────────────────────────
  {
    id: "embed",
    title: "AI inside your existing product",
    short: "In your product",
    description:
      "Your product already has users. We add the intelligent part without you rebuilding what works or freezing the roadmap for two quarters.",
    icon: "Puzzle",
    href: `${NAV_ROUTES.services}#machine-learning`,
    color: "#BFE3FF",
    image: "/images/solutions/ml-integration.webp",
    stats: [
      { value: "3x", label: "deploy speed" },
      { value: "50%+", label: "accuracy lift" },
    ],
  },
  {
    id: "automation",
    title: "AI workflow automation",
    short: "Automate workflows",
    description:
      "The repetitive work that eats your team's week, handled end to end — with a person kept in the loop wherever the stakes are high.",
    icon: "Workflow",
    href: `${NAV_ROUTES.services}#automation`,
    color: "#E4DDFF",
    image: "/images/solutions/automation.webp",
    stats: [
      { value: "80%", label: "less manual work" },
      { value: "4x", label: "throughput" },
    ],
  },
  {
    id: "zero-to-one",
    title: "0→1 product build, web and mobile",
    short: "0→1 build",
    description:
      "Nothing exists yet. We take it from the first conversation to something real people are using every day, on web and on mobile.",
    icon: "Rocket",
    href: `${NAV_ROUTES.services}#apps`,
    color: "#FFE985",
    image: "/images/solutions/web-apps.webp",
    stats: [
      { value: "99.9%", label: "uptime SLA" },
      { value: "<1s", label: "page load" },
    ],
  },
  {
    id: "autonomous",
    title: "Work that runs without someone driving it",
    short: "Runs itself",
    description:
      "Multi-step jobs that currently need a person to chase them between tools, teams, and inboxes — running on their own, around the clock.",
    icon: "Bot",
    href: `${NAV_ROUTES.services}#ai-agents`,
    color: "#F5F0E8",
    image: "/images/solutions/ai-agents.webp",
    stats: [
      { value: "10x", label: "faster completion" },
      { value: "24/7", label: "always on" },
    ],
  },

  // ── Fix ────────────────────────────────────────────────────────────────
  {
    id: "data",
    title: "Your data is not ready, and you know it",
    short: "Data foundation",
    description:
      "Before anything intelligent works, the records underneath it have to be trustworthy. We do that groundwork first, not as a surprise halfway through.",
    icon: "Database",
    href: `${NAV_ROUTES.services}#machine-learning`,
    color: "#D8EFC0",
    image: "/images/solutions/data.webp",
    stats: [
      { value: "1 source", label: "of truth" },
      { value: "Audited", label: "end to end" },
    ],
  },
  {
    id: "pilot-rescue",
    title: "The pilot that never made it live",
    short: "Pilot rescue",
    description:
      "Something was built, it demoed well, and then it stopped. We find what is actually blocking it and take it the rest of the way.",
    icon: "LifeBuoy",
    href: `${NAV_ROUTES.services}#ai-agents`,
    color: "#FFD8C7",
    image: "/images/solutions/pilot-rescue.webp",
    stats: [
      { value: "4–8 wks", label: "typical rescue" },
      { value: "Fixed", label: "scope and price" },
    ],
  },

  // ── Run ────────────────────────────────────────────────────────────────
  {
    id: "scale",
    title: "Ready for the day usage triples",
    short: "Scale & cost",
    description:
      "Growth should not mean an emergency rebuild. We put it on foundations that stretch when demand does, without the bill climbing at the same rate.",
    icon: "Gauge",
    href: `${NAV_ROUTES.services}#cloud`,
    color: "#C7F2E3",
    image: "/images/solutions/cloud.webp",
    stats: [
      { value: "∞", label: "elastic scale" },
      { value: "40%", label: "cost savings" },
    ],
  },
  {
    id: "operate",
    title: "Someone to own it after launch",
    short: "Run it for you",
    description:
      "Uptime, fixes, and improvements handled by the same people who built it — so it does not quietly rot the month after go-live.",
    icon: "Activity",
    href: `${NAV_ROUTES.services}#cloud`,
    color: "#FBD6E3",
    image: "/images/solutions/operate.webp",
    stats: [
      { value: "99.9%", label: "uptime SLA" },
      { value: "<24h", label: "response" },
    ],
  },

  // ── Staff ──────────────────────────────────────────────────────────────
  {
    id: "team",
    title: "Senior people, starting this month",
    short: "Team support",
    description:
      "Extra senior engineers working inside your team and your process — without a hiring round, an agency markup, or a six-week ramp.",
    icon: "Users",
    href: `${NAV_ROUTES.services}#apps`,
    color: "#DDE4EA",
    image: "/images/solutions/team.webp",
    stats: [
      { value: "6–8", label: "senior engineers" },
      { value: "2 wks", label: "to start" },
    ],
  },
] as const;

/** Section header — states the "by problem, not tech" framing outright. */
export const SERVICES_HEADER = {
  label: "Services",
  title: "Described by the problem, not the technology",
  description:
    "Pick the line that sounds like your situation. That is the engagement — there is no capability menu to decode first.",
} as const;
