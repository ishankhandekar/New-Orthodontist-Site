import { validatePreviewUrl } from '@sanity/preview-url-secret';
import type { APIRoute } from 'astro';
import { SANITY_VIEWER_TOKEN } from 'astro:env/server';
import { setDraftCookie } from '../lib/draftMode';
import { client } from '../lib/sanity';

// Preview Worker only (added in astro.config.mjs). The Studio opens this with a one-time secret;
// if Sanity confirms it, draft mode turns on and the browser goes on to the page being previewed.
export const GET: APIRoute = async ({ request, cookies, redirect }) => {
	if (!SANITY_VIEWER_TOKEN) return new Response('Preview is not configured.', { status: 500 });
	const { isValid, redirectTo = '/' } = await validatePreviewUrl(
		client.withConfig({ token: SANITY_VIEWER_TOKEN }),
		request.url,
	);
	if (!isValid) return new Response('Invalid or expired preview link.', { status: 401 });
	await setDraftCookie(cookies);
	return redirect(redirectTo, 307);
};
