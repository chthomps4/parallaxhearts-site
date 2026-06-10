export type NovelPageStatus = "live" | "ready_for_review" | "draft";

export type NovelImage = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
  prompt: string;
  credit?: string;
};

export type NovelPage = {
  chapterSlug: string;
  chapterTitle: string;
  number: string;
  slug: string;
  title: string;
  path: string;
  status: NovelPageStatus;
  description: string;
  seoDescription: string;
  excerpt: string;
  image: NovelImage;
  narration: string[];
  facebookCaptionDraft?: string;
  reelsCaptionDraft?: string;
  supportCtaDraft?: string;
};

export type NovelChapter = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  path: string;
  status: NovelPageStatus;
  pages: NovelPage[];
};

export const chapterOneRules = {
  canon: [
    "Elias Vale is a practical home inspector, not a chosen-one hero.",
    "Vallen should feel grounded, wet, ordinary, and quietly wrong.",
    "Inspection details are the doorway into mystery.",
    "The tone is restrained, cinematic, and emotionally precise.",
    "No lore dumps. Let the town reveal itself through physical evidence.",
  ],
  visualDirection:
    "Cinematic illustrated-story realism, rain-dark Pennsylvania town, restrained atmospheric unease, grounded inspection details, warm shadows, no glossy superhero styling.",
  forbidden:
    "No Skool, Forbidden Knowledge, Phylax, website-services funnel, auto-publishing, auto-deploying, or auto-merging.",
};

const chapterOneSlug = "chapter-one";
const chapterOneTitle = "Chapter One - Ballast";
const chapterOneBasePath = `/graphic-novel/${chapterOneSlug}`;

function pagePath(number: string) {
  return `${chapterOneBasePath}/page-${number}`;
}

export const chapterOnePages: NovelPage[] = [
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "001",
    slug: "page-001",
    title: "The Crossing",
    path: pagePath("001"),
    status: "live",
    description:
      "Elias reaches the edge of Vallen, where the rails turn arrival into a threshold.",
    seoDescription:
      "Read page 001, The Crossing, from Chapter One - Ballast in the What the Town Keeps cinematic visual novel archive.",
    excerpt: "The first thing Vallen gave Elias Vale was the crossing.",
    image: {
      src: "/images/graphic-novel/chapter-one/vn-page-001.jpg",
      alt: "Elias Vale crossing into Vallen in the rain",
      width: 1536,
      height: 1024,
      prompt:
        "A restrained cinematic visual novel still of Elias Vale crossing wet railroad tracks into the old town of Vallen under a low gray sky, rain-dark pavement, practical clothing, grounded realism, quiet pressure.",
    },
    narration: [
      "The first thing Vallen gave Elias Vale was the crossing.",
      "Not a welcome. Not a warning. Just wet rails under a low sky, the old station roof beyond them, and the sense that the road had narrowed for a reason.",
      "He had come to inspect a house. That was the work. Count the cracks. Test the doors. Name the damage clearly enough that someone else could decide what to do with it.",
      "But before Mercer Street, before the boarding house, before the first floorboard answered his weight, the town made him cross the rails.",
    ],
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "002",
    slug: "page-002",
    title: "Mercer Street",
    path: pagePath("002"),
    status: "live",
    description:
      "The road into town narrows through old houses, wet pavement, dim windows, and careful silence.",
    seoDescription:
      "Read page 002, Mercer Street, from Chapter One - Ballast in the What the Town Keeps cinematic visual novel archive.",
    excerpt:
      "The town looked ordinary in the way old places do when they have learned to keep their mouths shut.",
    image: {
      src: "/images/graphic-novel/chapter-one/vn-page-002.jpg",
      alt: "Mercer Street in Vallen after rain",
      width: 1536,
      height: 1024,
      prompt:
        "A cinematic visual novel view down Mercer Street in Vallen after rain, old houses, porch lights, wet pavement, bare maple branches, a blue truck, ordinary Pennsylvania town with restrained unease.",
    },
    narration: [
      "Mercer Street did not announce itself.",
      "It came in pieces: porch lights under low eaves, gutters breathing rainwater into cracked walks, a blue truck with one tire low, curtains that did not move when he passed.",
      "Elias drove slowly, watching the house numbers appear and disappear behind maple branches. The town looked ordinary in the way old places do when they have learned to keep their mouths shut.",
      "His clipboard sat on the passenger seat. Blank report. Charged phone. Flashlight. Moisture meter. The tools made the work feel manageable, which was what tools were for.",
    ],
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "003",
    slug: "page-003",
    title: "The Boarding House",
    path: pagePath("003"),
    status: "live",
    description:
      "The first inspection site waits under rainwater, old paint, loose gutters, and second-floor windows.",
    seoDescription:
      "Read page 003, The Boarding House, from Chapter One - Ballast in the What the Town Keeps cinematic visual novel archive.",
    excerpt: "Some houses made a man pause before he gave them a number.",
    image: {
      src: "/images/graphic-novel/chapter-one/vn-page-003.jpg",
      alt: "Elias Vale outside the boarding house in Vallen after rain",
      width: 1536,
      height: 1024,
      unoptimized: true,
      prompt:
        "A practical home inspector pauses outside an aging boarding house in Vallen after rain, loose gutter, peeling paint, winter grass, second-floor windows, cinematic visual novel realism, subdued atmospheric tension.",
    },
    narration: [
      "The boarding house stood three lots down from the corner, set back behind a narrow strip of winter grass.",
      "Its porch had settled unevenly toward the street. The paint had given up in sheets under the lower windows. A gutter hung loose above the steps, ticking rainwater into the same dark mark it had been making for years.",
      "Elias parked at the curb and waited before reaching for the clipboard. Not because he believed in signs. He did not. But some houses made a man pause before he gave them a number.",
      "He wrote the address at the top of the report. Then he looked up at the second-floor windows and felt, briefly, that the house had already read his name.",
    ],
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "004",
    slug: "page-004",
    title: "The First Door",
    path: pagePath("004"),
    status: "live",
    description:
      "Elias finds the key, checks the frame, and steps into the boarding house with habit leading and story following.",
    seoDescription:
      "Read page 004, The First Door, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt: "Habit first. Story later.",
    image: {
      src: "/images/graphic-novel/chapter-one/vn-page-004.jpg",
      alt: "Elias Vale finding the key beside the first door",
      width: 1536,
      height: 1024,
      unoptimized: true,
      prompt:
        "A close cinematic visual novel scene of Elias Vale finding a key under a chipped clay pot beside an old boarding house door, swollen frame, rain damage, inspection realism, quiet pressure.",
    },
    narration: [
      "The key was where the message said it would be, under the chipped clay pot beside the door.",
      "Elias checked the frame before he opened it. Habit first. Story later. The jamb was swollen at the lower hinge, the paint split where water had found its patient way in.",
      "The latch gave with a tired click. Inside, the hall smelled of radiator heat, damp wool, and old paper left too long against a wall.",
      "He stepped in and listened to the house settle around him. Not speaking. Not warning. Only adjusting to one more person keeping track.",
    ],
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "005",
    slug: "page-005",
    title: "The Hallway",
    path: pagePath("005"),
    status: "live",
    description:
      "Inside the boarding house, Elias lets the hallway settle before he gives the room a name.",
    seoDescription:
      "Read page 005, The Hallway, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt: "Some rooms needed a moment before they could be named.",
    image: {
      src: "/images/graphic-novel/chapter-one/vn-page-005.jpg",
      alt: "Elias Vale inside the boarding house hallway",
      width: 1536,
      height: 1024,
      unoptimized: true,
      prompt:
        "A restrained cinematic visual novel interior of an old boarding house hallway, damp wool and old paper atmosphere, radiator heat, coat on hook, stacked papers, wet gloom, Elias Vale pausing with clipboard.",
    },
    narration: [
      "The hallway held the weather differently.",
      "Outside, rain moved with purpose. In here, it became smell: damp wool, old paper, radiator heat, and the faint mineral edge of water that had entered where it was not invited.",
      "Elias stood just inside the door and let his eyes adjust. A coat hung from a wall hook. A stack of papers leaned on a narrow table. The floorboards ran inward like a held breath.",
      "He did not write anything yet. Some rooms needed a moment before they could be named.",
    ],
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "006",
    slug: "page-006",
    title: "The Waterline",
    path: pagePath("006"),
    status: "live",
    description:
      "Elias notices a pale seam across the plaster: a memory of water where water should not have stayed.",
    seoDescription:
      "Read page 006, The Waterline, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt:
      "Just the mark of water where water had no business remembering itself.",
    image: {
      src: "/images/graphic-novel/chapter-one/vn-page-006.jpg",
      alt: "A faint waterline on the boarding house hallway wall",
      width: 1536,
      height: 1024,
      unoptimized: true,
      prompt:
        "A close restrained cinematic visual novel still of a faint pale waterline across plaster in an old boarding house hallway, inspection detail, Elias Vale crouching with two fingers near the wall, cinematic realism, eerie but grounded.",
    },
    narration: [
      "The waterline was too clean to be old neglect.",
      "Elias found it halfway down the hallway, a pale seam running across the plaster at waist height. It passed behind the coat hook, beneath the framed print, and stopped at the door trim as if someone had drawn the flood with a ruler.",
      "He crouched, touched two fingers to the wall, and brought them back dry. No bloom. No softness. No fresh lift in the paint. Just the mark of water where water had no business remembering itself.",
      "He wrote moisture history in the margin, then crossed it out. The phrase felt too certain for a house that had not yet decided what it wanted to admit.",
    ],
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "007",
    slug: "page-007",
    title: "The Nail Heads",
    path: pagePath("007"),
    status: "ready_for_review",
    description:
      "Above the waterline, Elias finds a row of exposed nail heads that suggest the hallway once held a missing measure.",
    seoDescription:
      "Read page 007, The Nail Heads, from Chapter One - Ballast in the What the Town Keeps cinematic visual novel archive.",
    excerpt:
      "The wall had kept the shape of something that was gone.",
    image: {
      alt: "Elias Vale studying a row of exposed nail heads above a pale waterline in the boarding house hallway",
      prompt:
        "Prompt-first cinematic graphic novel realism, interior of an old Pennsylvania boarding house hallway after rain, Elias Vale crouched beside a plaster wall with a pale waist-high waterline and a straight row of exposed nail heads above it, flashlight in hand, clipboard nearby, warm radiator shadows, damp paper atmosphere, grounded inspection detail, quiet supernatural unease, no fantasy styling, no text.",
    },
    narration: [
      "He looked above the line next.",
      "A row of nail heads sat exposed in the plaster, each one dark with age, each one set at the same height with a surveyor's patience. Something had been fixed there once, long and narrow. A picture rail, maybe. A board. Some practical strip of wood removed so cleanly the wall had never stopped accounting for it.",
      "Elias stood and traced the spacing with his eyes. The nails ran farther than the water mark, turned the corner, and continued toward the front parlor. Not flood damage. Not decoration. More like the ghost of a measurement repeated from room to room.",
      "He wrote previous wall fixture in the report, then added: consistent elevation throughout visible hall. When he clicked off the pen, the silence in the house felt organized, as if he had finally used the right term for something that was still listening.",
    ],
    facebookCaptionDraft:
      "Page 007 of What the Town Keeps is in review: The Nail Heads. Elias follows a pale waterline and finds a row of exposed nails that feels less like damage and more like a record. Review notes and image prompt are ready; final art stays pending approval.",
    reelsCaptionDraft:
      "Page 007 draft: The Nail Heads. A waterline. A measured row of nails. A hallway keeping records after the wood is gone. #WhattheTownKeeps #GraphicNovel #ParallaxHearts",
    supportCtaDraft:
      "If you want the next page and the next Ballast track to arrive sooner, support the work keeping Vallen on the page.",
  },
];

export const novelChapters: NovelChapter[] = [
  {
    slug: chapterOneSlug,
    title: chapterOneTitle,
    subtitle: "Ballast",
    description:
      "Elias Vale arrives in Vallen for a routine inspection and finds the town has already started keeping record of him.",
    path: chapterOneBasePath,
    status: "live",
    pages: chapterOnePages,
  },
];

export function shouldShowReviewNovelPages() {
  return (
    process.env.PARALLAX_SHOW_REVIEW_PAGES === "true" ||
    process.env.VERCEL_ENV === "preview" ||
    process.env.NODE_ENV === "development"
  );
}

export function isNovelPageLive(page: NovelPage) {
  return page.status === "live";
}

export function isNovelPageVisible(page: NovelPage) {
  return isNovelPageLive(page) || shouldShowReviewNovelPages();
}

export function getNovelChapter(chapterSlug: string) {
  return novelChapters.find((chapter) => chapter.slug === chapterSlug);
}

export function getNovelChaptersForCurrentEnvironment() {
  return novelChapters
    .map((chapter) => ({
      ...chapter,
      pages: chapter.pages.filter(isNovelPageVisible),
    }))
    .filter((chapter) => chapter.status === "live" && chapter.pages.length > 0);
}

export function getVisibleNovelPages(chapterSlug?: string) {
  const chapters = chapterSlug
    ? novelChapters.filter((chapter) => chapter.slug === chapterSlug)
    : novelChapters;

  return chapters.flatMap((chapter) => chapter.pages.filter(isNovelPageVisible));
}

export function getLiveNovelPages(chapterSlug?: string) {
  const chapters = chapterSlug
    ? novelChapters.filter((chapter) => chapter.slug === chapterSlug)
    : novelChapters;

  return chapters.flatMap((chapter) => chapter.pages.filter(isNovelPageLive));
}

export function getNovelPage(chapterSlug: string, pageSlug: string) {
  const chapter = getNovelChapter(chapterSlug);
  const page = chapter?.pages.find((item) => item.slug === pageSlug);

  if (!page || !isNovelPageVisible(page)) {
    return undefined;
  }

  return page;
}

export function getNovelPageNeighbors(chapterSlug: string, pageSlug: string) {
  const visiblePages = getVisibleNovelPages(chapterSlug);
  const currentIndex = visiblePages.findIndex((page) => page.slug === pageSlug);

  return {
    previousPage: currentIndex > 0 ? visiblePages[currentIndex - 1] : undefined,
    nextPage:
      currentIndex >= 0 && currentIndex < visiblePages.length - 1
        ? visiblePages[currentIndex + 1]
        : undefined,
  };
}

export function getLatestLiveNovelPage(chapterSlug?: string) {
  return getLiveNovelPages(chapterSlug).at(-1);
}

export function getNovelStatusLabel(status: NovelPageStatus) {
  switch (status) {
    case "live":
      return "Live";
    case "ready_for_review":
      return "Ready for review";
    case "draft":
      return "Draft";
    default:
      return status satisfies never;
  }
}

