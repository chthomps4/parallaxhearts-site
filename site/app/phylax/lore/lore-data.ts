export type GlyphName = "record" | "hidden" | "chain" | "unsealed";

export type LoreLink = {
  label: string;
  href: string;
};

export type LoreChapter = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  glyph: GlyphName;
  image: string;

  summary: string;
  thesis: string;
  keyLine: string;

  coreMeaning: string;
  narrativeFunction: string;
  emotionalPressure: string;
  worldChange: string;
  hiddenArchiveFragment: string;
  easterEggIdea: string;

  detailSections: {
    heading: string;
    body: string[];
  }[];

  characterImpact: {
    name: string;
    impact: string;
    href?: string;
  }[];

  sourceReservoir: {
    source: string;
    resonance: string;
    phylaxUse: string;
  }[];

  sourceResonance: {
    title: string;
    text: string;
  }[];

  symbolMeaning: {
    symbol: string;
    meaning: string;
  }[];

  visualLanguage: string[];
  videoDirection: string[];
  musicNotes: string[];
  symbols: string[];
  connectedCharacters: LoreLink[];
  connectedSongs: LoreLink[];
};

export const glyphImages: Record<GlyphName, string> = {
  record: "/images/phylax/symbols/record.png",
  hidden: "/images/phylax/symbols/hidden.png",
  chain: "/images/phylax/symbols/chain.png",
  unsealed: "/images/phylax/symbols/unsealed.png",
};

export const loreChapters: LoreChapter[] = [
  {
    slug: "upper-watch",
    number: "I",
    title: "The Upper Watch",
    subtitle: "Order before longing.",
    glyph: "hidden",
    image: "/images/phylax/atmosphere/upper-watch-hero.png",

    summary:
      "The Upper Watch is the cold observatory realm above the human world: black stone, orbit rings, mirror pools, star machinery, archives, and courts of measure.",
    thesis:
      "Before the breach, the Watchers are not monsters. They are offices of attention, made to observe without possession.",
    keyLine: "The first holiness was distance.",

    coreMeaning:
      "The Upper Watch represents sacred distance before it becomes emotional deprivation. It is order without intimacy, clarity without warmth, sight without touch.",
    narrativeFunction:
      "This movement establishes the original order so the breach has moral weight. The audience must first understand that the boundary was not arbitrary. It protected both the watcher and the watched.",
    emotionalPressure:
      "The Watchers are surrounded by vastness but deprived of nearness. Their tragedy begins when the beauty of human life makes their assigned distance feel like exile.",
    worldChange:
      "Nothing has visibly broken yet. The sky remains clean, the courses still hold, and the black-stone platforms remain aligned. The change is internal: attention begins to ache.",
    hiddenArchiveFragment:
      "Archive note: The first records do not describe rebellion. They describe silence becoming difficult to maintain.",
    easterEggIdea:
      "Hide the Hidden symbol faintly in the sky geometry of this page. On hover, reveal: 'Observation was the first mercy.'",

    detailSections: [
      {
        heading: "The architecture of attention",
        body: [
          "The Upper Watch is not outer space, not church heaven, and not a fantasy castle. It is a realm built for attention. Every platform, ring, mirror, and archive exists to preserve measured sight.",
          "The Watchers do not begin as personalities. They begin as offices. Their identity is tied to function: measure, record, interpret, guard, and remain separate.",
          "That distinction is important. PHYLAX becomes tragic because the Watchers are not born monstrous. They are made for a kind of holiness that becomes unbearable once desire enters it.",
        ],
      },
      {
        heading: "Distance as protection",
        body: [
          "Distance is not rejection in the early PHYLAX world. It is a protective law. The watcher who enters the watched world alters it. The watched world that receives the watcher is no longer free from the watcher’s scale.",
          "The first law of the Upper Watch is simple: you may behold what is below; you may not become its answer.",
          "The breach begins when this law stops feeling like mercy and starts feeling like denial.",
        ],
      },
      {
        heading: "How the audience should feel it",
        body: [
          "The opening atmosphere should feel sacred, cold, and restrained. No chaos yet. No rebellion yet. Only duty under enormous silence.",
          "The viewer should sense that the place is beautiful but emotionally unlivable. The question should not be 'why would they fall?' but 'how long could anyone stand this?'",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Kovren",
        href: "/phylax/characters/kovren",
        impact:
          "Kovren is most at home here. The intact sky is his original language before he divides it into usable signs.",
      },
      {
        name: "Veyr",
        href: "/phylax/characters/veyr",
        impact:
          "Veyr’s authority is strongest before the breach. He is still the voice of distance before he becomes the voice of oath.",
      },
      {
        name: "Nadir Quen",
        href: "/phylax/characters/nadir-quen",
        impact:
          "Nadir begins to feel the pressure of thresholds even while the Upper Watch still appears stable.",
      },
    ],

    sourceReservoir: [
      {
        source: "Enochic Watcher traditions",
        resonance:
          "Heavenly watchers, appointed observation, boundary, and descent pressure.",
        phylaxUse:
          "PHYLAX keeps the watcher structure but makes the emotional engine sacred distance collapsing under longing.",
      },
      {
        source: "Jubilees",
        resonance:
          "Ordered time, tablets, cycles, heavenly instruction, and the idea of preserved record.",
        phylaxUse:
          "The Upper Watch becomes an architecture of record and course rather than a generic heavenly setting.",
      },
      {
        source: "Daniel",
        resonance:
          "Hidden courts, sealed knowledge, and unseen order behind visible history.",
        phylaxUse:
          "The Watch is presented as quiet administration rather than spectacle.",
      },
    ],

    sourceResonance: [
      {
        title: "Watcher tradition",
        text:
          "The observing beings and heavenly order come from Watcher material, but PHYLAX keeps the public names original and treats the source as symbolic architecture.",
      },
      {
        title: "Jubilees",
        text:
          "The emphasis on ordered time, heavenly record, and cycles supports the visual idea of observatory machinery and written consequence.",
      },
      {
        title: "Daniel",
        text:
          "Sealed courts, hidden heavenly conflict, and interpretive order shape the feeling of an unseen administration above the visible world.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Hidden",
        meaning:
          "The Watch itself: sight protected by veil, knowledge that must remain bounded.",
      },
      {
        symbol: "Record",
        meaning:
          "The archives before corruption: memory preserved without appetite.",
      },
    ],

    visualLanguage: [
      "black stone platforms above storm clouds",
      "faint circular sky diagrams",
      "cold blue-gray atmosphere with distant ember hints",
      "no wings, halos, thrones, or obvious religious staging",
      "figures that feel like functions before personalities",
      "mirror pools and orbit rings used as sacred instruments",
    ],
    videoDirection: [
      "Begin with motion across black-stone platforms suspended above storm clouds.",
      "Use slow but powerful movement: orbit rings rotating, clouds shearing below, robes moving in high wind.",
      "Show figures at stations, not posing like villains.",
      "No direct rebellion yet. The energy should feel restrained, monumental, and tense.",
    ],
    musicNotes: [
      "cold drone",
      "slow low-register guitar bloom",
      "distant metallic resonance",
      "no full drums yet",
      "sacred restraint, not action",
    ],
    symbols: [
      "Hidden: sacred observation and veiled knowledge.",
      "Record: the archive before corruption.",
      "Unsealed: only foreshadowed, not active yet.",
    ],
    connectedCharacters: [
      { label: "Veyr", href: "/phylax/characters/veyr" },
      { label: "Kovren", href: "/phylax/characters/kovren" },
      { label: "Nadir Quen", href: "/phylax/characters/nadir-quen" },
    ],
    connectedSongs: [
      { label: "Descent", href: "/phylax/lore/descent" },
      { label: "Course", href: "/phylax/lore/gifts" },
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
      "The Warm Below is the human world of firelight, blood, breath, childbirth, marriage, grief, work, hunger, fields, smoke, water, and burial.",
    thesis:
      "Human fragility becomes the thing the eternal envies. Mortality gives human nearness urgency.",
    keyLine: "The brief were given what the endless could not touch.",

    coreMeaning:
      "The Warm Below is not lesser than the Upper Watch. It is smaller, fragile, temporary, and therefore emotionally heavier. Humanity possesses nearness precisely because it can lose everything.",
    narrativeFunction:
      "This movement gives the Watchers a reason to fracture. They do not envy human strength. They envy human participation: touch, family, risk, grief, and chosen nearness.",
    emotionalPressure:
      "The Watchers begin to feel excluded from the most ordinary human moments. A meal, a vow, a child being named, a body being buried — all become unbearable because they are inaccessible.",
    worldChange:
      "The human world has not changed yet. What changes is the Watchers’ interpretation of it. The Warm Below stops being an observed field and becomes a wound.",
    hiddenArchiveFragment:
      "Archive note: The lower fires were first catalogued as household light. Later records call them invitations. That change is the first corruption of language.",
    easterEggIdea:
      "Place a tiny Hidden symbol in the glow of a human fire. On click, reveal: 'Mortality made warmth urgent.'",

    detailSections: [
      {
        heading: "Humanity as emotional density",
        body: [
          "The Warm Below must never feel like a disposable human realm. It is the emotional anchor of the entire PHYLAX world. Without human weight, the fall becomes abstract.",
          "Humans are small, but their smallness gives their choices intensity. They marry under death. They build what time can break. They speak names because names can be forgotten.",
          "The Watchers are wounded by this because they can see it clearly but cannot participate cleanly.",
        ],
      },
      {
        heading: "Why mortality matters",
        body: [
          "In PHYLAX, mortality is not only weakness. It is pressure. Because human life ends, human love becomes urgent. Because bodies fail, touch matters. Because memory fades, record becomes sacred.",
          "This is what the eternal envies: not death itself, but the depth that death gives to nearness.",
        ],
      },
      {
        heading: "The first misreading",
        body: [
          "The Watchers begin by being moved. Being moved is not yet corruption.",
          "The error begins when they interpret being moved as being called. They mistake ache for permission.",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Veyr",
        href: "/phylax/characters/veyr",
        impact:
          "Human vows strike Veyr most deeply. He sees mortal covenant and begins to desire a version of it above law.",
      },
      {
        name: "Nadir Quen",
        href: "/phylax/characters/nadir-quen",
        impact:
          "Nadir hears the Warm Below first through breath, song, mourning, and thresholds.",
      },
      {
        name: "Korr Vane",
        href: "/phylax/characters/korr-vane",
        impact:
          "Korr sees human need and becomes fascinated by the hands that make tools because they lack what they need.",
      },
    ],

    sourceReservoir: [
      {
        source: "Human Chorus",
        resonance:
          "The human side must carry agency, fear, intelligence, attraction, resistance, and consequence.",
        phylaxUse:
          "The Warm Below becomes the emotional counterweight to cosmic architecture.",
      },
      {
        source: "Gospel of Mary atmosphere",
        resonance:
          "Vision, inward ascent, contested revelation, and truth received through image.",
        phylaxUse:
          "Human experience is treated as something symbolically powerful, not merely literal plot material.",
      },
    ],

    sourceResonance: [
      {
        title: "Human Chorus",
        text:
          "The lore treats humanity as the emotional anchor, not decoration. Human grief, resistance, intelligence, and consequence matter.",
      },
      {
        title: "Inner vision",
        text:
          "The inward and symbolic quality of visionary material supports the idea that human life communicates through image, feeling, and encounter.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Hidden",
        meaning:
          "Human meaning that cannot be cleanly measured from above.",
      },
      {
        symbol: "Record",
        meaning:
          "Lives preserved as breaths, vows, names, births, deaths, and repeated gestures.",
      },
    ],

    visualLanguage: [
      "small human fires below impossible cosmic height",
      "warm amber against cold storm-blue",
      "hands, doorways, smoke, breath, and burial cloth",
      "human figures kept small but emotionally central",
      "no sentimental village fantasy; keep it grounded and severe",
    ],
    videoDirection: [
      "Cut from the cold Upper Watch to low firelight below.",
      "Show human life in fragments: hands washing, smoke rising, a child asleep, someone standing at a grave, a vow implied but not overexplained.",
      "Keep the camera near the human world but occasionally reveal the impossible height above.",
    ],
    musicNotes: [
      "warmer chord color under dark drone",
      "clean fragile guitar motif",
      "distant human vocal texture",
      "no heroic melody",
    ],
    symbols: [
      "Hidden: what the Watchers cannot understand cleanly.",
      "Record: human life being preserved from above.",
    ],
    connectedCharacters: [
      { label: "Veyr", href: "/phylax/characters/veyr" },
      { label: "Nadir Quen", href: "/phylax/characters/nadir-quen" },
      { label: "Korr Vane", href: "/phylax/characters/korr-vane" },
    ],
    connectedSongs: [
      { label: "Descent", href: "/phylax/lore/descent" },
      { label: "Graft", href: "/phylax/lore/gifts" },
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
      "The Glass Below is the reflective instrument used to observe humanity. Before corruption, it preserves distance. After longing enters, it becomes private and addictive.",
    thesis:
      "A sacred tool becomes dangerous when the watcher returns to it for ache instead of duty.",
    keyLine: "The instrument did not change first. The eye did.",

    coreMeaning:
      "The Glass Below is the first private breach. It is not a descent, not a vow, not a touch. It is repeated looking after duty has ended.",
    narrativeFunction:
      "This movement slows the fall down and makes it psychologically precise. The audience sees corruption begin as habit before it becomes event.",
    emotionalPressure:
      "The Watcher keeps returning to the image and inventing noble reasons for it. Study becomes compassion. Compassion becomes fixation. Fixation becomes entitlement.",
    worldChange:
      "The instrument remains physically intact, but its meaning changes. What was once a tool of holy distance becomes a mirror for desire.",
    hiddenArchiveFragment:
      "Archive note: Later copies disagree on whether the Glass darkened first or whether the watchers simply began seeing themselves in it.",
    easterEggIdea:
      "Use a reflection hover effect on this page: when visitors move over a dark panel, a faint Record symbol appears like something beneath glass.",

    detailSections: [
      {
        heading: "The corruption of seeing",
        body: [
          "PHYLAX depends on the difference between attention and appetite. The Glass Below is where that difference collapses.",
          "The Watchers were made to behold clearly. Clear sight was part of their office. But the Glass exposes how easily sight can become possession when the watcher begins to return for himself.",
          "The instrument does not become evil. The motive changes first.",
        ],
      },
      {
        heading: "Private breach before public breach",
        body: [
          "This is the first hidden sin of the world: not action, but unauthorized return.",
          "The Watcher does not yet cross the boundary. He crosses an inner boundary by wanting the image to answer him.",
        ],
      },
      {
        heading: "Website use",
        body: [
          "The Glass Below can become a recurring interactive motif across the site: reflective panels, hidden hover text, faint symbols that appear only at certain angles, and archive fragments that feel discovered rather than presented.",
          "This keeps the website from feeling like a static information page. It becomes an artifact that looks back.",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Veyr",
        href: "/phylax/characters/veyr",
        impact:
          "Veyr’s longing becomes dignified through repeated looking. He begins to confuse attention with rightful claim.",
      },
      {
        name: "Nadir Quen",
        href: "/phylax/characters/nadir-quen",
        impact:
          "Nadir senses that the Glass is becoming a threshold rather than a window.",
      },
      {
        name: "Kovren",
        href: "/phylax/characters/kovren",
        impact:
          "Kovren sees the Glass as another system of interpretation, a surface that can turn mystery into readable pattern.",
      },
    ],

    sourceReservoir: [
      {
        source: "Nag Hammadi atmosphere",
        resonance:
          "Hidden books, secret sayings, buried revelation, and knowledge that can heal or fracture.",
        phylaxUse:
          "The Glass becomes a dangerous mode of seeing: revelation without readiness.",
      },
      {
        source: "Danielic sealed vision",
        resonance:
          "Not every image is meant to be opened immediately.",
        phylaxUse:
          "The Glass becomes an image-system whose timing and motive matter.",
      },
    ],

    sourceResonance: [
      {
        title: "Nag Hammadi atmosphere",
        text:
          "Hidden books, secret knowledge, and buried revelation shape the Glass Below as dangerous seeing.",
      },
      {
        title: "Sealed vision",
        text:
          "The atmosphere of withheld vision supports the idea that not every image should be opened before its time.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Record",
        meaning:
          "Observation, archive, and the preservation of what has been seen.",
      },
      {
        symbol: "Hidden",
        meaning:
          "The motive beneath observation.",
      },
      {
        symbol: "Unsealed",
        meaning:
          "The danger of opening vision before wisdom is ready.",
      },
    ],

    visualLanguage: [
      "black reflective pool",
      "faint human fire reflected in impossible glass",
      "figures leaning too close",
      "sky rings warped in reflection",
      "a symbol visible only on the surface",
    ],
    videoDirection: [
      "Show the Glass as almost liquid but still stone-like.",
      "Use reflected human firelight, not direct human scenes.",
      "Let the Watcher’s reflection become subtly misaligned with his body.",
      "No jump scares. The horror is in repetition.",
    ],
    musicNotes: [
      "subtle reversed guitar swells",
      "glass-like harmonic tones",
      "breathing room before distortion",
      "uneasy pulse underneath",
    ],
    symbols: [
      "Record: observation and archive.",
      "Hidden: forbidden seeing.",
      "Unsealed: future reveal pressure.",
    ],
    connectedCharacters: [
      { label: "Veyr", href: "/phylax/characters/veyr" },
      { label: "Nadir Quen", href: "/phylax/characters/nadir-quen" },
      { label: "Kovren", href: "/phylax/characters/kovren" },
    ],
    connectedSongs: [
      { label: "Descent", href: "/phylax/lore/descent" },
      { label: "Echo", href: "/phylax/lore/binding" },
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
      "Nadir Quen senses the threshold first. He does not force rebellion. He gives longing a sentence, and the sentence makes the impossible feel reasonable.",
    thesis: "The first fall happens as a question.",
    keyLine: "The door was not open. I learned to hear it anyway.",

    coreMeaning:
      "The First Whisper is the moment emotion becomes language. Once longing has words, it can spread.",
    narrativeFunction:
      "This movement moves the breach from private fixation into contagious thought. The fall is still interior, but now it can be shared.",
    emotionalPressure:
      "Nadir does not sound like a villain. He sounds like relief. He names what others already feel and gives them permission to stop resisting it.",
    worldChange:
      "The Middle Air begins to thicken. Thresholds become unstable. The almost-crossing becomes a sensed geography.",
    hiddenArchiveFragment:
      "Archive note: The earliest fragment attributes no command to the First Whisper. Only a question survived.",
    easterEggIdea:
      "Hide text in a threshold image that only appears when hovered: 'What if distance is not obedience?'",

    detailSections: [
      {
        heading: "The sentence that changes everything",
        body: [
          "Nadir’s power is not volume. It is permission. He does not create the ache. He makes it speakable.",
          "In PHYLAX, this matters because the first communal corruption is not a weapon or ritual. It is language that gives desire a noble mask.",
        ],
      },
      {
        heading: "Threshold psychology",
        body: [
          "Nadir belongs to the region between states: sleep and waking, silence and confession, distance and descent.",
          "He is vulnerable because he can feel transitions before others can name them. That sensitivity becomes dangerous when he treats every threshold as an invitation.",
        ],
      },
      {
        heading: "How to portray him",
        body: [
          "Nadir should rarely be centered like a ruler. He should appear at the edge of scenes: near stairs, doorways, cloud shelves, and black openings.",
          "The audience should feel that he has already heard something the others will soon repeat.",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Nadir Quen",
        href: "/phylax/characters/nadir-quen",
        impact:
          "This is Nadir’s defining movement. His sensitivity becomes permission.",
      },
      {
        name: "Veyr",
        href: "/phylax/characters/veyr",
        impact:
          "Veyr receives Nadir’s question and gives it solemn authority.",
      },
      {
        name: "Sevrin Ash",
        href: "/phylax/characters/sevrin-ash",
        impact:
          "Sevrin turns the whisper into an argument.",
      },
    ],

    sourceReservoir: [
      {
        source: "Threshold and descent motifs",
        resonance:
          "Mythic falls often begin before visible action, in thought, interpretation, or desire.",
        phylaxUse:
          "The descent is framed as psychologically inevitable before it becomes physical.",
      },
      {
        source: "Consciousness and shadow work",
        resonance:
          "Projection, self-deception, and inner fracture.",
        phylaxUse:
          "Nadir becomes the inner voice that mistakes ache for truth.",
      },
    ],

    sourceResonance: [
      {
        title: "Threshold motifs",
        text:
          "PHYLAX uses thresholds as the almost-crossing: doorways, stairs, horizons, and breath between worlds.",
      },
      {
        title: "Shadow language",
        text:
          "The whisper functions like self-deception becoming language. It is projection disguised as revelation.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Hidden",
        meaning:
          "The concealed thought before public action.",
      },
      {
        symbol: "Unsealed",
        meaning:
          "The threshold beginning to open.",
      },
    ],

    visualLanguage: [
      "descending stair that should not exist",
      "hooded figure in profile",
      "sky fracture above a silent path",
      "small symbol hidden in the stair edge",
      "fog moving upward instead of down",
    ],
    videoDirection: [
      "Use close, quiet shots: a hand hovering near stone, a face turned but not revealed, a stairway appearing through fog.",
      "Let the scene move more than the figure. Fog, cloth, cloud, and shadow should create unease.",
      "The whisper should feel like a thought becoming architecture.",
    ],
    musicNotes: [
      "intimate vocal entry",
      "thin high guitar line",
      "sub-bass rumble barely audible",
      "rhythm not fully arriving yet",
    ],
    symbols: [
      "Hidden: the question beneath the question.",
      "Unsealed: threshold pressure.",
    ],
    connectedCharacters: [
      { label: "Nadir Quen", href: "/phylax/characters/nadir-quen" },
      { label: "Veyr", href: "/phylax/characters/veyr" },
      { label: "Sevrin Ash", href: "/phylax/characters/sevrin-ash" },
    ],
    connectedSongs: [
      { label: "Descent", href: "/phylax/lore/descent" },
      { label: "Oath", href: "/phylax/lore/oath-circle" },
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
      "The Oath Circle was once used to renew lawful distance. Veyr corrupts it into the site of conspiracy and shared consequence.",
    thesis: "The oath is not only a vow. It is a mechanism.",
    keyLine: "After the vow, no one fell alone.",

    coreMeaning:
      "The Oath Circle is the moment private fracture becomes a collective system. Desire becomes structure. Structure becomes consequence.",
    narrativeFunction:
      "This is the first irreversible event. Everything before it could still have remained private. After the oath, the breach has architecture.",
    emotionalPressure:
      "The tragedy is solemn, not chaotic. The Watchers do not feel like rebels in their own minds. They feel like participants in a terrible necessity.",
    worldChange:
      "A lawful instrument is repurposed. The architecture of distance becomes the architecture of conspiracy.",
    hiddenArchiveFragment:
      "Archive note: The circle was not carved for rebellion. That is why the mark still answers when called.",
    easterEggIdea:
      "Embed the Chain symbol into the ring floor on the page. On click, reveal: 'The circle remembered its first purpose.'",

    detailSections: [
      {
        heading: "The corruption of covenant",
        body: [
          "Veyr’s great corruption is not desire alone. It is making desire binding.",
          "The oath takes private longing and makes it communal. After this, no Watcher can pretend his fall belongs only to himself.",
        ],
      },
      {
        heading: "A lawful instrument misused",
        body: [
          "The Oath Circle was once used to renew distance. That makes its corruption more tragic.",
          "PHYLAX should treat the circle like a sacred machine pointed in the wrong direction.",
        ],
      },
      {
        heading: "The court becomes real",
        body: [
          "This is the birth of the Breach Court. Nadir supplied the question. Sevrin supplied the reasoning. Veyr supplies the binding word.",
          "The moment should feel quiet enough to be terrifying.",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Veyr",
        href: "/phylax/characters/veyr",
        impact:
          "Veyr becomes the Binding Voice here. His longing is now an institution.",
      },
      {
        name: "Sevrin Ash",
        href: "/phylax/characters/sevrin-ash",
        impact:
          "Sevrin’s reasoning makes the oath feel sober and necessary.",
      },
      {
        name: "Korr Vane",
        href: "/phylax/characters/korr-vane",
        impact:
          "Korr’s future gifts will prove the oath materially consequential.",
      },
    ],

    sourceReservoir: [
      {
        source: "Watcher oath traditions",
        resonance:
          "The shared oath and collective descent.",
        phylaxUse:
          "The oath becomes psychological, symbolic, architectural, and musical.",
      },
      {
        source: "Covenant imagery",
        resonance:
          "Binding word, shared consequence, and solemn vow.",
        phylaxUse:
          "PHYLAX turns covenant language into tragic misuse rather than simple ritual.",
      },
    ],

    sourceResonance: [
      {
        title: "Watcher oath traditions",
        text:
          "The oath and shared descent provide source architecture, while PHYLAX reframes them through original names and symbolic psychology.",
      },
      {
        title: "Judgment as accurate naming",
        text:
          "The oath creates the later logic of judgment: each office is measured by what it became after boundary failed.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Chain",
        meaning:
          "Binding, shared consequence, and irreversible consent.",
      },
      {
        symbol: "Record",
        meaning:
          "The vow preserved as evidence.",
      },
    ],

    visualLanguage: [
      "broken circular floor glyph",
      "hands over ember-lit stone",
      "watchers positioned around ritual architecture",
      "chain symbol barely visible in the floor",
      "no blood, no spectacle, only irreversible consent",
    ],
    videoDirection: [
      "Show figures stepping into a circle one by one.",
      "Use low ember light moving through carved lines as the oath is spoken.",
      "Make the circle feel like machinery waking up, not magic fireworks.",
      "End with silence, not explosion.",
    ],
    musicNotes: [
      "first real impact moment",
      "low tom-like pulse or heavy muted guitar",
      "voices layered as vow texture",
      "rising dissonance",
    ],
    symbols: [
      "Chain: binding and irreversible choice.",
      "Hidden: conspiracy under sacred architecture.",
    ],
    connectedCharacters: [
      { label: "Veyr", href: "/phylax/characters/veyr" },
      { label: "Sevrin Ash", href: "/phylax/characters/sevrin-ash" },
      { label: "Nadir Quen", href: "/phylax/characters/nadir-quen" },
    ],
    connectedSongs: [
      { label: "Oath", href: "/phylax/lore/oath-circle" },
      { label: "Bound", href: "/phylax/lore/binding" },
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
      "The descent is not heroic flight. The mountain receives impossible weight. The air thickens. Human fires flicker wrong. The sky opens incorrectly.",
    thesis:
      "The physical fall is only the visible form of an interior breach that already happened.",
    keyLine: "Nothing had happened yet. Something had already been lost.",

    coreMeaning:
      "Descent is the visible arrival of an invisible collapse. By the time the Watchers cross into the lower world, the true breach has already happened inside them.",
    narrativeFunction:
      "This is the album’s first major threshold event. Everything before it is pressure. Everything after it is consequence.",
    emotionalPressure:
      "The Watchers experience descent as fulfillment, terror, and self-loss at once. They are entering the world they desired while leaving the order that made them coherent.",
    worldChange:
      "The sky opens incorrectly. Mountains receive impossible weight. Human fires react before humans understand why.",
    hiddenArchiveFragment:
      "Archive note: The lower witnesses did not first describe figures. They described the air becoming heavy.",
    easterEggIdea:
      "Place the Unsealed symbol at the base of the descent image. On click, reveal: 'The crossing did not begin in motion.'",

    detailSections: [
      {
        heading: "The visible breach",
        body: [
          "The Descent should not feel like a superhero landing or a demonic invasion. It is more solemn than that.",
          "These beings cross like something violating its own nature. The world receives them, but not cleanly.",
        ],
      },
      {
        heading: "Before and after",
        body: [
          "Before the descent, the breach can still be hidden inside thought, image, and oath.",
          "After the descent, the world must carry the consequences in matter: bodies, tools, children, systems, hunger, and memory.",
        ],
      },
      {
        heading: "The song connection",
        body: [
          "Descent should carry the first major emotional impact of the album.",
          "The sound can become heavy here, but it should remain mournful and cinematic rather than merely aggressive.",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Nadir Quen",
        href: "/phylax/characters/nadir-quen",
        impact:
          "Nadir’s imagined threshold becomes actual path.",
      },
      {
        name: "Veyr",
        href: "/phylax/characters/veyr",
        impact:
          "Veyr’s oath begins to move through bodies and geography.",
      },
      {
        name: "The Breach Court",
        href: "/phylax/characters",
        impact:
          "The court stops being a conspiracy and becomes an event.",
      },
    ],

    sourceReservoir: [
      {
        source: "Enochic descent",
        resonance:
          "The descent of watchers and the beginning of forbidden crossing.",
        phylaxUse:
          "The visible descent becomes the result of a prior emotional and spiritual fracture.",
      },
      {
        source: "Apocalyptic atmosphere",
        resonance:
          "Cosmic disturbance, altered sky, and the sense of unveiled consequence.",
        phylaxUse:
          "The world itself reacts before doctrine explains anything.",
      },
    ],

    sourceResonance: [
      {
        title: "Enochic descent",
        text:
          "The descent supplies the mythic architecture, while PHYLAX makes the emotional center interior: longing before impact.",
      },
      {
        title: "Descent song lore",
        text:
          "The first song favors motifs like black glass, warm fires, distance, threshold, hands, vows, orbit trembling, and lower light.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Unsealed",
        meaning:
          "The opening of what should have remained closed.",
      },
      {
        symbol: "Chain",
        meaning:
          "The oath now moving as consequence.",
      },
    ],

    visualLanguage: [
      "black path into cosmic fracture",
      "single figure before impossible mountain",
      "storm ring splitting overhead",
      "red ember valleys far below",
      "unsealed symbol half-buried in stone",
    ],
    videoDirection: [
      "Use forward motion and scale. The camera should move as if pulled toward a threshold.",
      "Let the environment react: stone dust rising upward, clouds bending inward, fire dimming below.",
      "Avoid showing too much too soon. Suggest the crossing through pressure and shadow.",
    ],
    musicNotes: [
      "first full heavy entrance",
      "7-string weight but not generic metal",
      "wide darkgaze atmosphere",
      "vocal strained but controlled",
    ],
    symbols: [
      "Unsealed: breach and revelation.",
      "Chain: oath consequence now moving.",
    ],
    connectedCharacters: [
      { label: "Nadir Quen", href: "/phylax/characters/nadir-quen" },
      { label: "Veyr", href: "/phylax/characters/veyr" },
      { label: "Sevrin Ash", href: "/phylax/characters/sevrin-ash" },
    ],
    connectedSongs: [
      { label: "Descent", href: "/phylax/lore/descent" },
      { label: "Oath", href: "/phylax/lore/oath-circle" },
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
      "The Watchers teach craft, metal, writing, stars, cycles, signs, medicine, beauty, and strategy. Humanity experiences wonder before contamination.",
    thesis: "Every forbidden gift must have beauty and danger.",
    keyLine: "A tool does not stay innocent because the first hand meant well.",

    coreMeaning:
      "The Gifts movement complicates the moral world. Knowledge is not evil by default. The corruption lies in timing, motive, and vessel.",
    narrativeFunction:
      "This is where the breach becomes useful, and therefore more dangerous. The Watchers can point to real benefits while ignoring what those benefits will become.",
    emotionalPressure:
      "The audience should feel awe before dread. The gifts must be beautiful enough to make the corruption tragic.",
    worldChange:
      "The human world accelerates. Tools improve, signs multiply, adornment changes desire, weapons organize violence, and records preserve both wisdom and deception.",
    hiddenArchiveFragment:
      "Archive note: The first blade was entered in the record as a tool. The correction was written later in another hand.",
    easterEggIdea:
      "Hide the Record symbol in a forge image. On click, reveal a fragment titled 'Instruction Before Wisdom.'",

    detailSections: [
      {
        heading: "Knowledge is not the villain",
        body: [
          "PHYLAX should avoid a simplistic message that knowledge itself is evil.",
          "The tragedy is that knowledge enters before the moral vessel is ready. The gift works, but the world cannot yet carry it cleanly.",
        ],
      },
      {
        heading: "The beauty of the gifts",
        body: [
          "The first use of a gift should often be beautiful: healing, building, shaping, remembering, reading the sky.",
          "Only later does the same gift become blade, vanity, domination, system, or deception.",
        ],
      },
      {
        heading: "The Breach Court as teachers",
        body: [
          "This movement makes the fallen figures more than invaders. They become teachers, which is more dangerous because teaching leaves inheritance.",
          "Korr, Dren, Kovren, and Sevrin all become essential here.",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Korr Vane",
        href: "/phylax/characters/korr-vane",
        impact:
          "Korr becomes central as the giver of craft, fire, tools, and material transformation.",
      },
      {
        name: "Dren Voss",
        href: "/phylax/characters/dren-voss",
        impact:
          "Dren turns force into method and protection into organized harm.",
      },
      {
        name: "Kovren",
        href: "/phylax/characters/kovren",
        impact:
          "Kovren divides the sky into signs small enough to use and therefore exploit.",
      },
    ],

    sourceReservoir: [
      {
        source: "Forbidden instruction traditions",
        resonance:
          "Craft, weapons, adornment, signs, and hidden knowledge taught too early.",
        phylaxUse:
          "The gifts are framed through emotional ambiguity rather than cartoon evil.",
      },
      {
        source: "Nag Hammadi hidden knowledge atmosphere",
        resonance:
          "Knowledge can reveal, fracture, liberate, or mislead depending on vessel and interpretation.",
        phylaxUse:
          "The archive treats knowledge as dangerous when severed from wisdom.",
      },
    ],

    sourceResonance: [
      {
        title: "Forbidden instruction",
        text:
          "Watcher traditions inspire the gift structure, but PHYLAX emphasizes the emotional ambiguity of knowledge becoming harm.",
      },
      {
        title: "Jubilees / record logic",
        text:
          "Written order, timing, and instruction deepen the idea that knowledge belongs inside a moral sequence.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Record",
        meaning:
          "Instruction, written method, and memory preserved beyond the first teacher.",
      },
      {
        symbol: "Unsealed",
        meaning:
          "Knowledge exposed before formation.",
      },
      {
        symbol: "Chain",
        meaning:
          "The gift becoming system and inheritance.",
      },
    ],

    visualLanguage: [
      "forge-temple in black stone",
      "ember cracks in tools and tablets",
      "hands learning craft",
      "weapons not centered too early",
      "record symbol etched into stone",
    ],
    videoDirection: [
      "Start with beauty: hands shaping, metal glowing, marks being carved.",
      "Only gradually reveal the darker use of the same knowledge.",
      "Use match cuts: tool to blade, adornment to vanity, star-map to omen, record to accusation.",
    ],
    musicNotes: [
      "industrial texture",
      "rhythmic guitar chug with atmosphere",
      "metallic percussion feel",
      "beauty and danger in the same progression",
    ],
    symbols: [
      "Record: instruction and memory.",
      "Unsealed: knowledge exposed too soon.",
    ],
    connectedCharacters: [
      { label: "Korr Vane", href: "/phylax/characters/korr-vane" },
      { label: "Dren Voss", href: "/phylax/characters/dren-voss" },
      { label: "Kovren", href: "/phylax/characters/kovren" },
      { label: "Sevrin Ash", href: "/phylax/characters/sevrin-ash" },
    ],
    connectedSongs: [
      { label: "Graft", href: "/phylax/lore/gifts" },
      { label: "Forge", href: "/phylax/lore/gifts" },
      { label: "Course", href: "/phylax/lore/gifts" },
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
      "The Mass are embodied consequences of the breach: scale error made flesh, celestial intensity without restraint, human hunger without limitation.",
    thesis: "The consequence is tragic before it is monstrous.",
    keyLine: "They were not born evil. They were born too large for mercy.",

    coreMeaning:
      "The Mass are not simple giants or monsters. They are consequence embodied: inheritance without proportion, hunger without limit, power without formation.",
    narrativeFunction:
      "This movement makes denial impossible. The breach is no longer an argument, secret, or gift. It has entered flesh.",
    emotionalPressure:
      "The audience should feel pity and dread at the same time. The Mass did not choose the breach, but they make the breach visible.",
    worldChange:
      "The human world bends under impossible scale. Fields fail, fear spreads, social order strains, and the gifts begin showing their cost.",
    hiddenArchiveFragment:
      "Archive note: The first reports used the word children. Later copies scratched it out and wrote mass.",
    easterEggIdea:
      "Hide the Unsealed symbol in a cracked sky above a distant silhouette. On click, reveal: 'Inheritance exceeded the vessel.'",

    detailSections: [
      {
        heading: "Scale error made flesh",
        body: [
          "The Mass are the most important place to avoid generic fantasy. They are not just large enemies.",
          "They are the mismatch between celestial intensity and human limitation. They are too much presence inside the wrong scale.",
        ],
      },
      {
        heading: "Tragedy before horror",
        body: [
          "The Mass should be frightening, but they should also be mourned.",
          "Their existence proves that the breach has victims who are also dangers.",
        ],
      },
      {
        heading: "Human witness",
        body: [
          "This movement must include human witnesses. Children, elders, builders, mourners, and survivors should carry the emotional truth.",
          "The audience should see the cost at ground level, not only cosmic scale.",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Dren Voss",
        href: "/phylax/characters/dren-voss",
        impact:
          "Dren sees the terrifying outcome of power without proportion.",
      },
      {
        name: "Korr Vane",
        href: "/phylax/characters/korr-vane",
        impact:
          "Korr’s gifts become part of the world that now cannot govern what it has received.",
      },
      {
        name: "Veyr",
        href: "/phylax/characters/veyr",
        impact:
          "Veyr can no longer pretend the oath was only beautiful or necessary.",
      },
    ],

    sourceReservoir: [
      {
        source: "Children of the breach traditions",
        resonance:
          "Consequences of union and scale that disrupt the world.",
        phylaxUse:
          "The Mass become tragic embodiments of mismatch rather than disposable monsters.",
      },
      {
        source: "Apocalyptic scale",
        resonance:
          "Escalation, collapse, and visible consequence.",
        phylaxUse:
          "The story grows larger while staying emotionally grounded through human witnesses.",
      },
    ],

    sourceResonance: [
      {
        title: "Children of the breach",
        text:
          "The lore frames them as embodied consequences rather than disposable monsters, which keeps the story tragic and mature.",
      },
      {
        title: "Apocalyptic scale",
        text:
          "Revelation-like escalation informs the scale, but PHYLAX keeps the emotional lens grounded and human.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Unsealed",
        meaning:
          "Consequence revealed in matter.",
      },
      {
        symbol: "Chain",
        meaning:
          "Inheritance bound to the original oath.",
      },
    ],

    visualLanguage: [
      "distant massive silhouettes, never cheap monster closeups",
      "animals fleeing wrong directions",
      "fields bending under impossible weight",
      "children watching before adults understand",
      "unsealed symbol visible in cracked sky",
    ],
    videoDirection: [
      "Keep The Mass mostly at a distance.",
      "Use scale through environment: trees bending, dust rising, shadows crossing fields.",
      "Cut to human faces and small gestures rather than monster spectacle.",
      "Make pity and dread inseparable.",
    ],
    musicNotes: [
      "largest low-end section",
      "slow crushing rhythm",
      "choir-like background texture",
      "melody should remain mournful, not triumphant",
    ],
    symbols: [
      "Unsealed: consequence revealed.",
      "Chain: inheritance from oath.",
    ],
    connectedCharacters: [
      { label: "Dren Voss", href: "/phylax/characters/dren-voss" },
      { label: "Korr Vane", href: "/phylax/characters/korr-vane" },
      { label: "Veyr", href: "/phylax/characters/veyr" },
    ],
    connectedSongs: [
      { label: "Mass", href: "/phylax/lore/the-mass" },
      { label: "Fever", href: "/phylax/lore/the-mass" },
      { label: "Ruin", href: "/phylax/lore/the-mass" },
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
      "The Seven Measures arrive not as sentimental heroes, but as corrective offices. They do not debate the breach. They name what it damaged.",
    thesis: "To be judged is to be called by what your gift became.",
    keyLine: "The court did not ask what they intended. It asked what they had made.",

    coreMeaning:
      "Judgment in PHYLAX is accurate naming. The fallen are not judged by their preferred explanations, but by what their offices became after corruption.",
    narrativeFunction:
      "This movement restores legibility. The world has become fogged by longing, argument, gift, and consequence. The Trial names everything clearly.",
    emotionalPressure:
      "The Trial should feel calm, not explosive. The terror comes from precision. No excuse survives exact naming.",
    worldChange:
      "The symbolic order begins correcting itself. The breach is not yet healed, but it is no longer unnamed.",
    hiddenArchiveFragment:
      "Archive note: The first measure was silence. The second was name.",
    easterEggIdea:
      "Hide a Record symbol in a court panel. On click, reveal the line: 'Intent was entered. Consequence answered.'",

    detailSections: [
      {
        heading: "Judgment without spectacle",
        body: [
          "The Seven Measures should not feel like superheroes or sentimental rescuers.",
          "They are terrifying because they are calm. They arrive to measure damage, not to negotiate with the story the fallen tell about themselves.",
        ],
      },
      {
        heading: "Each office named by corruption",
        body: [
          "Veyr is not merely one who loved vows. He is the Binding Voice who made shared guilt possible.",
          "Korr is not merely a maker. He is the Cinderwright who taught beauty how to become blade.",
          "Sevrin is not merely wise. He is counsel turned gray.",
        ],
      },
      {
        heading: "Why this matters",
        body: [
          "PHYLAX should make judgment feel like truth becoming unavoidable.",
          "The Trial is not revenge. It is the moment the universe refuses the false names the fallen gave themselves.",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Veyr",
        href: "/phylax/characters/veyr",
        impact:
          "Veyr’s oath is named as shared consequence, not sacred courage.",
      },
      {
        name: "Korr Vane",
        href: "/phylax/characters/korr-vane",
        impact:
          "Korr’s gifts are measured by what they became, not by what he intended.",
      },
      {
        name: "Sevrin Ash",
        href: "/phylax/characters/sevrin-ash",
        impact:
          "Sevrin’s explanations collapse under accurate naming.",
      },
    ],

    sourceReservoir: [
      {
        source: "Danielic court imagery",
        resonance:
          "Courts, books, hidden conflict, and judgment by revealed truth.",
        phylaxUse:
          "The Still Court becomes a place of function, correction, and exact naming.",
      },
      {
        source: "Apocalyptic unveiling",
        resonance:
          "Hidden reality made visible in sequence.",
        phylaxUse:
          "The Trial reveals what the breach actually made.",
      },
    ],

    sourceResonance: [
      {
        title: "Danielic court imagery",
        text:
          "Heavenly courts, books, and interpretive judgment shape the atmosphere of accurate naming.",
      },
      {
        title: "Revelation structure",
        text:
          "The sense of unveiling and sequence supports the movement from hidden corruption to visible judgment.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Record",
        meaning:
          "Accurate naming, evidence, and preserved consequence.",
      },
      {
        symbol: "Hidden",
        meaning:
          "Concealed motive exposed.",
      },
      {
        symbol: "Unsealed",
        meaning:
          "Truth made visible.",
      },
    ],

    visualLanguage: [
      "still court of black stone",
      "vast quiet figures",
      "records opening without hands",
      "no throne imitation",
      "record symbol behind judgment panels",
    ],
    videoDirection: [
      "Use stillness and scale. The camera should move slowly, almost judicially.",
      "Records, glyphs, and shadows can move, but the Measures should remain calm.",
      "Avoid fire-and-brimstone spectacle. The terror is being named correctly.",
    ],
    musicNotes: [
      "drums pull back",
      "massive suspended chords",
      "low spoken or chanted texture",
      "wide silence between hits",
    ],
    symbols: [
      "Record: accurate naming.",
      "Hidden: concealed motive exposed.",
      "Unsealed: truth made visible.",
    ],
    connectedCharacters: [
      { label: "Veyr", href: "/phylax/characters/veyr" },
      { label: "Korr Vane", href: "/phylax/characters/korr-vane" },
      { label: "Sevrin Ash", href: "/phylax/characters/sevrin-ash" },
      { label: "Dren Voss", href: "/phylax/characters/dren-voss" },
      { label: "Kovren", href: "/phylax/characters/kovren" },
    ],
    connectedSongs: [
      { label: "Bound", href: "/phylax/lore/binding" },
      { label: "Echo", href: "/phylax/lore/binding" },
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

    coreMeaning:
      "The Binding is not simple punishment. It is poetic consequence. Each fallen office is sealed inside the symbolic shape of what it corrupted.",
    narrativeFunction:
      "This movement closes the visible breach but opens the long archive. The fall becomes signal, memory, buried pressure, and future echo.",
    emotionalPressure:
      "The audience should not feel neat closure. The breach is contained, not erased. The world survives with a buried wound beneath it.",
    worldChange:
      "The Deep Hold receives the broken offices. The surface world continues, but the gifts, systems, hungers, and records keep transmitting.",
    hiddenArchiveFragment:
      "Archive note: The seals were not made to silence the breach. They were made to keep it from speaking all at once.",
    easterEggIdea:
      "Hide Chain and Record symbols together near the footer. When both are found, reveal: 'Containment is not forgetting.'",

    detailSections: [
      {
        heading: "Consequence given architecture",
        body: [
          "Each binding must match the corrupted office. Veyr is bound in oath. Korr is bound in forge. Nadir is bound in threshold. Kovren is bound in broken orbit.",
          "This keeps the justice of PHYLAX symbolic and personal.",
        ],
      },
      {
        heading: "The breach as signal",
        body: [
          "The Binding ends the visible reign of the breach, but it does not erase its transmissions.",
          "Every corrupted gift continues echoing through history: weapon, vanity, system, hidden knowledge, appetite, interpretation, and the ache to cross forbidden thresholds.",
        ],
      },
      {
        heading: "The future opening",
        body: [
          "This movement creates the path toward Waking, Husk, Echo, and Return.",
          "The archive remains because memory is part of judgment.",
        ],
      },
    ],

    characterImpact: [
      {
        name: "Veyr",
        href: "/phylax/characters/veyr",
        impact:
          "Veyr is sealed inside the echo of the oath he made.",
      },
      {
        name: "Nadir Quen",
        href: "/phylax/characters/nadir-quen",
        impact:
          "Nadir is sealed in threshold: close enough to hear, unable to enter.",
      },
      {
        name: "Kovren",
        href: "/phylax/characters/kovren",
        impact:
          "Kovren is sealed in broken orbit, reading every sign except release.",
      },
    ],

    sourceReservoir: [
      {
        source: "Watcher containment traditions",
        resonance:
          "The binding and containment of fallen beings.",
        phylaxUse:
          "Each binding becomes personal, poetic, and tied to corrupted office.",
      },
      {
        source: "Hidden archive atmosphere",
        resonance:
          "Buried books, sealed knowledge, damaged transmission, and hidden record.",
        phylaxUse:
          "The breach continues as signal beneath history.",
      },
    ],

    sourceResonance: [
      {
        title: "Binding traditions",
        text:
          "Watcher containment informs the architecture, while PHYLAX gives each binding a symbolic and personal shape.",
      },
      {
        title: "Hidden books / archive atmosphere",
        text:
          "The buried signal and hidden record connect naturally to apocryphal and Nag Hammadi-style archival mystery.",
      },
    ],

    symbolMeaning: [
      {
        symbol: "Chain",
        meaning:
          "Containment, consequence, and choice becoming prison.",
      },
      {
        symbol: "Record",
        meaning:
          "What remains remembered.",
      },
      {
        symbol: "Hidden",
        meaning:
          "The buried signal beneath visible history.",
      },
    ],

    visualLanguage: [
      "deep hold beneath black mountain",
      "chains as architecture, not decoration",
      "sealed gates",
      "embers under stone",
      "record and chain symbols nearly buried",
    ],
    videoDirection: [
      "Move downward through stone, not upward into spectacle.",
      "Show seals as architecture: gates, rings, black chains, carved records.",
      "End with an image that feels contained but alive beneath the surface.",
    ],
    musicNotes: [
      "slow collapse into drone",
      "heavy guitars fade into low ambience",
      "distant signal tone",
      "ending should feel sealed, not resolved",
    ],
    symbols: [
      "Chain: binding and consequence.",
      "Record: what remains remembered.",
      "Hidden: signal buried beneath history.",
    ],
    connectedCharacters: [
      { label: "Veyr", href: "/phylax/characters/veyr" },
      { label: "Nadir Quen", href: "/phylax/characters/nadir-quen" },
      { label: "Kovren", href: "/phylax/characters/kovren" },
      { label: "Dren Voss", href: "/phylax/characters/dren-voss" },
    ],
    connectedSongs: [
      { label: "Bound", href: "/phylax/lore/binding" },
      { label: "Waking", href: "/phylax/lore/binding" },
      { label: "Husk", href: "/phylax/lore/binding" },
      { label: "Echo", href: "/phylax/lore/binding" },
      { label: "Return", href: "/phylax/lore/binding" },
    ],
  },
];

export const storyChapters = loreChapters;

export function getLoreChapter(slug: string) {
  return loreChapters.find((chapter) => chapter.slug === slug);
}

export function getStoryChapter(slug: string) {
  return getLoreChapter(slug);
}

export function getAdjacentLoreChapters(slug: string) {
  const index = loreChapters.findIndex((chapter) => chapter.slug === slug);

  return {
    previous: index > 0 ? loreChapters[index - 1] : null,
    next:
      index >= 0 && index < loreChapters.length - 1
        ? loreChapters[index + 1]
        : null,
  };
}

export function getAdjacentChapters(slug: string) {
  return getAdjacentLoreChapters(slug);
}
