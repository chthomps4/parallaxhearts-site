export type Character = {
  name: string;
  title: string;
  faction: "The Breach Court" | "The Seven Measures" | "The Human Chorus";
  role: string;
  symbol: string;
  summary: string;
  arc?: string;
  keyLine?: string;
  image?: string;
};

export const breachCourt: Character[] = [
  {
    name: "Veyr",
    title: "The Binding Voice",
    faction: "The Breach Court",
    image: "/images/phylax/characters/veyr.png",
    role: "Leader of the oath; emotional center of the breach.",
    symbol: "Ember-lit hands over a broken oath circle.",
    summary:
      "Veyr turns private longing into shared consequence. He begins as the keeper of lawful distance, but human vows wound him. He understands the shape of covenant without understanding love.",
    arc: "Restraint → fascination → jealousy → oath → bondage.",
    keyLine: "Distance was the first law I broke.",
  },
  {
    name: "Korr Vane",
    title: "The Cinderwright",
    faction: "The Breach Court",
    image: "/images/phylax/characters/Korr.png",
    role: "Corrupting craftsman; giver of firecraft, metal, and instrument.",
    symbol: "Blackened hands over molten cracks.",
    summary:
      "Korr Vane sees beauty as something that can be shaped, sharpened, and handed down. His gift begins as pity, then becomes craft, weapon, chain, and inheritance.",
    arc: "Maker → admirer → teacher → corrupter → ruined craftsman.",
    keyLine: "I only taught the hand what it already wanted.",
  },
  {
    name: "Nadir Quen",
    title: "The First Whisper",
    faction: "The Breach Court",
    image: "/images/phylax/characters/Nadir.png",
    role: "First descent impulse; watcher of thresholds.",
    symbol: "A hand hovering over a descending stair.",
    summary:
      "Nadir Quen is the first inward fracture. He does not begin with conquest. He begins with the question that makes the downward path imaginable.",
    arc: "Threshold-keeper → listener → inward fracture → first temptation.",
    keyLine: "The door was not open. I learned to hear it anyway.",
  },
  {
    name: "Sevrin Ash",
    title: "The Gray Counsel",
    faction: "The Breach Court",
    image: "/images/phylax/characters/sevren.png",
    role: "Strategist of betrayal; interpreter turned rationalizer.",
    symbol: "Cracked council table, pale hands on broken maps.",
    summary:
      "Sevrin Ash gives longing an argument. He makes betrayal sound like maturity and rebellion sound like responsibility.",
    arc: "Interpreter → rationalizer → strategist → architect of consent.",
    keyLine: "No one falls until someone gives the fall a reason.",
  },
  {
    name: "Dren Voss",
    title: "The Iron Tutor",
    faction: "The Breach Court",
    image: "/images/phylax/characters/Dren.png",
    role: "Weapon-maker and death teacher; guardian of force corrupted.",
    symbol: "A spear planted in black stone; battlefield without bodies.",
    summary:
      "Dren Voss teaches violence how to become method. He is not rage. He is discipline without mercy, force converted into instruction.",
    arc: "Guardian of force → survival observer → weapon teacher → iron exile.",
    keyLine: "I did not invent death. I gave it a handle.",
  },
  {
    name: "Kovren",
    title: "The Star Divider",
    faction: "The Breach Court",
    image: "/images/phylax/characters/Kovren.png",
    role: "Star-map teacher; preserver of celestial order corrupted into divider.",
    symbol: "A shattered armillary sphere.",
    summary:
      "Kovren once preserved the sky as order. After the breach, he breaks mystery into signs small enough to use, and use becomes exploitation.",
    arc: "Keeper of order → teacher of signs → divider of heaven.",
    keyLine: "I broke the sky into meanings small enough to hold.",
  },
  {
    name: "Varric Quell",
    title: "The Omen Reader",
    faction: "The Breach Court",
    role: "Reader of atmospheric and celestial warnings.",
    symbol: "Eclipse smoke, broken astrolabe, red horizon.",
    summary:
      "Varric Quell turns warning into permission. Under his influence, every cloud becomes accusation and every eclipse becomes a command.",
    arc: "Warning-keeper → fear teacher → prophet of dread.",
    keyLine:
      "Every warning can become a weapon if you teach it to speak too loudly.",
  },
  {
    name: "Soryn",
    title: "The Moon Keeper",
    faction: "The Breach Court",
    role: "Keeper of cycles, tides, fertility, sleep, and repetition.",
    symbol: "A broken moon reflected in black water.",
    summary:
      "Soryn sees pattern so deeply that he forgets choice. His gift teaches rhythm, but his corruption makes repetition feel unavoidable.",
    arc: "Cycle-keeper → teacher of hidden repetition → lunar exile.",
    keyLine: "Not every return is a command.",
  },
  {
    name: "Shavren",
    title: "The Sun Sign",
    faction: "The Breach Court",
    role: "Keeper of solar order, exposure, harvest heat, and hard revelation.",
    symbol: "A dead sun, burned halo, ash-gold cracks.",
    summary:
      "Shavren believes hidden things should always be brought into light. His corruption is exposure without mercy.",
    arc: "Solar keeper → truth exposer → burning witness.",
    keyLine: "Light can wound when it forgets the body.",
  },
  {
    name: "Arken Loam",
    title: "The Earth Measure",
    faction: "The Breach Court",
    role: "Reader of earth signs, minerals, roots, fault lines, and buried water.",
    symbol: "Fault lines glowing under ash.",
    summary:
      "Arken Loam listens to the ground until listening becomes extraction. He teaches buried strength, and the earth begins to bleed.",
    arc: "Earth reader → teacher of buried strength → buried wound.",
    keyLine: "The ground answered once. We made it bleed thereafter.",
  },
  {
    name: "Echel Rane",
    title: "The Cloud Witness",
    faction: "The Breach Court",
    role: "Atmospheric omen figure; pressure before event.",
    symbol: "Storm ceiling, cloud script, lightning without thunder.",
    summary:
      "Echel Rane is the mood of the world before rupture. His gift is weather-reading, but his corruption makes warning endless.",
    arc: "Cloud witness → storm reader → dread carrier.",
    keyLine: "The sky was heavy before the wound had a name.",
  },
  {
    name: "Riven Mar",
    title: "The Unbinder",
    faction: "The Breach Court",
    role: "Breaker of seals, cords, vows, and restraints.",
    symbol: "Broken seals, torn cords, opened locks.",
    summary:
      "Riven Mar was made for appointed release. After the breach, he loosens what should remain bound and mistakes unraveling for freedom.",
    arc: "Appointed release → breaker of seals → threshold prisoner.",
    keyLine: "Not every chain is cruelty.",
  },
  {
    name: "Penryn",
    title: "The Ash Scribe",
    faction: "The Breach Court",
    role: "Keeper of writing, language, memory, and names.",
    symbol: "Soot-black fingers over cracked tablets.",
    summary:
      "Penryn loves human language because it is mortal. He wants to preserve truth, but gives deception a body.",
    arc: "Keeper of meaning → teacher of writing → ash-scribe.",
    keyLine: "Every word remembers the wound that made it necessary.",
  },
];

export const sevenMeasures: Character[] = [
  {
    name: "Oryn Deep",
    title: "Warden of the Below",
    faction: "The Seven Measures",
    role: "Containment and sealed consequence.",
    symbol: "An abyssal gate under black stone.",
    summary:
      "Oryn Deep places damage where it can no longer keep moving. He does not hate the fallen. Hatred would make him too human.",
    keyLine: "What crosses without measure must be held without motion.",
  },
  {
    name: "Veylan Breath",
    title: "Keeper of the Human Flame",
    faction: "The Seven Measures",
    role: "Protector of human interior life.",
    symbol: "A small flame cupped in both hands.",
    summary:
      "Veylan Breath guards grief, trust, conscience, and embodied tenderness. He understands what the Watchers damaged because he understands what they failed to honor.",
    keyLine: "A soul is not weak because it can be wounded.",
  },
  {
    name: "Rauk Meridian",
    title: "Redresser of Orbits",
    faction: "The Seven Measures",
    role: "Correction of corrupted celestial motion.",
    symbol: "Orbit rings forced back into alignment.",
    summary:
      "Rauk Meridian restores proportion. His arrival means the heavens will no longer serve appetite.",
    keyLine: "A sign is not yours because you learned to read it.",
  },
  {
    name: "Maelor Keel",
    title: "Shield Over Chaos",
    faction: "The Seven Measures",
    role: "Boundary against total collapse.",
    symbol: "A black circular boundary over a churning abyss.",
    summary:
      "Maelor Keel stands between collapse and remnant. He does not prevent every wound; he prevents suffering from becoming the only law.",
    keyLine: "Not all rescue is gentle.",
  },
  {
    name: "Saren Vow",
    title: "Auditor of the Inner Sin",
    faction: "The Seven Measures",
    role: "Judgment of motive and interior fracture.",
    symbol: "A thin celestial circle in a black reflective chamber.",
    summary:
      "Saren Vow removes every explanation until only the true motive remains. He does not accuse because the truth accuses itself.",
    keyLine: "Name the hunger without its costume.",
  },
  {
    name: "Gavren Gate",
    title: "Keeper of the Green Threshold",
    faction: "The Seven Measures",
    role: "Protector of living boundaries: body, garden, desire, and knowledge.",
    symbol: "A black gate with dark greenery and a subtle serpent curve.",
    summary:
      "Gavren Gate preserves the line between approach and possession. He guards beauty without making it untouchable.",
    keyLine: "The garden is not closed because it hates the hand.",
  },
  {
    name: "Revyn Rise",
    title: "Keeper of Return",
    faction: "The Seven Measures",
    role: "Aftermath, rising, and return after ruin.",
    symbol: "Gray dawn over a black terrace.",
    summary:
      "Revyn Rise keeps the project from becoming only doom. He preserves the possibility that consequence is not final erasure.",
    keyLine: "Ruin is not mercy, but neither is it the last language.",
  },
];

export const humanChorus: Character[] = [
  {
    name: "Asha Ren",
    title: "The First Seen",
    faction: "The Human Chorus",
    role: "Human anchor first noticed by Veyr.",
    symbol: "Water jar, firelight, direct upward gaze.",
    summary:
      "Asha Ren is not the woman who caused the breach. She is noticed because she is fully alive. Through her, humanity stops being a category and becomes presence.",
    keyLine: "Being seen is not the same as being known.",
  },
  {
    name: "Mara of the Low Fires",
    title: "The One Who Understands Danger",
    faction: "The Human Chorus",
    role: "Human moral warning figure.",
    symbol: "Low fire, guarded eyes, hand near doorway.",
    summary:
      "Mara senses that awe is not safety. She understands that being desired by power is not the same as being loved.",
    keyLine: "Power that calls itself love still has to learn how to ask.",
  },
  {
    name: "Selah Reed",
    title: "The Keeper of Songs",
    faction: "The Human Chorus",
    role: "Preserver of memory before writing.",
    symbol: "Smoke, dusk, names carried by melody.",
    summary:
      "Selah Reed keeps the dead alive through song. She is the counterpoint to Penryn: memory kept by breath instead of inscription.",
    keyLine: "A song can carry the dead without trapping them.",
  },
  {
    name: "Iren of the Forge",
    title: "The Daughter of the Forge",
    faction: "The Human Chorus",
    role: "Human linked to Korr Vane’s gift.",
    symbol: "Hammer, ember, useful hands.",
    summary:
      "Iren loves the tool before she understands the blade inside it. Through her, forbidden knowledge becomes morally complicated.",
    keyLine: "A tool does not stay innocent because the first hand meant well.",
  },
  {
    name: "Nael",
    title: "The Child Who Sees the Mass",
    faction: "The Human Chorus",
    role: "Child witness of consequence.",
    symbol: "Small hand, smoke-light, wrong stars.",
    summary:
      "Nael sees the world is wrong before he has language for wrongness. He makes the cosmic wound human.",
    keyLine: "The sky moved, and no one believed me.",
  },
  {
    name: "Aren of the Ash Road",
    title: "The Human Witness-Scribe",
    faction: "The Human Chorus",
    role: "Recorder of the breach; keeper of warning.",
    symbol: "Ash road, wrapped tablets, black ink, gray dawn.",
    summary:
      "Aren gathers songs, broken tablets, survivor testimony, star errors, and names that should not be spoken too casually. His archive becomes the in-world source of PHYLAX itself.",
    keyLine: "What is buried still teaches the hand that finds it.",
  },
];

export const storyBeats: [string, string, string][] = [
  [
    "I",
    "The First Appointment",
    "The Watchers are functions before they are personalities: distance, craft, threshold, counsel, force, stars, omens, moon, sun, earth, clouds, seals, and language.",
  ],
  [
    "II",
    "Clean Observation",
    "They record births, migrations, deaths, marriages, storms, tools, songs, and graves. They believe mapping a thing is the same as knowing it.",
  ],
  [
    "III",
    "The First Human Disturbance",
    "A small human moment breaks distance: a vow beside fire, a woman waiting at a doorway, a child naming the dead, a hand carving a bowl.",
  ],
  [
    "IV",
    "The Study of Nearness",
    "They begin studying relationships, not events. Shared fire, burial, song, and mortal love become unbearable.",
  ],
  [
    "V",
    "The Wound of Exclusion",
    "The law begins to feel like deprivation. Entitlement enters disguised as ache.",
  ],
  [
    "VI",
    "Nadir’s Question",
    "The first breach happens as a question: what if distance is not obedience?",
  ],
  [
    "VII",
    "Sevrin’s Argument",
    "Sevrin gives the ache philosophy. He argues that participation may be completion.",
  ],
  [
    "VIII",
    "Veyr’s Oath",
    "Private fractures become a shared vow. After this, guilt becomes communal.",
  ],
  [
    "IX",
    "The Descent",
    "No heroic flight. The mountain receives impossible weight. Human fires flicker blue. The sky opens incorrectly.",
  ],
  [
    "X",
    "The Gifts",
    "Craft, metal, writing, stars, cycles, signs, medicine, beauty, and strategy arrive before wisdom is ready to hold them.",
  ],
  [
    "XI",
    "The Turning of Gifts",
    "Metal becomes weapon. Writing becomes accusation. Star-reading becomes fatalism. Beauty becomes possession.",
  ],
  [
    "XII",
    "The Mass",
    "Scale error becomes flesh. The Watchers see their lack of restraint embodied.",
  ],
  [
    "XIII",
    "The Earth Accuses",
    "Fields fail, rivers turn metallic, animals flee wrong routes, and storms gather without release.",
  ],
  [
    "XIV",
    "The Trial of Offices",
    "The Seven Measures arrive. Each Watcher is named by what his office became after corruption.",
  ],
  [
    "XV",
    "Binding",
    "The broken offices are sealed inside the consequence of what they misused.",
  ],
  [
    "XVI",
    "Echo",
    "The breach becomes buried transmission. PHYLAX is the act of hearing the old signal again.",
  ],
];

export const songSpine: [string, string][] = [
  ["Descent", "Watching becomes wanting."],
  ["Oath", "Breach becomes binding."],
  ["Graft", "The first signal enters the blood."],
  ["Forge", "Knowledge becomes tool, beauty, blade."],
  ["Course", "Celestial order slips out of phase."],
  ["Mass", "Consequence grows too large."],
  ["Fever", "Hunger spreads."],
  ["Ruin", "Civilization glows while collapsing."],
  ["Flood", "Erasure, pressure, memory underwater."],
  ["Bound", "Sealed inside consequence."],
  ["Waking", "Buried signal stirs."],
  ["Husk", "False return in ruined form."],
  ["Echo", "What remains keeps transmitting."],
  ["Return", "Reckoning, re-entry, transfiguration."],
];

export const locations: [string, string][] = [
  [
    "The Upper Watch",
    "A cold, severe, black-stone observatory realm above the human world. Architecture of attention: orbit rings, mirror pools, star machinery, archives, and courts of measure.",
  ],
  [
    "The Warm Below",
    "The human world of firelight, blood, breath, childbirth, marriage, grief, work, hunger, fields, smoke, water, and burial.",
  ],
  [
    "The Middle Air",
    "The almost-crossing: storm shelves, ash-gray cloud strata, floating stair fragments, and thin fractures of light.",
  ],
  [
    "The Glass Below",
    "A black reflective pool used to observe humanity. Sacred distance slowly becomes private hunger.",
  ],
  [
    "The Oath Circle",
    "A lawful platform corrupted into the site of conspiracy and shared consequence.",
  ],
  [
    "The Deep Hold",
    "A prison of consequence where each broken office is sealed inside the thing it misused.",
  ],
];

export const artifacts: [string, string][] = [
  [
    "The Black Tablets",
    "Records of consequence, not commandments. They show patterns of what happens when boundaries are crossed.",
  ],
  [
    "The Oath Ring",
    "The circular platform where Veyr binds the Breach Court.",
  ],
  ["The Glass Below", "Distance becoming addiction."],
  [
    "The Cinder Instruments",
    "Korr’s celestial tools, later adapted into human craft.",
  ],
  [
    "The Broken Armillary",
    "Kovren’s shattered star-machine. Wonder divided into omen.",
  ],
  [
    "The Threshold Stair",
    "Nadir’s impossible path between realms.",
  ],
  [
    "The Ash Archive",
    "Penryn’s ruined language-domain: memory, preservation, deception, and burning words.",
  ],
  [
    "The Sealed Gate",
    "Gavren’s living boundary: knowing without consuming.",
  ],
  [
    "The Human Flame",
    "Veylan’s symbol of inner life: fragility as sacred.",
  ],
];