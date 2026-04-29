export type GlyphName = "record" | "hidden" | "chain" | "unsealed";

export type StoryChapter = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  glyph: GlyphName;
  image: string;
  summary: string;
  thesis: string;
  keyLine: string;
  detailSections: {
    heading: string;
    body: string[];
  }[];
  sourceResonance: {
    title: string;
    text: string;
  }[];
  visualLanguage: string[];
  symbols: string[];
  musicNotes: string[];
};

export const glyphImages: Record<GlyphName, string> = {
  record: "/images/phylax/symbols/record.png",
  hidden: "/images/phylax/symbols/hidden.png",
  chain: "/images/phylax/symbols/chain.png",
  unsealed: "/images/phylax/symbols/unsealed.png",
};

export const storyChapters: StoryChapter[] = [
  {
    slug: "upper-watch",
    number: "I",
    title: "The Upper Watch",
    subtitle: "Order before longing.",
    glyph: "hidden",
    image: "/images/phylax/atmosphere/upper-watch-hero.png",
    summary:
      "The cold observatory realm above the human world: black stone, orbit rings, mirror pools, star machinery, archives, and courts of measure.",
    thesis:
      "Before the breach, the Watchers are not monsters. They are offices of attention, made to observe without possession.",
    keyLine: "The first holiness was distance.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "The story begins in restraint. The Watchers stand in stations of order, not rebellion. They measure the world below without touching it.",
          "Distance is not cruelty here. Distance is the original law that protects both watcher and watched.",
          "The Upper Watch should feel severe, beautiful, cold, and almost impossible to inhabit emotionally.",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "This chapter establishes observation, record, orbit, measure, boundary, and silence.",
          "The audience should not feel evil yet. They should feel pressure. The order is intact, but emotionally unstable.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Watcher tradition",
        text:
          "The observing beings and heavenly order come from Watcher material, but PHYLAX keeps the public names original.",
      },
      {
        title: "Jubilees",
        text:
          "Ordered time, heavenly record, and cycles support the observatory machinery and written-consequence language.",
      },
    ],
    visualLanguage: [
      "black stone platforms above storm clouds",
      "faint circular sky diagrams",
      "no wings, halos, or throne imagery",
      "storm-blue sky with distant ember horizon",
    ],
    symbols: [
      "Hidden: sacred observation and veiled knowledge.",
      "Record: the archive before corruption.",
    ],
    musicNotes: [
      "cold drone",
      "slow low-register guitar bloom",
      "distant metallic resonance",
      "sacred restraint",
    ],
  },
  {
    slug: "warm-below",
    number: "II",
    title: "The Warm Below",
    subtitle: "The mortal world becomes unbearable to merely observe.",
    glyph: "hidden",
    image: "/images/phylax/atmosphere/descent-path.png",
    summary:
      "The human world of firelight, blood, breath, childbirth, marriage, grief, work, hunger, fields, smoke, water, and burial.",
    thesis:
      "Human fragility becomes the thing the eternal envies. Mortality gives human nearness urgency.",
    keyLine: "The brief were given what the endless could not touch.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "The Watchers do not first envy power. They envy ordinary human nearness: a vow spoken beside fire, a child named, a body mourned.",
          "Humans are fragile, but that fragility gives every act weight.",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "This gives the audience the reason the Watchers fracture. Human life contains intimacy that cannot be measured cleanly from above.",
          "The Warm Below keeps the project emotionally human instead of only cosmic.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Human Chorus",
        text:
          "The lore treats humanity as the emotional anchor, not decoration. Human grief, resistance, intelligence, and consequence matter.",
      },
    ],
    visualLanguage: [
      "low human fires below impossible height",
      "warm amber against storm-blue",
      "small human figures under vast cosmic distance",
    ],
    symbols: [
      "Hidden: what the Watchers cannot understand cleanly.",
      "Record: human life preserved from above.",
    ],
    musicNotes: [
      "warmer chord color under dark drone",
      "fragile guitar motif",
      "distant human vocal texture",
    ],
  },
  {
    slug: "glass-below",
    number: "III",
    title: "The Glass Below",
    subtitle: "Observation becomes hunger.",
    glyph: "record",
    image: "/images/phylax/atmosphere/black-mountain.png",
    summary:
      "The reflective instrument used to observe humanity. Before corruption, it preserves distance. After longing enters, it becomes private and addictive.",
    thesis:
      "A sacred tool becomes dangerous when the watcher returns to it for ache instead of duty.",
    keyLine: "The instrument did not change first. The eye did.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "The Glass Below is the first private breach. Not descent, not oath, not touch — repeated looking.",
          "The watcher tells himself he is studying humanity. Then he is learning compassion. Then he stops needing a reason.",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "This lets the fall become psychologically precise. The corruption starts inside attention.",
          "The site can use this as a motif for hidden reflections, archive fragments, and reveal states.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Nag Hammadi atmosphere",
        text:
          "Hidden books, secret knowledge, and buried revelation shape the Glass Below as dangerous seeing.",
      },
    ],
    visualLanguage: [
      "black reflective pool",
      "human fire reflected in impossible glass",
      "sky rings warped in reflection",
    ],
    symbols: [
      "Record: observation and archive.",
      "Hidden: forbidden seeing.",
      "Unsealed: pressure toward revelation.",
    ],
    musicNotes: [
      "reversed guitar swells",
      "glass-like harmonics",
      "uneasy pulse",
    ],
  },
  {
    slug: "first-whisper",
    number: "IV",
    title: "The First Whisper",
    subtitle: "The thought before the fall.",
    glyph: "hidden",
    image: "/images/phylax/atmosphere/descent-path.png",
    summary:
      "Nadir Quen senses the threshold first. He does not force rebellion. He gives longing a sentence.",
    thesis: "The first fall happens as a question.",
    keyLine: "The door was not open. I learned to hear it anyway.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "Nadir is dangerous because he is quiet. He does not command descent. He gives the others a way to think about the ache they already feel.",
          "His question is poisonous: what if distance is not obedience, but abandonment?",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "Private longing becomes communicable temptation.",
          "Once the ache has words, it can recruit others.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Threshold motifs",
        text:
          "PHYLAX uses thresholds as the almost-crossing: doorways, stairs, horizons, and breath between worlds.",
      },
    ],
    visualLanguage: [
      "descending stair that should not exist",
      "hooded figure in profile",
      "sky fracture above a silent path",
    ],
    symbols: [
      "Hidden: the question beneath the question.",
      "Unsealed: threshold pressure.",
    ],
    musicNotes: [
      "intimate vocal entry",
      "thin high guitar line",
      "sub-bass rumble",
    ],
  },
  {
    slug: "oath-circle",
    number: "V",
    title: "The Oath Circle",
    subtitle: "Private longing becomes shared consequence.",
    glyph: "chain",
    image: "/images/phylax/atmosphere/upper-watch-hero.png",
    summary:
      "The circular black-stone platform once used to renew lawful distance. Veyr corrupts it into the site of conspiracy.",
    thesis: "The oath is not only a vow. It is a mechanism.",
    keyLine: "After the vow, no one fell alone.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "Veyr turns private fracture into structure. Desire is no longer isolated. It is bound.",
          "The circle is tragic because it was not built for rebellion. It was built to preserve order.",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "This is where the story becomes irreversible.",
          "Before the oath there are thoughts and questions. After the oath, consequence links them together.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Watcher oath traditions",
        text:
          "The oath and shared descent provide source architecture, while PHYLAX reframes them through original names and symbolic psychology.",
      },
    ],
    visualLanguage: [
      "broken circular floor glyph",
      "hands over ember-lit stone",
      "watchers around ritual architecture",
    ],
    symbols: [
      "Chain: binding and irreversible choice.",
      "Hidden: conspiracy under sacred architecture.",
    ],
    musicNotes: [
      "first major impact",
      "muted heavy guitar pulse",
      "layered vow texture",
    ],
  },
  {
    slug: "descent",
    number: "VI",
    title: "The Descent",
    subtitle: "The boundary is crossed.",
    glyph: "unsealed",
    image: "/images/phylax/atmosphere/descent-path.png",
    summary:
      "The descent is not heroic flight. The mountain receives impossible weight. The air thickens. The sky opens incorrectly.",
    thesis:
      "The physical fall is only the visible form of an interior breach that already happened.",
    keyLine: "Nothing had happened yet. Something had already been lost.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "The Descent should feel slow, heavy, and inevitable. The Watchers do not dive like warriors. They cross like beings violating their own design.",
          "This is the first point where the world itself responds.",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "Everything before this is pressure. Everything after this is consequence.",
          "The page should feel like stepping from archive into event.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Enochic descent",
        text:
          "The descent supplies the mythic architecture, while PHYLAX makes the emotional center interior: longing before impact.",
      },
    ],
    visualLanguage: [
      "black path into cosmic fracture",
      "single figure before impossible mountain",
      "red ember valleys below",
    ],
    symbols: [
      "Unsealed: breach and revelation.",
      "Chain: oath consequence now moving.",
    ],
    musicNotes: [
      "first full heavy entrance",
      "7-string weight",
      "wide darkgaze atmosphere",
    ],
  },
  {
    slug: "gifts",
    number: "VII",
    title: "The Gifts",
    subtitle: "Knowledge enters before wisdom can hold it.",
    glyph: "record",
    image: "/images/phylax/atmosphere/dren-forge.png",
    summary:
      "Craft, metal, writing, stars, cycles, signs, medicine, beauty, and strategy enter the human world too early.",
    thesis: "Every forbidden gift must have beauty and danger.",
    keyLine: "A tool does not stay innocent because the first hand meant well.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "The gifts are not cartoon evil. Many truly help at first.",
          "The gift is not false. The timing is wrong, the vessel is unready, and the motive of the giver is fractured.",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "This complicates the moral world. The Watchers are teachers whose instruction outruns conscience.",
          "Human recipients are not puppets. Some resist, some use the gifts carefully, some exploit them quickly.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Forbidden instruction",
        text:
          "Watcher traditions inspire the gift structure, while PHYLAX emphasizes knowledge becoming harm when severed from wisdom.",
      },
    ],
    visualLanguage: [
      "forge-temple in black stone",
      "ember cracks in tools and tablets",
      "record symbol etched into stone",
    ],
    symbols: [
      "Record: instruction and memory.",
      "Unsealed: knowledge exposed too soon.",
    ],
    musicNotes: [
      "industrial texture",
      "metallic percussion feel",
      "beauty and danger in one progression",
    ],
  },
  {
    slug: "the-mass",
    number: "VIII",
    title: "The Mass",
    subtitle: "Consequence grows too large.",
    glyph: "unsealed",
    image: "/images/phylax/atmosphere/black-mountain.png",
    summary:
      "The embodied consequences of breach: scale error made flesh, celestial intensity without restraint, human hunger without limitation.",
    thesis: "The consequence is tragic before it is monstrous.",
    keyLine: "They were not born evil. They were born too large for mercy.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "The Mass are not generic giants. They are grief with bodies.",
          "Their existence proves the breach has entered matter.",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "This is where consequence becomes undeniable.",
          "The human world begins to understand that awe has a cost.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Children of the breach",
        text:
          "The lore frames them as embodied consequences rather than disposable monsters.",
      },
    ],
    visualLanguage: [
      "distant massive silhouettes",
      "fields bending under impossible weight",
      "children watching before adults understand",
    ],
    symbols: [
      "Unsealed: consequence revealed.",
      "Chain: inheritance from oath.",
    ],
    musicNotes: [
      "largest low-end section",
      "slow crushing rhythm",
      "mournful melody",
    ],
  },
  {
    slug: "trial-of-offices",
    number: "IX",
    title: "The Trial of Offices",
    subtitle: "Judgment is accurate naming.",
    glyph: "record",
    image: "/images/phylax/atmosphere/upper-watch-hero.png",
    summary:
      "The Seven Measures arrive as corrective offices. They do not debate the breach. They name what it damaged.",
    thesis: "To be judged is to be called by what your gift became.",
    keyLine: "The court did not ask what they intended. It asked what they had made.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "The trial is precision, not spectacle.",
          "Each fallen office is stripped of its noble explanation and named according to what it became.",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "The story turns from corruption into consequence.",
          "The universe becomes legible again, but not gentle.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Danielic court imagery",
        text:
          "Heavenly courts, books, and interpretive judgment shape the atmosphere of accurate naming.",
      },
    ],
    visualLanguage: [
      "still court of black stone",
      "records opening without hands",
      "vast quiet figures",
    ],
    symbols: [
      "Record: accurate naming.",
      "Hidden: concealed motive exposed.",
      "Unsealed: truth made visible.",
    ],
    musicNotes: [
      "drums pull back",
      "massive suspended chords",
      "wide silence between hits",
    ],
  },
  {
    slug: "binding",
    number: "X",
    title: "The Binding",
    subtitle: "The breach becomes buried signal.",
    glyph: "chain",
    image: "/images/phylax/atmosphere/black-mountain.png",
    summary:
      "The fallen are sealed according to their corrupted gifts: forge, threshold, oath, argument, iron, broken stars, ash archive.",
    thesis:
      "Punishment is not random destruction. It is consequence given architecture.",
    keyLine: "What they misused became the shape of their prison.",
    detailSections: [
      {
        heading: "Meaning",
        body: [
          "The Binding is not the end of the breach. It is the end of its visible reign.",
          "Each fallen office is sealed inside a consequence that matches its corruption.",
        ],
      },
      {
        heading: "Narrative function",
        body: [
          "This creates the long tail of the album world.",
          "PHYLAX becomes transmission: a signal beneath history, art, systems, hunger, and memory.",
        ],
      },
    ],
    sourceResonance: [
      {
        title: "Binding traditions",
        text:
          "Watcher containment informs the architecture, while PHYLAX gives each binding a symbolic and personal shape.",
      },
    ],
    visualLanguage: [
      "deep hold beneath black mountain",
      "chains as architecture",
      "embers under stone",
    ],
    symbols: [
      "Chain: binding and consequence.",
      "Record: what remains remembered.",
      "Hidden: signal buried beneath history.",
    ],
    musicNotes: [
      "slow collapse into drone",
      "heavy guitars fade into low ambience",
      "ending feels sealed, not resolved",
    ],
  },
];

export function getStoryChapter(slug: string) {
  return storyChapters.find((chapter) => chapter.slug === slug);
}

export function getAdjacentChapters(slug: string) {
  const index = storyChapters.findIndex((chapter) => chapter.slug === slug);

  return {
    previous: index > 0 ? storyChapters[index - 1] : null,
    next:
      index >= 0 && index < storyChapters.length - 1
        ? storyChapters[index + 1]
        : null,
  };
}
