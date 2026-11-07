# Publish the next Crown batch after approval

**Status update, November 7:** The owner has approved all 38 entries for publication. They are enabled with the actual November 7 release date. See the [release record](releases/2026-11-07-crown-batch.md); the remaining instructions describe the review-to-publication workflow for this and subsequent batches.

The November 6 material is not publication-approved. `content/poems.json` contains fourteen published originals and eighteen held additions; `content/quotes.json` contains twenty held fragments. No publication date is assigned to the additions.

Use `npm run crown:import` to repeat the original import safely. It reads the two retained Markdown files, preserves existing entries and their later approval/artwork fields, and fails on conflicting text. Do not replace the whole poetry registry with the handoff's differently named JSON schema.

## Review

```sh
cd /workspace/parallaxhearts-site/site
npm run build
npm run preview:poetry -- --production
```

Browse `/poetry`, each new `/poetry/<slug>`, and `/quotes` on this loopback-only review instance. The [batch record](2026-11-06-navigation-and-crown-batch.md) lists every poem path. Fragments use stable title anchors such as `/quotes#the-first-point`; do not change a published slug/anchor without a deliberate compatibility plan.

Review metadata is noindex and native public sharing is withheld. Do not enable review variables on Vercel, expose the instance through a public tunnel, or push unapproved writing to the public GitHub repository.

## Enable only the owner-approved entries

For each selected poem or fragment, keep its exact approved text and set `status` to `published`, `textVerified` to `true`, and `publishedAt` to the agreed real `YYYY-MM-DD` date. Record the owner's approval in the internal `sourceNotes`. An `approved` state alone remains held. Future dates remain hidden until that date in America/New_York.

Poem fields and the private artwork workflow are documented in [publish-a-poem.md](publish-a-poem.md). The missing artwork is optional; do not create a false original or publish an unapproved visual prompt as an image caption or alt text.

Fragment fields are `id`, permanent `slug`, exact `title` and `text`, `collection`, `themes`, `featured`, editorial status/date/verification, and internal `sourceNotes`. Existing `socialFormat` and `socialCaption` fields are editorial suggestions; the public projection deliberately excludes them. Continue IDs with `Q21`, `Q22`, and so on when authoring later fragments. The schema validates duplicate IDs/slugs and empty content.

Once at least one fragment is published, `/quotes`, contextual browse links and a single sitemap entry appear automatically. A visible featured fragment appears on Home/Crown; otherwise the first visible fragment is used. Individual fragment anchors do not create thin SEO pages. Related poem links appear only for visible matching themes.

The Golden Section stays the anchor. The existing additional-poem shelf can feature newly approved work using its actual publication date and `featured` flag; adding a batch does not replace the anchor.

## Validate and release

```sh
npm run poetry:validate
npm run quotes:validate
npm test
npm run lint
npm run build
npm run typecheck
npm run audit:deps
npm run audit:links
npm run audit:headers
```

For browser QA, start public mode on port 3001 and review mode on 3002, then run `PARALLAX_QA_OUTPUT=/tmp/crown-browser-qa python3 tools/browser-qa.py`. `PARALLAX_QA_WIDTHS=375,768,1440` selects three widths. Review screens remain distinct from the public-gating checks. Screenshots and results go to the chosen folder, leaving earlier milestone evidence intact.

Run `CHROME_PATH=/usr/bin/chromium npm run audit:lighthouse` for the release performance suite. No budget should be weakened to release a failing change. Check one poem's generated social image and exact text, plus fragment search, theme filtering, deep links and public visibility again after selecting the approval batch.

New source wording requires owner approval and a deliberate update to the retained source; the integrity tests should continue to catch accidental changes. Rebuild on a scheduled release day so the statically generated sitemap updates with dynamically date-gated content.

Production deployment needs its own authorization. Use the existing Git/Vercel project and the [deployment checklist](deployment-checklist.md); preserve the previous known-good release for rollback. Publishing a cloud environment is a different operation from releasing the website.
