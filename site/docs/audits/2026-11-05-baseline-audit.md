# November 2026 rebuild audit — in progress

Baseline: `8d4191df1957d7b75d918ca69b5bc4b5278f6d1a`.
Working branch: `feat/crown-of-phases-rebuild`.

The supplied handoff was read in full. Its public observations are hypotheses until verified here. This is an initial source audit, not a completed visual or live deployment audit.

## Verified source findings

| Route/component | Finding and reproduction/evidence | Confidence | User impact / priority | Remedy | Verification |
| --- | --- | --- | --- | --- | --- |
| `/`, `/about`, root layout | Home H1 promotes a haunted town; About H1 says “Parallax Hearts is the music”; root description and category define a music project. Read `app/page.tsx`, `app/about/page.tsx`, `app/layout.tsx`. | Verified source; mismatch with requested new identity | Parent creative identity and poetry are absent; P1 | Rework parent brand and feature Crown, retaining Vallen/music | Implementation pending |
| Crown and poetry routes | No Crown or poetry route, canonical poem content, or authoring workflow exists in this checkout. Inventory `app` and tracked files. | Verified source | Requested flagship reading journey unavailable; P1 | Add content-driven routes once canonical text and artwork arrive | Missing source package |
| Shared dispatch invitation | `DispatchSignup.tsx` uses `mailto:`; explicitly states it opens an email app. No newsletter provider integration. | Verified source; not a broken form or false submission success | Visitors cannot subscribe on-site; P2 | Relabel as email contact; do not claim a working web newsletter or introduce a provider without authorization | Runtime untested |
| `/shop` | Six product prices hard-coded; “Visit Ko-fi Shop” points to a profile URL, not a specific verified product. | Verified source; live availability unknown | Potentially inaccurate commerce expectations; P1 | Preserve external service; remove or explicitly qualify unverified listings after audit | External verification blocked by network policy |
| Shared header/footer | Root owns header; older page instances return null when passed `active`. Footer nav is centralized, but social constants are duplicated across Contact/Shop/Support. | Verified architecture; duplicate rendered header not established | Future drift risk; P2 | Consolidate social configuration and simplify navigation | Visual behavior pending |
| `/music` data | Eleven source entries: ten `published`, one `review_hold`. Handoff reports eleven released tracks; this is not an authoritative release reconciliation. | Verified source; catalog status discrepancy unresolved | Risk of inadvertently exposing held work; P1 | Keep hold intact until authoritative release listing verified | No status changes made |
| Audit coverage | `tools/audit-config.mjs` explicitly tests 16 routes but omits `/book`; header audit labels `/story`→`/project` a “canonical redirect”, which does not test bare/www host behavior. | Verified source | Incomplete regression coverage; P2 | Extend route coverage and separately verify deployed host redirects | Existing runner checks pending |
| Structured data | Root includes MusicGroup on every page; `creativeWorkSchema` always assigns works to What the Town Keeps. | Verified source | New poetry would receive misleading schema if helper reused unchanged; P2 | Use appropriate parent WebSite and collection-specific CreativeWork data | No poetry data published |

## Environment and evidence

- Node 24.22.1 and npm 11.9.0 match the CI's Node 24 major.
- Git 2.52.0; read-only authenticated `git ls-remote origin HEAD` succeeded outside the restricted command sandbox. Remote HEAD matches baseline.
- Chromium 155 and Python Playwright passed DOM assertion and screenshot capture outside the command sandbox.
- Pillow is installed for image inspection/processing. Image generation tool is available for design concepts; original supplied artwork remains the intended content source.
- GitHub/Vercel connector tools are not exposed in this session. Git works through the injected HTTPS route; Vercel account/project settings remain unverified.
- Live `www.parallaxhearts.org` request received a proxy CONNECT 403: blocked/unknown, not evidence of a website defect.
- No production deployment, DNS, commerce, social account, or content publication changes made.

## Source package still required

Only `CODEX_HANDOFF_PARALLAX_HEARTS_REBUILD.md` was attached. Absent: `README_START_HERE.md`, canonical `content/crown-of-phases-poems.json`, original `assets/`, `reference/` playbooks, `SITE_COPY_STARTERS.md`, and `QA_ACCEPTANCE_CHECKLIST.md`. Poem wording must not be inferred from titles or invented. The handoff requires review states and owner approval before website publication.

## Baseline validation results

| Check | Outcome |
| --- | --- |
| Frozen dependency installation | PASS: 487 packages; fresh writable `/tmp/parallax-npm-cache`; TLS and integrity verification enabled |
| Lint, production build, explicit TypeScript check | PASS: `npm run lint`, `npm run build`, `npx --no-install tsc --noEmit` |
| Development and production startup | PASS: real homepage request and expected content |
| Security headers, `/story` redirect, branded 404 | PASS: existing header runner; this does not verify deployed host redirects |
| Existing route/link runner | Initial tooling failure: Linkinator sends loopback through external proxy. PASS with proxy variables omitted only for this local-only child process: 16 explicit routes and 105 links; external destinations excluded by existing runner |
| Independent local crawl | PASS: 20 destinations, including `/book`, robots, sitemap and `/story`; see `screenshots/before/local-crawl.json` |
| Responsive browser baseline | PASS: 60 full-page screenshots, 12 routes × 375/430/768/1024/1440px. Each returned 200, had one H1, no horizontal overflow, no broken loaded images and no page errors. See `screenshots/before/results.json` |
| Mobile menu | PASS: open, Escape close, aria-expanded update, focus return |
| Dependency audit | FAIL: 22 advisories: 12 moderate, 9 high, 1 critical. Production-only audit: four affected packages (`next`, `sharp`, `source-map-js`, `baseline-browser-mapping`). Registry reports critical Next.js advisories including image optimization RCE. Repository dependency remediation remains required before release; no lockfile changes made during environment setup |
| Lighthouse | FAIL performance budgets on six of seven routes. All seven scored accessibility/best-practices/SEO 100. Performance: home 80, graphic-novel 83, reader 90, music 79, project 77, support 68, contact 79. CLS 0 on all. Local lab results under shared-machine load, not field Core Web Vitals. Summary in `screenshots/before/lighthouse-summary.json`; raw reports in ignored `.lighthouseci/` |

Homepage phone and desktop screenshots were visually inspected. These automated results do not establish complete WCAG conformance, every interaction, private-content protection, external availability, or live deployment health.

## Remaining work

Implement the rebuild, dependency remediation, publication-safe poetry system, geometry and healing sections, then rerun QA and capture after screenshots. Complete keyboard/dialog/share/filter journeys, external social/streaming/checkout validation, authoritative catalog reconciliation and deployed canonical/robots/sitemap checks. GitHub and Vercel connectors are unavailable; Git HTTPS read works. Live domain access is blocked until saved environment network changes apply. No completed-rebuild or production-readiness claim is made.

## Saved environment configuration

Install script, complete startup/QA instructions, and custom network destinations `parallaxhearts.org` and `www.parallaxhearts.org` saved successfully in the environment draft. Existing package-manager preset preserved. Saving does not apply network changes or publish a snapshot. Review/save environment settings and publish the **environment** to retain the configuration; this is separate from website production deployment.
