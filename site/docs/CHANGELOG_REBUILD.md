# Rebuild change log

Branch: `feat/crown-of-phases-rebuild`. Baseline: `8d4191df1957d7b75d918ca69b5bc4b5278f6d1a`.

## Visitor-facing changes

- Replaced the Vallen-led homepage with Parallax Hearts as the parent creative identity and Crown of Phases as the featured collection.
- Made **The Golden Section** the anchor at the owner's request: direct homepage action, dedicated illustrated feature on Home and Crown, and first archive entry.
- Added `/crown-of-phases`, `/poetry`, fourteen individual poem pages, `/sacred-geometry`, and `/energy-healing`.
- Imported twelve Collection II poems without changing a character in the text blocks; retained two image-transcribed poems. Enabled the batch after the owner's explicit approval on November 5, 2026.
- Added live title/text search and theme, collection and form filters, a real empty state, reset, related poems, native-share handling and clipboard/manual link fallback.
- Added semantic stanza text, per-poem canonical URLs, titles/descriptions, CreativeWork data and social-image generation. Original artwork is optional and separate from readable poem text.
- Added a three-step equal-radius circle construction with accessible explanations; distinguished mathematics, cultural meaning and literary analogy. Corrected the equilateral-triangle explanation during editorial QA.
- Added an educational healing section that distinguishes traditions, subjective experience and evidence; no invented practitioner qualifications, services or medical efficacy claims.
- Rewrote About and Contact for the wider creative identity without adding biographical facts beyond supplied ownership/name. Removed the repeated mailing-list invitation; email is clearly mailto.
- Replaced unverified shop prices, InStock offers and tier/Stars claims with honest links to existing provider pages. No prices, products, payment flows or subscriptions were changed externally.
- Preserved Music, Vallen, the visual novel, book archive and visuals. Optimized the music hero's loading priority and removed extra image filtering.

## Shared design and assets

- Midnight indigo, moon white, antique copper and parchment reading surfaces; open editorial layouts instead of more generic panel grids.
- Local, openly licensed Cormorant Garamond and DM Mono; no external font calls.
- Consistent six-link header, working responsive disclosure navigation, shared footer, visible focus and reduced-motion support.
- Added optimized lunar artwork, subtle paper texture and a new Golden Section illustration based on the supplied visual direction. The illustrations do not substitute for poem text or claim to be the original uploaded cards.
- Added a geometric SVG site icon and retained the existing favicon URL.

## Content and technical changes

- Server-only JSON content registry and a public-field projection that excludes source notes and visual prompts.
- Draft/approved/published/archived states, verified-text gate, real calendar-date validation, future-date exclusion in America/New_York, and explicit loopback-only editorial review.
- New-poem CLI, private artwork optimization/promotion CLI, validation command and publishing guide. No CMS, database, paid service, or credentials added.
- Novel review no longer turns on implicitly in hosted previews; all existing live data remains unchanged.
- Escaped JSON-LD `<` characters; narrowed production CSP by removing eval; disabled X-Powered-By.
- Next.js 16.4.5, compatible dependency updates, Linkinator 8 and patched transitive glob/minimatch versions. Full audit now reports zero advisories.
- Expanded route audits, fixed local-only proxy handling for Linkinator, added source/privacy/date tests and browser QA. Lighthouse supports a single-route rerun without deleting unrelated reports.
- Fixed QA-discovered SVG hydration and filter-label issues. Recorded tests, live-route findings, asset provenance, before/after screenshots, preservation comparison and deployment/rollback instructions.

## Preserved and not performed

The six novel pages, eleven music guide records (ten public, one held), companion-book data and original project images are retained. No unreleased music status was changed. No private manuscript was introduced publicly. No production deployment, GitHub push, external messages, DNS, payment, subscription, social account, or cloud environment publication changes were made.

Detailed findings, measurements and remaining external checks are in `site-audit-2026-11.md`.
