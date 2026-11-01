import { createClient } from '@sanity/client';
import { SANITY_VIEWER_TOKEN } from 'astro:env/server';
import type { ComponentProps } from 'astro/types';
import type AgePage from '../components/AgePage.astro';
import type TreatmentPage from '../components/TreatmentPage.astro';

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

// Fields whose text is used outside the visible page, where the hidden markers would break them:
// search titles and descriptions (in <head>), link targets, anchor IDs, and review avatar colors.
const keepClean = (path: readonly unknown[]) =>
	path[0] === 'seo' || ['href', 'id', 'color'].includes(String(path.at(-1)));

// Fetches one of the Studio's documents by ID (each page has a fixed one). A missing document fails
// the build, so the live site keeps its last good version instead of publishing blank sections.
export async function fetchDocument<T>(id: string, { draftMode = false, stega = false }: FetchOptions = {}): Promise<T> {
	const source =
		draftMode && SANITY_VIEWER_TOKEN
			? client.withConfig({
					token: SANITY_VIEWER_TOKEN,
					perspective: 'drafts',
					stega: stega && {
						enabled: true,
						studioUrl,
						filter: (props) => (keepClean(props.sourcePath) ? false : props.filterDefault(props)),
					},
				})
			: client;
	const doc = await source.fetch<T | null>('*[_id == $id][0]', { id });
	if (!doc) {
		throw new Error(`Sanity has no published "${id}" document. Publish it in the Studio, or run the seed script.`);
	}
	return doc;
}

// Search title and description, which every page document has.
export interface Seo {
	seo: { title: string; description: string };
}

// The page templates' props, minus what stays in code (photos, alt text, gallery category).
type TemplateText<P, CodeOnly extends keyof P> = Omit<P, CodeOnly> & Seo;
export type TreatmentPageContent = TemplateText<
	ComponentProps<typeof TreatmentPage>,
	'image' | 'imageAlt' | 'imageFocus' | 'results'
>;
export type AgePageContent = TemplateText<ComponentProps<typeof AgePage>, 'image' | 'imageAlt' | 'imageFocus'>;

// The patient info pages. These mirror studio/schemaTypes/patientInfoPages.ts.
type Fact = { label: string; value: string };
type Titled = { title: string; body: string };
type Faq = { q: string; a: string };
type Closing = { closing: string; closingText: string };

export interface FirstVisitPage extends Seo, Closing {
	headline: string;
	intro: string;
	facts: Fact[];
	itineraryHeading: string;
	itinerary: { time: string; title: string; body: string }[];
	checklistHeading: string;
	checklistIntro: string;
	checklist: { item: string; note: string }[];
	insideHeading: string;
	insideCaptions: string[];
	leaveHeading: string;
	leaveIntro: string;
	takeaways: Titled[];
	childHeading: string;
	childIntro: string;
	childNotes: string[];
	hereHeading: string;
	details: Fact[];
	faqHeading: string;
	faqs: Faq[];
}

export interface FinancingPage extends Seo, Closing {
	headlineLines: string[];
	intro: string;
	promises: Titled[];
	includedHeading: string;
	includedIntro: string;
	included: { item: string; value: string }[];
	surpriseLabel: string;
	surpriseValue: string;
	notIncluded: string;
	calcHeading: string;
	calcIntro: string;
	calcDisclaimer: string;
	insuranceHeading: string;
	insuranceIntro: string;
	insuranceSteps: { label: string; title: string; body: string }[];
	termsHeading: string;
	glossary: { term: string; def: string }[];
	payHeading: string;
	waysToPay: Fact[];
	faqHeading: string;
	faqs: Faq[];
}

export interface FaqPage extends Seo, Closing {
	headline: string;
	intro: string;
	groups: { id: string; title: string; faqs: Faq[] }[];
}

export interface LocationPage extends Seo, Closing {
	headline: string;
	details: Fact[];
}

// The About pages. These mirror studio/schemaTypes/aboutPages.ts.
export interface DrLeePage extends Seo, Closing {
	name: string;
	credentialsLine: string;
	intro: string;
	facts: Fact[];
	approachHeading: string;
	approachIntro: string;
	approach: Titled[];
	educationHeading: string;
	timeline: { year: string; title: string; place: string }[];
	credentialsHeading: string;
	credentials: { org: string; role: string; since: string }[];
	outsideHeading: string;
	outsideText: string;
}

export interface TeamPage extends Seo, Closing {
	headline: string;
	intro: string;
	members: { name: string; role: string; since: string; blurb: string[]; link?: { label: string; href: string } }[];
}

export interface OfficePage extends Seo, Closing {
	headline: string;
	intro: string;
	spaceHeading: string;
	spaces: { name: string; body: string }[];
	techHeading: string;
	techIntro: string;
	tech: { name: string; model: string; before: string; now: string }[];
	comfortHeading: string;
	comfort: Fact[];
	sterilizationNote: string;
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
