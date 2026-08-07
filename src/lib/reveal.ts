/**
 * Scroll-reveal driver — the vanilla replacement for framer-motion's
 * `whileInView` / `viewport={{ once, margin }}`.
 *
 * Each element declares its own trigger margin via `data-reveal-margin`, so
 * observers are pooled per distinct margin instead of one-per-element.
 * All visual work is CSS (see globals.css); this only toggles `.is-visible`.
 */

const observers = new Map<string, IntersectionObserver>();

function observerFor(margin: string) {
  let observer = observers.get(margin);
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          // `once: true` was the default on every call site in the Next app.
          if (el.dataset.revealOnce !== "false") obs.unobserve(el);
        } else if (el.dataset.revealOnce === "false") {
          el.classList.remove("is-visible");
        }
      }
    },
    { rootMargin: margin }
  );

  observers.set(margin, observer);
  return observer;
}

/** Stagger containers hand each child an index-derived delay. */
function applyStagger(container: HTMLElement) {
  const stagger = Number(container.dataset.stagger ?? "0");
  const delayChildren = Number(container.dataset.delayChildren ?? "0");

  container
    .querySelectorAll<HTMLElement>("[data-reveal-item]")
    .forEach((child, index) => {
      child.style.setProperty(
        "--reveal-delay",
        `${delayChildren + index * stagger}s`
      );
    });
}

export function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>(
    "[data-reveal], [data-reveal-stagger], [data-reveal-word]"
  );

  targets.forEach((el) => {
    if (el.dataset.revealReady === "true") return;
    el.dataset.revealReady = "true";

    if (el.hasAttribute("data-reveal-stagger")) applyStagger(el);

    /**
     * Anything already in view on first paint (the hero, above-the-fold
     * headings) is revealed immediately — waiting a frame for the observer
     * would flash empty content on a fast connection.
     */
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Deferred a frame so the browser has painted the hidden state first and
      // the transition actually runs instead of snapping.
      requestAnimationFrame(() => el.classList.add("is-visible"));
      if (el.dataset.revealOnce !== "false") return;
    }

    observerFor(el.dataset.revealMargin ?? "-80px").observe(el);
  });
}
