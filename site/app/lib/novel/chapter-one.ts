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
    title: "The Jamb Record",
    path: pagePath("007"),
    status: "ready_for_review",
    description:
      "At the end of the hallway, Elias finds old pencil marks on a door jamb lined up with the waterline like a record nobody meant to leave behind.",
    seoDescription:
      "Read page 007, The Jamb Record, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt:
      "Someone had used the trim as a ledger, and every entry agreed with the wall.",
    image: {
      alt: "Elias Vale studying pencil marks on an old hallway door jamb in the boarding house",
      prompt:
        "A restrained cinematic graphic novel realism still of Elias Vale in an old boarding house hallway studying a painted door jamb marked with faint pencil notches at waist height, pale plaster waterline crossing beside the trim, clipboard and flashlight in hand, warm radiator shadows, rain-muted light, grounded inspection detail, quiet supernatural unease, no fantasy styling.",
    },
    narration: [
      "The line ended at the kitchen door as neatly as it had begun.",
      "Elias leaned closer to the trim. The paint had cracked along the grain, opening fine dark seams in the jamb. Inside them sat a set of pencil marks, almost lost under two old coats of cream. Short horizontal strokes. Dates beside some of them. Initials beside others.",
      "He set the edge of his flashlight across the wood and counted seven marks. Every one landed at the same height as the pale seam on the plaster, as if whoever kept the record had trusted the wall more than memory.",
      "A child might have been measured there once. Then another. But the notches did not climb. They held steady, one year to the next, patient and level.",
      "He wrote repeated reference mark in the margin and stood listening to the radiator knock somewhere deeper in the house. The sound came back through the hallway with the flat certainty of a second pencil tap.",
    ],
    facebookCaptionDraft:
      "Page 007 of What the Town Keeps is drafted for review: The Jamb Record. Elias follows the hallway waterline to a door trim where old pencil marks keep agreeing with the wall. Review-only page, no final art yet.",
    reelsCaptionDraft:
      "Page 007 draft. A waterline stops at the kitchen door. The jamb has been keeping count. #WhattheTownKeeps #GraphicNovel #ParallaxHearts",
    supportCtaDraft:
      "If this page lands, support helps fund the next illustrated page, the Ballast soundtrack work, and more time in Vallen.",
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "008",
    slug: "page-008",
    title: "The Level",
    path: pagePath("008"),
    status: "ready_for_review",
    description:
      "Elias checks the marks against the slope of the house and finds the record holding truer than the floor beneath it.",
    seoDescription:
      "Read page 008, The Level, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt:
      "The floor was falling toward the street. The mark was not.",
    image: {
      alt: "Elias Vale holding a torpedo level against penciled marks on the boarding house door jamb",
      prompt:
        "A restrained cinematic graphic novel realism still of Elias Vale in a dim boarding house doorway pressing a yellow torpedo level against faint pencil marks on an old painted door jamb, warped floorboards sloping toward the street, pale hallway waterline meeting the trim, clipboard tucked under one arm, rain-muted kitchen light, grounded inspection detail, quiet supernatural unease, no fantasy styling.",
    },
    narration: [
      "Elias took the torpedo level from his bag and set it across the highest pencil mark.",
      "The bubble settled dead center. He checked again lower on the trim, then on the threshold itself. The old floorboards tipped toward the street by nearly half an inch over four feet, a kind of settlement he had seen in a hundred tired houses. The jamb marks, though, kept their line without yielding to the drift around them.",
      "He stepped back into the hall and sighted the pale seam in the plaster against the brass edge of the level. Same height. Same stubborn truth. Whatever had been recorded here had not followed the house as it moved.",
      "A radiator knocked once in the next room. Then once more, softer, like an answer arriving after thought.",
      "He wrote floor out of level; reference line remains true and stared at the words until they felt less like notes than testimony.",
    ],
    facebookCaptionDraft:
      "Page 008 of What the Town Keeps is in review: The Level. Elias checks the jamb marks with a torpedo level and learns the old floor is drifting while the record in the trim stays true. Review-only page, prompt-first artwork still pending.",
    reelsCaptionDraft:
      "Page 008 draft. The floor slopes. The line does not. Elias finally puts a level on what the house has been keeping. #WhatTheTownKeeps #GraphicNovel #ParallaxHearts",
    supportCtaDraft:
      "If this page holds, support helps fund the next reviewed illustration, the Ballast score, and more time following the evidence through Vallen.",
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "009",
    slug: "page-009",
    title: "Past the Threshold",
    path: pagePath("009"),
    status: "ready_for_review",
    description:
      "Elias opens the kitchen door and finds the same pale line continuing into the next room as if the house has been keeping one level record all along.",
    seoDescription:
      "Read page 009, Past the Threshold, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt: "It had crossed the threshold before he did.",
    image: {
      alt: "Elias Vale opening the kitchen door to reveal a pale line continuing across the boarding house kitchen wall",
      prompt:
        "A restrained cinematic graphic novel realism still of Elias Vale opening an old kitchen door inside a dim boarding house, pale waterline continuing across the kitchen wall at a fixed height, enamel sink under a rain-muted window, built-in shelf, warped threshold, clipboard in hand, warm radiator shadows, grounded inspection detail, quiet supernatural unease, no fantasy styling.",
    },
    narration: [
      "He thumbed the latch and pushed at the kitchen door.",
      "It dragged once across the threshold, then gave inward with a slow swing. The floor's slope explained part of that. The rest was the old-house reluctance he knew too well, wood swollen by years, hinges carrying more memory than grease.",
      "Beyond it, the kitchen was narrow and clean in the exhausted way of places still being used after they should have been let alone. Enamel cabinets. A sink under gray window light. Two cups turned upside down on a dish towel beside the drainboard.",
      "The pale seam continued on the far wall at the same height. It passed beneath the window casing, behind a calendar curled at one corner, and across the edge of a built-in shelf without climbing or falling to match the room around it.",
      "Elias crossed to the sink and touched the paint again. Dry. Flat. No bloom in the plaster. No softened paper border above the basin. Only the line, keeping level through a house that had failed to keep anything else square.",
      "He wrote reference line continues through kitchen, then underlined continues once before setting the pencil down. A continuation implied a first event. So far, the house had offered only records.",
    ],
    facebookCaptionDraft:
      "Page 009 of What the Town Keeps is drafted for review: Past the Threshold. Elias opens the kitchen door and realizes the line in the hall has already crossed into the next room. Review-only page, prompt-first art still pending.",
    reelsCaptionDraft:
      "Page 009 draft. He opens the kitchen door and the line is already waiting on the other side. #WhatTheTownKeeps #GraphicNovel #ParallaxHearts",
    supportCtaDraft:
      "If this page lands, support helps fund the next reviewed illustration, more Ballast soundtrack work, and the next careful pass through Vallen.",
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "010",
    slug: "page-010",
    title: "Behind the Calendar",
    path: pagePath("010"),
    status: "ready_for_review",
    description:
      "Elias lifts the curled kitchen calendar and finds the pale line continuing behind the paper, older than the month that was supposed to cover it.",
    seoDescription:
      "Read page 010, Behind the Calendar, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt:
      "The paper had been hung to mark time. The wall behind it had kept a different record.",
    image: {
      alt: "Elias Vale lifting a curled kitchen calendar to reveal a pale line continuing across the wall behind it",
      prompt:
        "A restrained cinematic graphic novel realism still of Elias Vale in a dim boarding house kitchen lifting the curled corner of an old wall calendar, revealing a pale level line continuing across older paint behind the paper, enamel sink under gray rain-muted window light, built-in shelf, clipboard on drainboard, warm radiator shadows, grounded inspection detail, quiet supernatural unease, no fantasy styling.",
    },
    narration: [
      "He set the clipboard beside the sink and reached for the calendar.",
      "It was fixed to the wall with a brass tack and one strip of yellowed tape that had given up along the bottom edge. June showed at the front, but beneath it he could see the corners of older pages left in place, months stacked thin against the plaster instead of torn away clean.",
      "Elias lifted the curl carefully and held it back with two fingers. The pale seam continued underneath without interruption, crossing older paint and the faint square of a picture that must have hung there before the calendar. It did not deepen in the protected patch. It did not fade. It simply kept going.",
      "He touched the wall where the paper had covered it longest. Dry again. Cool, but no cooler than the rest of the room. A line preserved was still a line, which ought to have made this easier.",
      "He wrote reference line predates calendar placement, then added older than visible room condition beneath it. The second sentence felt closer to the truth, though truth was becoming an awkward measurement inside this house.",
    ],
    facebookCaptionDraft:
      "Page 010 of What the Town Keeps is drafted for review: Behind the Calendar. Elias lifts a curled kitchen calendar and finds the line continuing behind the paper, older than the room's latest attempt to cover it. Review-only page, prompt-first art still pending.",
    reelsCaptionDraft:
      "Page 010 draft. He peels back the calendar and the line is still there, older than the month on the wall. #WhatTheTownKeeps #GraphicNovel #ParallaxHearts",
    supportCtaDraft:
      "If this page lands, support helps fund the next reviewed illustration, more of the Ballast score, and the slow work of following Vallen room by room.",
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "011",
    slug: "page-011",
    title: "The Backboard",
    path: pagePath("011"),
    status: "ready_for_review",
    description:
      "Elias opens the built-in shelf and finds the pale line continuing across the backboard behind stacked dishes, untouched by the years in front of it.",
    seoDescription:
      "Read page 011, The Backboard, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt:
      "Even where the plates had rested for years, the line refused to break.",
    image: {
      alt: "Elias Vale opening a built-in kitchen shelf to reveal a pale level line continuing across the backboard behind stacked dishes",
      prompt:
        "A restrained cinematic graphic novel realism still of Elias Vale in a dim old boarding house kitchen opening a built-in shelf beside an enamel sink, revealing a pale level line continuing across the cupboard backboard behind stacked white dishes and chipped cups, gray rain-muted window light, clipboard on the drainboard, warm radiator shadows, grounded inspection detail, quiet supernatural unease, no fantasy styling.",
    },
    narration: [
      "The built-in shelf stood to the right of the sink, its painted door hanging half a degree off square.",
      "Elias set two fingers under the latch and pulled. The hinge complained softly. Inside sat three stacks of white plates, two chipped cups, and a jar of loose tea gone dull behind the glass. The kitchen smell changed when the door opened: dust, old wood, and the shut-in dryness of things left in place too long.",
      "The pale seam crossed the backboard behind the dishes at the same height it had held on the plaster. It ran through a clean stripe where the upper plates had shielded the paint from light, then passed into the darker exposed surface without brightening or fading. Even where the room had arranged objects in front of it for years, the line refused to break.",
      "He lifted one plate stack carefully and checked the wall behind it. Dry. Flat. No residue on his thumb. The backboard was thin pine paneling, fixed with cut nails and bowed slightly at the center, but the mark ignored the bow the way it had ignored the settling floor.",
      "He wrote line continues behind stored dishes, then added protected surfaces unchanged. The second note looked clinical enough until he read it back and understood it meant the house had been keeping record in places no one had been watching.",
    ],
    facebookCaptionDraft:
      "Page 011 of What the Town Keeps is drafted for review: The Backboard. Elias opens the built-in kitchen shelf and finds the pale line still running behind stacked dishes, unchanged by the years in front of it. Review-only page, prompt-first art still pending.",
    reelsCaptionDraft:
      "Page 011 draft. He opens the shelf and the line is waiting behind the dishes. #WhatTheTownKeeps #GraphicNovel #ParallaxHearts",
    supportCtaDraft:
      "If this page lands, support helps fund the next reviewed illustration, more of the Ballast score, and the patient work of following the record deeper into Vallen.",
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "012",
    slug: "page-012",
    title: "Under the Sink",
    path: pagePath("012"),
    status: "ready_for_review",
    description:
      "Elias opens the sink cabinet and finds the pale line continuing across the back panel, passing behind newer supply pipes without losing its level.",
    seoDescription:
      "Read page 012, Under the Sink, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt:
      "The pipes were newer than the cabinet. The line behaved as if they had arrived late.",
    image: {
      alt: "Elias Vale kneeling at the boarding house sink cabinet while a pale line continues across the back panel behind copper supply pipes",
      prompt:
        "A restrained cinematic graphic novel realism still of Elias Vale kneeling in a dim old boarding house kitchen with the cabinet doors open beneath an enamel sink, revealing a pale level line across the back panel passing behind copper supply pipes and shutoff valves, gray rain-muted window light, clipboard on worn linoleum, warm radiator shadows, grounded inspection detail, quiet supernatural unease, no fantasy styling.",
    },
    narration: [
      "He set the plates back exactly as he had found them and crouched to open the cabinet beneath the sink.",
      "The hinges were looser here. One door sagged before it cleared the frame, then knocked softly against his knee. Inside, the cabinet smelled of old soap, iron, and wood that had spent years expecting a leak. A galvanized trap curved down from the basin. Two copper supply lines rose through the floor, each fitted with a shutoff valve newer than the paint around it.",
      "The pale seam crossed the cabinet back at the same height as the shelf above, then disappeared behind the copper risers and returned on the other side without shift or blur. It did not bend around the fittings. It did not break where the pipes interrupted the panel. It simply held its place, as if the plumbing had been installed afterward and the line had declined to notice.",
      "Elias pressed his thumb to the wood below the seam. Dry. He checked the cabinet floor for bloom, the valve bodies for fresh corrosion, the trap for active drip. Nothing. The usual evidence had failed to report for duty.",
      "He wrote line passes behind newer supply hardware, then added no associated moisture failure. The second note steadied him for half a breath. After that it only made the cabinet look like one more place where the house had preserved an event without preserving its cause.",
    ],
    facebookCaptionDraft:
      "Page 012 of What the Town Keeps is drafted for review: Under the Sink. Elias checks the cabinet below the basin and finds the pale line continuing behind newer supply pipes without losing its level. Review-only page, prompt-first art still pending.",
    reelsCaptionDraft:
      "Page 012 draft. He opens the sink cabinet and the line keeps going behind the pipes. #WhatTheTownKeeps #GraphicNovel #ParallaxHearts",
    supportCtaDraft:
      "If this page lands, support helps fund the next reviewed illustration, more of the Ballast score, and the careful work of following the record through the rest of the house.",
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "013",
    slug: "page-013",
    title: "The Patch",
    path: pagePath("013"),
    status: "ready_for_review",
    description:
      "Behind the sink plumbing, Elias finds a cut patch set back into the cabinet wall, and the pale line crosses old board and newer repair as if both belonged to the same record.",
    seoDescription:
      "Read page 013, The Patch, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt:
      "A repair was supposed to break the story the wall was telling. It did not.",
    image: {
      alt: "Elias Vale studying a patched cutout in the sink cabinet back panel while a pale line runs level across old wood and newer repair",
      prompt:
        "A restrained cinematic graphic novel realism still of Elias Vale kneeling beneath an enamel sink in a dim old boarding house kitchen, studying a neatly patched rectangular cutout in the cabinet back panel around copper supply pipes, a pale level line crossing both the older wood and the newer repair without shifting, gray rain-muted window light, worn linoleum, clipboard nearby, warm radiator shadows, grounded inspection detail, quiet supernatural unease, no fantasy styling.",
    },
    narration: [
      "He leaned closer until the cabinet back filled his vision.",
      "The panel had been cut once and repaired. He could see it now: a narrow rectangle let back around the newer plumbing, its edges scored by a finer blade than the rougher original opening beside the trap. Four bright screws held the patch in place where older cut nails fixed the rest of the cabinet. Somebody had opened the wall for access, then closed it carefully enough to pass in poor light.",
      "The pale seam crossed the repair without hesitation. It ran over the older board, through the hairline joint at the patch edge, and across the newer piece at exactly the same height, never thickening, never fading, as if the cabinet had accepted both surfaces into one account.",
      "Elias touched the screw heads, then the seam of the patch, then the wood below it. Dry every time. No staining around the penetrations. No spread from the supply lines. The repair belonged to plumbing work. The line belonged to something that had ignored the repair completely.",
      "He wrote access patch installed after original cabinet; reference line remains continuous and sat back on his heels. In most houses, a repair interrupted the record. Here it only proved the record had outlasted another attempt to get behind the wall.",
    ],
    facebookCaptionDraft:
      "Page 013 of What the Town Keeps is drafted for review: The Patch. Elias studies a sink-cabinet access repair and finds the pale line crossing old board and newer patch as if both were entered in the same record. Review-only page, prompt-first art still pending.",
    reelsCaptionDraft:
      "Page 013 draft. Even the repair patch can't interrupt the line. #WhatTheTownKeeps #GraphicNovel #ParallaxHearts",
    supportCtaDraft:
      "If this page lands, support helps fund the next reviewed illustration, more of the Ballast score, and the slow work of following Vallen's record wherever the house tries to hide it.",
  },
  {
    chapterSlug: chapterOneSlug,
    chapterTitle: chapterOneTitle,
    number: "014",
    slug: "page-014",
    title: "The Shutoff Tag",
    path: pagePath("014"),
    status: "ready_for_review",
    description:
      "Elias finds a paper service tag wired to the cold-water shutoff, and its dated ink makes the cabinet repair feel less like an answer than another entry.",
    seoDescription:
      "Read page 014, The Shutoff Tag, from Chapter One - Ballast in the What the Town Keeps visual novel archive.",
    excerpt:
      "A service tag was supposed to name work that had been done. This one only narrowed the silence around it.",
    image: {
      alt: "Elias Vale examining a paper service tag wired to a cold-water shutoff beneath the boarding house sink",
      prompt:
        "A restrained cinematic graphic novel realism still of Elias Vale kneeling under an enamel sink in a dim old boarding house kitchen, holding a small yellowed paper service tag wired to a cold-water shutoff valve, the patched cabinet back and pale level line visible behind copper pipes, gray rain-muted window light, worn linoleum, clipboard nearby, warm radiator shadows, grounded inspection detail, quiet supernatural unease, no fantasy styling, no text.",
    },
    narration: [
      "The cold-water valve had a paper tag wired through its stem.",
      "Elias had missed it at first because it hung flat against the copper, the same dull color as old masking tape. He eased it forward with the pencil tip. The wire was thin and dark with age, twisted twice by someone who expected the tag to stay where it was put.",
      "There was a date on one side, written in blue ink gone gray at the edges. Under it, a short note: shutoff holds. No company name. No invoice number. Only the kind of field notation a plumber might leave for himself before closing the cabinet again.",
      "The date was six years newer than the wallpaper shadow behind the calendar and newer than the bright screws in the access patch. The repair had not made the line. It had only passed through a room where the line was already waiting.",
      "He let the tag fall back against the pipe. It tapped once against the valve body, small and dry. Elias wrote service confirms no active leak at repair, then stopped before adding the sentence that wanted to follow: somebody had checked the water and left the wrong problem alone.",
    ],
    facebookCaptionDraft:
      "Page 014 of What the Town Keeps is drafted for review: The Shutoff Tag. Beneath the sink, Elias finds a dated service tag that confirms the plumbing held, which makes the pale line feel less like damage and more like a record. Review-only page, prompt-first art still pending.",
    reelsCaptionDraft:
      "Page 014 draft. The valve tag says the shutoff held. The line says the house kept something else. #WhatTheTownKeeps #GraphicNovel #ParallaxHearts",
    supportCtaDraft:
      "If this page lands, support helps fund the next reviewed illustration, more of the Ballast score, and the careful work of keeping What the Town Keeps moving one page at a time.",
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

