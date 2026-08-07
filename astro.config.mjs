// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cognivac.com',

  /**
   * Every page is prerendered to static HTML for fast first paint and clean
   * crawling. Only `/api/contact` opts out (`export const prerender = false`),
   * which is why an adapter is present at all.
   */
  output: 'static',
  adapter: node({ mode: 'standalone' }),

  vite: {
    plugins: [tailwindcss()],
  },
});
