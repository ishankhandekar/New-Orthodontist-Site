// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig, envField } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/*
	One codebase, two builds:
	- The public site (default): fully static HTML. Visitors never contact Sanity.
	- The preview site (SANITY_PREVIEW=true, a separate Cloudflare Worker): pages render on request,
	  so Sanity Studio's Presentation tool can show unpublished drafts and click-to-edit outlines.
*/
const preview = process.env.SANITY_PREVIEW === 'true';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages serves the site from a subfolder (/New-Orthodontist-Site/); the deploy workflow
  // sets these. Locally, or on a custom domain, they're unset and the site lives at the root.
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  ...(preview && {
    output: 'server',
    // Sessions are off: draft mode uses its own signed cookie, so there's no KV store to set up.
    adapter: cloudflare({ imageService: 'compile' }),
    session: false,
  }),
  integrations: [
    // Generates sitemap-index.xml (it needs `site`, so it only runs when SITE_URL is set).
    sitemap(),
    // The draft-mode routes exist only in the preview build.
    preview && {
      name: 'draft-mode-routes',
      hooks: {
        'astro:config:setup': ({ injectRoute }) => {
          injectRoute({ pattern: '/api/draft-mode/enable', entrypoint: './src/draft-mode/enable.ts', prerender: false });
          injectRoute({ pattern: '/api/draft-mode/disable', entrypoint: './src/draft-mode/disable.ts', prerender: false });
        },
      },
    },
  ],
  env: {
    schema: {
      // Read-only Sanity token, set as a secret on the preview Worker only. It lets preview pages
      // read drafts; it never reaches the browser and the public site never has it.
      SANITY_VIEWER_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // The click-to-edit overlay script, swapped for an empty component in the public build so
        // none of its code is built into the public site.
        '~visual-editing': fileURLToPath(
          new URL(
            preview ? './src/components/VisualEditing.astro' : './src/components/VisualEditingOff.astro',
            import.meta.url,
          ),
        ),
      },
    },
  },
});
