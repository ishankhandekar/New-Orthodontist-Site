import type { StructureResolver } from 'sanity/structure';
import { pageGroups } from './pages';

// The sidebar: the homepage, then one folder per section of the site, then the practice details.
// Every entry opens its single document directly.
export const structure: StructureResolver = (S) => {
	const doc = (id: string, type: string, title: string) =>
		S.listItem().title(title).id(id).child(S.document().schemaType(type).documentId(id).title(title));

	return S.list()
		.title('Website')
		.items([
			doc('homePage', 'homePage', 'Homepage'),
			...pageGroups.map((group) =>
				S.listItem()
					.title(group.title)
					.child(
						S.list()
							.title(group.title)
							.items(group.pages.map((p) => doc(p.id, p.type, p.title))),
					),
			),
			S.divider(),
			doc('practiceSettings', 'practiceSettings', 'Practice info'),
		]);
};
