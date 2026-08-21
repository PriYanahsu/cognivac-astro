import { NAV_ROUTES } from "@/constants/site";
import { CLAIMS } from "@/constants/claims";
import { ENGAGEMENT_MODELS } from "@/features/services/constants";

const usd = (n: number) =>
  `$${n.toLocaleString("en-US")}`;

export const PRICING_PAGE = {
  label: "Engagement",
  title: "Price the discovery. Then price the build.",
  description:
    "There is no rate card pretending every system costs the same. There is a fixed-fee workshop, then one of three commercial models with a published floor.",
  highlights: [
    "Fixed-fee discovery",
    "You own the IP",
    "No sales qualification call",
  ],
  footnote:
    "Floors are planning numbers, not a quote. Confirm on a call — they live in one file so they can be replaced in a single edit.",
} as const;

export const DISCOVERY_WORKSHOP = {
  title: "Paid discovery workshop",
  fee: usd(CLAIMS.pricing.discoveryWorkshopUsd.value),
  duration: "Two weeks",
  description:
    "Working sessions with the people who own the outcome, an audit of the systems you already run, and a written problem statement both sides sign. The commercial envelope for the build is an output of this, not an input.",
  includes: [
    "Named engineer and delivery lead on every session",
    "Systems and data audit, including the failure modes of earlier attempts",
    "Costed options: fixed-scope, pod, or augmentation",
    "Credit toward the build if we do the work",
  ],
  cta: { label: "Scope a workshop", href: NAV_ROUTES.contact },
} as const;

export const PRICE_MODELS = ENGAGEMENT_MODELS.map((model) => ({
  ...model,
}));

export const PRICE_DRIVERS = [
  {
    title: "How ready the data is",
    body: "A model on a trusted warehouse is a different job from reconciling eleven systems of record first. Discovery is where we find out which one you have.",
  },
  {
    title: "How many systems it has to touch",
    body: "A copilot over one corpus is not an agent across ERP, CRM, and a plant historian. Integration count moves the price more than model choice.",
  },
  {
    title: "Who operates it after launch",
    body: "A handover with runbooks is cheaper than a managed retainer. If you want us on-call, that is the /support engagement, priced separately.",
  },
  {
    title: "The evaluation bar",
    body: "A system that can be wrong in a sidebar is not a system that can be wrong on a credit decision. Guardrails and evals are scope, not a nice-to-have.",
  },
] as const;

export const PRICING_FAQ = [
  {
    id: "quote",
    question: "Can I get a number before discovery?",
    answer:
      "You can get a floor and a shape. A quote that pretends we already know your systems would be a guess. The workshop is how we stop guessing.",
  },
  {
    id: "credit",
    question: "Is the workshop fee wasted if we do not proceed?",
    answer:
      "You keep the written problem statement, the systems audit, and the options. If we do the build, the fee is credited. If we do not, you still have a document another team can execute.",
  },
  {
    id: "ip",
    question: "Who owns the work product?",
    answer:
      "You do. Code, models trained for the engagement, prompts, evals, and docs. We retain generic tooling we brought in, and we will say so in the MSA before anyone writes a line.",
  },
] as const;
