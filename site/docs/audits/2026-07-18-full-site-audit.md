# Parallax Hearts Full Site Audit

**Audit date:** July 18, 2026

**Production URL:** https://www.parallaxhearts.org

**Repository:** `chthomps4/parallaxhearts-site`

**Audit branch:** `codex/parallaxhearts-full-audit-update`

**Baseline SHA:** `54a6d7e6bbfaca2ba2da5af38eedd74261ea3acc`

**Live deployment at audit start:** `dpl_BMFwoFbDAhrauoqgxa9wMX8CiQps`

**Release candidate SHA:** `c5b678bbab6b3a42dea5cb0c91f6107d49c2850a`

**Production merge SHA:** `983bcade9a45af7527c23d47b8007dfcc1645a33`

**Initial production release deployment:** `dpl_9mfGYZLfECftAS6dGKcV7ATZzfNa`

## Release status

The release is **deployed and verified**. PR #57 was approved and merged to
`main`, Vercel promoted the resulting build to both production aliases, and the
post-release HTTP and interactive browser smoke passed. No Critical or Major
release blocker remains.

## Executive findings

1. **Major - production/source drift:** the current production deployment came
   from a local Vercel CLI upload and contains music-page changes that were never
   committed to `main`. This branch reconciles those already-live changes so the
   next Git deployment can reproduce the public site.
2. **Major - third-party script failure:** the global AdSense script generated a
   warning and an unhandled promise error on every audited production route, did
   not render an ad, weakened the content security policy, and reduced the live
   homepage Lighthouse scores. The release candidate removes the unused script
   and its allowed origins.
3. **Major - dead-end error state:** unknown production routes rendered the
   default Next.js 404 without site navigation or recovery actions. The release
   candidate adds a branded, non-indexable recovery page.
4. **Major - mobile navigation semantics:** the live disclosure menu did not
   expose expanded state and had no intentional focus/Escape behavior. It is now
   a controlled button/nav pattern with `aria-expanded`, first-link focus,
   `aria-current`, and Escape focus restoration.
5. **Major - dependency health:** the baseline contained one low and one moderate
   npm advisory. The lockfile and framework packages were updated; `npm audit`
   now reports zero vulnerabilities.
6. **Minor - contact safety:** the contact page uses email links rather than a
   web form, but did not explain that boundary or discourage sensitive content.
   The page and dispatch signup now include concise safety guidance.
7. **Minor - reader accessibility:** the visual progress bar had no accessible
   name. It now announces the current page and total, and the CI accessibility
   budget is 100 rather than 95.

## Journey audit

1. **Homepage and global navigation - Healthy.** Desktop and mobile layouts have
   one H1, no horizontal overflow, no broken images, and preserve the existing
   visual composition. Mobile menu focus and Escape behavior pass.
2. **Visual-novel hub and reader - Healthy.** Chapter One pages 1-6 return 200,
   reader progression from page 1 to page 2 works, images load, and the progress
   bar has a programmatic name.
3. **Story/project and visuals - Healthy.** Core images load at desktop and mobile
   sizes, internal paths resolve, and `/story` permanently redirects to the
   canonical `/project` route.
4. **Music - Healthy.** The already-live Spotify-led music experience is now
   represented in Git, the playlist destination resolves, and the retired global
   audio-player code is removed.
5. **Support/shop - Healthy.** Ko-fi, Facebook, Instagram, YouTube, SoundCloud,
   and Spotify destinations resolve. Ko-fi returns an automated-client 403 but
   was manually loaded and identified as "Buy Parallax Hearts a Coffee."
6. **Contact - Healthy.** There is no site-side form or data submission; mail links
   work and the page now states the privacy/safety boundary.
7. **Unknown routes - Healthy.** Unknown URLs return HTTP 404 with branded home,
   reader, and music recovery links and `noindex` metadata.
8. **Security headers - Healthy.** CSP, HSTS, frame, MIME, referrer, and permissions
   headers pass the automated gate; removed advertising origins are not allowed.

## Validation results

The exact release command passed on July 18, 2026:

```powershell
npm run audit
```

It executes the following gates in order:

- `npm audit --audit-level=low`: **pass, 0 vulnerabilities**
- `npm run lint`: **pass**
- `npm run build`: **pass, 22 static/SSG pages generated**
- `npm run audit:links`: **pass, 16 explicit routes and 95 reachable internal links**
- `npm run audit:headers`: **pass, headers, redirect, and branded 404**
- `npm run audit:lighthouse`: **pass, all category and metric budgets**

| Journey | Performance | Accessibility | Best practices | SEO | LCP | CLS | Transfer |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | 98 | 100 | 100 | 100 | 2,366 ms | 0.000 | 246 KiB |
| Graphic novel | 98 | 100 | 100 | 100 | 2,483 ms | 0.000 | 418 KiB |
| Reader | 96 | 100 | 100 | 100 | 2,788 ms | 0.000 | 301 KiB |
| Music | 96 | 100 | 100 | 100 | 2,790 ms | 0.000 | 254 KiB |
| Project | 97 | 100 | 100 | 100 | 2,563 ms | 0.000 | 457 KiB |
| Support | 98 | 100 | 100 | 100 | 2,330 ms | 0.000 | 247 KiB |
| Contact | 98 | 100 | 100 | 100 | 2,415 ms | 0.000 | 292 KiB |

The live homepage baseline was performance 78, accessibility 100, best practices
93, SEO 100, LCP 4,491 ms, and 453 KiB transferred. The release candidate removes
the recurring console error and improves the measured homepage performance by 20
points in the same local Lighthouse gate.

Post-release checks confirmed 200 responses for the home, contact, music,
project, support, and reader routes; the branded unknown route returns 404. The
production reader advanced from page 1 to page 2, the mobile menu moved focus on
open and restored it after Escape, all inspected images loaded, and the audited
browser console contained no warnings or errors. Security headers and the absence
of the retired AdSense script were also confirmed against the public aliases.

## Evidence

- Live and release-candidate captures:
  `C:\Users\Signal Workshop\Documents\Audits and Repairs\output\parallaxhearts-full-audit-20260718`
- Local Lighthouse JSON reports: `site/.lighthouseci`
- CI workflow: `.github/workflows/site-audit.yml`
- Audit implementation: `site/tools`

The screenshot set includes desktop/mobile home, mobile menu, graphic-novel hub,
reader pages 1 and 2, project, music, support, contact, 404, and paired before/after
comparisons for the changed states. Production captures are numbered 18-24.

## Blocker list

### Critical

- None found in the release candidate.

### Major

- None. The source-drift, console-error, 404, navigation, and dependency findings
  were remediated and verified in production.

### Minor

- External social destinations are manually smoke-tested but intentionally not
  hard-failed in CI because several platforms rate-limit or block audit clients.

## Release and rollback

1. PR #57 was merged to `main` at
   `983bcade9a45af7527c23d47b8007dfcc1645a33`.
2. Vercel deployment `dpl_9mfGYZLfECftAS6dGKcV7ATZzfNa` was the initial
   production release on `parallaxhearts.org` and `www.parallaxhearts.org`.
3. The public aliases passed desktop/mobile, menu, reader, contact, 404, header,
   and route smoke checks after promotion.
4. A post-merge CI-only first-trace variance was reproduced twice. The follow-up
   keeps the 85 performance budget, adds a disposable Lighthouse warm-up, and
   ensures hidden Lighthouse reports are uploaded for future diagnosis.
5. Post-release cleanup removed ten unreferenced MP3 files totaling 95,192,729
   bytes and stopped publishing their retired local URLs in album metadata.
6. If a release regression appears, reassign the production aliases to deployment
   `dpl_BMFwoFbDAhrauoqgxa9wMX8CiQps`, then revert the release merge in Git.
