/*
	Creates the site's documents in Sanity with the text the site had before Sanity. Run from this
	folder, after `npx sanity login`:  npm run seed
	It uses your own login, so no token is ever written to a file. It only creates documents that
	don't exist yet: anything already in Sanity (which may hold Dr. Lee's edits) is left alone. To
	replace existing documents with the original text anyway:  npm run seed -- --force
*/
import { getCliClient } from 'sanity/cli';
import { aboutPages } from '../seed/aboutPages';
import { homePage, practiceSettings } from '../seed/content';
import { patientInfoPages } from '../seed/patientInfoPages';
import { templatePages } from '../seed/templatePages';

const client = getCliClient({ apiVersion: '2026-10-01' });
const docs = [practiceSettings, homePage, ...templatePages, ...patientInfoPages, ...aboutPages];
const force = process.argv.includes('--force');

const existing = new Set(
	await client.fetch<string[]>('*[_id in $ids || _id in $drafts]._id', {
		ids: docs.map((d) => d._id),
		drafts: docs.map((d) => `drafts.${d._id}`),
	}),
);
const toWrite = force ? docs : docs.filter((d) => !existing.has(d._id) && !existing.has(`drafts.${d._id}`));
if (!toWrite.length) {
	console.log('Nothing to seed: every document already exists.');
	process.exit(0);
}

const tx = client.transaction();
for (const doc of toWrite) {
	if (force) tx.createOrReplace(doc as Parameters<typeof tx.createOrReplace>[0]);
	else tx.createIfNotExists(doc as Parameters<typeof tx.createIfNotExists>[0]);
}
await tx.commit();
console.log(`${force ? 'Replaced' : 'Created'}: ${toWrite.map((d) => d._id).join(', ')}`);
if (!force && existing.size) console.log(`Left alone (already exist): ${[...existing].join(', ')}`);
