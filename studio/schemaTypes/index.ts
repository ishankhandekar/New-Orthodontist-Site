import { drLeePage, officePage, teamPage } from './aboutPages';
import { agePage } from './agePage';
import { homePage } from './homePage';
import { faqPage, financingPage, firstVisitPage, locationPage } from './patientInfoPages';
import { practiceSettings } from './practiceSettings';
import { treatmentPage } from './treatmentPage';

export const schemaTypes = [
	homePage,
	treatmentPage,
	agePage,
	firstVisitPage,
	financingPage,
	faqPage,
	locationPage,
	drLeePage,
	teamPage,
	officePage,
	practiceSettings,
];
// Every document type here is a fixed page: opened from the sidebar, never created, duplicated or
// deleted in the Studio.
export const singletonTypes = new Set<string>(schemaTypes.map((t) => t.name));
