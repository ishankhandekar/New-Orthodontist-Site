import { defineConfig } from 'sanity';
import { defineLocations, presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { allPages } from './pages';
import { dataset, previewUrl, projectId } from './project';
import { schemaTypes, singletonTypes } from './schemaTypes';
import { structure } from './structure';

// For the Preview tab: each page's document, matched by route (the site adds a trailing slash).
const mainDocuments = allPages.map((p) => ({
	route: p.route === '/' ? '/' : [p.route, `${p.route}/`],
	filter: '_id == $id',
	params: { id: p.id },
}));
// ...and, for each document type, the page(s) a document appears on.
const pageFor = (id: string) => allPages.find((p) => p.id === id.replace(/^drafts\./, ''));
const pageTypes = [...new Set(allPages.map((p) => p.type))];
const locations = Object.fromEntries(
	pageTypes.map((type) => [
		type,
		defineLocations({
			select: { id: '_id' },
			resolve: (doc) => {
				const page = doc?.id ? pageFor(doc.id) : undefined;
				return page ? { locations: [{ title: page.title, href: page.route === '/' ? '/' : `${page.route}/` }] } : null;
			},
		}),
	]),
);

export default defineConfig({
	name: 'default',
	title: 'Torrey Hills Orthodontics',
	projectId,
	dataset,
	plugins: [
		structureTool({ structure }),
		// The live preview: the site's preview Worker shown beside the fields, with drafts and
		// click-to-edit outlines. Draft mode is unlocked by a one-time secret checked on the Worker.
		presentationTool({
			title: 'Preview',
			previewUrl: {
				initial: previewUrl,
				// No shareable preview links: only people signed in to the Studio can see drafts.
				previewMode: { enable: '/api/draft-mode/enable', shareAccess: false },
			},
			resolve: {
				mainDocuments,
				locations: {
					...locations,
					// Practice info appears on every page; offer the two where it's most visible.
					practiceSettings: defineLocations({
						locations: [
							{ title: 'Office hours & location', href: '/location/' },
							{ title: 'Homepage', href: '/' },
						],
					}),
				},
			},
		}),
	],
	schema: {
		types: schemaTypes,
		// Singletons can't be created from the "new document" menu; there is only ever one of each.
		templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
	},
	document: {
		// ...nor duplicated or deleted. Publishing, discarding a draft and restoring history still work.
		actions: (actions, { schemaType }) =>
			singletonTypes.has(schemaType)
				? actions.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
				: actions,
	},
});
