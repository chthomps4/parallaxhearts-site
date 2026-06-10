export type StoryAssetPriority = "primary" | "secondary" | "supporting";

export type StoryAssetStatus = "active" | "available";

export type StoryAsset = {
  id: string;
  title: string;
  src: `/${string}`;
  width: number;
  height: number;
  alt: string;
  caption: string;
  routeTargets: readonly string[];
  chapterCue: string;
  isDecorative: boolean;
  priority: StoryAssetPriority;
  placement: readonly string[];
  status: StoryAssetStatus;
  paletteNotes?: string;
  mobileCropNotes?: string;
};

export const storyAssets = {
  "contact-porch": {
    id: "contact-porch",
    title: "Contact Porch",
    src: "/images/contact-porch.jpg",
    width: 1536,
    height: 1024,
    alt: "Rainy porch light and small-town contact atmosphere for Parallax Hearts",
    caption: "Contact-route atmosphere for direct reader and listener outreach.",
    routeTargets: ["/contact"],
    chapterCue: "General Vallen contact surface",
    isDecorative: false,
    priority: "secondary",
    placement: ["contact hero"],
    status: "active",
    paletteNotes: "Warm porch light against rain-dark exterior tones.",
    mobileCropNotes: "Keep the porch light and doorway readable near center.",
  },
  "field-notes": {
    id: "field-notes",
    title: "Field Notes",
    src: "/images/field-notes.jpg",
    width: 1536,
    height: 1024,
    alt: "Field notes atmosphere for the What the Town Keeps archive",
    caption: "Available archive image for future story-world documentation.",
    routeTargets: [],
    chapterCue: "Unassigned archive image",
    isDecorative: false,
    priority: "supporting",
    placement: ["available archive asset"],
    status: "available",
    paletteNotes: "Paper, shadow, and muted evidence-board tones.",
    mobileCropNotes: "Favor the central note area if assigned to a route.",
  },
  "graphic-novel-hub": {
    id: "graphic-novel-hub",
    title: "Graphic Novel Hub",
    src: "/images/graphic-novel-hub.jpg",
    width: 1536,
    height: 1024,
    alt: "Graphic novel atmosphere for What the Town Keeps",
    caption: "Primary image for the visual-novel and graphic-novel entry points.",
    routeTargets: ["/graphic-novel", "/project", "/visuals"],
    chapterCue: "Chapter One - Ballast entry",
    isDecorative: false,
    priority: "primary",
    placement: ["graphic novel metadata", "project card", "visuals card"],
    status: "active",
    paletteNotes: "Cinematic rain, panels, and amber-lit story atmosphere.",
    mobileCropNotes: "Keep the central panel atmosphere visible.",
  },
  "hero-vallen-arrival": {
    id: "hero-vallen-arrival",
    title: "Vallen Arrival",
    src: "/images/hero.jpg",
    width: 1536,
    height: 1024,
    alt: "Rainy Vallen scene for What the Town Keeps, with old small-town atmosphere and cinematic dusk light",
    caption: "Primary public entry image for What the Town Keeps and Vallen.",
    routeTargets: ["/", "/support", "/visuals"],
    chapterCue: "Opening door into Vallen",
    isDecorative: false,
    priority: "primary",
    placement: ["home hero", "home metadata", "visuals card"],
    status: "active",
    paletteNotes: "Rain-dark exterior with dusk light and subdued gold accents.",
    mobileCropNotes: "Keep the main street/arrival atmosphere centered.",
  },
  "music-listen": {
    id: "music-listen",
    title: "Music Listen",
    src: "/images/music-listen.jpg",
    width: 1536,
    height: 1024,
    alt: "Acoustic guitar leaning against an amp in a dim venue, warm amber spotlight, rain streaks on window",
    caption: "Primary album-listening image for What the Town Keeps.",
    routeTargets: ["/music"],
    chapterCue: "Album companion surface",
    isDecorative: false,
    priority: "primary",
    placement: ["music hero", "music metadata"],
    status: "active",
    paletteNotes: "Amber listening-room light with dark venue contrast.",
    mobileCropNotes: "Keep guitar and spotlight visible in the crop.",
  },
  "portrait": {
    id: "portrait",
    title: "Portrait",
    src: "/images/portrait.jpg",
    width: 1024,
    height: 1536,
    alt: "Parallax Hearts portrait for the about page",
    caption: "About-route portrait image.",
    routeTargets: ["/about"],
    chapterCue: "Creator/about surface",
    isDecorative: false,
    priority: "secondary",
    placement: ["about hero", "about metadata"],
    status: "active",
    paletteNotes: "Vertical portrait crop with restrained editorial contrast.",
    mobileCropNotes: "Portrait-native image; preserve face and upper body.",
  },
  "project": {
    id: "project",
    title: "Project",
    src: "/images/project.jpg",
    width: 1536,
    height: 1024,
    alt: "Project atmosphere for Parallax Hearts and What the Town Keeps",
    caption: "Available project-level archive image.",
    routeTargets: [],
    chapterCue: "Unassigned project surface",
    isDecorative: false,
    priority: "supporting",
    placement: ["available archive asset"],
    status: "available",
    paletteNotes: "Project-world atmosphere for future route assignment.",
    mobileCropNotes: "Assign a focal point before using as a hero.",
  },
  "shop-support": {
    id: "shop-support",
    title: "Shop Support",
    src: "/images/shop-support.jpg",
    width: 1536,
    height: 1024,
    alt: "Shop and support atmosphere for Parallax Hearts",
    caption: "Support and shop-route image for public funding paths.",
    routeTargets: ["/shop", "/support"],
    chapterCue: "Support surface for new pages and songs",
    isDecorative: false,
    priority: "secondary",
    placement: ["shop hero", "support metadata"],
    status: "active",
    paletteNotes: "Warm support-path still life with dark story-world contrast.",
    mobileCropNotes: "Keep the support object grouping readable.",
  },
  "story-world": {
    id: "story-world",
    title: "Story World",
    src: "/images/story-world.jpg",
    width: 1536,
    height: 1024,
    alt: "What the Town Keeps visual archive hero",
    caption: "Story-world image for Vallen, project context, and visual archive routes.",
    routeTargets: ["/story", "/project", "/visuals"],
    chapterCue: "Town-wide Vallen archive",
    isDecorative: false,
    priority: "primary",
    placement: ["story metadata", "project card", "visuals hero", "visuals card"],
    status: "active",
    paletteNotes: "Rain, rails, and dim-room cinematic story palette.",
    mobileCropNotes: "Keep the rain-soaked town atmosphere centered.",
  },
  "world": {
    id: "world",
    title: "World",
    src: "/images/world.jpg",
    width: 1536,
    height: 1024,
    alt: "World atmosphere for What the Town Keeps and Vallen",
    caption: "Available world-building archive image.",
    routeTargets: [],
    chapterCue: "Unassigned Vallen world image",
    isDecorative: false,
    priority: "supporting",
    placement: ["available archive asset"],
    status: "available",
    paletteNotes: "Town-world atmosphere for future story surfaces.",
    mobileCropNotes: "Assign route-specific focal crop before hero use.",
  },
} satisfies Record<string, StoryAsset>;

export type StoryAssetId = keyof typeof storyAssets;

export function getStoryAsset(id: StoryAssetId): StoryAsset {
  return storyAssets[id];
}
