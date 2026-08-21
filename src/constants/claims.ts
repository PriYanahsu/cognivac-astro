/**
 * Pre-launch audit file. Every unverified public claim lives here so a
 * launch review is one edit, not a grep across the site.
 *
 * `VERIFIED: false` means the figure or attribution must not be treated as
 * a live customer-facing fact. Pages that still need a number import from
 * here so swapping a real value (and flipping the flag) is a single change.
 *
 * Do not import CLAIMS into a rendered string unless you have decided the
 * unverified value should ship. Most pages now use honest process facts
 * instead; this file is the quarantine.
 */

export interface UnverifiedClaim<T> {
  value: T;
  VERIFIED: false;
  note: string;
}

export const CLAIMS = {
  stats: {
    systemsShipped: {
      value: 120,
      suffix: "+",
      label: "AI systems shipped to production",
      VERIFIED: false,
      note: "Inherited marketing figure. No source in repo.",
    },
    monthlyDecisions: {
      value: 40,
      suffix: "M+",
      label: "Automated decisions processed monthly",
      VERIFIED: false,
      note: "Inherited marketing figure. No source in repo.",
    },
    retention: {
      value: 98,
      suffix: "%",
      label: "Client retention across engagements",
      VERIFIED: false,
      note: "Inherited marketing figure. No source in repo.",
    },
    industries: {
      value: 25,
      suffix: "+",
      label: "Industries served worldwide",
      VERIFIED: false,
      note: "Inherited marketing figure. No source in repo.",
    },
    satisfaction: {
      value: 4.9,
      suffix: "",
      label: "Average delivery satisfaction score",
      VERIFIED: false,
      note: "Inherited marketing figure. No source in repo.",
    },
    uptimeSla: {
      value: "99.9%",
      VERIFIED: false,
      note: "Quoted as a production SLA without a signed SLA in repo.",
    },
    founderDelivered: {
      value: "$200k+",
      VERIFIED: false,
      note: "Wireframe credential for Manoj Singh. Confirm before launch.",
    },
  },

  pricing: {
    discoveryWorkshopUsd: {
      value: 8_500,
      VERIFIED: false,
      note: "Placeholder fixed fee for the two-week discovery workshop. Replace with the live rate.",
    },
    fixedScopeFromUsd: {
      value: 45_000,
      VERIFIED: false,
      note: "Floor for a well-scoped first build after discovery. Replace with live bands.",
    },
    podMonthlyFromUsd: {
      value: 32_000,
      VERIFIED: false,
      note: "Floor for a 2–3 person dedicated pod per month. Replace with live bands.",
    },
    augmentationWeeklyFromUsd: {
      value: 4_500,
      VERIFIED: false,
      note: "Floor for one senior engineer per week. Replace with live rates.",
    },
  },

  testimonials: {
    VERIFIED: false,
    note: "All six quotes, names, titles, and companies are invented. Do not render on a live page.",
    items: [
      {
        id: "1",
        quote:
          "Cognivac didn't just build a model—they built an operating system for how our teams use AI every day.",
        name: "Priya Raman",
        role: "Chief Digital Officer",
        company: "Northline Financial",
        image: "/images/testimonials/priya.webp",
      },
      {
        id: "2",
        quote:
          "From architecture to rollout, the team operated like an extension of our engineering org. Production-ready from day one.",
        name: "Marcus Chen",
        role: "VP of Engineering",
        company: "Orbit Commerce",
        image: "/images/testimonials/marcus.webp",
      },
      {
        id: "3",
        quote:
          "We evaluated five AI partners. Cognivac was the only one who could speak fluently about agents, governance, and UX.",
        name: "Elena Voss",
        role: "Head of AI Strategy",
        company: "Helix Manufacturing",
        image: "/images/testimonials/elena.webp",
      },
      {
        id: "4",
        quote:
          "Weekly demos on real data, never slides. We always knew what was working — including the week the honest answer was 'not much yet'.",
        name: "Sofia Almeida",
        role: "Director of Data Platform",
        company: "Meridian Logistics",
        image: "/images/testimonials/sofia.webp",
      },
      {
        id: "5",
        quote:
          "They argued us out of half our roadmap in the first workshop. That one conversation saved us a quarter of build time.",
        name: "James Okonkwo",
        role: "Chief Operating Officer",
        company: "Verity Insurance",
        image: "/images/testimonials/james.webp",
      },
      {
        id: "6",
        quote:
          "Handover was an actual handover — runbooks, evaluation suites, and two of our own engineers shipping changes without calling them.",
        name: "Hannah Brill",
        role: "Head of Platform Engineering",
        company: "Larkspur Retail",
        image: "/images/testimonials/hannah.webp",
      },
    ],
  },

  team: {
    VERIFIED: false,
    note: "Every teammate below the two founders is invented. Portraits in /public/images/team for these ids are placeholders.",
    members: [
      {
        id: "arjun-mehta",
        name: "Arjun Mehta",
        role: "Principal Engineer",
        focus: "Platform architecture and the hard parts of integration",
        image: "/images/team/arjun.webp",
      },
      {
        id: "sofia-almeida",
        name: "Sofia Almeida",
        role: "Senior Full-Stack Engineer",
        focus: "Product surfaces, from API contract to interface",
        image: "/images/team/sofia.webp",
      },
      {
        id: "daniel-okoye",
        name: "Daniel Okoye",
        role: "Senior Backend Engineer",
        focus: "Data pipelines and the systems that carry load",
        image: "/images/team/daniel.webp",
      },
      {
        id: "neha-kapoor",
        name: "Neha Kapoor",
        role: "Lead ML Engineer",
        focus: "Retrieval, evaluation, and models that stay honest in production",
        image: "/images/team/neha.webp",
      },
      {
        id: "tomas-lindqvist",
        name: "Tomas Lindqvist",
        role: "MLOps Engineer",
        focus: "Training, serving, and the running cost of both",
        image: "/images/team/tomas.webp",
      },
      {
        id: "aisha-rahman",
        name: "Aisha Rahman",
        role: "Product Design Lead",
        focus: "Interfaces teams adopt without being told to",
        image: "/images/team/aisha.webp",
      },
      {
        id: "marco-bianchi",
        name: "Marco Bianchi",
        role: "Delivery Lead",
        focus: "Scope, schedule, and the weekly truth about both",
        image: "/images/team/marco.webp",
      },
      {
        id: "grace-liu",
        name: "Grace Liu",
        role: "QA & Reliability Lead",
        focus: "Finding what breaks before your users do",
        image: "/images/team/grace.webp",
      },
    ],
  },

  partnerships: {
    note: "Render a badge only when VERIFIED is true. Clutch/G2 wait on live profiles.",
    items: [
      { id: "aws", name: "AWS Partner", VERIFIED: false },
      { id: "gcp", name: "Google Cloud Partner", VERIFIED: false },
      { id: "azure", name: "Microsoft Azure Partner", VERIFIED: false },
      { id: "databricks", name: "Databricks Partner", VERIFIED: false },
      { id: "nvidia", name: "NVIDIA Inception", VERIFIED: false },
      { id: "clutch", name: "Clutch", VERIFIED: false },
      { id: "g2", name: "G2", VERIFIED: false },
    ],
  },

  clientMarks: {
    VERIFIED: false,
    note: "Four unused marks in /public/images/clients. Confirm they are real, permitted client logos before treating this as a customer wall.",
    items: [
      { id: "ar", src: "/images/clients/ar.webp", alt: "Client mark" },
      { id: "sm", src: "/images/clients/sm.webp", alt: "Client mark" },
      { id: "nt", src: "/images/clients/nt.webp", alt: "Client mark" },
      { id: "dk", src: "/images/clients/dk.webp", alt: "Client mark" },
    ],
  },
} as const;
