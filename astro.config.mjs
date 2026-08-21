// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cognivac.com',

  /**
   * Every page is prerendered to static HTML for fast first paint and clean
   * crawling. `/api/contact` and `/api/newsletter` opt out
   * (`export const prerender = false`), which is why an adapter is present.
   */
  output: 'static',
  adapter: vercel(),
  integrations: [mdx()],

  // Floating Menu/Inspect/Audit bar sits over the page bottom in dev —
  // disable so it doesn't read as a second site banner.
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
  },
});
