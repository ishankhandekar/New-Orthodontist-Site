// Site navigation, shared by the header menus and the footer so the two never drift apart.
export type NavLink = { label: string; href: string };
export type Menu = {
	id: string;
	label: string;
	columns: { heading: string; large?: boolean; links: NavLink[] }[];
};

// TODO: Treatment pages, the Before & After page, Meet Dr. Lee, Our Team and Office & Tech pages
// don't exist yet. Gallery and Meet Dr. Lee point at their homepage sections until they're built.
export const menus: Menu[] = [
	{
		id: 'treatments',
		label: 'Treatments',
		columns: [
			{
				heading: 'Explore treatments',
				large: true,
				links: [
					{ label: 'Invisalign', href: '/treatments/invisalign' },
					{ label: 'Braces', href: '/treatments/braces' },
					{ label: 'Jaw Orthopedics', href: '/treatments/jaw-orthopedics' },
				],
			},
			{
				heading: 'Care for every age',
				links: [
					{ label: 'Kids Ortho', href: '/treatments/kids' },
					{ label: 'Adult Ortho', href: '/treatments/adults' },
				],
			},
		],
	},
	{
		id: 'patient-info',
		label: 'Patient Info',
		columns: [
			{
				heading: 'Before you start',
				large: true,
				links: [
					{ label: 'Financial & Insurance', href: '/#financing' },
					{ label: 'First Visit', href: '/#first-visit-steps' },
				],
			},
			{
				heading: 'Questions',
				links: [
					{ label: 'FAQ', href: '/#faq' },
					{ label: 'Office hours & location', href: '/#contact' },
				],
			},
		],
	},
	{
		id: 'about-us',
		label: 'About Us',
		columns: [
			{
				// TODO: Confirm Dr. Lee is board certified (American Board of Orthodontics) before launch.
				heading: 'Board Certified Specialist',
				large: true,
				links: [{ label: 'Meet Dr. Lee', href: '/#about' }],
			},
			{
				heading: 'Our practice',
				links: [
					{ label: 'Our Team', href: '/about/team' },
					{ label: 'Office & Tech', href: '/about/office' },
				],
			},
		],
	},
];
const [treatments, patientInfo, aboutUs] = menus;
export const galleryLink: NavLink = { label: 'Gallery', href: '/#gallery' };

// Top-level order in the bar and the phone menu: dropdowns and plain links mixed.
export const topLevel: (Menu | NavLink)[] = [treatments, patientInfo, galleryLink, aboutUs];
export const isMenu = (item: Menu | NavLink): item is Menu => 'columns' in item;
// TODO: Point to the scheduling software or booking form once it's chosen.
export const bookHref = '/#contact';

/*
	Pages a US (California) healthcare practice site needs. None exist yet, and their text must come
	from the practice or its counsel, not be written from scratch:
	- Privacy Policy: CalOPPA (Bus. & Prof. Code § 22575) for any site collecting personal info.
	- Notice of Privacy Practices: HIPAA, 45 CFR 164.520(c)(3), must be posted on the practice's site.
	- Good Faith Estimate: No Surprises Act notice of self-pay patients' right to a cost estimate.
	- Accessibility: statement of WCAG 2.1 AA conformance and how to get help.
	- Nondiscrimination: ACA Section 1557 notice and language-assistance taglines. Only required if the
	  practice takes federal funds (e.g. Medi-Cal/Denti-Cal); remove it if not.
	- Terms of Use: standard, optional.
*/
export const legalLinks: NavLink[] = [
	{ label: 'Privacy Policy', href: '/privacy' },
	{ label: 'Notice of Privacy Practices', href: '/notice-of-privacy-practices' },
	{ label: 'Good Faith Estimate', href: '/good-faith-estimate' },
	{ label: 'Accessibility', href: '/accessibility' },
	{ label: 'Nondiscrimination', href: '/nondiscrimination' },
	{ label: 'Terms of Use', href: '/terms' },
];
