// Keeps "Dr. Lee" and "Dr. Judy Lee" on one line, so the name never splits across a line break.
// Applied in code so editors only ever type plain spaces.
export const keepNameTogether = (text: string) =>
	text.replace(/Dr\. (?:Judy )?Lee/g, (name) => name.replaceAll(' ', ' '));
