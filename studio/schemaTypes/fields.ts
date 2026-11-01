import { defineArrayMember, defineField } from 'sanity';

/*
	Building blocks shared by the page schemas. Every text field is required (so a page can't be
	published with a blank section), and length limits warn rather than block, since they're only a
	guide to what fits the layout.
*/
type Field = ReturnType<typeof defineField>;

// A required one-line field.
export const line = (name: string, title: string, max: number, description?: string) =>
	defineField({
		name,
		title,
		type: 'string',
		description,
		validation: (rule) => [rule.required(), rule.max(max).warning(`Over ${max} characters may not fit the layout.`)],
	});

// A required paragraph field.
export const paragraph = (name: string, title: string, max: number, description?: string) =>
	defineField({
		name,
		title,
		type: 'text',
		rows: 3,
		description,
		validation: (rule) => [rule.required(), rule.max(max).warning(`Over ${max} characters may not fit the layout.`)],
	});

// A collapsible group of fields for one section of a page.
export const section = (name: string, title: string, fields: Field[]) =>
	defineField({ name, title, type: 'object', options: { collapsible: true, collapsed: true }, fields });

// A list of short items, each a single line of text.
export const lineList = (name: string, title: string, max: number, description?: string) =>
	defineField({
		name,
		title,
		type: 'array',
		description,
		of: [defineArrayMember({ type: 'string', validation: (rule) => rule.max(max).warning(`Over ${max} characters may not fit.`) })],
		validation: (rule) => rule.required().min(1),
	});

// A list of objects, previewed in the Studio by the given title and subtitle fields.
export const objectList = (
	name: string,
	title: string,
	itemName: string,
	fields: Field[],
	preview: { title: string; subtitle?: string },
	description?: string,
) =>
	defineField({
		name,
		title,
		type: 'array',
		description,
		of: [defineArrayMember({ name: itemName, type: 'object', fields, preview: { select: preview } })],
		validation: (rule) => rule.required().min(1),
	});

// Common lists, named to match the site's templates.
export const facts = (description = 'The short label/value pairs under the page headline.') =>
	objectList('facts', 'Quick facts', 'fact', [line('label', 'Label', 24), line('value', 'Value', 40)], { title: 'label', subtitle: 'value' }, description);

export const titledItems = (name: string, title: string, max = 220) =>
	objectList(name, title, 'item', [line('title', 'Title', 50), paragraph('body', 'Text', max)], { title: 'title', subtitle: 'body' });

export const faqs = (name = 'faqs', title = 'Questions') =>
	objectList(name, title, 'faqItem', [line('q', 'Question', 110), paragraph('a', 'Answer', 500)], { title: 'q', subtitle: 'a' });

// Search-engine title and description, shown in Google results and link previews.
export const seo = () =>
	defineField({
		name: 'seo',
		title: 'Search and link previews',
		type: 'object',
		options: { collapsible: true, collapsed: true },
		fields: [
			line('title', 'Page title', 70, 'Shown in the browser tab and as the Google result headline.'),
			paragraph('description', 'Description', 160, 'The snippet under the title in Google, about 150 characters.'),
		],
	});
