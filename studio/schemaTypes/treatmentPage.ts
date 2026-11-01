import { defineField, defineType } from 'sanity';
import { faqs, facts, line, lineList, objectList, paragraph, section, seo, titledItems } from './fields';

/*
	The treatment pages (Invisalign, Braces, Jaw Orthopedics, Retainers), which share one layout.
	Photos and the gallery cases shown on each page stay in the site's code.
*/
export const treatmentPage = defineType({
	name: 'treatmentPage',
	title: 'Treatment page',
	type: 'document',
	fields: [
		line('name', 'Treatment name', 30, 'Shown above the headline.'),
		line('headline', 'Headline', 80),
		paragraph('intro', 'Intro', 260),
		facts(),
		section('headings', 'Section headings', [
			line('fit', '"Right for you?" heading', 60),
			line('fitLabel', 'Good-fit list label', 40),
			line('notIdealLabel', 'Not-ideal list label', 60),
			line('steps', 'Steps heading', 60),
			line('day', 'Day-to-day heading', 60),
			line('results', 'Gallery heading', 60),
			line('faq', 'Questions heading', 60),
			line('closing', 'Closing heading', 70),
			paragraph('closingText', 'Closing text', 200),
		]),
		lineList('goodFor', 'A great fit if…', 90),
		lineList('notIdeal', 'Something else may suit you better if…', 110),
		titledItems('steps', 'How it works, step by step'),
		defineField({
			name: 'compare',
			title: 'Comparison table (optional)',
			type: 'object',
			options: { collapsible: true, collapsed: true },
			fields: [
				line('heading', 'Heading', 60),
				lineList('columns', 'Column headings', 30, 'Usually two, e.g. "Invisalign" and "Braces".'),
				objectList(
					'rows',
					'Rows',
					'row',
					[line('label', 'Row label', 24), lineList('values', 'One value per column', 60)],
					{ title: 'label' },
				),
			],
		}),
		titledItems('dayToDay', 'Day to day'),
		paragraph('cost', 'What it costs', 420),
		faqs(),
		seo(),
	],
	preview: { select: { title: 'name' } },
});
