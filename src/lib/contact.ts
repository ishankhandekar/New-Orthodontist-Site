// The practice's contact details, shared so every place that shows them stays in sync.
export const phone = { display: '(858) 481-1771', href: 'tel:+18584811771' };
export const address = ['4765 Carmel Mountain Road, Suite 200', 'San Diego, CA 92130'];
export const directionsUrl =
	'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(address.join(', '));
// Rotational days follow a rotating schedule, so patients should call to confirm.
export const hours = [
	{ days: 'Mon, Tue', time: '9–5', rotational: true },
	{ days: 'Wed, Thu', time: '9–5', rotational: false },
	{ days: 'Fri', time: '12–5', rotational: true },
	{ days: 'Sat, Sun', time: 'Closed', rotational: false },
];
// TODO: Add the practice's real profile URLs.
export const socials = [
	{ name: 'Facebook', href: '#' },
	{ name: 'Instagram', href: '#' },
	{ name: 'Google', href: '#' },
	{ name: 'Yelp', href: '#' },
];
