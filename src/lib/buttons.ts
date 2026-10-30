// Site buttons: one shape (8px corners, label plus a small arrow, no inner tile) in two tones.
const base =
	'group inline-flex items-center justify-center gap-2.5 rounded-lg border px-5 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4';

// On white: ink outline that fills ink on hover.
export const buttonInk = `${base} border-ink text-ink hover:bg-ink hover:text-white focus-visible:outline-ink`;

// On photos and dark backgrounds: solid white that turns into a white outline on hover.
export const buttonLight = `${base} border-white bg-white text-ink hover:bg-transparent hover:text-white focus-visible:outline-white`;

// For the <ArrowIcon> inside either button.
export const buttonArrow = 'transition-transform motion-safe:group-hover:translate-x-0.5';
