/*
	Fills the Homepage and Practice info documents with the site's original text. Run once, from
	this folder, after `npx sanity login`:  npm run seed
	It uses your own login, so no token is ever written to a file. It refuses to overwrite documents
	that already exist (they may hold Dr. Lee's edits); pass --force to replace them anyway:
	npm run seed -- --force
*/
import { getCliClient } from 'sanity/cli';
import { homePage, practiceSettings } from '../seed/content';

const client = getCliClient({ apiVersion: '2026-10-01' });
const docs = [practiceSettings, homePage];

const existing = await client.fetch<string[]>('*[_id in $ids || _id in $drafts]._id', {
	ids: docs.map((d) => d._id),
	drafts: docs.map((d) => `drafts.${d._id}`),
});
if (existing.length && !process.argv.includes('--force')) {
	console.error(`Not seeding: ${existing.join(', ')} already exist. Use --force to replace them.`);
	process.exit(1);
}

await client.transaction().createOrReplace(practiceSettings).createOrReplace(homePage).commit();
console.log(`Seeded ${docs.map((d) => d._id).join(' and ')}.`);
