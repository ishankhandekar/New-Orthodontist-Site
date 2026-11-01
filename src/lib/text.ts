// Keeps "Dr. Lee" and "Dr. Judy Lee" on one line, so the name never splits across a line break.
// Applied in code so editors only ever type plain spaces.
export const keepNameTogether = (text: string) =>
	text.replace(/Dr\. (?:Judy )?Lee/g, (name) => name.replaceAll(' ', ' '));

// Text from Sanity can hold {placeholders} the site fills in, like {phone} or {count}, so they stay
// in sync with Practice info. `fill` swaps in plain text; `splitAt` splits around one so the page can
// put a link in its place.
export const fill = (text: string, values: Record<string, string>) =>
	text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
export const splitAt = (text: string, key: string) => text.split(`{${key}}`);
