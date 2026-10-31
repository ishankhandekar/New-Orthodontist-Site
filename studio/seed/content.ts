/*
	The site's text as it was hard-coded before Sanity, used once to fill the two documents.
	After seeding, Sanity is the source of truth; this file is only a record of the starting point.
*/

// Sanity needs a unique _key on every object in an array.
const keyed = <T extends object>(prefix: string, items: T[]) =>
	items.map((item, i) => ({ _key: `${prefix}${i + 1}`, ...item }));

export const practiceSettings = {
	_id: 'practiceSettings',
	_type: 'practiceSettings',
	phone: '(858) 481-1771',
	email: 'info@torreyhillsortho.com',
	address: { street: '4765 Carmel Mountain Road, Suite 200', city: 'San Diego', region: 'CA', postalCode: '92130' },
	hours: keyed('hours', [
		{ _type: 'hoursRow', days: 'Mon, Tue', time: '9–5', rotational: true, closed: false, openDays: ['Monday', 'Tuesday'], opens: '09:00', closes: '17:00' },
		{ _type: 'hoursRow', days: 'Wed, Thu', time: '9–5', rotational: false, closed: false, openDays: ['Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
		{ _type: 'hoursRow', days: 'Fri', time: '12–5', rotational: true, closed: false, openDays: ['Friday'], opens: '12:00', closes: '17:00' },
		{ _type: 'hoursRow', days: 'Sat, Sun', time: 'Closed', rotational: false, closed: true },
	]),
	socials: keyed('social', [
		{ _type: 'socialLink', name: 'Facebook', url: 'https://www.facebook.com/DrJudyLee' },
		{ _type: 'socialLink', name: 'Google', url: 'https://maps.google.com/?cid=18408970287676144921' },
		{ _type: 'socialLink', name: 'Yelp', url: 'https://www.yelp.com/biz/torrey-hills-orthodontics-san-diego' },
	]),
};

export const homePage = {
	_id: 'homePage',
	_type: 'homePage',
	hero: {
		eyebrow: 'Now welcoming new patients',
		headlineLines: ['Braces and Invisalign,', 'always with Dr. Judy Lee,', 'right here in Torrey Hills.'],
		intro: "You'll see Dr. Lee at every appointment, from your first consult to your final retainer check.",
		location: 'Carmel Valley, CA',
		byline: 'Dr. Judy Lee, Orthodontist',
	},
	affiliations: { label: 'Proudly backed by…' },
	about: {
		photoCaption: 'Dr. Lee (Certified Orthodontist)',
		statementLead: 'Torrey Hills Orthodontics is Dr. Judy Lee’s independent practice in Carmel Valley,',
		statementRest:
			'offering braces and Invisalign for kids, teens, and adults. Every treatment plan is designed and overseen by her personally, so you’re never handed off to a different provider.',
		supportingLine: 'Join local families finding their best smile with Dr. Lee.',
	},
	gallery: {
		headline: 'Confident smiles, beautifully finished.',
		intro:
			'Real patients, photographed as they live: out in the world, smiling without a second thought. Every result was planned and finished by Dr. Lee.',
	},
	treatments: {
		headline: 'Every treatment, planned by Dr. Lee.',
		intro:
			'Braces, Invisalign, and early jaw orthopedics for kids, teens, and adults, each plan designed and checked by Dr. Lee herself.',
		braces: { title: 'Braces', text: 'Metal and clear ceramic braces, precisely planned for every smile.' },
		invisalign: { title: 'Invisalign', text: 'Nearly invisible clear aligners you can take out to eat, brush, and smile.' },
		jaw: {
			title: 'Jaw orthopedics',
			text: 'Guiding jaw growth early, while kids are still growing, so later treatment is simpler.',
		},
	},
	financing: {
		headline: 'Investment, made accessible.',
		body: "A confident smile shouldn't come with financial stress. We offer flexible in-house payment plans at 0% interest, and we accept most major PPO insurance plans. Before anything begins, we'll walk you through your coverage and options, so there are never any surprises.",
		facts: keyed('fact', [
			{ _type: 'fact', label: 'Financing', value: '0% interest, in-house plans' },
			{ _type: 'fact', label: 'Insurance', value: 'Most major PPO plans accepted' },
		]),
	},
	firstVisit: {
		heading: 'Your first visit',
		steps: keyed('step', [
			{
				_type: 'step',
				title: 'The Scan',
				body: 'A fast, comfortable digital scan of your teeth. No messy impressions, just a few quiet minutes in the chair.',
			},
			{
				_type: 'step',
				title: 'The Plan',
				body: 'Sit down with Dr. Lee herself to walk through your custom smile blueprint, and ask her anything.',
			},
			{
				_type: 'step',
				title: 'The Choice',
				body: 'A clear breakdown of timelines and treatment options, so you can decide what feels right. Zero pressure.',
			},
		]),
	},
	reviews: {
		items: keyed('review', [
			{
				_type: 'review',
				name: 'Shannon M.',
				rating: 5,
				quote: 'Dr. Lee is truly exceptional. … My son’s smile has been completely transformed, and we couldn’t be happier with the results.',
				color: '#1e88e5',
			},
			{
				_type: 'review',
				name: 'Rosa M.',
				rating: 5,
				quote: 'The office was closed but Dr. Lee happen to be there and without hesitation asked us to come in so she can fix the wire.',
				color: '#8d6e63',
			},
			{
				_type: 'review',
				name: 'Flore Q.',
				rating: 5,
				quote: 'Our daughter’s case was fairly complex but Dr Lee did a fantastic job and gave our daughter a beautiful smile in under 2 years.',
				color: '#5c6bc0',
			},
			{
				_type: 'review',
				name: 'Seongho B.',
				rating: 5,
				quote: 'We were transferred to Dr. Lee after our previous orthodontist became unavailable, and the transition was seamless.',
				color: '#c2185b',
			},
			{
				_type: 'review',
				name: 'Janice R.',
				rating: 5,
				quote: '…my son was able to finish his braces treatment without teeth being pulled and in a shorter amount of time than his treatment listed.',
				color: '#78909c',
			},
		]),
		googleRating: 4.5,
		googleReviewCount: '40',
	},
	faq: {
		headline: 'Everything you need to know.',
		items: keyed('faq', [
			{
				_type: 'faqItem',
				question: 'Is the first consultation really free?',
				answer: 'Yes. Your first visit, including the digital scan and a sit-down with Dr. Lee to review your options, costs nothing and comes with no obligation.',
			},
			{
				_type: 'faqItem',
				question: 'How much does treatment cost?',
				answer: 'Every smile is different, so your cost depends on the treatment you choose and how long it takes. At your free consultation you’ll get a clear, all-inclusive quote with no hidden fees, along with monthly payment options to fit your budget.',
			},
			{
				_type: 'faqItem',
				question: 'How long does treatment usually take?',
				answer: 'Most treatment takes between 12 and 24 months, depending on what needs to move and how consistently aligners are worn. You’ll get a personal timeline at your consultation.',
			},
			{
				_type: 'faqItem',
				question: 'Braces or Invisalign: which is right for me?',
				answer: 'Both can create excellent results. Invisalign is nearly invisible and removable; braces work around the clock and suit some complex cases better. Dr. Lee will walk you through which fits your teeth and your lifestyle.',
			},
			{
				_type: 'faqItem',
				question: 'Do you accept insurance, and do you offer payment plans?',
				answer: 'We accept most major PPO insurance plans and will check your benefits before treatment begins. We also offer flexible in-house payment plans at 0% interest, and we’ll go over every option clearly at your consultation.',
			},
			{
				_type: 'faqItem',
				question: 'At what age should my child have their first visit?',
				answer: 'The American Association of Orthodontists recommends a first check-up by age 7. Most children won’t need treatment that early, but it lets Dr. Lee spot jaw growth or bite issues while they’re easiest to guide.',
			},
			{
				_type: 'faqItem',
				question: 'Does treatment hurt?',
				answer: 'You may feel some pressure or tenderness for a few days after starting and after adjustments, which usually settles quickly. Most patients manage it with soft foods and an over-the-counter pain reliever.',
			},
			{
				_type: 'faqItem',
				question: 'Am I too old for braces or Invisalign?',
				answer: 'Not at all. Healthy teeth can be moved at any age, and many of our patients are adults. Invisalign and clear ceramic braces are popular, discreet options.',
			},
		]),
	},
	office: {
		headline: 'Proud to serve the Carmel Valley community.',
		note: 'Visits are by appointment only, so please book ahead.',
	},
};
