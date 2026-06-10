export type SoundtrackTrackStatus = "published" | "review_hold";

export type SoundtrackTrack = {
  slug: string;
  title: string;
  chapter: string;
  connection: string;
  href: string;
  audioSrc?: string;
  sourceNote: string;
  status: SoundtrackTrackStatus;
  supportCta: string;
};

const audioBase = "/audio/what-the-town-keeps";

export const whatTheTownKeepsTracks: SoundtrackTrack[] = [
  {
    slug: "ballast",
    title: "Ballast",
    chapter: "Chapter One - Ballast",
    connection:
      "Elias Vale enters Vallen and the first weight of the town settles in.",
    href: "/graphic-novel/chapter-one/page-001",
    audioSrc: `${audioBase}/ballast.mp3`,
    sourceNote: "Final edits MP3 master.",
    status: "published",
    supportCta: "If Ballast pulls you into Vallen, support the next page.",
  },
  {
    slug: "boundary-weather",
    title: "Boundary Weather",
    chapter: "Vallen thread",
    connection:
      "Weather, restraint, and the first pressure line between people.",
    href: "/graphic-novel/chapter-one",
    audioSrc: `${audioBase}/boundary-weather.mp3`,
    sourceNote: "Final edits MP3 master.",
    status: "published",
    supportCta: "Support the scenes where the weather starts talking back.",
  },
  {
    slug: "switch-point",
    title: "Switch Point",
    chapter: "Threshold thread",
    connection:
      "The moment a practical path becomes a choice with consequences.",
    href: "/graphic-novel/chapter-one/page-004",
    audioSrc: `${audioBase}/switch-point.mp3`,
    sourceNote: "Final edits MP3 master.",
    status: "published",
    supportCta: "Help keep the thresholds opening page by page.",
  },
  {
    slug: "measured-distance",
    title: "Measured Distance",
    chapter: "Vallen thread",
    connection:
      "Distance measured in rooms, roads, silences, and what someone cannot say yet.",
    href: "/project",
    audioSrc: `${audioBase}/measured-distance.mp3`,
    sourceNote: "Final edits MP3 master.",
    status: "published",
    supportCta: "Support the quiet connective tissue of the story world.",
  },
  {
    slug: "measured-motion",
    title: "Measured Motion",
    chapter: "Mercer Street thread",
    connection:
      "Controlled movement, careful driving, and the cost of staying composed.",
    href: "/graphic-novel/chapter-one/page-002",
    audioSrc: `${audioBase}/measured-motion.mp3`,
    sourceNote: "Final edits MP3 master.",
    status: "published",
    supportCta: "Support the slow-burn scenes that make Vallen feel lived in.",
  },
  {
    slug: "signal-drift",
    title: "Signal Drift",
    chapter: "Vallen thread",
    connection:
      "Messages that repeat, fail, or arrive slightly wrong after moving through the town.",
    href: "/graphic-novel/chapter-one/page-006",
    audioSrc: `${audioBase}/signal-drift.mp3`,
    sourceNote: "Final edits MP3 master.",
    status: "published",
    supportCta: "Support the strange signals before they become answers.",
  },
  {
    slug: "convergent-error",
    title: "Convergent Error",
    chapter: "Vallen thread",
    connection:
      "Two paths appearing to meet while carrying incompatible histories.",
    href: "/project",
    audioSrc: `${audioBase}/convergent-error.mp3`,
    sourceNote: "Final edits MP3 master.",
    status: "published",
    supportCta: "Support the moments where the evidence refuses to line up.",
  },
  {
    slug: "red-signals",
    title: "Red Signals",
    chapter: "Warning thread",
    connection:
      "Warning, attraction, and the moment a boundary becomes difficult to obey.",
    href: "/project",
    audioSrc: `${audioBase}/red-signals.mp3`,
    sourceNote: "Final edits MP3 master.",
    status: "published",
    supportCta: "Support the warning lights before anyone admits what they mean.",
  },
  {
    slug: "patterns",
    title: "Patterns",
    chapter: "Hallway thread",
    connection:
      "Repeated habits, rooms, and signals people mistake for safety.",
    href: "/graphic-novel/chapter-one/page-005",
    audioSrc: `${audioBase}/patterns.mp3`,
    sourceNote: "Final edits MP3 master; vocal issue addressed in source file name.",
    status: "published",
    supportCta: "Support the pattern work that lets the story echo.",
  },
  {
    slug: "what-remains",
    title: "What Remains",
    chapter: "Closing thread",
    connection:
      "After departure, something in the town still keeps its shape.",
    href: "/project",
    audioSrc: `${audioBase}/what-remains.mp3`,
    sourceNote: "Final edits MP3 master.",
    status: "published",
    supportCta: "Support the pieces that stay behind after the page ends.",
  },
  {
    slug: "emerge-the-silence",
    title: "Emerge the Silence",
    chapter: "Review hold",
    connection:
      "A silence-as-atmosphere song held back until the vocal edit is approved.",
    href: "/music",
    sourceNote: "Source file says vocal edit needed; keep off the public player.",
    status: "review_hold",
    supportCta: "Held for owner review.",
  },
];

export function getPublicSoundtrackTracks() {
  return whatTheTownKeepsTracks.filter(
    (track) => track.status === "published" && track.audioSrc
  );
}

export function getTrackBySlug(slug: string) {
  return whatTheTownKeepsTracks.find((track) => track.slug === slug);
}

export function getFeaturedSoundtrackTrack() {
  return getTrackBySlug("ballast") ?? getPublicSoundtrackTracks()[0];
}
