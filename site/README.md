# Parallax Hearts

Next.js App Router site, using Node 24 and npm. Crown of Phases is the featured collection; **The Golden Section** is its owner-selected anchor. The approved release branch contains fourteen poem pages, while preserving music, Vallen, the visual novel and the book archive.

## Develop

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3000
```

These commands run from this `site/` directory. Use the existing checkout; no worktree is needed. Read `AGENTS.md` and the installed Next docs before changing application code.

## Add poetry

```sh
npm run new-poem -- your-poem-slug "Exact poem title"
npm run preview:poetry
```

New entries start as held drafts. The detailed [publishing guide](docs/publish-a-poem.md) covers exact text, stanza breaks, artwork, approval, publication dates, metadata and validation. The explicit review command binds to loopback and refuses hosted Vercel environments. It must not be enabled on a public deployment.

## Validate and build

```sh
npm run poetry:validate
npm test
npm run lint
npm run build
npm run typecheck
npm run audit:deps
npm run audit:links
npm run audit:headers
CHROME_PATH=/usr/bin/chromium npm run audit:lighthouse
```

`npm run audit` runs the Node release checks together and is used by GitHub Actions. Lighthouse starts its own production server and requires Chromium; `CHROME_PATH` is only necessary when it cannot discover the browser. For a targeted recheck without deleting other reports, use `LIGHTHOUSE_ROUTE=music` (or another key in `tools/audit-config.mjs`). Budgets remain enforced.

Additional cloud rendered QA uses the environment's Python Playwright and system Chromium. Start `npm run start -- --hostname 127.0.0.1 --port 3001` and `npm run preview:poetry -- --production` in separate sessions, then run `python3 tools/browser-qa.py`. This writes the explicitly requested screenshots and machine-readable results. No messages or payments are sent; native-share integration uses a local stub.

## Review and release

The November 6 navigation cleanup and next Crown batch are documented in [the review record](docs/2026-11-06-navigation-and-crown-batch.md). The 18 new poems and 20 fragments remain held. See [publishing this batch](docs/publish-next-crown-batch.md) before enabling them.

- [Audit and test results](docs/site-audit-2026-11.md)
- [Before/after evidence](docs/review-evidence.md)
- [Full change log](docs/CHANGELOG_REBUILD.md)
- [Content and route map](docs/site-content-map.md)
- [Asset provenance](docs/asset-provenance.md)
- [Deployment and rollback](docs/deployment-checklist.md)

Poetry approval is recorded; production deployment still requires owner approval. No external account, DNS, payment, or subscription setting was changed. Existing unpublished music and private book material remain protected.
