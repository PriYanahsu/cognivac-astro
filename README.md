# Cognivac — Astro

The Cognivac marketing site, ported from the Next.js 15 app in the parent
directory to Astro with **no React on the client**. Every page is prerendered to
static HTML; the only JavaScript that ships is a handful of small inline
modules plus Lenis for smooth scrolling.

## Requirements

Node **22.12+** (Astro 7 requires it). If your shell defaults to Node 20:

```bash
nvm use 22
```

## Commands

| Command           | Does                                                |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Dev server on http://localhost:4321                  |
| `npm run build`   | Prerender every page into `dist/`                    |
| `npm run preview` | Serve the build locally                              |
| `npm run start`   | Run the built Node server (needed for `/api/contact`)|
| `npm run check`   | Type-check `.astro` and `.ts` files                  |

## Folder structure

The layout mirrors the Next.js project one-for-one so the two stay easy to
compare. Only the framework-specific pieces move.

```
src/
├── pages/              ← was app/            (file-based routes)
│   ├── index.astro                            app/page.tsx
│   ├── about.astro · services.astro · …       app/<route>/page.tsx
│   ├── 404.astro                              app/not-found.tsx
│   ├── sitemap.xml.ts · robots.txt.ts         app/sitemap.ts · app/robots.ts
│   ├── manifest.webmanifest.ts                app/manifest.ts
│   └── api/contact.ts                         app/api/contact/route.ts
├── layouts/Layout.astro ← was app/layout.tsx + src/providers/
├── styles/globals.css   ← was app/globals.css (copied, plus the CSS that
│                          replaces framer-motion)
├── components/
│   ├── ui/             Button, Input, Label, Separator, Accordion,
│   │                   Dialog, Sheet   (were Radix primitives)
│   ├── shared/         Container, SectionLabel, GradientButton,
│   │                   GhostButton, StatCounter, PageHero, SocialIcon
│   ├── animations/     FadeIn, SlideUp, SlideUpItem, RevealText,
│   │                   MagneticButton
│   └── layout/         navbar/ · footer/ · ScrollProgress.astro
├── features/           identical folder names to the Next project
│   ├── hero-section/ problem-section/ trust-sections/ case-highlights/
│   ├── stats-band/ platform-section/ why-cognivac/ process-section/
│   ├── security-section/ industries-showcase/ testimonials-section/
│   ├── cta-section/ home/ about-cognivac/
│   └── about/ services/ industries/ case-studies/ blog/ careers/ contact/
├── constants/  site.ts · navigation.ts        (copied verbatim)
├── types/      index.ts                       (copied verbatim)
└── lib/        utils.ts · overlay.ts · reveal.ts · seo/
```

Every `constants.ts` under `features/` is byte-identical to the Next version,
as are `types/index.ts`, `constants/navigation.ts`, and `lib/utils.ts`.

### Two naming differences

- **`index.tsx` → a named component.** Astro cannot import a directory, so
  `features/about/index.tsx` becomes `features/about/AboutPage.astro`.
- **Page metadata moves to `metadata.ts`.** Astro components cannot export
  values for import, so each feature keeps its metadata in a sibling module.

## What replaced what

| Next.js                        | Astro                                              |
| ------------------------------ | -------------------------------------------------- |
| framer-motion `whileInView`    | `lib/reveal.ts` + CSS transitions                  |
| framer-motion springs          | rAF spring integration, same stiffness/damping     |
| `@radix-ui/react-dialog`       | `lib/overlay.ts` (Escape, focus trap, scroll lock) |
| `@radix-ui/react-accordion`    | `Accordion.astro`, `grid-template-rows` animation  |
| react-hook-form + zod (client) | inline validators with identical messages          |
| `next/font/google`             | `@fontsource-variable/plus-jakarta-sans`           |
| `next/image`, `next/link`      | `<img>`, `<a>`                                     |
| lucide-react                   | `@lucide/astro` (rendered at build time)           |
| gsap + ScrollTrigger           | removed — it was a no-op (see `Layout.astro`)      |
| lenis                          | unchanged                                          |

## Rendering

`output: 'static'` with the Node adapter. Every page is prerendered; only
`src/pages/api/contact.ts` sets `export const prerender = false`. If you drop
the contact endpoint, the adapter can be removed and the build becomes pure
static files.
