# Site content map

Parallax Hearts is the parent identity. Crown of Phases is the featured poetry collection; The Golden Section is its owner-selected anchor. The branch has 35 public HTML routes: 21 core/archive pages and 14 approved poem pages. `/story` remains a permanent alias to `/project`.

## Core and preserved routes

| URL | Purpose / source | Status |
| --- | --- | --- |
| `/` | Crown-first parent landing; `app/page.tsx` | Rebuilt |
| `/crown-of-phases` | Collection and illustrated anchor feature | New |
| `/poetry` | Searchable/filterable archive | New |
| `/sacred-geometry` | Mathematics, symbolism, accessible construction | New |
| `/energy-healing` | Educational practice/evidence overview | New |
| `/music` | Existing catalog/listening guide | Preserved; hero loading optimized |
| `/project` | What the Town Keeps / Vallen | Preserved |
| `/story` | Existing permanent redirect | Preserved |
| `/graphic-novel` | Illustrated story hub | Preserved |
| `/graphic-novel/chapter-one` | Chapter index | Preserved |
| `/graphic-novel/chapter-one/page-001` through `page-006` | Six live illustrated pages | Exact original data retained |
| `/book` | Forthcoming companion-book archive | Original data/status retained |
| `/visuals` | Existing visual archive | Preserved |
| `/about` | Parent identity / Chad Thompson | Rewritten without invented biography |
| `/contact` | Email and existing external destinations | Rewritten; no fake signup form |
| `/shop` | Existing Ko-fi destination and purchase information | Unverified stock/prices removed from website |
| `/support` | Optional support and current-provider information | External accounts/tiers untouched |

## Approved poetry

The owner approved this batch on November 5, 2026. Text is HTML, not only an image. Source notes and original editorial prompts remain internal. Individual canonicals, social cards, CreativeWork metadata and related links use this registry.

| URL | Title | Collection | Source |
| --- | --- | --- | --- |
| `/poetry/the-golden-section` | The Golden Section | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/a-minor-correction` | A Minor Correction | Crown of Phases | Owner-approved image transcription |
| `/poetry/the-unscheduled-coronation` | The Unscheduled Coronation | Crown of Phases | Owner-approved image transcription |
| `/poetry/the-rings` | The Rings | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/the-queens-anger` | The Queen's Anger | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/half-a-moon` | Half a Moon | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/low-tide` | Low Tide | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/no-instrument-for-this` | No Instrument for This | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/superposition` | Superposition | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/interference` | Interference | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/old-light` | Old Light | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/between-two-circles` | Between Two Circles | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/the-tile-setter` | The Tile Setter | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |
| `/poetry/construction-lines` | Construction Lines | Crown of Phases — Collection II | Supplied Collection II Markdown, exact text block |

## Data and publication boundaries

- Poetry: `content/poems.json`; validation/projection in `content/poetry.mjs`, server-only access in `app/lib/poetry.ts`.
- Novel: `app/lib/novel/chapter-one.ts`; six original live pages retained. Future review pages need explicit local opt-in.
- Music: `app/lib/music/what-the-town-keeps.ts`; eleven original records, ten public and one review hold. No release statuses changed.
- Book: `app/lib/book.ts`; forthcoming/in development, with no invented cover, date, ISBN or excerpt.
- Asset registry: `app/lib/story-assets.ts`; original project assets retained.
- Navigation: `app/config/navigation.ts`. Existing social destinations/contact email: `app/lib/seo.ts`.
- Metadata endpoints: `/sitemap.xml`, `/robots.txt`, `/icon.svg`, existing `/favicon.ico`, `/opengraph-image`, and `/poetry/[slug]/opengraph-image`.
- No writing page was invented for unavailable private projects. Missing launch poems were not fabricated. No Crown-specific social handle was guessed.
- Old indexed paths `/field-notes`, `/services`, `/forbidden-knowledge` and `/phylax` already return 404 in the existing live deployment; they were not newly removed by this rebuild.

## Runtime and deployment

Next.js App Router / React / TypeScript / npm, with Node 24 matching CI. No new CMS, database, analytics, mailing-list, health-data or payment service. GitHub Actions runs the expanded Node release audit. Local Python Playwright/Chromium provides additional rendered QA. Vercel/GitHub account configuration remains unverified because connector tools are unavailable.

Publishing instructions: `publish-a-poem.md`. Deployment approval and rollback: `deployment-checklist.md`. Audit and test evidence: `site-audit-2026-11.md` and `screenshots/after/`.
