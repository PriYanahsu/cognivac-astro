export const TESTIMONIALS_CONTENT = {
  label: "In Their Words",
  title: "What it is like to work with us",
  description:
    "Outcomes are covered above. These are about how the engagement actually ran.",
} as const;

/**
 * ⚠️ Attribution is what makes this section worth having.
 * Name + title + company + photo. Anonymous praise reads as self-written and
 * is worth roughly nothing to a skeptical buyer — remove a quote before
 * shipping it unattributed. Add `avatar` paths once you have real headshots.
 */
export const TESTIMONIAL_META: Record<string, { avatar?: string }> = {
  "1": {},
  "2": {},
  "3": {},
};
