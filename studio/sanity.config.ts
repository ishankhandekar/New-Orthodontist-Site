import { defineConfig } from 'sanity';
import { defineLocations, presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { dataset, previewUrl, projectId } from './project';
import { schemaTypes, singletonTypes } from './schemaTypes';
import { structure } from './structure';

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
				// Which document to open when a page is shown in the preview...
				mainDocuments: [
					{ route: '/', type: 'homePage' },
					{ route: '/location', type: 'practiceSettings' },
				],
				// ...and which pages to offer when a document is open.
				locations: {
					homePage: defineLocations({ locations: [{ title: 'Homepage', href: '/' }] }),
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
