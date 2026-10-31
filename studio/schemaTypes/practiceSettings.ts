import { defineArrayMember, defineField, defineType } from 'sanity';

/*
	The practice's contact details and hours. The website reads these everywhere they appear: the
	header and footer, the homepage, the location page, the policy pages, and the details Google
	reads from the page. Public information only: never put patient information in Sanity.
*/
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const time24 = /^([01]\d|2[0-3]):[0-5]\d$/;
// Hours fields Google needs, unless the row is marked closed.
const unlessClosed = (message: string) => (value: unknown, context: { parent?: unknown }) =>
	(context.parent as { closed?: boolean } | undefined)?.closed || (Array.isArray(value) ? value.length : value)
		? true
		: message;

export const practiceSettings = defineType({
	name: 'practiceSettings',
	title: 'Practice info',
	type: 'document',
	fields: [
		defineField({
			name: 'phone',
			title: 'Phone number',
			type: 'string',
			description: 'As it should appear on the site, e.g. (858) 481-1771. The tap-to-call link is made from it.',
			validation: (rule) =>
				rule.required().custom((value) =>
					!value || /^1?\d{10}$/.test(value.replace(/\D/g, '')) ? true : 'Enter a 10-digit US phone number.',
				),
		}),
		defineField({
			name: 'email',
			title: 'Email address',
			type: 'string',
			validation: (rule) => rule.required().email(),
		}),
		defineField({
			name: 'address',
			title: 'Address',
			type: 'object',
			fields: [
				defineField({ name: 'street', title: 'Street and suite', type: 'string', validation: (rule) => rule.required() }),
				defineField({ name: 'city', title: 'City', type: 'string', validation: (rule) => rule.required() }),
				defineField({ name: 'region', title: 'State', type: 'string', validation: (rule) => rule.required().length(2) }),
				defineField({ name: 'postalCode', title: 'ZIP code', type: 'string', validation: (rule) => rule.required().regex(/^\d{5}$/) }),
			],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'hours',
			title: 'Office hours',
			type: 'array',
			description: 'One row per line on the site, in order.',
			of: [
				defineArrayMember({
					name: 'hoursRow',
					type: 'object',
					fields: [
						defineField({
							name: 'days',
							title: 'Days',
							type: 'string',
							description: 'As shown on the site, e.g. "Mon, Tue".',
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: 'time',
							title: 'Hours',
							type: 'string',
							description: 'As shown on the site, e.g. "9–5" or "Closed".',
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: 'rotational',
							title: 'Rotating schedule',
							type: 'boolean',
							description: 'Adds an asterisk and the "call to confirm" note.',
							initialValue: false,
						}),
						defineField({ name: 'closed', title: 'Closed these days', type: 'boolean', initialValue: false }),
						defineField({
							name: 'openDays',
							title: 'Days open (for Google)',
							type: 'array',
							of: [defineArrayMember({ type: 'string' })],
							options: { list: weekdays, layout: 'grid' },
							hidden: ({ parent }) => parent?.closed,
							validation: (rule) => rule.custom(unlessClosed('Pick the days this row covers.')),
						}),
						defineField({
							name: 'opens',
							title: 'Opens (for Google)',
							type: 'string',
							description: '24-hour time, e.g. 09:00.',
							hidden: ({ parent }) => parent?.closed,
							validation: (rule) =>
								rule
									.custom(unlessClosed('Enter the opening time.'))
									.custom((value) => (!value || time24.test(value) ? true : 'Use 24-hour time, e.g. 09:00.')),
						}),
						defineField({
							name: 'closes',
							title: 'Closes (for Google)',
							type: 'string',
							description: '24-hour time, e.g. 17:00.',
							hidden: ({ parent }) => parent?.closed,
							validation: (rule) =>
								rule
									.custom(unlessClosed('Enter the closing time.'))
									.custom((value) => (!value || time24.test(value) ? true : 'Use 24-hour time, e.g. 17:00.')),
						}),
					],
					preview: { select: { title: 'days', subtitle: 'time' } },
				}),
			],
			validation: (rule) => rule.required().min(1),
		}),
		defineField({
			name: 'socials',
			title: 'Online profiles',
			type: 'array',
			description: 'Shown under "Find us online". The one named "Google" is also used for "Read all on Google".',
			of: [
				defineArrayMember({
					name: 'socialLink',
					type: 'object',
					fields: [
						defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
						defineField({
							name: 'url',
							title: 'Link',
							type: 'url',
							validation: (rule) => rule.required().uri({ scheme: ['https'] }),
						}),
					],
					preview: { select: { title: 'name', subtitle: 'url' } },
				}),
			],
		}),
	],
	preview: { prepare: () => ({ title: 'Practice info' }) },
});
