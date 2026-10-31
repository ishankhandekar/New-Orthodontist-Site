import { homePage } from './homePage';
import { practiceSettings } from './practiceSettings';

export const schemaTypes = [homePage, practiceSettings];
// Document types that exist exactly once, opened straight from the sidebar.
export const singletonTypes = new Set(['homePage', 'practiceSettings']);
