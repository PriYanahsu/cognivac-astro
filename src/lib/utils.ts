import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The project's own `text-*` classes, which are NOT text colours.
 *
 * tailwind-merge classifies any unrecognised `text-<something>` as a colour,
 * so in a `cn()` call it treats these as conflicting with `text-white`,
 * `text-foreground`, `text-accent` — and silently drops whichever came first.
 * That is not theoretical: it was deleting `text-eyebrow` from every
 * `SectionLabel` on the site (the eyebrows lost their uppercase, their weight,
 * and their size), `text-input` from every `Input` (the contact form
 * rendered as four labels above four invisible fields), and `text-button-md`
 * from the newsletter and services buttons.
 *
 * Declaring them here puts each on an exact-match path, which wins over the
 * colour validator. They all go in `font-size` — every one of them sets a
 * font size, so replacing one another is the behaviour we want, and none of
 * them should ever fight a colour.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display-xl",
        "text-heading-lg",
        "text-heading-md",
        "text-label-sm",
        "text-eyebrow",
        "text-body-lg",
        "text-body-md",
        "text-body-sm",
        "text-button-lg",
        "text-button-md",
        "text-code",
        "text-hero",
        "text-section",
        "text-section-column",
        "text-card-title",
        "text-body",
        "text-label",
        // Also a whole field surface — border, background, radius — but it
        // sets a font size too, so this group holds it correctly.
        "text-input",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
