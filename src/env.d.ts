declare namespace App {
	interface Locals {
		// True only on the preview Worker, after Sanity Studio has turned draft mode on (see middleware.ts).
		draftMode: boolean;
	}
}
