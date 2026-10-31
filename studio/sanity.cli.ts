import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './project';

export default defineCliConfig({
	api: { projectId, dataset },
	// Where `npm run deploy` publishes the Studio: https://<studioHost>.sanity.studio
	studioHost: 'torreyhillsortho',
	// The deployed Studio's ID, so redeploys update it instead of asking which app to use.
	deployment: { appId: 'ffnyqjf3obpyriscnd5d0vof' },
});
