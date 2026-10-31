// The practice's contact details, shared so every place that shows them stays in sync. They're edited
// in Sanity Studio ("Practice info"). Use in a page or component:
//   const { phone, hours } = await getPracticeInfo(Astro.locals);
import { fetchSingleton, type PracticeSettings } from './sanity';

// One fetch per page render (or per preview request), however many components ask.
const cache = new WeakMap<App.Locals, ReturnType<typeof load>>();

export function getPracticeInfo(locals: App.Locals) {
	let info = cache.get(locals);
	if (!info) {
		info = load(locals.draftMode);
		cache.set(locals, info);
	}
	return info;
}

async function load(draftMode: boolean) {
	// No hidden field markers here: these values go into links, copy buttons and Google's data.
	const settings = await fetchSingleton<PracticeSettings>('practiceSettings', { draftMode });

	// Studio checks the number has 10 digits (optionally led by a 1), so the link is always +1 and 10 digits.
	const phoneDigits = settings.phone.replace(/\D/g, '').slice(-10);
	const phone = { display: settings.phone, href: `tel:+1${phoneDigits}` };
	const email = { display: settings.email, href: `mailto:${settings.email}` };
	const postalAddress = settings.address;
	const address = [postalAddress.street, `${postalAddress.city}, ${postalAddress.region} ${postalAddress.postalCode}`];
	const directionsUrl =
		'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(address.join(', '));
	// Rotational days follow a rotating schedule, so patients should call to confirm.
	// `schema` is the machine-readable version for search engines' structured data (24-hour times).
	const hours = settings.hours.map((h) => ({
		days: h.days,
		time: h.time,
		rotational: Boolean(h.rotational),
		schema: h.closed ? null : { days: h.openDays ?? [], opens: h.opens ?? '', closes: h.closes ?? '' },
	}));
	// The practice's online profiles. The one named "Google" is its Maps listing, where patients read
	// and leave reviews.
	const socials = (settings.socials ?? []).map((s) => ({ name: s.name, href: s.url }));

	return { phone, email, postalAddress, address, directionsUrl, hours, socials };
}
