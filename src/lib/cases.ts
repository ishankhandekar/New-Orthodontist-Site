import sarahPhoto from '../assets/gallery-sarah.png';
import marcusPhoto from '../assets/gallery-marcus.png';
import priyaPhoto from '../assets/gallery-priya.png';

/*
	Smile Gallery cases, shared by the homepage gallery and the treatment pages.
	TODO: Every case below is a placeholder (stock photos, made-up names and treatments). Replace
	with real patients who have given written consent to appear on the site. Use full-face
	lifestyle portraits of the finished smile (no clinical close-ups or retractor shots), at least
	1000px wide. `focus` sets where the 4:5 crop sits, so the face stays in frame.
	TODO: The "View case study" links point to case pages that don't exist yet.
*/
export type Category = 'invisalign' | 'braces' | 'adult';

export type Case = {
	slug: string;
	name: string;
	treatment: string;
	duration: string;
	categories: Category[];
	tone: string;
	image?: ImageMetadata;
	focus?: string;
};

export const cases: Case[] = [
	{ slug: 'sarah', name: 'Sarah', treatment: 'Invisalign', duration: '14 months', categories: ['invisalign', 'adult'], tone: 'from-[#f3ebe2] to-[#e6d6c6]', image: sarahPhoto, focus: 'object-[50%_28%]' },
	{ slug: 'marcus', name: 'Marcus', treatment: 'Modern Braces', duration: '20 months', categories: ['braces'], tone: 'from-[#efe8e0] to-[#ddd0c3]', image: marcusPhoto, focus: 'object-[50%_22%]' },
	{ slug: 'priya', name: 'Priya', treatment: 'Invisalign Teen', duration: '12 months', categories: ['invisalign'], tone: 'from-[#f5ede4] to-[#ead9c8]', image: priyaPhoto, focus: 'object-[50%_35%]' },
];
