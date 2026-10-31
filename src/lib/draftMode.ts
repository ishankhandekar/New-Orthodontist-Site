import type { AstroCookies } from 'astro';
import { SANITY_VIEWER_TOKEN } from 'astro:env/server';

/*
	Draft mode for the preview Worker. The Studio's Presentation tool opens /api/draft-mode/enable
	with a one-time secret; once Sanity confirms it, this cookie marks the browser as allowed to see
	drafts. The cookie holds an expiry time signed with the (server-only) viewer token, so it can't
	be forged or reused after it expires.
*/
export const draftCookie = 'sanity-draft-mode';
const maxAgeSeconds = 8 * 60 * 60;

const encoder = new TextEncoder();
const toBase64Url = (bytes: ArrayBuffer) =>
	btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function sign(value: string, secret: string) {
	const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
	return toBase64Url(await crypto.subtle.sign('HMAC', key, encoder.encode(value)));
}

export async function setDraftCookie(cookies: AstroCookies) {
	if (!SANITY_VIEWER_TOKEN) throw new Error('SANITY_VIEWER_TOKEN is not set');
	const expires = String(Date.now() + maxAgeSeconds * 1000);
	cookies.set(draftCookie, `${expires}.${await sign(expires, SANITY_VIEWER_TOKEN)}`, {
		path: '/',
		maxAge: maxAgeSeconds,
		httpOnly: true,
		secure: true,
		// The preview runs inside the Studio's frame on another site, so the cookie must be allowed
		// there (SameSite=None) and kept to that frame (Partitioned) so browsers don't block it.
		sameSite: 'none',
		partitioned: true,
	});
}

export function clearDraftCookie(cookies: AstroCookies) {
	cookies.delete(draftCookie, { path: '/', httpOnly: true, secure: true, sameSite: 'none', partitioned: true });
}

export async function hasValidDraftCookie(cookies: AstroCookies) {
	const value = cookies.get(draftCookie)?.value;
	if (!value || !SANITY_VIEWER_TOKEN) return false;
	const [expires, signature] = value.split('.');
	if (!expires || !signature || Number(expires) < Date.now()) return false;
	return signature === (await sign(expires, SANITY_VIEWER_TOKEN));
}
