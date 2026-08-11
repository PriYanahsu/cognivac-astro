/**
 * Wireframe slot 3 · Problem we solve.
 *
 * Brief: headline "AI demos are easy. Production is hard.", 3–4 lines
 * positioning us against prototype-builders. Outcome language, zero tech
 * jargon — so nothing here names a technology, a system of record, or an
 * ops term. A CTO and a CFO should both read this without translating.
 */
export const PROBLEM_CONTENT = {
  label: "Problem we solve",
  title: "AI demos are easy. Production is hard.",
  description:
    "Plenty of people can build you something impressive in two weeks. Far fewer can hand you something that still works a year later, on an ordinary Monday, with nobody watching it. That gap is where most AI budgets quietly disappear.",
  pivot: "We only take on the part that comes after the demo.",
} as const;

export const PROBLEM_POINTS = [
  {
    id: "data",
    index: "01",
    tag: "Real conditions",
    title: "It only ever worked on the tidy version",
    description:
      "The demo ran on a clean sample someone prepared for it. Your business runs on messy, half-finished, contradictory records — and that is where it falls over.",
  },
  {
    id: "ownership",
    index: "02",
    tag: "Ownership",
    title: "Nobody owns it once the demo team leaves",
    description:
      "The people who built it move on, and no one is left whose job it is to keep it running, fix what breaks, or decide what happens next.",
  },
  {
    id: "governance",
    index: "03",
    tag: "Approval",
    title: "It never gets past your own review process",
    description:
      "The questions nobody planned for arrive at the end, from the people who can say no. The rollout stops there, sometimes for good.",
  },
  {
    id: "integration",
    index: "04",
    tag: "The rest of the business",
    title: "It cannot reach the systems you actually run on",
    description:
      "The tool is ready. The software your teams live in all day is not. Joining the two turns into a second project nobody budgeted for.",
  },
  {
    id: "reliability",
    index: "05",
    tag: "Running it",
    title: "It fails quietly, and no one notices",
    description:
      "It slows down, starts getting things wrong, or stops altogether — and you hear about it from a customer rather than from your own team.",
  },
  {
    id: "adoption",
    index: "06",
    tag: "Adoption",
    title: "Your teams never actually use it",
    description:
      "Habits, training, and incentives never catch up. It ships, usage flatlines, and leadership writes the whole thing off as a miss.",
  },
] as const;
