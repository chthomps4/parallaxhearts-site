# Parallax Hearts rebuild audit — November 5, 2026

Implemented in the existing Next.js repository on `feat/crown-of-phases-rebuild`, based on `8d4191df1957d7b75d918ca69b5bc4b5278f6d1a`. No production deployment or external account changes performed. Chad approved the poetry and selected **The Golden Section** as anchor during this work. The release branch contains 14 enabled poems; the live website still serves its previous deployment.

The handoff was read in full. Its public observations were treated as leads, not established defects. The later Collection II Markdown was read in full and its twelve text blocks imported verbatim. Its original draft-status note is superseded by Chad's subsequent approval; the input file remains unchanged as provenance. Earlier setup findings and baseline results are preserved in `audits/2026-11-05-baseline-audit.md`.

## Verified findings and repairs

P1 means a significant content, security, or functional issue; P2 means a smaller issue or maintenance risk. No exploited compromise or P0 incident was established.

| Route/component | Finding and exact evidence | Confidence / type | Impact / priority | Repair | Verification |
| --- | --- | --- | --- | --- | --- |
| `/`, `/about`, shared layout | Baseline home H1: “A haunted little town…”; About: “Parallax Hearts is the music”; root description/category and header bind the entire identity to music/Vallen. Baseline commit and screenshots reproduce it. | Verified source and live output; requested brand mismatch | Parent identity and poetry absent; P1 | Crown-first home, creator/identity About, six-link navigation, shared editorial footer, broader metadata | Screenshots and all 35 route checks pass |
| Poetry/Crown | No collection, index, poem route or publishing data existed in baseline. | Verified missing capability | No requested reading journey; P1 | 14 poem permalinks, Crown collection, search/theme/collection/form filters, anchor feature, share/copy controls | Exact-text, metadata, sitemap, filtering, empty-state/reset and browser tests pass |
| Dependency tree | Baseline `npm audit`: 22 advisories, including critical Next.js. Production-only tree: four affected packages. This establishes affected locked dependencies, not exploitation of the deployed website. | Verified registry audit | Security release blocker; P1 | Next 16.4.5 and compatible updates; Linkinator 8; patched glob/minimatch overrides tested on Node 24 | Fresh `npm ci`, build, lint, typecheck and full audit pass; zero advisories |
| `/shop` metadata | Baseline `shop/layout.tsx` unconditionally emits six offers with prices and `InStock`; product-level destinations/availability not verified. | Verified unconditional claims; actual inventory unknown | Misleading purchase expectations; P1 | Removed unverified offers/stock schema and guide prices; retained existing Ko-fi destination, clearly labeled external | HTML/route/axe checks pass; external inventory still unverified |
| `/support`, `/contact` | Tier/benefit and Facebook Stars claims appear without current provider verification. | Verified copy; provider facts unknown | Unsupported service expectations; P1 | Neutral support information and existing account links; no changes to memberships, payments, or accounts | Rendered pages and links pass locally; provider checks policy-blocked |
| Global dispatch invitation | Old component opens `mailto:` and honestly discloses that behavior; it is not a functioning web subscription system. It appears on most non-reader pages. | Verified behavior; not a fake form-success bug | Vallen-heavy repeated CTA and subscription ambiguity; P2 | Removed unused dispatch component; clear email contact with no newsletter promise | Mailto path inspected; no form/provider introduced |
| Structured data | MusicGroup emitted globally; About identifies the brand as a Person. Generic existing story helper assigns works to Vallen. | Verified source | Wrong context if reused for poetry; P2 | Root WebSite; About identifies Chad from supplied facts; poems have their own CreativeWork/collection data; music/story schemas remain scoped to existing work | Public HTML inspection, unique canonical/title/image checks and Lighthouse SEO 100 |
| Internal editorial notes | New content includes editorial provenance and image prompts that must not become page copy or client data. | Verified implementation risk; no observed historical leak | Potential future private-content exposure; P1 | Server-only registry, explicit public projection, held editorial states, date gate, local-only review, no public source directory | Six Node tests; browser verifies no sourceNotes in HTML, internal-file requests return 404 |
| Novel review switch | Baseline automatically shows non-live entries in development or Vercel previews. All six existing pages are live, so no current private-page leak was established. | Verified configuration risk | Future unintended publication; P2 | Requires explicit local development flag and no hosted Vercel environment | Original six-page data preserved; reader routes pass |
| Release coverage | Original route list omits `/book`; no poetry checks. Linkinator sends localhost via the managed outbound proxy, yielding status 0. | Verified runner failure | False broken-link results and missing coverage; P2 | Local-only crawler child omits proxy selectors while excluding every external URL; expanded core routes plus published poems | 35 routes and 134 links pass |
| `/music` LCP image | Lighthouse discovers hero image at low fetch priority and reports performance 84 in first post-rebuild run. Source also applies a paint filter to the large hero. | Verified lab result/source | Slow initial rendering; P2 | Explicit high fetch priority/eager loading; removed unnecessary filter, retained source image, content and destinations | Isolated remeasurement 93 performance; other categories 100 |
| Production CSP | Baseline permits `unsafe-eval` in all environments. | Verified response/configuration | Unneeded production permission; P2 | Limit eval to development; retain inline allowance needed by current Next rendering; disable X-Powered-By | Header suite and browser/Lighthouse checks pass; nonce-based CSP not introduced |
| JSON-LD rendering | Direct JSON serialization does not escape `<` if future content contains script-like text. No malicious content was observed. | Verified hardening opportunity | Future injection risk; P2 | Shared JsonLd escapes `<` as a Unicode escape | Rendering and static review pass |
| Geometry diagram, during QA | Multi-child SVG title produced React hydration error #418. | Verified development and production browser error | Broken hydration/interaction risk; P1 | Single-string SVG title; accessible named steps | Hydration reproduction cleared; step changes and WCAG checks pass |
| Poetry filters, during QA | Wrapped select labels include option text in label lookup; exact accessible labels are unreliable. | Verified browser locator/DOM finding | Difficult programmatic naming; P2 | Explicit labels and control IDs | Search and all three filter controls pass |
| Artwork dimensions, during QA | New square anchor artwork cannot use an assumed portrait ratio. | Verified file geometry | Layout shift risk; P2 | Actual imageWidth/imageHeight fields; validator compares them with file metadata | Artwork validation passes; measured CLS within budget |

## Live deployment observations — separate from branch QA

`docs/screenshots/before/live-audit.json` records read-only responses from the real host. Existing core pages and six chapter pages returned 200 with the expected www canonicals. `/story` returned 308 to `/project`; robots and sitemap returned 200. `/field-notes`, `/services`, `/forbidden-knowledge`, and `/phylax` returned 404. The current live homepage matches the checkout's old Vallen identity. No inconsistent current navigation, cache defect, or missing historical content was inferred merely from old indexed pages.

HTTP upgrades with 308. Bare HTTPS redirects to www with **307**. A permanent host redirect is an optional hosting improvement, not a demonstrated content failure. Hosting/DNS settings were left unchanged.

## Current checks

| Check | Result and scope |
| --- | --- |
| Reproducible installation | PASS: fresh frozen-lockfile `npm ci`, 489 installed packages; integrity and TLS checks retained |
| Build / lint / TypeScript | PASS: actual production build, ESLint and explicit tsc |
| Content tests | PASS: six tests covering editorial gating, dates including New York midnight, private-field projection, host/deployment restrictions, invalid paths/slugs, and all twelve source texts |
| Dependency audit | PASS: zero vulnerabilities in the full installed tree |
| Routes / links / headers | PASS: 35 public pages, 134 internal links, security headers, `/story` redirect and branded 404 |
| Responsive browser | PASS: 95 checks/screenshots across 19 pages × 375/430/768/1024/1440px; one H1, 200, no horizontal overflow, loaded images intact, no page exceptions |
| Accessibility | PASS: zero automated WCAG 2 A/AA, 2.1 AA and 2.2 AA axe violations across 12 changed/preserved journeys; keyboard skip, menu focus/Escape/return, and reduced-motion mobile emulation checked |
| Poetry and interactions | PASS: all 14 exact stored texts, page-specific canonical/social images, approved sitemap entries, anchor navigation, search/filters/reset, clipboard/manual fallback, geometry steps; native-share payload checked with a stub rather than posting anything |
| Preservation | PASS: complete six-page novel data, all eleven music-guide records including the held record, and companion-book data compare equal to baseline; evidence in `screenshots/after/preservation.json` |
| External integrations/references | BLOCKED: ten destination checks received proxy CONNECT denials; those are not destination 403s. No current product, subscription, social ownership, distributor listing, or reference retrieval verification is claimed |

Automated accessibility scores do not certify complete WCAG conformance. Chromium and Pixel 5 emulation were exercised; physical devices, VoiceOver/NVDA, Safari and Firefox were not. No field Core Web Vitals or real-user INP data was available. No external form, payment, mailing-list, analytics, or medical-information collection was added.

## Lighthouse measurements

Local mobile-simulation Lighthouse reports, not field data. The full run covered twelve routes. Music and geometry were remeasured after their specific corrections; the other ten route measurements were retained. Raw reports are in ignored `.lighthouseci/`; durable results are in `screenshots/after/lighthouse-summary.json`. Existing strict category and payload/CLS/LCP budgets were not relaxed.

| Route | Performance | Accessibility | Best practices | SEO | LCP ms | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| /poetry/the-golden-section | 96 | 100 | 100 | 100 | 2647 | 0.0 |
| /contact | 99 | 100 | 100 | 100 | 1879 | 0.046 |
| /crown-of-phases | 97 | 100 | 100 | 100 | 2558 | 0.001 |
| /energy-healing | 99 | 100 | 100 | 100 | 1955 | 0.001 |
| /sacred-geometry | 96 | 100 | 100 | 100 | 2648 | 0.001 |
| /graphic-novel | 97 | 100 | 100 | 100 | 2490 | 0 |
| / | 96 | 100 | 100 | 100 | 2755 | 0.001 |
| /music | 93 | 100 | 100 | 100 | 2786 | 0 |
| /poetry | 98 | 100 | 100 | 100 | 2265 | 0.001 |
| /project | 96 | 100 | 100 | 100 | 2705 | 0 |
| /graphic-novel/chapter-one/page-001 | 95 | 100 | 100 | 100 | 2847 | 0 |
| /support | 97 | 100 | 100 | 100 | 2493 | 0.001 |

Before scores on comparable pages: Home 80, Music 79, Support 68. The measured branch now meets the requested ≥90 performance goal on every measured route and scores 100 in the other three categories.

## Remaining limitations and release decisions

- No production deployment, external preview deployment, GitHub push, DNS, payment, subscription, or social-account changes were performed. Vercel/GitHub connector tools remain unavailable; account-side project configuration needs verification before deployment.
- External provider destinations and further-reading sources are outside the current environment allowlist. See `screenshots/after/external-checks.json`. Retained social links are existing destinations, not newly verified ownership claims. No Crown-specific Facebook URL was invented.
- Reconcile the reported eleven-track album release with the existing guide's ten public entries and one held record. Poetry approval does not authorize unholding music or publishing private books.
- The original poem-card file bytes, two additional launch poems, README_START_HERE, companion JSON and reference playbooks were not supplied as accessible files. Missing work was not invented. The approved fourteen-poem site is functional without it; originals can be added through the documented private artwork workflow.
- The first two transcriptions were approved by the owner; supplied original image files should still be used for visual-edition import and final typography comparison when available. The twelve Collection II text blocks match the supplied Markdown character for character.
- Existing duplicate images under `app/public/images` are not Next's public assets and appear unreferenced. They were retained as original project material, not deleted opportunistically. Existing archive styling remains distinct inside those preserved pages.
- Published dates are the owner's approved release-batch date. Confirm the actual go-live date before deployment. Source dates of composition were not invented.

See `publish-a-poem.md`, `deployment-checklist.md`, `CHANGELOG_REBUILD.md`, `site-content-map.md`, and `design/fidelity-ledger.md` for operations and review evidence. Environment publication was completed by the owner earlier; this rebuild did not reapply or republish the cloud environment configuration.
