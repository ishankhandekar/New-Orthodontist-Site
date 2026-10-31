import type { APIRoute } from 'astro';
import { clearDraftCookie } from '../lib/draftMode';

// Preview Worker only (added in astro.config.mjs). Turns draft mode off, back to published text.
export const GET: APIRoute = ({ cookies, redirect }) => {
	clearDraftCookie(cookies);
	return redirect('/', 307);
};
