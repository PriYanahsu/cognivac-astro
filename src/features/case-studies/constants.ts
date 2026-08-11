import { CASE_STUDIES } from "@/features/home/constants";
import type { CaseStudyItem } from "@/types";

/**
 * Per-study detail. Keyed by `CASE_STUDIES[].id`, and read by both the index
 * (/case-studies) and the individual study pages (/case-studies/[slug]) — they
 * must never be able to tell different stories about the same engagement.
 *
 * ⚠️ Like the metrics in src/features/selected-work/constants.ts, none of this
 * has been confirmed against an actual engagement. Studies 1–3 are inherited
 * marketing copy, 4–6 are placeholders. Verify before launch.
 */
export const STUDY_DETAIL: Record<
  string,
  { challenge: string; approach: string; stack: readonly string[] }
> = {
  "1": {
    challenge:
      "Twelve thousand engineers were searching six disconnected documentation systems, and answers were often out of date by the time they were found.",
    approach:
      "A governed RAG assistant with permission-scoped retrieval, citation-backed answers, and an evaluation harness that gates every release.",
    stack: ["Python", "pgvector", "Azure", "LangGraph", "Next.js"],
  },
  "2": {
    challenge:
      "A rules-based payments risk engine was flagging too much legitimate traffic, and every tuning change took a quarter to ship safely.",
    approach:
      "A continuously trained model with explainable per-decision reasoning, shadow deployment, and one-click rollback for the risk team.",
    stack: ["Python", "MLflow", "Kafka", "AWS", "Feature Store"],
  },
  "3": {
    challenge:
      "Warehouse exceptions were handled over email and phone across a global network, with no consistent record of what was decided or why.",
    approach:
      "An agentic operations layer that triages exceptions, drafts resolutions, and escalates to a human when confidence or value crosses a threshold.",
    stack: ["TypeScript", "Temporal", "GCP", "Postgres", "React"],
  },
  "4": {
    challenge:
      "Scheduling, quoting and job sign-off lived in spreadsheets and a group chat, so nobody could say what a crew was doing without ringing them.",
    approach:
      "A single scheduling and job-record product on web and mobile, shipped in fortnightly increments to one region at a time until every crew was on it.",
    stack: ["TypeScript", "Next.js", "React Native", "Postgres", "AWS"],
  },
  "5": {
    challenge:
      "A claims assistant had passed every demo for a year, but no owner would sign it off for live traffic without evidence it behaved under real cases.",
    approach:
      "We kept the model and built the half that was missing — an evaluation suite over historical claims, per-answer audit records, and a staged rollout risk could stop at any point.",
    stack: ["Python", "LangGraph", "Azure", "Postgres", "OpenTelemetry"],
  },
  "6": {
    challenge:
      "Eleven systems held overlapping product, store and sales records that disagreed, and every forecasting attempt died arguing about whose numbers were right.",
    approach:
      "A reconciled warehouse with explicit ownership per field, lineage back to the source system, and daily checks that fail loudly rather than quietly drifting.",
    stack: ["dbt", "Snowflake", "Airflow", "Python", "Great Expectations"],
  },
};

/** Gradient art per study — mirrors the solutions deck treatment. */
export const STUDY_ART: Record<string, string> = {
  "1": "linear-gradient(135deg,#1e4fd8,#163db0)",
  "2": "linear-gradient(135deg,#3f7bb0,#bfe3ff)",
  "3": "linear-gradient(135deg,#1a1a1c,#3a3a40)",
  "4": "linear-gradient(135deg,#1e4fd8,#0b2a6f)",
  "5": "linear-gradient(135deg,#0f766e,#134e4a)",
  "6": "linear-gradient(135deg,#7c3aed,#261a5a)",
};

export function getStudyBySlug(slug: string): CaseStudyItem | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

/**
 * The study that follows this one, wrapping at the end. A study page always
 * offers somewhere to go next — a dead end here is a dead end in the funnel.
 */
export function getNextStudy(slug: string): CaseStudyItem | undefined {
  const i = CASE_STUDIES.findIndex((study) => study.slug === slug);
  if (i < 0) return undefined;
  return CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
}
