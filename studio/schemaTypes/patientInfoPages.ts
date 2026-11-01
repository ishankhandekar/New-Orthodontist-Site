import { defineField, defineType } from 'sanity';
import { faqs, facts, line, lineList, objectList, paragraph, seo, titledItems } from './fields';

/*
	The patient info pages, each with its own layout. Photos, buttons, the payment calculator's
	numbers and the practice's address, phone and hours (from Practice info) stay out of these.
*/
const closing = () => [line('closing', 'Closing heading', 70), paragraph('closingText', 'Closing text', 200)];
const labelValueList = (name: string, title: string, description?: string) =>
	objectList(name, title, 'fact', [line('label', 'Label', 24), paragraph('value', 'Text', 160)], { title: 'label', subtitle: 'value' }, description);

export const firstVisitPage = defineType({
	name: 'firstVisitPage',
	title: 'First visit',
	type: 'document',
	fields: [
		line('headline', 'Headline', 80),
		paragraph('intro', 'Intro', 220),
		facts(),
		line('itineraryHeading', 'Itinerary heading', 60),
		objectList(
			'itinerary',
			'The visit, minute by minute',
			'stop',
			[line('time', 'Time', 8, 'Minutes into the visit, e.g. 0:20.'), line('title', 'Title', 40), paragraph('body', 'Text', 200)],
			{ title: 'title', subtitle: 'time' },
			'Each step has a photo in the site’s code, matched in order. A new step reuses an existing photo until new ones are added.',
		),
		line('checklistHeading', 'Checklist heading', 60),
		paragraph('checklistIntro', 'Checklist intro', 200),
		objectList('checklist', 'What to bring', 'checklistItem', [line('item', 'Item', 50), line('note', 'Note', 80)], { title: 'item', subtitle: 'note' }),
		line('insideHeading', 'Photo section heading', 60),
		defineField({
			...lineList('insideCaptions', 'Photo captions', 40, 'One caption per photo, in order (the photos are in the site’s code).'),
			validation: (rule) => rule.required().length(3),
		}),
		line('leaveHeading', '"Leave with" heading', 60),
		paragraph('leaveIntro', '"Leave with" intro', 160),
		titledItems('takeaways', 'What you’ll leave with'),
		line('childHeading', 'Kids section heading', 60),
		paragraph('childIntro', 'Kids section intro', 200),
		lineList('childNotes', 'Reassurances for parents', 80),
		line('hereHeading', '"Getting here" heading', 60),
		labelValueList('details', 'Getting here', 'The address and phone number come from Practice info.'),
		line('faqHeading', 'Questions heading', 60),
		faqs(),
		...closing(),
		seo(),
	],
	preview: { prepare: () => ({ title: 'First visit' }) },
});

export const financingPage = defineType({
	name: 'financingPage',
	title: 'Financial & insurance',
	type: 'document',
	fields: [
		defineField({
			...lineList('headlineLines', 'Headline', 40, 'One item per line.'),
			validation: (rule) => rule.required().min(1).max(3),
		}),
		paragraph('intro', 'Intro', 220),
		titledItems('promises', 'Promises'),
		line('includedHeading', '"Quote includes" heading', 60),
		paragraph('includedIntro', '"Quote includes" intro', 200),
		objectList('included', 'What the quote includes', 'receiptLine', [line('item', 'Item', 50), line('value', 'Cost', 20)], { title: 'item', subtitle: 'value' }),
		line('surpriseLabel', 'Total line label', 30),
		line('surpriseValue', 'Total line amount', 10),
		paragraph('notIncluded', 'Not included note', 260),
		line('calcHeading', 'Calculator heading', 70),
		paragraph('calcIntro', 'Calculator intro', 200),
		paragraph('calcDisclaimer', 'Calculator fine print', 220, 'The calculator’s numbers and plan lengths are set in the site’s code.'),
		line('insuranceHeading', 'Insurance heading', 60),
		paragraph('insuranceIntro', 'Insurance intro', 220),
		objectList(
			'insuranceSteps',
			'How insurance works',
			'insuranceStep',
			[line('label', 'Small label', 24), line('title', 'Title', 40), paragraph('body', 'Text', 200)],
			{ title: 'title', subtitle: 'label' },
		),
		line('termsHeading', 'Glossary heading', 60),
		objectList('glossary', 'Insurance terms', 'term', [line('term', 'Term', 40), paragraph('def', 'Meaning', 200)], { title: 'term', subtitle: 'def' }),
		line('payHeading', '"Ways to pay" heading', 60),
		objectList('waysToPay', 'Ways to pay', 'fact', [line('label', 'Label', 24), line('value', 'Value', 40)], { title: 'label', subtitle: 'value' }),
		line('faqHeading', 'Questions heading', 60),
		faqs(),
		...closing(),
		seo(),
	],
	preview: { prepare: () => ({ title: 'Financial & insurance' }) },
});

export const faqPage = defineType({
	name: 'faqPage',
	title: 'FAQ',
	type: 'document',
	fields: [
		line('headline', 'Headline', 60),
		paragraph('intro', 'Intro', 220, 'Type {count} for the number of questions and {phone} for the office phone number (as a link).'),
		objectList(
			'groups',
			'Topics',
			'faqGroup',
			[
				defineField({
					name: 'id',
					title: 'Link name',
					type: 'string',
					readOnly: true,
					description: 'Used in links to this topic; set by the developer.',
				}),
				line('title', 'Topic', 40),
				faqs('faqs', 'Questions (type {phone} for the office phone number)'),
			],
			{ title: 'title' },
		),
		...closing(),
		seo(),
	],
	preview: { prepare: () => ({ title: 'FAQ' }) },
});

export const locationPage = defineType({
	name: 'locationPage',
	title: 'Office hours & location',
	type: 'document',
	fields: [
		line('headline', 'Headline', 60),
		labelValueList('details', 'Getting here', 'The address, phone, email and hours come from Practice info.'),
		...closing(),
		seo(),
	],
	preview: { prepare: () => ({ title: 'Office hours & location' }) },
});
