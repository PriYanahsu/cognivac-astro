import { NAV_ROUTES } from "@/constants/site";
import { CASE_STUDIES } from "@/features/home/constants";

/**
 * Wireframe slot 5 · Selected work.
 *
 * Reads as the answer to the two sections above it: the problem section says
 * production is where AI dies, services says pick the line that sounds like
 * your week — this says here is a week that sounded like that, and here is
 * what happened. Same plain voice: no technology names in the header, no
 * capability words a CFO would have to translate.
 *
 * Each card follows the wireframe's three beats in order — the problem, what
 * we built, the number that moved. Never reorder them; the metric only means
 * anything after the reader knows what it is a metric of.
 */
export const SELECTED_WORK_CONTENT = {
  label: "Selected work",
  title: "What we were handed, and what changed",
  description:
    "Each engagement, told the same way every time: the situation we walked into, the thing we built, and the number it moved once real people were using it.",
  cta: { label: "See all our work", href: NAV_ROUTES.caseStudies },
} as const;

/** The three beats, labelled on the card so the structure reads at a glance. */
export const STORY_STEPS = {
  problem: "The problem",
  built: "What we built",
  outcome: "What changed",
} as const;

/**
 * How many studies feed the home track.
 *
 * The wireframe's note on this slot is "2 is enough" — that is 2 *on screen*,
 * not 2 in existence, and the track is a marquee that drifts rather than a
 * static pair. It needs enough cards that a full loop is not obviously short:
 * below about 5 the same card comes back around while the reader is still on
 * the section, and the whole thing reads as a gif rather than a body of work.
 *
 * Keep this at the full length of CASE_STUDIES unless a study is deliberately
 * being held back from the home page.
 */
export const HOME_STORY_COUNT = 6;

/**
 * Per-study copy, keyed to `CASE_STUDIES[].id` in the shared home constants.
 * Title, category, and href stay in that shared array because /services and
 * /case-studies read them too — only the narrative beats live here.
 *
 * ⚠️ Every `metric.value` here is unverified — 1–3 are marketing copy
 * inherited from the previous build, 4–6 are placeholders written to fill the
 * track. Confirm each one against the actual engagement before launch; a wrong
 * number here is the most expensive kind of wrong on the page.
 */
export const WORK_STORIES: Record<
  string,
  {
    problem: string;
    built: string;
    metric: { value: string; label: string };
  }
> = {
  "1": {
    problem:
      "12,000 engineers were hunting through decades of technical documents to answer questions their colleagues had already answered.",
    built:
      "One assistant over all of it, with sourcing and access rules their own reviewers signed off on.",
    metric: { value: "3.4×", label: "faster answers for 12,000 engineers" },
  },
  "2": {
    problem:
      "A payments risk engine was blocking so many honest customers that the review team could not keep up with the queue.",
    built:
      "A system that keeps learning from what the reviewers decide, and can explain every call it makes.",
    metric: { value: "41%", label: "fewer false positives in payments risk" },
  },
  "3": {
    problem:
      "Every warehouse exception went to a person to chase across tools, so nothing moved overnight or on weekends.",
    built:
      "Automated handling for the routine cases, with a human kept on the decisions that carry real cost.",
    metric: { value: "18 hrs", label: "saved weekly across warehouse ops" },
  },
  "4": {
    problem:
      "A 400-person field services firm ran every job, quote and sign-off through spreadsheets and a group chat.",
    built:
      "One product on web and mobile, built around the way the crews already worked rather than the way head office described it.",
    metric: { value: "11 wks", label: "from first call to crews using it" },
  },
  "5": {
    problem:
      "An insurer's claims assistant had demoed well for a year and still had not been near a real customer.",
    built:
      "The production half nobody had built: evaluation, an audit trail, and the sign-offs risk and compliance were waiting on.",
    metric: { value: "6 wks", label: "from stalled pilot to live" },
  },
  "6": {
    problem:
      "Two decades of records sat in eleven systems that disagreed with each other, so no forecast built on them could be trusted.",
    built:
      "One reconciled source of truth, with the lineage and the daily checks that keep it that way.",
    metric: { value: "11 systems", label: "reconciled into one source of truth" },
  },
};

/**
 * Metric lookup consumed by /case-studies as well, so the number on a card and
 * the number on the study page can never drift apart.
 */
export const CASE_METRICS: Record<string, { value: string; label: string }> =
  Object.fromEntries(
    Object.entries(WORK_STORIES).map(([id, story]) => [id, story.metric])
  );

/** The studies actually rendered on the home page, in shared-array order. */
export const HOME_STORIES = CASE_STUDIES.slice(0, HOME_STORY_COUNT);
