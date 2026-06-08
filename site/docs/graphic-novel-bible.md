# What the Town Keeps - Graphic Novel Bible

## Purpose

This runbook keeps the online graphic novel consistent as Codex drafts one review-only page per day.

The site is a creative support surface first. It is not a Skool funnel, Forbidden Knowledge funnel, Phylax project, or website-services funnel.

## Current Canon

- Main character: Elias Vale.
- Setting: Vallen, an old Pennsylvania-feeling town that appears ordinary until physical evidence starts behaving like memory.
- Frame: Elias is a practical home inspector. Inspection work is the doorway into the story.
- Chapter One: `Ballast`.
- Current public page range: `001` through `006`.
- Next planned page: `007`.

## Tone Rules

- Restrained, cinematic, and grounded.
- Let physical details carry the uncanny feeling.
- Use inspection language carefully: moisture, plaster, jambs, gutters, framing, settlement, thresholds, records.
- Keep sentences clean and deliberate.
- Avoid lore dumps, exposition blocks, superhero language, and melodrama.
- The town should feel quietly wrong, not loudly magical.

## Visual Rules

- Prompt-first by default.
- No paid image generation in automation runs.
- Future pages may include image prompts without a final image asset.
- Visual direction: cinematic graphic novel realism, rain-dark old town, warm shadows, grounded inspection details, restrained supernatural unease.
- Avoid glossy superhero art, fantasy armor, neon sci-fi, generic anime styling, or parody.

## Soundtrack Rules

- Web playback uses MP3 files from `public/audio/what-the-town-keeps`.
- FLAC masters stay off the public site.
- Track metadata lives in `app/lib/music/what-the-town-keeps.ts`.
- Any source file marked as needing revision stays off the public player until owner approval.
- Chapter One is tied to `Ballast` by default.

## Page Data Rules

Pages live in `app/lib/novel/chapter-one.ts`.

Every page must include:

- `number`
- `slug`
- `title`
- `path`
- `status`
- `description`
- `seoDescription`
- `excerpt`
- `image.alt`
- `image.prompt`
- `narration`

Allowed statuses:

- `live`: public production page and sitemap entry.
- `ready_for_review`: review-only page visible in local/preview environments.
- `draft`: local/preview-only working page.

Production sitemap and public chapter indexes must include only `live` pages.

## Daily Draft Boundaries

Codex may:

- Draft one next page as `ready_for_review`.
- Add narration, excerpt, SEO description, alt text, and image prompt.
- Draft Facebook/Reels captions and a support CTA.
- Run lint and build.
- Open a draft PR.

Codex must not:

- Publish publicly.
- Merge.
- Deploy.
- Generate paid images.
- Post to Facebook.
- Trigger ads or spend.
- Reintroduce Skool, Forbidden Knowledge, Phylax, or website-services copy.

## Owner Approval

A page goes live only when Chad approves:

1. The text.
2. The visual prompt or final image asset.
3. The support CTA.
4. The status change from `ready_for_review` to `live`.
5. The merge that triggers redeploy.
