// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages serves the site from a subfolder (/New-Orthodontist-Site/); the deploy workflow
  // sets these. Locally, or on a custom domain, they're unset and the site lives at the root.
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
