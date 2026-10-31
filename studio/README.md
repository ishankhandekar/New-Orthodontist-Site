# Sanity Studio

Where the website's text is edited. The site reads it from Sanity only while it builds, so the
published site is plain HTML and visitors never contact Sanity.

**Public marketing text only.** The dataset is publicly readable and Sanity has no HIPAA agreement
on this plan: never put patient information, patient photos or form submissions here.

## What's editable

- **Homepage**: every section's text (headlines, paragraphs, reviews, FAQ).
- **Practice info**: phone, email, address, hours and online profiles. Every page uses these.

Photos, logos, button labels and the small section labels stay in the site's code.

## Commands (run in this folder)

| Command | What it does |
| :-- | :-- |
| `npm install` | Installs the Studio |
| `npm run dev` | Runs the Studio locally at `localhost:3333` |
| `npm run deploy` | Publishes the Studio to `https://torreyhillsortho.sanity.studio` |
| `npm run seed` | Fills both documents with the site's original text (refuses to overwrite) |

## First-time setup

1. The project ID (`sqa4gdwo`) is set in `project.ts` and in `../src/lib/sanity.ts`; keep them in sync.
2. `npx sanity login`, then `npm run seed` (already done once; it refuses to run again).
3. `npm run deploy`, and invite Dr. Lee from sanity.io/manage.
4. Add a webhook in sanity.io/manage so publishing rebuilds the site: on create/update of
   `homePage` and `practiceSettings`, POST to
   `https://api.github.com/repos/<owner>/<repo>/dispatches` with the body
   `{"event_type": "sanity-publish"}` and an `Authorization: Bearer <token>` header, using a
   fine-grained GitHub token limited to this repo with Contents: read and write.
