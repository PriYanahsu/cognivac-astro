/**
 * Shared open/close controller for the mobile sheet and the search dialog —
 * the behaviour @radix-ui/react-dialog provided in the Next build: Escape to
 * close, click-outside to close, body scroll lock, focus trap, and focus
 * restored to the trigger on close.
 *
 * Markup contract (see Sheet.astro / Dialog.astro):
 *   [data-overlay-root]      wrapper, carries data-state="open" | "closed"
 *   [data-overlay-trigger]   opens it
 *   [data-overlay-close]     closes it
 *   [data-overlay]           backdrop; clicking it closes
 *   [data-overlay-panel]     the focus-trapped surface
 */

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

let openRoot: HTMLElement | null = null;
let lastTrigger: HTMLElement | null = null;

function panelOf(root: HTMLElement) {
  return root.querySelector<HTMLElement>("[data-overlay-panel]");
}

function lockScroll(locked: boolean) {
  if (locked) {
    document.body.setAttribute("data-scroll-locked", "");
  } else {
    document.body.removeAttribute("data-scroll-locked");
  }
}

export function closeOverlay() {
  if (!openRoot) return;

  const root = openRoot;
  root.dataset.state = "closed";
  root
    .querySelectorAll<HTMLElement>("[data-overlay-trigger]")
    .forEach((t) => t.setAttribute("aria-expanded", "false"));

  openRoot = null;
  lockScroll(false);

  lastTrigger?.focus();
  lastTrigger = null;
}

export function openOverlay(root: HTMLElement, trigger?: HTMLElement) {
  if (openRoot && openRoot !== root) closeOverlay();

  root.dataset.state = "open";
  root
    .querySelectorAll<HTMLElement>("[data-overlay-trigger]")
    .forEach((t) => t.setAttribute("aria-expanded", "true"));

  openRoot = root;
  lastTrigger = trigger ?? null;
  lockScroll(true);

  // Wait a frame so the panel is visible before focus moves into it.
  requestAnimationFrame(() => {
    const panel = panelOf(root);
    if (!panel) return;
    const autofocus = panel.querySelector<HTMLElement>("[data-autofocus]");
    (autofocus ?? panel.querySelector<HTMLElement>(FOCUSABLE) ?? panel).focus();
  });
}

function onKeydown(event: KeyboardEvent) {
  if (!openRoot) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeOverlay();
    return;
  }

  if (event.key !== "Tab") return;

  const panel = panelOf(openRoot);
  if (!panel) return;

  const focusable = Array.from(
    panel.querySelectorAll<HTMLElement>(FOCUSABLE)
  ).filter((el) => el.offsetParent !== null);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement as HTMLElement | null;

  if (event.shiftKey && (active === first || !panel.contains(active))) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}

export function initOverlays() {
  document
    .querySelectorAll<HTMLElement>("[data-overlay-root]")
    .forEach((root) => {
      if (root.dataset.overlayReady === "true") return;
      root.dataset.overlayReady = "true";
      root.dataset.state = "closed";

      root.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;

        if (target.closest("[data-overlay-trigger]")) {
          openOverlay(
            root,
            target.closest<HTMLElement>("[data-overlay-trigger]") ?? undefined
          );
          return;
        }

        // Backdrop: only a direct hit, never a click that bubbled from the panel.
        if (target.closest("[data-overlay-close]") || target.matches("[data-overlay]")) {
          closeOverlay();
        }
      });
    });
}

let keyboardBound = false;

export function bindOverlayKeyboard() {
  if (keyboardBound) return;
  keyboardBound = true;
  document.addEventListener("keydown", onKeydown);
}
