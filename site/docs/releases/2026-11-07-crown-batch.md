# Crown of Phases release — November 7, 2026

Chad authorized publication of the updated site, then explicitly selected “Approve all 38 new entries” for the eighteen poems and twenty fragments. Their November 6 review status is superseded by this approval. No wording, punctuation or stanza breaks were changed. `publishedAt: 2026-11-07` records this release date, not a composition date.

This release combines the quieter navigation/music/story pages with the approved literary expansion. The Golden Section remains the anchor. There are now **32 published poem pages and 20 published fragments**, with a single Quotes & Fragments browse page at `/quotes` and stable fragment anchors. The full original music, novel and book data is preserved, including held music. No DNS, payments, subscriptions, social accounts or cloud configuration changes are part of this release.

The production baseline is `d50857053e0a4768f5e5b57d718d7c27f12e1303`; the reviewed implementation is `5edc9b7`. The current release adds the explicit approval/date records and enables public fragment validation, including the new quote page in Lighthouse. Source/editorial notes and optional social captions remain excluded from website HTML/client data.

Validation covers native source-integrity/publication/privacy tests, build/lint/TypeScript, public route/link/header checks, and browser behavior in both public and local review modes. The source Markdown retains its historical draft labels as provenance; the later owner approval is recorded in each enabled record. The earlier snapshot's scores and draft 404s are not substitutes for checking this published configuration.

Pre-deployment results: production build, lint, TypeScript, eleven named tests, 54 public routes/156 internal links, security-header checks and zero dependency advisories pass. Chromium verified all 32 poem texts and 20 fragments, metadata/sitemap visibility, filters, canonical copy/share payloads, keyboard/mobile navigation and fifteen axe scans with no violations. The previously completed 66 responsive checks are historical review evidence; the release run repeats interaction/publication checks rather than claiming a second full responsive pass.

The newly public quote page passes the unchanged Lighthouse budgets: performance 99, accessibility 100, best practices 100, SEO 100; local mobile lab LCP 1959ms and CLS 0.001. The GitHub release audit also includes this route going forward. These are lab measurements, not field data.

Deployment uses the existing repository and Vercel Git integration. A completed Git push is not sufficient proof of release: verify the actual production homepage, four-item navigation, `/quotes`, all 32 poem pages, fragment copy/share links, sitemap and metadata on `https://www.parallaxhearts.org` after deployment. The previous known-good deployment remains the rollback target if a production regression appears.
