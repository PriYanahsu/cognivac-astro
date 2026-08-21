import { NAV_ROUTES, resourcePath } from "@/constants/site";

export interface ResourceItem {
  slug: string;
  title: string;
  excerpt: string;
  category: "brief" | "comparison";
  gated: boolean;
  href: string;
}

export const RESOURCES: readonly ResourceItem[] = [
  {
    slug: "ai-readiness-assessment",
    title: "AI readiness assessment",
    excerpt:
      "A working questionnaire for data, evals, security, and the operating model. Fills in 30 minutes; tells you whether a build is premature.",
    category: "brief",
    gated: true,
    href: resourcePath("ai-readiness-assessment"),
  },
  {
    slug: "discovery-workshop-agenda",
    title: "Discovery workshop agenda",
    excerpt:
      "The two-week agenda we actually run: who is in the room, what we inspect, and what you hold at the end.",
    category: "brief",
    gated: false,
    href: resourcePath("discovery-workshop-agenda"),
  },
  {
    slug: "sample-architecture",
    title: "Sample architecture note",
    excerpt:
      "A redacted architecture decision record: retrieval, evals, and the control plane for an enterprise copilot.",
    category: "brief",
    gated: false,
    href: resourcePath("sample-architecture"),
  },
  {
    slug: "agency-vs-in-house",
    title: "Agency vs in-house AI team",
    excerpt:
      "When to hire, when to partner, and the hybrid that most of our clients actually run.",
    category: "comparison",
    gated: false,
    href: resourcePath("agency-vs-in-house"),
  },
  {
    slug: "vs-consultancies",
    title: "Specialist partner vs big consultancy",
    excerpt:
      "Slideware versus a named pod. What you are actually buying at each price.",
    category: "comparison",
    gated: false,
    href: resourcePath("vs-consultancies"),
  },
  {
    slug: "rag-vs-fine-tuning",
    title: "RAG vs fine-tuning",
    excerpt:
      "The decision is usually retrieval. Fine-tuning is for a smaller set of jobs than the pitch decks claim.",
    category: "comparison",
    gated: false,
    href: resourcePath("rag-vs-fine-tuning"),
  },
];

export const RESOURCES_PAGE = {
  label: "Resources",
  title: "Briefs you can use before you call",
  description:
    "Assessments, agendas, and the comparisons buyers actually run. One of them is gated so we know who to send the longer pack to.",
  cta: { label: "Talk to an engineer", href: NAV_ROUTES.contact },
} as const;

export const RESOURCE_BODIES: Record<
  string,
  { title: string; lede: string; sections: readonly { heading: string; body: readonly string[] }[] }
> = {
  "ai-readiness-assessment": {
    title: "AI readiness assessment",
    lede: "Score each area 1–5. A 3 on data and a 5 on ambition is a data project, not an AI project.",
    sections: [
      {
        heading: "Data",
        body: [
          "Is there a system of record a model would be allowed to read?",
          "Do permissions on that data match the people who would ask questions of it?",
          "Can you recreate last quarter's numbers from it without a hero query?",
        ],
      },
      {
        heading: "Evaluation",
        body: [
          "Do you have labelled examples of a good answer, or only a demo transcript?",
          "Who is accountable for saying the system is wrong in production?",
          "Is there a rollback that does not require the original notebook?",
        ],
      },
      {
        heading: "Security and operating model",
        body: [
          "Will this data leave your residency boundary? If yes, who signed that?",
          "Who is on-call the week after launch — you, us, or nobody?",
          "Is there a DPA path, or will legal discover the project in week six?",
        ],
      },
    ],
  },
  "discovery-workshop-agenda": {
    title: "Discovery workshop agenda",
    lede: "Two weeks. Named people in the room. A document at the end, not a deck.",
    sections: [
      {
        heading: "Week one",
        body: [
          "Day 1–2: outcome owners, constraints, and the last attempt that stalled.",
          "Day 3–4: systems and data audit. What exists, what lies, what is off-limits.",
          "Day 5: failure modes. Write them down before anyone proposes a model.",
        ],
      },
      {
        heading: "Week two",
        body: [
          "Options: fixed-scope, pod, or augmentation, each costed.",
          "A written problem statement both sides can sign.",
          "A go / no-go. No-go is a successful workshop.",
        ],
      },
    ],
  },
  "sample-architecture": {
    title: "Sample architecture note",
    lede: "Redacted from a copilot engagement. The interesting part is the control plane, not the model name.",
    sections: [
      {
        heading: "Retrieval",
        body: [
          "Corpus lives in the client's warehouse. Indexes inherit row-level security.",
          "Query-time filters apply the caller's groups before the first chunk is fetched.",
          "Citations are mandatory on answers that claim a source. No citation, no claim.",
        ],
      },
      {
        heading: "Control plane",
        body: [
          "Every tool call is typed, permissioned, and traced.",
          "Eval suite gates prompt, model, and retriever changes.",
          "The model is a config value. Swapping it is not a rewrite.",
        ],
      },
    ],
  },
  "agency-vs-in-house": {
    title: "Agency vs in-house AI team",
    lede: "Most durable setups are hybrid. The question is what you keep and what you rent.",
    sections: [
      {
        heading: "Hire in-house when",
        body: [
          "The system is the product, and you will operate it for years.",
          "You already have the data platform and the eval discipline.",
          "You can hire senior people in under two quarters.",
        ],
      },
      {
        heading: "Partner when",
        body: [
          "You need production this year, not a hiring plan.",
          "The first system will teach you what the team shape should be.",
          "You want the eval harness and the handover, not a staff-aug body shop.",
        ],
      },
    ],
  },
  "vs-consultancies": {
    title: "Specialist partner vs big consultancy",
    lede: "You are buying a pod, or you are buying a brand and a pyramid.",
    sections: [
      {
        heading: "What the large firms sell",
        body: [
          "A partner in the room for the steerco, and a rotating cast underneath.",
          "Frameworks that survive any domain because they never quite touch one.",
          "A change-order machine once discovery was under-scoped on purpose.",
        ],
      },
      {
        heading: "What we sell",
        body: [
          "The people who scoped the work stay on it.",
          "A written problem statement before a commercial envelope.",
          "You own the repo. If that is not acceptable, we are the wrong firm.",
        ],
      },
    ],
  },
  "rag-vs-fine-tuning": {
    title: "RAG vs fine-tuning",
    lede: "Start with retrieval. Fine-tune when the job is style, schema, or a skill retrieval cannot reach.",
    sections: [
      {
        heading: "Use RAG when",
        body: [
          "The answers must cite documents that change.",
          "Permissions differ by caller.",
          "You need to swap the model without retraining.",
        ],
      },
      {
        heading: "Fine-tune when",
        body: [
          "You need a stable output schema at volume.",
          "The domain language is specialized and retrieval still paraphrases it wrong.",
          "You have the eval set and the budget to keep the adapter current.",
        ],
      },
    ],
  },
};
