/**
 * Everyone the site puts a name to, in one place. The founders block on the
 * home page and the team page both render from this file, so a hire is added
 * once and a title is corrected once.
 *
 * ⚠️ PART PLACEHOLDER. The two founders are real — Manoj Singh and Saurabh
 * Singh — and their credentials come from the wireframe ($200k+ delivered /
 * Top Rated, and 25 years in tech). The titles, focus lines and bios around
 * them are still stand-ins, and every teammate below is invented. Replace the
 * rest before this goes live — this is the one file to edit.
 *
 * `image` is optional everywhere on purpose: with no file the avatar renders a
 * monogram, which is a deliberate design, not a broken state. Drop real
 * portraits into /public/images/team and point `image` at them when they exist.
 */

export interface Person {
  id: string;
  name: string;
  role: string;
  /** One line in the buyer's language — what this person is accountable for. */
  focus: string;
  image?: string;
  linkedin?: string;
}

/**
 * One proof point, split so it can be set as a stat rather than a chip: the
 * figure a skimmer stops on, and the two or three words that say what it is.
 */
export interface Credential {
  value: string;
  label: string;
}

export interface Founder extends Person {
  bio: string;
  /** Exactly three — the rail is a three-column grid on every surface. */
  credentials: readonly Credential[];
}

export const FOUNDERS: readonly Founder[] = [
  {
    id: "founder",
    name: "Manoj Singh",
    role: "Founder & Principal Engineer",
    focus: "Discovery, architecture, and the build itself",
    image: "/images/team/manoj.webp",
    bio: "Runs discovery and architecture on every engagement, then stays on the build rather than handing it down. The scope you agree is the scope he is accountable for shipping.",
    credentials: [
      { value: "$200k+", label: "Delivered" },
      { value: "Top Rated", label: "Platform status" },
      { value: "Hands-on", label: "Through launch" },
    ],
    linkedin: "https://linkedin.com/company/cognivac",
  },
  {
    id: "cofounder",
    name: "Saurabh Singh",
    role: "Co-founder & Head of Delivery",
    focus: "Team shape, schedule, and what happens when either changes",
    image: "/images/team/saurabh.webp",
    bio: "Twenty-five years across engineering leadership and enterprise delivery. Decides how a pod is staffed, holds the schedule honest week to week, and is the escalation path that does not route through a support queue.",
    credentials: [
      { value: "25+ yrs", label: "In tech" },
      { value: "Enterprise", label: "Delivery" },
      { value: "One lead", label: "Named on your pod" },
    ],
    linkedin: "https://linkedin.com/company/cognivac",
  },
];

export interface TeamGroup {
  id: string;
  title: string;
  /** Why this discipline exists on an engagement, in one line. */
  summary: string;
  members: readonly Person[];
}

export const TEAM_GROUPS: readonly TeamGroup[] = [
  {
    id: "engineering",
    title: "Engineering",
    summary:
      "The people who write the system you keep, and the integrations that decide whether it survives contact with your stack.",
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
    ],
  },
  {
    id: "ai",
    title: "AI & Data",
    summary:
      "Models are the easy half. This is the half that keeps them accurate, affordable, and explainable a year after launch.",
    members: [
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
    ],
  },
  {
    id: "design",
    title: "Design",
    summary:
      "An AI system nobody opens twice has not shipped. Design is where adoption is won or lost.",
    members: [
      {
        id: "aisha-rahman",
        name: "Aisha Rahman",
        role: "Product Design Lead",
        focus: "Interfaces teams adopt without being told to",
        image: "/images/team/aisha.webp",
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery & Quality",
    summary:
      "The people who make sure the schedule you were shown is the schedule you get, and that what ships was tested first.",
    members: [
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
];

/** Flat list — used where the grouping does not matter, e.g. the avatar stack. */
export const TEAM_MEMBERS: readonly Person[] = TEAM_GROUPS.flatMap(
  (group) => group.members
);

/** Founders included: the headcount a buyer counts is everyone with a name. */
export const TEAM_HEADCOUNT = TEAM_MEMBERS.length + FOUNDERS.length;
