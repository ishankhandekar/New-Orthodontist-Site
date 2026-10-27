// Prefixes a root-relative path with the site's base path, so links keep working when the site is
// served from a subfolder (GitHub Pages) as well as from a domain root. Use for every internal
// link or asset that starts with "/".
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
