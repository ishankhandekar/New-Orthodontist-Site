// The practice's contact details, shared so every place that shows them stays in sync. They're edited
// in Sanity Studio ("Practice info") and read once while the site builds.
import { fetchSingleton, type PracticeSettings } from './sanity';

const settings = await fetchSingleton<PracticeSettings>('practiceSettings');

// Studio checks the number has 10 digits (optionally led by a 1), so the link is always +1 and 10 digits.
const phoneDigits = settings.phone.replace(/\D/g, '').slice(-10);
export const phone = { display: settings.phone, href: `tel:+1${phoneDigits}` };
export const email = { display: settings.email, href: `mailto:${settings.email}` };
export const postalAddress = settings.address;
export const address = [postalAddress.street, `${postalAddress.city}, ${postalAddress.region} ${postalAddress.postalCode}`];
export const directionsUrl =
	'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(address.join(', '));
// Rotational days follow a rotating schedule, so patients should call to confirm.
// `schema` is the machine-readable version for search engines' structured data (24-hour times).
export const hours = settings.hours.map((h) => ({
	days: h.days,
	time: h.time,
	rotational: Boolean(h.rotational),
	schema: h.closed ? null : { days: h.openDays ?? [], opens: h.opens ?? '', closes: h.closes ?? '' },
}));
// The practice's online profiles. The one named "Google" is its Maps listing, where patients read
// and leave reviews.
export const socials = (settings.socials ?? []).map((s) => ({ name: s.name, href: s.url }));
