# Parallax Hearts Full Site Audit

**Audit date:** July 18, 2026

**Production URL:** https://www.parallaxhearts.org

**Repository:** `chthomps4/parallaxhearts-site`

**Audit branch:** `codex/parallaxhearts-full-audit-update`

**Baseline SHA:** `54a6d7e6bbfaca2ba2da5af38eedd74261ea3acc`

**Live deployment at audit start:** `dpl_BMFwoFbDAhrauoqgxa9wMX8CiQps`

## Release status

The release candidate is **ready for review**. All local release gates pass, the
core desktop and mobile journeys pass interactive smoke testing, and no Critical
code blocker remains. Production has not been changed: repository policy requires
explicit owner approval before merge or production deployment.

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

## Evidence

- Live and release-candidate captures:
  `C:\Users\Signal Workshop\Documents\Audits and Repairs\output\parallaxhearts-full-audit-20260718`
- Local Lighthouse JSON reports: `site/.lighthouseci`
- CI workflow: `.github/workflows/site-audit.yml`
- Audit implementation: `site/tools`

The screenshot set includes desktop/mobile home, mobile menu, graphic-novel hub,
reader pages 1 and 2, project, music, support, contact, 404, and paired before/after
comparisons for the changed states.

## Blocker list

### Critical

- None found in the release candidate.

### Major

- **Production remains on the audited baseline until owner approval.** The live
  site still has the AdSense console failure, default 404, older menu semantics,
  and unreconciled source history until this PR is merged and deployed.

### Minor

- The ten legacy MP3 files remain under `public/audio` even though the current UI
  no longer references them. They add roughly 95 MB to the repository and should
  be handled as a separate content-retention decision.
- External social destinations are manually smoke-tested but intentionally not
  hard-failed in CI because several platforms rate-limit or block audit clients.

## Release and rollback

1. Review the draft PR and its GitHub Actions/Vercel preview checks.
2. Smoke the preview at desktop and mobile widths, especially menu, reader,
   contact, music, support, and unknown-route recovery.
3. After explicit owner approval, merge to `main` and allow the connected Vercel
   project `parallaxhearts-site-zxm3` to deploy.
4. Confirm aliases `parallaxhearts.org` and `www.parallaxhearts.org`, rerun the
   live smoke, and compare the production deployment SHA with the merged commit.
5. If a release regression appears, immediately reassign the production aliases
   to deployment `dpl_BMFwoFbDAhrauoqgxa9wMX8CiQps`, then revert the merge in Git.
