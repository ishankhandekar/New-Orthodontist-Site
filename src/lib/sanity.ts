import { createClient } from '@sanity/client';
import { SANITY_VIEWER_TOKEN } from 'astro:env/server';

/*
	Site text edited in Sanity Studio (the studio/ folder). The public site fetches it once while it
	builds, so it's plain HTML and visitors never contact Sanity. The preview Worker fetches on each
	request and, in draft mode, reads unpublished drafts for the Studio's Presentation tool.
	Only public marketing text lives in Sanity; the consultation form and anything patient-related
	never touch it. The project ID and dataset are public and must match studio/project.ts.
*/
const projectId = 'sqa4gdwo';
const dataset = 'production';
const studioUrl = 'https://torreyhillsortho.sanity.studio';

export const client = createClient({
	projectId,
	dataset,
	apiVersion: '2026-10-01',
	// Always read the latest published text, never drafts or a cached copy.
	useCdn: false,
	perspective: 'published',
});

interface FetchOptions {
	// True only on the preview Worker, after the Studio has turned draft mode on.
	draftMode?: boolean;
	// Hide invisible field markers in the text so the Studio can outline and link each field. Only
	// for text that's shown as text: never values used in links, styles or search-engine data.
	stega?: boolean;
}

// Fetches one of the Studio's single documents. A missing document fails the build, so the live
// site keeps its last good version instead of publishing a page with blank sections.
export async function fetchSingleton<T>(
	id: 'homePage' | 'practiceSettings',
	{ draftMode = false, stega = false }: FetchOptions = {},
): Promise<T> {
	const source =
		draftMode && SANITY_VIEWER_TOKEN
			? client.withConfig({
					token: SANITY_VIEWER_TOKEN,
					perspective: 'drafts',
					stega: stega && {
						enabled: true,
						studioUrl,
						// Review avatar colors are used in a style attribute, where markers would break them.
						filter: (props) => (props.sourcePath.at(-1) === 'color' ? false : props.filterDefault(props)),
					},
				})
			: client;
	const doc = await source.fetch<T | null>('*[_id == $id][0]', { id });
	if (!doc) {
		throw new Error(`Sanity has no published "${id}" document. Publish it in the Studio, or run the seed script.`);
	}
	return doc;
}

// The shapes below mirror studio/schemaTypes. Every field is required there, so Studio won't
// publish a document with any of them missing.
export interface PracticeSettings {
	phone: string;
	email: string;
	address: { street: string; city: string; region: string; postalCode: string };
	hours: {
		days: string;
		time: string;
		rotational?: boolean;
		closed?: boolean;
		openDays?: string[];
		opens?: string;
		closes?: string;
	}[];
	socials?: { name: string; url: string }[];
}

interface Card {
	title: string;
	text: string;
}

export interface HomePage {
	hero: { eyebrow: string; headlineLines: string[]; intro: string; location: string; byline: string };
	affiliations: { label: string };
	about: { photoCaption: string; statementLead: string; statementRest: string; supportingLine: string };
	gallery: { headline: string; intro: string };
	treatments: { headline: string; intro: string; braces: Card; invisalign: Card; jaw: Card };
	financing: { headline: string; body: string; facts: { _key: string; label: string; value: string }[] };
	firstVisit: { heading: string; steps: { _key: string; title: string; body: string }[] };
	reviews: {
		items: { _key: string; name: string; rating: number; quote: string; color: string }[];
		googleRating: number;
		googleReviewCount: string;
	};
	faq: { headline: string; items: { _key: string; question: string; answer: string }[] };
	office: { headline: string; note: string };
}
