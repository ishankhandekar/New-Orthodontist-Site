import { defineArrayMember, defineField, defineType } from 'sanity';
import { line, paragraph, section } from './fields';

/*
	The homepage's text, one group per section in page order. Photos, logos, button labels and the
	small section labels stay in the site's code. Public marketing text only: never put patient
	information in Sanity.
*/
const card = (name: string, title: string) =>
	defineField({
		name,
		title,
		type: 'object',
		fields: [line('title', 'Title', 30), paragraph('text', 'Text', 110)],
	});

export const homePage = defineType({
	name: 'homePage',
	title: 'Homepage',
	type: 'document',
	fields: [
		section('hero', 'Hero', [
			line('eyebrow', 'Small line above the headline', 40),
			defineField({
				name: 'headlineLines',
				title: 'Headline',
				type: 'array',
				description: 'One item per line on large screens. On phones the lines flow together.',
				of: [defineArrayMember({ type: 'string' })],
				validation: (rule) => rule.required().min(1).max(4),
			}),
			paragraph('intro', 'Text beside the button', 140),
			line('location', 'Bottom strip: location', 30),
			line('byline', 'Bottom strip: doctor', 40, 'Hidden on phones.'),
		]),
		section('affiliations', 'Logo strip', [line('label', 'Label above the logos', 40)]),
		section('about', 'About', [
			line('photoCaption', 'Caption on Dr. Lee’s photo', 50),
			paragraph('statementLead', 'Statement: opening (dark text)', 120),
			paragraph('statementRest', 'Statement: rest (grey text)', 260),
			line('supportingLine', 'Line above the button', 70),
		]),
		section('gallery', 'Smile gallery preview', [
			line('headline', 'Headline', 60),
			paragraph('intro', 'Intro', 200),
		]),
		section('treatments', 'Treatments', [
			line('headline', 'Headline', 60),
			paragraph('intro', 'Intro', 160),
			card('braces', 'Braces card'),
			card('invisalign', 'Invisalign card'),
			card('jaw', 'Jaw orthopedics card'),
		]),
		section('financing', 'Investment', [
			line('headline', 'Headline', 60),
			paragraph('body', 'Paragraph', 320),
			defineField({
				name: 'facts',
				title: 'Two short facts',
				type: 'array',
				of: [
					defineArrayMember({
						name: 'fact',
						type: 'object',
						fields: [line('label', 'Label', 20), line('value', 'Value', 40)],
						preview: { select: { title: 'label', subtitle: 'value' } },
					}),
				],
				validation: (rule) => rule.required().length(2),
			}),
		]),
		section('firstVisit', 'Your first visit', [
			line('heading', 'Small heading', 30),
			defineField({
				name: 'steps',
				title: 'Steps',
				type: 'array',
				of: [
					defineArrayMember({
						name: 'step',
						type: 'object',
						fields: [line('title', 'Title', 30), paragraph('body', 'Text', 160)],
						preview: { select: { title: 'title', subtitle: 'body' } },
					}),
				],
				validation: (rule) => rule.required().min(1).max(4),
			}),
		]),
		section('reviews', 'Reviews', [
			defineField({
				name: 'items',
				title: 'Reviews',
				type: 'array',
				description:
					'Real Google reviews only, quoted word for word. Shorten with "…" where text is cut, never reword. Use first name and last initial, and the reviewer’s actual star rating.',
				of: [
					defineArrayMember({
						name: 'review',
						type: 'object',
						fields: [
							line('name', 'Name', 30, 'First name and last initial, e.g. Shannon M.'),
							defineField({
								name: 'rating',
								title: 'Stars',
								type: 'number',
								options: { list: [1, 2, 3, 4, 5] },
								validation: (rule) => rule.required().integer().min(1).max(5),
							}),
							paragraph('quote', 'Quote', 180),
							defineField({
								name: 'color',
								title: 'Avatar color',
								type: 'string',
								description: 'A hex color for the initial circle, e.g. #1e88e5.',
								validation: (rule) => rule.required().regex(/^#[0-9a-fA-F]{6}$/, { name: 'hex color' }),
							}),
						],
						preview: { select: { title: 'name', subtitle: 'quote' } },
					}),
				],
				validation: (rule) => rule.required().min(1),
			}),
			defineField({
				name: 'googleRating',
				title: 'Google rating',
				type: 'number',
				description: 'Exactly as shown on the Google listing, e.g. 4.5.',
				validation: (rule) => rule.required().min(1).max(5).precision(1),
			}),
			line('googleReviewCount', 'Google review count', 10, 'Exactly as shown on the Google listing, e.g. 40.'),
		]),
		section('faq', 'FAQ', [
			line('headline', 'Headline', 60),
			defineField({
				name: 'items',
				title: 'Questions',
				type: 'array',
				of: [
					defineArrayMember({
						name: 'faqItem',
						type: 'object',
						fields: [line('question', 'Question', 90), paragraph('answer', 'Answer', 400)],
						preview: { select: { title: 'question', subtitle: 'answer' } },
					}),
				],
				validation: (rule) => rule.required().min(1),
			}),
		]),
		section('office', 'Office', [
			line('headline', 'Headline', 60),
			line('note', 'Note under the headline', 80),
		]),
	],
	preview: { prepare: () => ({ title: 'Homepage' }) },
});
