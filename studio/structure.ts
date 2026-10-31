import type { StructureResolver } from 'sanity/structure';

// The sidebar: one entry per page or settings document, each opening its single document directly.
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Website')
		.items([
			S.listItem()
				.title('Homepage')
				.id('homePage')
				.child(S.document().schemaType('homePage').documentId('homePage').title('Homepage')),
			S.divider(),
			S.listItem()
				.title('Practice info')
				.id('practiceSettings')
				.child(S.document().schemaType('practiceSettings').documentId('practiceSettings').title('Practice info')),
		]);
