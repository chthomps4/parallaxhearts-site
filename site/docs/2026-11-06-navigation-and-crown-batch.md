# November 6 — quieter navigation and the next Crown batch

Production baseline: `d50857053e0a4768f5e5b57d718d7c27f12e1303`, released November 5. Work is isolated on `feat/quiet-navigation-crown-batch-iii`. This follow-up has not been pushed or deployed. All 18 new poems and 20 fragments remain undated, unverified-for-publication drafts. The original 14 approved poem records are unchanged.

## Request and source boundaries

The direct request is to minimize music and stories, simplify navigation, and integrate the next Crown of Phases batch. That takes precedence over the attachment's general instruction to preserve every existing route's appearance: the music/story entry pages are intentionally simplified, while their URLs, catalog data, published visual-novel pages, and archive material are preserved. The Crown aesthetic and existing poem reading template remain the reference.

Read all three supplied Markdown files in full: `CODEX_START_HERE.md`, `ALL_18_NEW_POEMS_REVIEW.md`, and `ALL_20_QUOTES_REVIEW.md`. The handoff references companion JSON files and `editorial/validate_content.py`; those were not attached. The two review Markdown files provide the actual text, so they were retained unchanged under `content/sources/` and mapped into the existing native schema. No missing artwork, personal facts, publication dates, or additional writing were invented. The handoff's review-only status is respected; the previous batch approval does not approve this one.

## Implemented changes

- Four main links: Crown of Phases, Poetry, About, Contact. Music, Vallen, visual novel, book, and visuals are grouped under **Other work** in the footer. The homepage has a compact two-link Other work band instead of the large Vallen promotion.
- Music: one Spotify action, one track-guide anchor, ten native expandable track rows, optional language notes, and quiet archive/support links. Repeated Spotify/support panels and large layered glass treatments are removed. The complete eleven-record source catalog, including its held record, is untouched.
- Stories: one clear visual-novel action, a three-entry archive directory, one existing photograph, and expandable world notes. The chapter count comes from the real published-page data. The six visual-novel pages, book data, original assets and `/story` redirect are preserved. Corrected the old malformed metadata punctuation by replacing that page's description with clean text.
- Imported eighteen poems into `content/poems.json`, preserving the original fourteen entries. All new entries use the existing poem renderer, metadata, social-card generation, theme filters and missing-art behavior.
- Added `content/quotes.json` as a second content type within the native editorial system. Quotes use the same publication-date and local-review gates; private captions, format suggestions and source notes are excluded from public projections.
- Added `/quotes` with text-first fragments, search, theme filtering, empty/reset states and stable title anchors. There are no twenty thin landing pages. The route, related links, featured module and sitemap entry remain absent from public mode until at least one quote is approved for publication.
- Added a modest quote feature on Home and Crown, conditional on visible content. The existing poetry shelf prioritizes genuinely later publication dates and staged entries in local review; no composition/publication timestamps are invented. The Golden Section remains the anchor.
- Added contextual reading navigation on Crown/Poetry/Quotes and related-fragment links on poems only when the target actually exists in the current visibility mode.
- Extended share/copy behavior for fragment anchors, including loopback review links and manual clipboard fallback. Held content has no public-share action.
- Added an idempotent batch import, native quote validation, five focused editorial tests, and batch-aware browser QA. The full release audit now validates fragments as well as poems.

## Review the batch locally

From `site/`:

```sh
npm ci
npm run crown:import
npm run poetry:validate
npm run quotes:validate
npm test
npm run build
npm run preview:poetry -- --production
```

The review command binds only to loopback on port 3002. Review paths are `/`, `/crown-of-phases`, `/poetry`, `/quotes`, and `/poetry/<slug>` from the inventory below. Pages are noindex and marked for editorial review. Do not enable the review flag on Vercel or expose the server through a public tunnel. No external staging deployment was created.

For comparison, ordinary production mode is `npm run start -- --hostname 127.0.0.1 --port 3001`. It shows fourteen approved poems; all eighteen new poem routes/social cards and `/quotes` return 404.

The import reads the retained review sources. A second run adds zero entries, preserves later approval/date/artwork changes, and rejects conflicting author text instead of overwriting it. Editorial corrections need owner approval and a deliberate source update; exact-text tests will flag unrecorded revisions.

## New poem inventory — review only

| Title | Preview path |
| --- | --- |
| The Good Scissors | `/poetry/the-good-scissors` |
| The Way Back | `/poetry/the-way-back` |
| The Sleeve | `/poetry/the-sleeve` |
| The Compass Point | `/poetry/the-compass-point` |
| The Hexagon | `/poetry/the-hexagon` |
| Before Eight | `/poetry/before-eight` |
| The Telescope Cap | `/poetry/the-telescope-cap` |
| The Surprise | `/poetry/the-surprise` |
| Error Bars | `/poetry/error-bars` |
| The Unmeasured Minute | `/poetry/the-unmeasured-minute` |
| The Tuning Fork | `/poetry/the-tuning-fork` |
| Room Tone | `/poetry/room-tone` |
| Breath Count | `/poetry/breath-count` |
| After the Appointment | `/poetry/after-the-appointment` |
| Two Tickets | `/poetry/two-tickets` |
| One at a Time | `/poetry/one-at-a-time` |
| A Table of Phases | `/poetry/a-table-of-phases` |
| The Wrong Word | `/poetry/the-wrong-word` |

All twenty fragments are browsable at `/quotes` in review mode. Each has a stable title-based anchor, for example `/quotes#the-note`, `/quotes#the-first-point`, and `/quotes#four-titles`. The full supplied wording is available in the retained review source and native data, without optional social captions becoming website copy.

## QA and evidence

The flow under test: Crown-first navigation leads to poems/fragments, search and filters narrow the visible writing, and fragment links preserve their anchors; secondary navigation still reaches the music and Vallen archives. Public mode excludes the held batch.

Browser plugin unavailable; used installed Python Playwright and system Chromium. No browser dependency was added. The temporary pinned formatter did not change project dependency declarations or the lockfile.

| Check | Result |
| --- | --- |
| Frozen install, production build, TypeScript, lint | PASS |
| Native content tests | PASS: 11 named tests, including original Collection II integrity and new batch wording/privacy/date/import checks |
| Public links and headers | PASS: 35 routes, 136 links; existing redirect, branded 404 and security headers |
| Responsive | PASS: 66 checks across 22 routes at 375, 768 and 1440px; one H1, no overflow, broken loaded images, or page exceptions |
| Final formatted build | PASS: 12 additional desktop/phone checks covering Home, Music, Stories, Golden Section and two new review surfaces |
| Accessibility | PASS: zero automated WCAG 2 A/AA, 2.1 AA and 2.2 AA axe violations across 15 routes; keyboard skip, menu focus/Escape/return and reduced-motion Pixel 5 emulation |
| Poetry | PASS: all 32 review pages match exact stored text, unique canonical/social metadata, all 18 held public routes and cards return 404 |
| Fragments | PASS: all 20 exact texts; search/theme/reset; copied deep anchor; denied-clipboard manual fallback; public 404 and sitemap exclusion |
| Preservation | PASS: all 14 original poem records, native music, novel and book data compare equal to deployed baseline |
| Dependency audit | PASS: zero advisories |

Performance measurements for the three changed public surfaces are recorded in `screenshots/nov6/lighthouse-summary.json`. Draft-only quote pages have no claimed public Lighthouse result. Previous milestone scores are not presented as fresh results.

| Public route | Performance | Accessibility | Best practices | SEO | LCP ms | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | 99 | 100 | 100 | 100 | 2085 | 0.001 |
| Music | 97 | 100 | 100 | 100 | 2489 | 0 |
| Stories | 99 | 100 | 100 | 100 | 2098 | 0.001 |

These are local mobile-simulation lab results, not field Core Web Vitals or real-user INP. The original budgets were retained.

Machine-readable results: [browser QA](screenshots/nov6/qa-results.json), [final checks](screenshots/nov6/final-checks.json), [preservation](screenshots/nov6/preservation.json).

The final [console check](screenshots/nov6/console-checks.json) found no warnings/errors at desktop and phone widths, including an opened Vallen archive note with no overflow.

| Surface | Before | After | Intentional difference |
| --- | --- | --- | --- |
| Homepage | [desktop](screenshots/nov6/before/home-1440.png) · [phone](screenshots/nov6/before/home-375.png) | [desktop](screenshots/nov6/after/home-1440.png) · [phone](screenshots/nov6/after/home-375.png) | Same Crown hero and Golden Section; quieter secondary-work treatment |
| Music | [desktop](screenshots/nov6/before/music-1440.png) · [phone](screenshots/nov6/before/music-375.png) | [desktop](screenshots/nov6/after/music-1440.png) · [phone](screenshots/nov6/after/music-375.png) | Layered panels and repeated actions replaced with a listening path and expandable guide |
| Stories | [desktop](screenshots/nov6/before/project-1440.png) · [phone](screenshots/nov6/before/project-375.png) | [desktop](screenshots/nov6/after/project-1440.png) · [phone](screenshots/nov6/after/project-375.png) | Short introduction, reading directory, optional world notes |
| Golden Section | [desktop](screenshots/nov6/before/poetry-the-golden-section-1440.png) · [phone](screenshots/nov6/before/poetry-the-golden-section-375.png) | [desktop](screenshots/nov6/after/poetry-the-golden-section-1440.png) · [phone](screenshots/nov6/after/poetry-the-golden-section-375.png) | Reading typography, wording, line spacing and artwork retained; shared navigation simplified |
| New fragments | No prior route | [desktop](screenshots/nov6/after/quotes-1440.png) · [phone](screenshots/nov6/after/quotes-375.png) | Native parchment, type, filters and text links; no invented art |
| New poem | No prior page | [desktop](screenshots/nov6/after/poetry-the-good-scissors-1440.png) · [phone](screenshots/nov6/after/poetry-the-good-scissors-375.png) | Existing poem template with exact supplied stanza breaks |

Automated checks do not certify full WCAG conformance. Physical devices, screen readers, Safari/Firefox and external provider contents were not newly verified. No payment, message, Facebook post or production deployment was performed.

## Environment recovery

The executor reattached during diagnosis. Command execution, attachment downloads, native Git read, Node 24, frozen installation, build/tests and actual rendering were verified. The earlier capability-query failure had no retained diagnostics; its root cause and permanent platform recovery cannot be established. It was not diagnosed as an npm, disk, memory or website-code failure.

Corrected stale pre-rebuild startup notes and saved a `start_skill` draft with current startup, health checks and recovery boundaries. The install script, credentials, network policy and published site were not changed. To activate the new instructions for future environments, review/save the draft in environment settings and publish the environment through the product. The current machine is already usable; a draft save itself does not restart or publish it.

## Approval checklist before a website release

- Review the exact wording, punctuation and line/stanza breaks of all 18 new poems.
- Review all 20 fragment texts and choose which to enable. Optional social captions are a separate source and are not website text.
- Review the quieter navigation and two archive entry pages in the screenshots/local build.
- Approve selected content and actual publication dates; leave other entries held. Keep The Golden Section as the anchor unless explicitly changed.
- Authorize a production release separately. Until then, do not push this held-content branch to the public repository or expose the local review server.

See [the next-batch publishing notes](publish-next-crown-batch.md). Existing production remains at the previously approved release.
