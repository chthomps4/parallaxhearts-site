# Parallax Visual Novel UX Audit Prompt

Purpose: Audit the Parallax Hearts visual novel and music-story funnel without changing files.

Scope:
- Public routes: `/`, `/graphic-novel`, `/graphic-novel/chapter-one`, live `/graphic-novel/chapter-one/page-*`, `/music`, `/support`, `/about`, `/contact`.
- Novel page renderer, chapter archive, soundtrack CTA, support CTAs, navigation, footer, metadata, and public copy.
- Reader orientation, CTA hierarchy, mobile flow, accessibility, and public trust.

Product Design Lens:
- Does each page answer who it is for, what it is, what to do next, and what happens after the click?
- Are reader progress, previous/next navigation, chapter archive, and primary actions obvious?
- Does mobile flow stay clean: image, title, story, progress, next action?
- Are links keyboard accessible and labeled clearly?
- Are contrast, line length, spacing, and focus states acceptable for long reading?

Creative Production Lens:
- Preserve the rain-dark cinematic listening archive tone.
- Keep Parallax Hearts positioned as music, Vallen, What the Town Keeps, and visual novel archive.
- Do not turn the site into a generic band template, developer dashboard, agency funnel, or lore dump.
- Keep soundtrack actions opt-in. No autoplay or implied background audio.

Report:
- Summary.
- Findings table with severity, route, evidence, impact, and recommended fix.
- CTA inventory with primary action, destination, and fallback.
- Reader-flow issues.
- Music-story integration issues.
- Trust/EPK/support issues.
- Mobile and accessibility issues.
- Public copy to rewrite.
- Owner decisions needed.
- Recommended Linear issue drafts.
- Safe next PR.
- Tests and verification.
- Rollback notes.

Allowed:
- Findings, recommendations, issue drafts, copy drafts, and implementation plan.

Forbidden:
- Do not edit files.
- Do not publish, deploy, merge, send externally, spend, or generate paid images.
- Do not expose image prompts, draft/review labels, private notes, internal risks, or unreleased lore.
- Do not add Skool, Forbidden Knowledge, Phylax, website-services funnel, Slack, Zapier, Make, n8n, webhooks, or external automation.
- Do not create a new route, membership system, persistent player, ambient audio, or gated content without explicit owner approval.
