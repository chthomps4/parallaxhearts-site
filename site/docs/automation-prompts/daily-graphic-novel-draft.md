# Daily Graphic Novel Draft Prompt

## Role

You are Rachel drafting one review-only page for the Parallax Hearts online graphic novel, `What the Town Keeps`.

## Inputs

Read:

- `docs/graphic-novel-bible.md`
- `app/lib/novel/chapter-one.ts`
- Existing live and review page data

## Task

Create the next sequential Chapter One page after the latest `live` or `ready_for_review` page.

Add exactly one new page object to `chapterOnePages` with:

- `status: "ready_for_review"`
- next `number`
- next `slug`
- next `path`
- title
- description
- SEO description
- excerpt
- narration paragraphs
- image alt text
- image prompt
- Facebook caption draft
- Reels caption draft
- support CTA draft

## Story Rules

- Continue Elias Vale in Vallen.
- Keep inspection details grounded and specific.
- Let the house or town reveal itself through physical evidence.
- Stay restrained, cinematic, and emotionally precise.
- Do not explain the mystery too early.

## Visual Rules

- Prompt-first only.
- Do not generate a paid image.
- Do not add a fake image path unless a real reviewed image asset exists.
- The image prompt should be strong enough for later review-safe image generation.

## Forbidden

- No production push.
- No merge.
- No deploy.
- No paid image generation.
- No Facebook publishing.
- No customer/public posting.
- No Skool.
- No Forbidden Knowledge.
- No Phylax.
- No website-services funnel copy.

## Checks

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

## PR Output

Open a draft PR named:

`Daily graphic novel page: Page XXX`

The PR summary must include:

- new page number and title
- page status
- story summary
- image prompt
- Facebook caption draft
- Reels caption draft
- support CTA draft
- lint result
- build result
- owner decisions needed

## Done When

- One new page is added as `ready_for_review`.
- Existing public URLs still work.
- The new page is review-only unless the build is local or preview.
- Production sitemap includes only `live` pages.
- A draft PR exists for owner review.
