import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { dataset, projectId } from './project';
import { schemaTypes, singletonTypes } from './schemaTypes';
import { structure } from './structure';

export default defineConfig({
	name: 'default',
	title: 'Torrey Hills Orthodontics',
	projectId,
	dataset,
	plugins: [structureTool({ structure })],
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
