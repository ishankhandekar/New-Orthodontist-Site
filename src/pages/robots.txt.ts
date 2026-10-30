import type { APIRoute } from 'astro';

/*
	robots.txt follows the same launch switch as the noindex meta tag in Layout: while the site is a
	preview (PUBLIC_INDEXABLE isn't "true"), search engines are asked to stay out entirely. Once live,
	it allows everything and points to the sitemap.
	Note: crawlers only read robots.txt at the domain root, so this matters once the site is on its own
	domain (on the GitHub Pages preview, the noindex tag does the work).
*/
export const GET: APIRoute = ({ site }) => {
	const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
	const sitemap = site ? new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site).href : null;
	const body = indexable
		? `User-agent: *\nAllow: /\n${sitemap ? `\nSitemap: ${sitemap}\n` : ''}`
		: 'User-agent: *\nDisallow: /\n';
	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
