# Publish a poem

Work in `site/` with Node 24. Adding a poem changes content, not page layouts. The site uses `content/poems.json`; there is no new CMS, subscription service, or account to configure.

## Current approved batch

On November 5, 2026, Chad approved the poetry for the site and selected **The Golden Section** as the anchor. All 14 supplied poems are enabled in the release branch. This is content approval, not production-deployment approval. `publishedAt` is currently the approved release-batch date, `2026-11-05`; confirm the actual publication date before deployment if the release happens later. These dates are not claims about when the poems were written.

The twelve Collection II texts are checked character for character against `content/sources/collection-ii.md`. That source retains its original draft-status note as historical provenance; Chad's subsequent approval supersedes it. The two earlier poems were transcribed from the images provided in chat and approved with the batch. Their original image files and companion canonical JSON were not downloadable in the workspace; preserve these approved transcriptions when adding their artwork.

## 1. Create a held draft

```sh
cd /workspace/parallaxhearts-site/site
npm run new-poem -- your-poem-slug "Your exact poem title"
```

Duplicate slugs are rejected without changing the file. Fill the new entry in `content/poems.json`:

| Field | Use |
| --- | --- |
| `slug` | Permanent, lowercase, hyphenated address. Keep it stable after publishing. |
| `title` | Exact approved title. |
| `poemLines` | One string per line. Use `""` for a stanza break. Preserve punctuation and capitalization. |
| `summary` | Short, factual editorial description; not an invented poem line or testimonial. |
| `collection`, `themes`, `form` | Existing or new meaningful categories. Filters populate automatically from visible poems. |
| `status` | `draft`, `approved`, `published`, or `archived`. |
| `publishedAt` | `null` while drafting; actual approved publication date as `YYYY-MM-DD` for publishing. Future dates remain hidden from the public site until that date in America/New_York. |
| `heroImage`, `imageAlt` | Optional artwork and an accurate description written after inspecting the actual image. |
| `imageWidth`, `imageHeight` | Actual pixel dimensions when artwork is present. These prevent layout shift. |
| `shareImage` | Optional 1200×630 social card under `/images/poetry/`; otherwise the site generates a title card for this poem. |
| `featured` | Whether this poem is eligible for the homepage's additional poetry selection. |
| `textVerified` | Set `true` only after final text verification and owner approval. |
| `sourceNotes` | Internal source and approval record. Never rendered or serialized to visitors. |

The anchor is currently `the-golden-section`, selected in the home and collection pages. It has a dedicated feature; adding other poems does not require editing those pages. The archive starts with it because it is first in the content collection.

## 2. Preview before approval

```sh
npm run preview:poetry
```

This binds the development server to `127.0.0.1:3000` and explicitly enables local editorial review. Nonempty drafts and approved review candidates appear only in that mode. It refuses hosted Vercel environments, and the content gate checks a loopback Host. Ordinary `npm run dev` does **not** reveal unapproved poems automatically.

For a production-build review:

```sh
npm run build
npm run preview:poetry -- --production
```

The latter binds to `127.0.0.1:3002`. Review pages are noindex. Held poems use local-only copy links; public sharing is withheld. Do not set `PARALLAX_LOCAL_REVIEW` on Vercel or expose this local server through a public tunnel. A noindex tag is not an access-control mechanism.

## 3. Prepare artwork without publishing it

```sh
npm run poetry:art -- /absolute/path/original.png your-poem-slug
```

The command keeps the original untouched and writes an optimized WebP into private `content/artwork/`. It corrects orientation, limits width to 1400 pixels without enlargement, strips unnecessary metadata, and preserves the image's aspect ratio. It refuses to overwrite an existing held image.

Use at least about 1120 pixels in width for a portrait poem card; retain a larger original for print. Inspect any lettering after compression and compare it to the HTML poem. Never use generated visual directions as alt text. Never use an image as the only form of the poem.

The original Crown images shown in chat must be supplied as downloadable files before they can be imported unchanged. Do not recreate them and call the result an original supplied asset. The Golden Section illustration is new site artwork based on the supplied visual direction.

## 4. Approve and enable the content

After explicit owner approval, set `status: "published"`, `textVerified: true`, and the agreed `publishedAt`. Keep a short approval record in `sourceNotes`. The validation command refuses an empty or unverified published poem. An `approved` state alone remains held.

For approved artwork whose publication date has arrived:

```sh
npm run poetry:art -- content/artwork/your-poem-slug.webp your-poem-slug --publish
```

This copies the existing held file into `public/images/poetry/` without overwriting a public file. It refuses to expose artwork for a held or future-dated poem. Set `heroImage` to `/images/poetry/your-poem-slug.webp`, write `imageAlt`, and record its actual `imageWidth` and `imageHeight`. The validator checks those dimensions against the file. Do not put unapproved art in `public/`: files there are directly accessible regardless of poem status.

## 5. Run the release checks

```sh
npm run poetry:validate
npm test
npm run lint
npm run build
npm run typecheck
npm run audit:deps
npm run audit:links
npm run audit:headers
CHROME_PATH=/usr/bin/chromium npm run audit:lighthouse
```

Then inspect the page at 375px and desktop width, the exact stanza breaks, alt text, and the social card. Published poem routes and sitemap entries are automatic. Titles, descriptions, canonical URLs, CreativeWork data, related poems, filters, and sharing use the same content entry.

For full cloud browser QA, start public production mode on port 3001 and editorial production mode on 3002, then run `python3 tools/browser-qa.py`. This uses the environment's installed Python Playwright and system Chromium. It writes the requested screenshots and checks text, navigation, filters, sharing, images, overflow, and WCAG rules. It is a local QA command; the GitHub workflow runs the Node release audit.

## Corrections and retirement

Do not silently revise published poem wording. Get approval, record the correction, and update the archived canonical source when an intentionally approved revision changes it. The Collection II source-integrity test deliberately flags unrecorded changes.

`archived` removes a poem from public routes and the sitemap. It does not erase an already public image, external caches, screenshots, or other people's copies. Review any associated public artwork separately before treating previously published content as private. If a published slug must change, add and test a permanent redirect.

Production deployment is a separate approval step. See `deployment-checklist.md`.

For future-dated entries, rebuild on release day so the statically generated sitemap refreshes alongside the dynamically date-gated poem pages and archive.
