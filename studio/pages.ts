// Every editable page: its fixed document, its type, and where it lives on the site. Used for the
// Studio's sidebar and to connect each document to its page in the Preview tab.
export interface PageEntry {
	id: string;
	type: string;
	title: string;
	route: string;
}

export const pageGroups: { title: string; pages: PageEntry[] }[] = [
	{
		title: 'Treatments',
		pages: [
			{ id: 'treatment-invisalign', type: 'treatmentPage', title: 'Invisalign', route: '/treatments/invisalign' },
			{ id: 'treatment-braces', type: 'treatmentPage', title: 'Braces', route: '/treatments/braces' },
			{ id: 'treatment-jaw-orthopedics', type: 'treatmentPage', title: 'Jaw Orthopedics', route: '/treatments/jaw-orthopedics' },
			{ id: 'treatment-retainers', type: 'treatmentPage', title: 'Retainers', route: '/treatments/retainers' },
		],
	},
	{
		title: 'Ages',
		pages: [
			{ id: 'age-kids', type: 'agePage', title: 'Kids', route: '/treatments/kids' },
			{ id: 'age-teens', type: 'agePage', title: 'Teens', route: '/treatments/teens' },
			{ id: 'age-adults', type: 'agePage', title: 'Adults', route: '/treatments/adults' },
		],
	},
	{
		title: 'Patient info',
		pages: [
			{ id: 'page-first-visit', type: 'firstVisitPage', title: 'First visit', route: '/first-visit' },
			{ id: 'page-financing', type: 'financingPage', title: 'Financial & insurance', route: '/financing' },
			{ id: 'page-faq', type: 'faqPage', title: 'FAQ', route: '/faq' },
			{ id: 'page-location', type: 'locationPage', title: 'Office hours & location', route: '/location' },
		],
	},
	{
		title: 'About',
		pages: [
			{ id: 'page-dr-lee', type: 'drLeePage', title: 'Meet Dr. Lee', route: '/about/dr-lee' },
			{ id: 'page-team', type: 'teamPage', title: 'Our team', route: '/about/team' },
			{ id: 'page-office', type: 'officePage', title: 'Office & tech', route: '/about/office' },
		],
	},
];

export const allPages: PageEntry[] = [
	{ id: 'homePage', type: 'homePage', title: 'Homepage', route: '/' },
	...pageGroups.flatMap((g) => g.pages),
];
