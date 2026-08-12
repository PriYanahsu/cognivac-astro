/**
 * ⚠️ Attribution is what makes this section worth having.
 * Name + title + company, on every quote. Anonymous praise reads as
 * self-written and is worth roughly nothing to a skeptical buyer — remove a
 * quote before shipping it unattributed. The quotes themselves live in
 * `@/features/home/constants`.
 *
 * The cards carry no headshot by design: attribution is typographic only, so
 * there is no avatar map here to fill in.
 */
export const TESTIMONIALS_CONTENT = {
  label: "In Their Words",
  title: "What it is like to work with us",
  description:
    "Outcomes are covered above. These are about how the engagement actually ran.",
} as const;

/**
 * ⚠️ EVERY NAME IN THIS LIST IS A PUBLIC CLAIM ABOUT A THIRD PARTY.
 *
 * A strip like this is read as "these companies are our clients". Naming a
 * company that is not one is false advertising and a trademark problem, and
 * it is the single easiest thing on a services site for a prospect to check.
 * Before this ships, every entry has to be either a real client or a real,
 * documented partnership — and if it is the latter, use the partner wording
 * below rather than the customer wording.
 *
 * The names render as text, not as logo files. Reproducing someone's mark
 * needs their actual asset and usually their brand guidelines; an approximated
 * logo is worse than a wordmark. Drop real SVGs into /public/images/partners
 * and extend this list with an `image` when you have permission to use them.
 */
export const TRUST_STRIP = {
  /** Customer wording. Swap for the partner line if that is the true claim. */
  label: "Trusted by innovative teams worldwide",
  /** e.g. "Certified on the platforms our clients already run" */
  partnerLabel: "Built on the platforms our clients already run",
  names: [
    "Google Cloud",
    "Microsoft",
    "Amazon",
    "Meta",
    "IBM",
    "NVIDIA",
  ],
} as const;
