# Deployment checklist — approval required

**November 7 status:** The owner explicitly authorized this release and approved all eighteen new poems and twenty fragments. See the [release record](releases/2026-11-07-crown-batch.md). The original pre-deployment snapshot below does not negate that subsequent approval; separate authorization is still required for future unapproved content or external-service changes.

The rebuild lives on `feat/crown-of-phases-rebuild` in the actual existing repository. No production deployment, GitHub push, DNS change, payment change, or social-account update has been performed. The cloud environment was published by Chad; that did not publish the website.

## Before requesting production deployment

1. Review the homepage, Crown of Phases, the archive, and The Golden Section at desktop and phone widths. Screenshots are under `docs/screenshots/`.
2. Chad approved the 14-poem batch and The Golden Section anchor on November 5, 2026. This approval does not cover changing held music, publishing private book material, or deploying to production.
3. Confirm `publishedAt` against the actual go-live date. Current dates are the approved release-batch date, not dates of composition.
4. Run the checks in `publish-a-poem.md`. Review the measured Lighthouse results in `site-audit-2026-11.md`; do not treat a failed check as passed.
5. Review the unchanged music guide's ten public entries and held eleventh entry against an authoritative release listing. Do not unhold it based solely on the handoff's reported count.
6. Check the exact current Ko-fi offerings, prices, membership terms, streaming destinations, and social profiles. This environment's external-domain policy prevented those checks; no service failure was established. The site avoids unverified price, stock, tier-benefit, and Facebook Stars claims.
7. Review the educational pages and further-reading references. Mathematical and medical-evidence statements are distinguished from symbolism and subjective experience. Remote source retrieval is blocked by the current allowlist; do not claim a current independent source review was completed.
8. Optional additions: attach original poem card files, the remaining launch poems, README_START_HERE, companion JSON, and playbooks if they should be included in this release. Do not invent missing work. Existing supplied text and the approved Collection II work already have working pages.

## Verify the existing Vercel project before any deploy

GitHub and Vercel connector tools are not exposed in this session. No linked `.vercel/` project configuration was found, so account-side settings remain unverified. Reuse the existing project; do not create a second site as a workaround.

- Git repository: `chthomps4/parallaxhearts-site`.
- Framework: Next.js App Router; Node 24, matching CI.
- Project root directory: expected `site`; verify against the actual existing project.
- Install: `npm ci`. Build: `npm run build`.
- Public content needs no new secrets, CMS, database, mailing-list provider, or payment integration.
- Do **not** set `PARALLAX_LOCAL_REVIEW` or `PARALLAX_SHOW_REVIEW_PAGES` in a hosted deployment. Novel review is no longer implicitly enabled on previews.
- Keep canonical `https://www.parallaxhearts.org`. The observed bare HTTPS host redirects to www with 307; HTTP upgrades with 308. A permanent bare-host redirect may be considered in Vercel settings after owner approval. No host/DNS settings were changed here.

## Review, deploy, and verify

First obtain the owner's explicit approval for the concrete website release and, if needed, an external preview deployment. Before pushing any branch, confirm repository visibility and ensure private source/reference files are appropriate for that repository. Local review commands and screenshots work without publishing anything externally.

After approval, use the existing project's normal Git/Vercel workflow. Confirm the selected commit and environment before deploying. After the deployment completes, request every public route, robots, sitemap, favicon, and the anchor's social image on the real host. Confirm draft exclusion, canonical tags, navigation, and checkout destinations again. No transaction is required to test a checkout link.

## Rollback

Baseline commit: `8d4191df1957d7b75d918ca69b5bc4b5278f6d1a`. Keep the previous known-good Vercel deployment. If a released change regresses, restore that deployment through the existing project and prepare a targeted fix on a branch. Do not force-push or reset another person's work. Content status changes require a rebuild/deployment; public files and caches need separate consideration when withdrawing content.

## Local review commands

```sh
cd /workspace/parallaxhearts-site/site
npm ci
npm run build
npm run start -- --hostname 127.0.0.1 --port 3001
```

In another terminal, use `npm run preview:poetry -- --production` for the explicit local review instance on port 3002. Processes must restart when a cloud machine restarts; they are not restored by publishing an environment snapshot.
