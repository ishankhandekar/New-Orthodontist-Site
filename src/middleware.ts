import { defineMiddleware } from 'astro:middleware';
import { hasValidDraftCookie } from './lib/draftMode';

// Marks each preview request as draft mode or not. Prerendered pages (the whole public site) are
// built ahead of time with no visitor, so they always use published text.
export const onRequest = defineMiddleware(async (context, next) => {
	context.locals.draftMode = false;
	if (context.isPrerendered) return next();
	context.locals.draftMode = await hasValidDraftCookie(context.cookies);
	const response = await next();
	// Only the preview Worker renders on request; keep it out of search results.
	response.headers.set('X-Robots-Tag', 'noindex, nofollow');
	return response;
});
