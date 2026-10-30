// The practice's contact details, shared so every place that shows them stays in sync.
export const phone = { display: '(858) 481-1771', href: 'tel:+18584811771' };
export const postalAddress = { street: '4765 Carmel Mountain Road, Suite 200', city: 'San Diego', region: 'CA', postalCode: '92130' };
export const address = [postalAddress.street, `${postalAddress.city}, ${postalAddress.region} ${postalAddress.postalCode}`];
export const directionsUrl =
	'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(address.join(', '));
// Rotational days follow a rotating schedule, so patients should call to confirm.
// `schema` is the machine-readable version for search engines' structured data (24-hour times).
export const hours = [
	{ days: 'Mon, Tue', time: '9–5', rotational: true, schema: { days: ['Monday', 'Tuesday'], opens: '09:00', closes: '17:00' } },
	{ days: 'Wed, Thu', time: '9–5', rotational: false, schema: { days: ['Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' } },
	{ days: 'Fri', time: '12–5', rotational: true, schema: { days: ['Friday'], opens: '12:00', closes: '17:00' } },
	{ days: 'Sat, Sun', time: 'Closed', rotational: false, schema: null },
];
// TODO: Add the practice's real profile URLs.
export const socials = [
	{ name: 'Facebook', href: '#' },
	{ name: 'Instagram', href: '#' },
	{ name: 'Google', href: '#' },
	{ name: 'Yelp', href: '#' },
];
