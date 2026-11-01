import { defineField, defineType } from 'sanity';
import { facts, line, lineList, objectList, paragraph, seo, titledItems } from './fields';

/*
	The About pages. Text in [square brackets] is a placeholder and shows highlighted on the site until
	it's replaced: these pages describe real people, so every fact must come from them. Photos stay in
	the site's code.
*/
const placeholderNote = 'Replace any [bracketed placeholder] with the real detail; it shows highlighted until then.';
const closing = () => [line('closing', 'Closing heading', 70), paragraph('closingText', 'Closing text', 200)];

export const drLeePage = defineType({
	name: 'drLeePage',
	title: 'Meet Dr. Lee',
	type: 'document',
	description: placeholderNote,
	fields: [
		line('name', 'Name', 40),
		line('credentialsLine', 'Title and degrees', 60, 'e.g. Orthodontist, DDS, MS'),
		paragraph('intro', 'Intro', 260),
		facts(),
		line('approachHeading', '"Approach" heading', 60),
		paragraph('approachIntro', '"Approach" intro, in her words', 400),
		titledItems('approach', 'Her approach'),
		line('educationHeading', 'Education heading', 60),
		objectList(
			'timeline',
			'Education and training',
			'milestone',
			[line('year', 'Year', 12), line('title', 'Milestone', 40), line('place', 'Where / details', 80)],
			{ title: 'title', subtitle: 'year' },
		),
		line('credentialsHeading', 'Credentials heading', 60),
		objectList(
			'credentials',
			'Certifications and memberships',
			'credential',
			[line('org', 'Organization', 60), line('role', 'Status', 60), line('since', 'Since', 12)],
			{ title: 'org', subtitle: 'role' },
		),
		line('outsideHeading', '"Outside the office" heading', 60),
		paragraph('outsideText', '"Outside the office" paragraph', 500),
		...closing(),
		seo(),
	],
	preview: { prepare: () => ({ title: 'Meet Dr. Lee' }) },
});

export const teamPage = defineType({
	name: 'teamPage',
	title: 'Our team',
	type: 'document',
	description: placeholderNote,
	fields: [
		line('headline', 'Headline', 60),
		paragraph('intro', 'Intro', 220),
		objectList(
			'members',
			'Team members',
			'member',
			[
				line('name', 'Name', 40),
				line('role', 'Role', 40),
				line('since', 'With the practice since', 12),
				lineList('blurb', 'Paragraphs', 400),
				defineField({
					name: 'link',
					title: 'Link (optional)',
					type: 'object',
					options: { collapsible: true, collapsed: true },
					fields: [
						defineField({ name: 'label', title: 'Link text', type: 'string' }),
						defineField({
							name: 'href',
							title: 'Links to',
							type: 'string',
							options: { list: [{ title: 'Meet Dr. Lee', value: '/about/dr-lee' }] },
						}),
					],
				}),
			],
			{ title: 'name', subtitle: 'role' },
			'Each person has a photo in the site’s code, matched in order. A new person reuses an existing photo until theirs is added.',
		),
		...closing(),
		seo(),
	],
	preview: { prepare: () => ({ title: 'Our team' }) },
});

export const officePage = defineType({
	name: 'officePage',
	title: 'Office & technology',
	type: 'document',
	description: placeholderNote,
	fields: [
		line('headline', 'Headline', 60),
		paragraph('intro', 'Intro', 220),
		line('spaceHeading', '"Space" heading', 60),
		objectList(
			'spaces',
			'Rooms',
			'space',
			[line('name', 'Room', 30), paragraph('body', 'Text', 140)],
			{ title: 'name', subtitle: 'body' },
			'Each room has a photo in the site’s code, matched in order.',
		),
		line('techHeading', 'Technology heading', 70),
		paragraph('techIntro', 'Technology intro', 200),
		objectList(
			'tech',
			'Technology',
			'tool',
			[
				line('name', 'Technology', 40),
				line('model', 'Model or product', 50),
				paragraph('before', 'The old way', 160),
				paragraph('now', 'With us', 200),
			],
			{ title: 'name', subtitle: 'model' },
		),
		line('comfortHeading', 'Comfort heading', 60),
		objectList('comfort', 'Comfort and care', 'fact', [line('label', 'Label', 24), line('value', 'Value', 50)], { title: 'label', subtitle: 'value' }),
		paragraph('sterilizationNote', 'Sterilization note', 200),
		...closing(),
		seo(),
	],
	preview: { prepare: () => ({ title: 'Office & technology' }) },
});
