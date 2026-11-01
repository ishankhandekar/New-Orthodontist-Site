import { defineField, defineType } from 'sanity';
import { faqs, facts, line, objectList, paragraph, seo, titledItems } from './fields';

/*
	The "care for every age" pages (Kids, Teens, Adults), which share one layout. Photos stay in the
	site's code.
*/
const treatmentPages = [
	{ title: 'Invisalign', value: '/treatments/invisalign' },
	{ title: 'Braces', value: '/treatments/braces' },
	{ title: 'Jaw Orthopedics', value: '/treatments/jaw-orthopedics' },
	{ title: 'Retainers', value: '/treatments/retainers' },
];

export const agePage = defineType({
	name: 'agePage',
	title: 'Age page',
	type: 'document',
	fields: [
		line('name', 'Age group', 20, 'Shown above the headline.'),
		line('headline', 'Headline', 80),
		paragraph('intro', 'Intro', 260),
		facts(),
		line('signsHeading', 'Signs heading', 60),
		titledItems('signs', 'Signs it’s time'),
		line('treatmentsHeading', 'Treatments heading', 60),
		objectList(
			'treatments',
			'Treatments for this age',
			'treatmentLink',
			[
				line('name', 'Treatment', 30),
				defineField({
					name: 'href',
					title: 'Links to',
					type: 'string',
					options: { list: treatmentPages },
					validation: (rule) => rule.required(),
				}),
				paragraph('body', 'Text', 160),
			],
			{ title: 'name', subtitle: 'body' },
		),
		line('stepsHeading', 'Steps heading', 60),
		titledItems('steps', 'What to expect'),
		defineField({
			name: 'quote',
			title: 'Quote from Dr. Lee (optional)',
			type: 'text',
			rows: 3,
			description: 'Leave empty to hide the quote section.',
			validation: (rule) => rule.max(240).warning('Over 240 characters may not fit.'),
		}),
		line('faqHeading', 'Questions heading', 60),
		faqs(),
		line('closing', 'Closing heading', 70),
		paragraph('closingText', 'Closing text', 200),
		seo(),
	],
	preview: { select: { title: 'name' } },
});
