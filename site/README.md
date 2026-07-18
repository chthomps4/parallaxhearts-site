# Parallax Hearts

The Next.js site for Parallax Hearts and *What the Town Keeps*.

## Local development

```powershell
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Release audit

The release gate installs from the lockfile, checks dependencies, lints and
builds the production app, crawls every public route, verifies redirects and
security headers, and enforces Lighthouse budgets across the core journeys.

```powershell
npm ci
npm run audit
```

Individual checks are also available:

```powershell
npm run audit:deps
npm run lint
npm run build
npm run audit:links
npm run audit:headers
npm run audit:lighthouse
```

Lighthouse JSON reports are written to `.lighthouseci/` and uploaded by the
GitHub Actions workflow for every pull request and push to `main`.
