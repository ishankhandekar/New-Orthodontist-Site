import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './project';

export default defineCliConfig({
	api: { projectId, dataset },
	// Where `npm run deploy` publishes the Studio: https://<studioHost>.sanity.studio
	studioHost: 'torreyhillsortho',
});
