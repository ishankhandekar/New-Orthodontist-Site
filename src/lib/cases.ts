import sarahPhoto from '../assets/gallery-sarah.png';
import marcusPhoto from '../assets/gallery-marcus.png';
import priyaPhoto from '../assets/gallery-priya.png';
import heroPhoto from '../assets/hero-patient.jpg';

/*
	Smile Gallery cases, shared by the full gallery, each case page, the homepage gallery (featured
	cases), and the treatment pages' results sections.
	TODO: Every case is a placeholder: stock photos (some reused), made-up names, treatments, and
	stories. Replace with real patients who have given written consent to appear on the site, with
	real before and after photos (lifestyle portraits, at least 1600px wide). Until a case has a real
	`before` photo, its page shows the after photo muted and labeled "Before photo coming soon";
	never stand in a fake result.
*/
export type Category = 'invisalign' | 'braces' | 'jaw' | 'kids' | 'teens' | 'adults';

export const categoryLabels: Record<Category, string> = {
	invisalign: 'Invisalign',
	braces: 'Braces',
	jaw: 'Jaw Orthopedics',
	kids: 'Kids',
	teens: 'Teens',
	adults: 'Adults',
};

export type Case = {
	slug: string;
	name: string;
	treatment: string;
	duration: string;
	age: string;
	categories: Category[];
	tone: string;
	image: ImageMetadata;
	before?: ImageMetadata;
	focus: string;
	blurb: string[];
	/** Shown in the homepage gallery. */
	featured?: boolean;
};

export const cases: Case[] = [
	{
		slug: 'sarah',
		name: 'Sarah',
		treatment: 'Invisalign',
		duration: '14 months',
		age: 'Adult',
		categories: ['invisalign', 'adults'],
		tone: 'from-[#f3ebe2] to-[#e6d6c6]',
		image: sarahPhoto,
		focus: 'object-[50%_28%]',
		featured: true,
		blurb: [
			'Sarah had wanted to fix her crowded front teeth since college, but didn’t want metal braces at work. Invisalign let her straighten them without anyone noticing.',
			'Dr. Lee planned 14 months of aligners, with check-ins every ten weeks. Sarah now wears a clear retainer at night to keep her new smile in place.',
		],
	},
	{
		slug: 'marcus',
		name: 'Marcus',
		treatment: 'Braces',
		duration: '20 months',
		age: 'Teen',
		categories: ['braces', 'teens'],
		tone: 'from-[#efe8e0] to-[#ddd0c3]',
		image: marcusPhoto,
		focus: 'object-[50%_22%]',
		featured: true,
		blurb: [
			'Marcus came in at 13 with a deep overbite and crowding that made his teeth hard to keep clean. Metal braces were the most reliable way to correct both.',
			'He picked new band colors at every visit and played soccer the whole way through with a mouthguard.',
		],
	},
	{
		slug: 'priya',
		name: 'Priya',
		treatment: 'Invisalign Teen',
		duration: '12 months',
		age: 'Teen',
		categories: ['invisalign', 'teens'],
		tone: 'from-[#f5ede4] to-[#ead9c8]',
		image: priyaPhoto,
		focus: 'object-[50%_35%]',
		featured: true,
		blurb: [
			'Priya wanted to close the gaps between her front teeth before high school photos. She was diligent about wearing her aligners, which made her a great fit for Invisalign.',
			'Her treatment wrapped up in a year, and her parents appreciated a clear plan and payment schedule from day one.',
		],
	},
	{
		slug: 'maya',
		name: 'Maya',
		treatment: 'Clear ceramic braces',
		duration: '18 months',
		age: 'Teen',
		categories: ['braces', 'teens'],
		tone: 'from-[#f1e9df] to-[#e2d3c2]',
		image: heroPhoto,
		focus: 'object-[60%_30%]',
		blurb: [
			'Maya’s upper teeth were rotated and crowded. Clear ceramic braces gave her the reliability of braces with brackets that blend in.',
			'Eighteen months later, she can’t stop smiling in photos.',
		],
	},
	{
		slug: 'daniel',
		name: 'Daniel',
		treatment: 'Invisalign',
		duration: '10 months',
		age: 'Adult',
		categories: ['invisalign', 'adults'],
		tone: 'from-[#eee6dd] to-[#dccdbd]',
		image: marcusPhoto,
		focus: 'object-[50%_22%]',
		blurb: [
			'Daniel’s teeth had shifted years after braces as a kid. A short course of Invisalign brought them back into line in ten months.',
			'This time, he’s wearing his retainer every night.',
		],
	},
	{
		slug: 'ava',
		name: 'Ava',
		treatment: 'Jaw orthopedics, then braces',
		duration: '9 months, then 16 months',
		age: 'Kid',
		categories: ['jaw', 'braces', 'kids'],
		tone: 'from-[#f4ece3] to-[#e8d8c7]',
		image: priyaPhoto,
		focus: 'object-[50%_35%]',
		blurb: [
			'Ava’s age-7 check showed a narrow upper jaw and a crossbite. A gentle expander widened her jaw while she was still growing.',
			'When her adult teeth came in, a shorter round of braces finished the job.',
		],
	},
	{
		slug: 'leo',
		name: 'Leo',
		treatment: 'Early expander',
		duration: '11 months',
		age: 'Kid',
		categories: ['jaw', 'kids'],
		tone: 'from-[#f0e8de] to-[#e0d1c0]',
		image: heroPhoto,
		focus: 'object-[60%_30%]',
		blurb: [
			'Leo’s adult teeth were coming in without enough room. An early expander created space, so they could come in straight on their own.',
			'Dr. Lee now checks in every few months as he grows.',
		],
	},
	{
		slug: 'grace',
		name: 'Grace',
		treatment: 'Braces',
		duration: '22 months',
		age: 'Adult',
		categories: ['braces', 'adults'],
		tone: 'from-[#f2eae1] to-[#e4d5c4]',
		image: sarahPhoto,
		focus: 'object-[50%_28%]',
		blurb: [
			'Grace’s bite caused uneven wear and jaw soreness. Braces corrected her bite before her dentist placed two new crowns.',
			'She says it was the best thing she did for her teeth in decades.',
		],
	},
];
