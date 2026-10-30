// Class strings shared by the subpage templates (treatment and age pages), so they stay identical.
// Sections are separated by one thin rule (no eyebrow labels repeating the heading below them).
export const section = 'px-5 py-8 sm:px-7 lg:py-12';
export const sectionInner = 'mx-auto max-w-7xl border-t border-ink/10 pt-14 lg:pt-20';
// The first section after the hero skips the rule: the hero's facts strip already ends in one.
export const sectionInnerFirst = 'mx-auto max-w-7xl pt-6 lg:pt-8';
// Same voice as the homepage headlines, a step smaller since subpages have many sections.
export const h2 = 'text-[2rem] leading-[1.1] font-normal tracking-[-0.01em] text-balance sm:text-[clamp(2.25rem,3.6vw,3.25rem)]';
export const smallLabel = 'text-[11px] tracking-wide text-ink/70 uppercase';
export const textLink =
	'group inline-flex items-center gap-2 text-sm font-medium underline decoration-ink/25 underline-offset-[6px] transition-colors hover:decoration-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink';
export const pad = (n: number) => String(n).padStart(2, '0');
