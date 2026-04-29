export type CharacterRelation = {
  name: string;
  dynamic: string;
};

export type Character = {
  slug: string;
  name: string;
  title: string;
  faction: string;
  image: string;

  role: string;
  symbolicFunction: string;
  emotionalTone: string;
  visualMotif: string;
  summary: string;

  origin: string;
  preBreachPsychology: string;
  wound: string;
  temptation: string;
  corruptedGift: string;
  relationshipToHumanity: string;
  relationshipToTheBreach: string;
  tragedy: string;
  finalConsequence: string;

  arc: string;
  keyLine: string;
  voice: string;
  lyricalUse: string;
  visualIdentity: string[];
  symbolUse: string[];
  connectedLore: string[];
  relationships: CharacterRelation[];
  pageSections: {
    heading: string;
    body: string[];
  }[];
  sourceNote: string;
};

export const characters: Character[] = [
  {
    slug: "veyr",
    name: "Veyr",
    title: "The Binding Voice",
    faction: "The Breach Court",
    image: "/images/phylax/characters/veyr.png",

    role: "Leader of the oath; emotional center of the breach.",
    symbolicFunction:
      "The moment watching becomes wanting, and wanting becomes vow.",
    emotionalTone:
      "Severe, magnetic, sorrowful, authoritative, almost priestly without being religious.",
    visualMotif:
      "Black cloak, broken oath circle, ember-lit hands, cracked crown-like shadow, circular stone geometry.",
    summary:
      "Veyr is the voice that turns private longing into covenant. He does not begin as a monster. He begins as attention sharpened into hunger, then hunger dignified as destiny.",

    origin:
      "Before the breach, Veyr served as a keeper of lawful distance. His office was not domination. His voice stabilized boundaries, renewed separations, and preserved the difference between witness and possession.",
    preBreachPsychology:
      "Veyr is disciplined enough to understand law, but emotionally starved enough to resent what law denies him. He believes restraint is noble until he starts experiencing restraint as humiliation.",
    wound:
      "His wound begins when he watches human vows. Mortals promise under death, and that fragile nearness humiliates him because it is something he can observe but never receive.",
    temptation:
      "Veyr is tempted by the idea that a higher being can create a higher form of covenant. He convinces himself that the boundary is not protecting love, but withholding it.",
    corruptedGift:
      "He corrupts the vow. What should have been humble promise becomes mechanism, binding, shared guilt, and collective descent.",
    relationshipToHumanity:
      "He envies human nearness most of all. Human marriage, grief, touch, and naming feel primitive to him at first, then sacred, then intolerable.",
    relationshipToTheBreach:
      "Veyr does not merely participate in the breach. He gives it structure. Without him, the others fracture privately. With him, private fracture becomes a court.",
    tragedy:
      "He understands the architecture of vows but not the humility of love. He mistakes intensity for holiness and longing for authority.",
    finalConsequence:
      "Veyr is sealed within the echo of the oath itself. Every vow he misused becomes a ring around him. His prison is not silence; it is endless agreement with what he can no longer undo.",

    arc: "Restraint → fascination → jealousy → oath → bondage.",
    keyLine: "Distance was the first law I broke.",
    voice:
      "Formal, restrained, heavy with certainty. Veyr speaks like someone who has already judged himself but refuses to confess it.",
    lyricalUse:
      "Use Veyr in lyrics when the song needs vow, boundary, forbidden nearness, collective guilt, or the dangerous dignity of a wrong choice.",
    visualIdentity: [
      "Tall central figure inside a broken circular glyph.",
      "Hands lit from below by ember rather than flame.",
      "No wings, no halo, no throne; his authority comes from posture and silence.",
      "Black stone beneath him should feel like architecture designed for law.",
      "His face can remain partially obscured, but his hands should feel deliberate.",
    ],
    symbolUse: [
      "Chain: the vow becoming consequence.",
      "Hidden: the motive he refuses to name.",
      "Record: the oath preserved as accusation.",
    ],
    connectedLore: [
      "The Oath Circle",
      "The Glass Below",
      "The Warm Below",
      "The Binding",
    ],
    relationships: [
      {
        name: "Nadir Quen",
        dynamic:
          "Nadir gives the breach its first question; Veyr gives that question legal weight.",
      },
      {
        name: "Sevrin Ash",
        dynamic:
          "Sevrin rationalizes what Veyr wants to sanctify. Their alliance makes the fall sound reasonable.",
      },
      {
        name: "Korr Vane",
        dynamic:
          "Veyr binds the court; Korr proves the breach can produce visible gifts.",
      },
    ],
    pageSections: [
      {
        heading: "Original office",
        body: [
          "Veyr’s original function was boundary renewal. He preserved the sacred difference between witness and possession.",
          "His authority was not based on force. It came from the ability to speak order back into place.",
        ],
      },
      {
        heading: "Pre-breach psychology",
        body: [
          "He is not impulsive. That makes him dangerous. Veyr falls slowly, with language, justification, and solemn intent.",
          "He begins by revering distance, then resenting it, then treating resentment as revelation.",
        ],
      },
      {
        heading: "Character development use",
        body: [
          "Veyr should carry the emotional center of the first half of the album. He is the one who makes the breach feel tragic rather than chaotic.",
          "In video and site lore, he should appear almost still. The movement around him should suggest that others are being drawn into his gravity.",
        ],
      },
    ],
    sourceNote:
      "Source architecture draws from leader-of-oath Watcher traditions, but the public character remains original to PHYLAX.",
  },

  {
    slug: "korr-vane",
    name: "Korr Vane",
    title: "The Cinderwright",
    faction: "The Breach Court",
    image: "/images/phylax/characters/Korr.png",

    role: "Corrupting craftsman; giver of firecraft, metal, instrument, adornment, and blade.",
    symbolicFunction:
      "Beauty turned into tool, tool turned into blade, blade turned into inheritance.",
    emotionalTone:
      "Brilliant, practical, cold, fascinated by matter, more curious than cruel at first.",
    visualMotif:
      "Forge ash, blackened hands, molten cracks, carved instruments, broken blades, ember-lit tablets.",
    summary:
      "Korr Vane understands matter before he understands mercy. In his hands, knowledge becomes craft. Craft becomes weapon. Weapon becomes inheritance.",

    origin:
      "Before the breach, Korr maintained instruments of celestial function. He understood pressure, refinement, heat, fracture, structure, and the hidden strength inside matter.",
    preBreachPsychology:
      "Korr is not sentimental. He believes creation proves itself by use. To him, unused knowledge feels like waste.",
    wound:
      "Human need fascinates him. Humans are weak but inventive. They shape tools because the world resists them. Korr mistakes this need for invitation.",
    temptation:
      "He is tempted by usefulness. He does not ask whether a gift should be given. He asks whether it can be made.",
    corruptedGift:
      "He gives humanity technologies of transformation before conscience has matured enough to govern them: metal, adornment, weapon, craft, structure, and procedure.",
    relationshipToHumanity:
      "Korr admires human hands. He sees mortality as a furnace. Human limitation produces invention, and that invention seduces him.",
    relationshipToTheBreach:
      "Korr gives the breach material proof. Veyr can speak the oath, but Korr makes the breach useful.",
    tragedy:
      "He cannot tell the difference between gift and contamination. He believes the beauty of a thing excuses its timing.",
    finalConsequence:
      "Korr is sealed in the forge of transmission, surrounded by tools that complete themselves without wisdom. Every instrument he made continues working, but none can heal.",

    arc: "Maker → admirer → teacher → corrupter → ruined craftsman.",
    keyLine: "I only taught the hand what it already wanted.",
    voice:
      "Precise, unsentimental, almost engineer-like. Korr speaks in terms of function, heat, pressure, and result.",
    lyricalUse:
      "Use Korr for songs about technology, craft, weaponized beauty, fire, industry, and the moral ambiguity of useful things.",
    visualIdentity: [
      "Hands should matter more than face.",
      "The environment should look like a forge but not medieval fantasy.",
      "Black stone and ember should feel ancient, cosmic, and industrial.",
      "Tools should look half-sacred and half-dangerous.",
      "Avoid cartoon blacksmith imagery; make it feel like forbidden engineering.",
    ],
    symbolUse: [
      "Record: technical instruction and written method.",
      "Unsealed: knowledge exposed too soon.",
      "Chain: gifts becoming systems that bind later generations.",
    ],
    connectedLore: [
      "The Gifts",
      "The Forge of Transmission",
      "The Mass",
      "The Binding",
    ],
    relationships: [
      {
        name: "Dren Voss",
        dynamic:
          "Korr makes the instrument; Dren teaches the method of force.",
      },
      {
        name: "Kovren",
        dynamic:
          "Kovren divides the sky into signs; Korr turns signs into tools.",
      },
      {
        name: "Veyr",
        dynamic:
          "Veyr gives the breach moral weight; Korr gives it physical consequence.",
      },
    ],
    pageSections: [
      {
        heading: "Original office",
        body: [
          "Korr once preserved the integrity of celestial instruments. His work was maintenance, not invention for appetite.",
          "He understood the lawful behavior of matter inside sacred systems.",
        ],
      },
      {
        heading: "The corruption of usefulness",
        body: [
          "Korr’s fall is not lust first. It is utility. He sees what humanity lacks and becomes obsessed with completing them.",
          "His error is giving power without formation. The gifts work, but the users are not ready.",
        ],
      },
      {
        heading: "Character development use",
        body: [
          "Korr should complicate the viewer’s judgment. His gifts should look beautiful before they look catastrophic.",
          "He belongs heavily to songs like Forge, Gifts, Ruin, and Fever.",
        ],
      },
    ],
    sourceNote:
      "Source architecture draws from craftsman and forbidden-instruction traditions, reframed as PHYLAX’s Cinderwright.",
  },

  {
    slug: "nadir-quen",
    name: "Nadir Quen",
    title: "The First Whisper",
    faction: "The Breach Court",
    image: "/images/phylax/characters/Nadir.png",

    role: "First descent impulse; watcher of thresholds, almost-crossings, and interior permission.",
    symbolicFunction:
      "The thought before the fall; the question that makes the impossible feel reasonable.",
    emotionalTone:
      "Quiet, haunted, inward, unstable, intimate, almost tender in the wrong way.",
    visualMotif:
      "Descending stair, thin sky fracture, hand near threshold, fog moving upward, pale light under black stone.",
    summary:
      "Nadir Quen is not the loudest voice. He is the first inward fracture. Before anyone speaks an oath, he imagines the downward path.",

    origin:
      "Nadir was appointed over thresholds: birth, death, sleep, waking, silence, horizon, doorway, first touch, and last breath.",
    preBreachPsychology:
      "He is sensitive to transition. This makes him perceptive, but also vulnerable. He notices the emotional charge in almost-events before others do.",
    wound:
      "Because he lives near almost-crossings, the Warm Below reaches him first. Human breath, grief, laughter, and song rise into the Middle Air and gather around him.",
    temptation:
      "Nadir is tempted by interpretation. He hears boundary and calls it invitation. He feels ache and calls it truth.",
    corruptedGift:
      "He gives longing a sentence. He does not force rebellion; he gives the others a way to think about what they already desire.",
    relationshipToHumanity:
      "He loves humanity as a sound before he loves them as people. Their nearness reaches him as echo, music, breath, and fragment.",
    relationshipToTheBreach:
      "Nadir is the breach before the breach. He makes the descent emotionally imaginable.",
    tragedy:
      "He mistakes longing for calling and sensitivity for authority.",
    finalConsequence:
      "Nadir is sealed in the threshold he imagined: close enough to hear every world, unable to enter any of them.",
    arc: "Threshold-keeper → listener → inward fracture → first temptation → descent impulse.",
    keyLine: "The door was not open. I learned to hear it anyway.",
    voice:
      "Soft, elliptical, suggestive. Nadir rarely declares. He implies, asks, and leaves others to complete the thought.",
    lyricalUse:
      "Use Nadir for lyrics involving doors, breath, stairs, echoes, questions, almost-touch, silence, and the first permission given to desire.",
    visualIdentity: [
      "Profile or back-facing figure works better than direct portrait.",
      "Place him at edges: doorways, ledges, stair mouths, cloud shelves.",
      "His scenes should feel quieter than the others but more psychologically dangerous.",
      "Thin light lines and fog should suggest sound becoming path.",
      "Avoid villain posture; make him look like someone listening too closely.",
    ],
    symbolUse: [
      "Hidden: concealed question and inner fracture.",
      "Unsealed: the threshold beginning to open.",
      "Chain: the question that later becomes oath.",
    ],
    connectedLore: [
      "The First Whisper",
      "The Middle Air",
      "The Descent",
      "The Binding",
    ],
    relationships: [
      {
        name: "Veyr",
        dynamic:
          "Nadir creates the question; Veyr gives it authority.",
      },
      {
        name: "Sevrin Ash",
        dynamic:
          "Nadir whispers the ache; Sevrin builds the argument around it.",
      },
      {
        name: "The Human Chorus",
        dynamic:
          "Nadir is most affected by human sound: breath, vow, cry, song, mourning.",
      },
    ],
    pageSections: [
      {
        heading: "Original office",
        body: [
          "Nadir’s office is liminal. He belongs wherever one state nearly becomes another.",
          "This gives him access to the emotional pressure that gathers before action.",
        ],
      },
      {
        heading: "The first permission",
        body: [
          "Nadir’s danger is not command. It is permission.",
          "He allows others to believe their ache has meaning beyond obedience.",
        ],
      },
      {
        heading: "Character development use",
        body: [
          "Nadir should appear early in the album’s visual language. He is the first hairline crack.",
          "He belongs to Descent, Oath, and any teaser material where the audience needs to feel that something has started before it is visible.",
        ],
      },
    ],
    sourceNote:
      "Source architecture draws from first-descent impulse traditions, but PHYLAX frames him as threshold psychology.",
  },

  {
    slug: "sevrin-ash",
    name: "Sevrin Ash",
    title: "The Gray Counsel",
    faction: "The Breach Court",
    image: "/images/phylax/characters/sevren.png",

    role: "Strategist of betrayal; interpreter turned rationalizer.",
    symbolicFunction:
      "The argument that makes rebellion sound responsible.",
    emotionalTone:
      "Persuasive, elegant, controlled, intelligent, morally fogged.",
    visualMotif:
      "Gray veil, cracked council table, ash over tablets, cold hand gestures, dim ring-light.",
    summary:
      "Sevrin Ash never forces the breach. He explains it until it sounds inevitable.",

    origin:
      "Sevrin’s original office was interpretation. He clarified warning, compared patterns, and translated silence into instruction.",
    preBreachPsychology:
      "He is the most intellectually dangerous of the court because he can hold contradiction without panic.",
    wound:
      "His wound is pride in interpretation. He begins to believe that if he can explain a boundary, he has surpassed it.",
    temptation:
      "Sevrin is tempted by reason detached from obedience. He wants every restriction to justify itself before his mind.",
    corruptedGift:
      "He gives betrayal a sober tone. He makes disobedience sound like compassion, completion, and moral courage.",
    relationshipToHumanity:
      "He views humanity through patterns. Their longing, violence, tenderness, and contradiction fascinate him as evidence in an argument.",
    relationshipToTheBreach:
      "He is the court’s legal mind. Without him, the breach feels reckless. With him, it feels inevitable.",
    tragedy:
      "He can explain everything except his own envy.",
    finalConsequence:
      "Sevrin is sealed in the Gray Court, surrounded by arguments that answer each other forever and never arrive at truth.",
    arc: "Interpreter → rationalizer → strategist → architect of consent → condemned mind.",
    keyLine: "No one falls until someone gives the fall a reason.",
    voice:
      "Measured, intelligent, calm. Sevrin speaks in clauses, conditions, and careful distinctions.",
    lyricalUse:
      "Use Sevrin for songs about rationalization, self-deception, compromise, gray morality, and the lie that sounds like wisdom.",
    visualIdentity: [
      "His posture should be calm, never frantic.",
      "Use ash, gray light, broken tablets, and table imagery.",
      "He should feel like a counselor, strategist, or judge whose judgment has turned inwardly corrupt.",
      "His scenes should feel quiet but suffocating.",
      "Avoid making him look like a cult leader; make him look like a mind that has weaponized clarity.",
    ],
    symbolUse: [
      "Hidden: motive concealed beneath reason.",
      "Record: argument preserved as evidence.",
      "Chain: consent built through persuasion.",
    ],
    connectedLore: [
      "The First Whisper",
      "The Oath Circle",
      "The Trial of Offices",
      "The Binding",
    ],
    relationships: [
      {
        name: "Veyr",
        dynamic:
          "Sevrin gives Veyr’s desire a defensible structure.",
      },
      {
        name: "Nadir Quen",
        dynamic:
          "Nadir senses; Sevrin explains.",
      },
      {
        name: "Kovren",
        dynamic:
          "Both divide mystery into systems, but Sevrin works morally while Kovren works cosmically.",
      },
    ],
    pageSections: [
      {
        heading: "Original office",
        body: [
          "Sevrin was created to clarify, not corrupt. His office gave language to warning and shape to silence.",
          "He understood difference, distinction, and implication.",
        ],
      },
      {
        heading: "The corruption of explanation",
        body: [
          "His fall shows how intelligence can become disobedient without becoming chaotic.",
          "He does not reject order outright. He reinterprets it until it agrees with him.",
        ],
      },
      {
        heading: "Character development use",
        body: [
          "Sevrin should be used when the PHYLAX world needs moral fog.",
          "He is essential for scenes where the audience almost believes the wrong thing because it has been beautifully argued.",
        ],
      },
    ],
    sourceNote:
      "Source architecture draws from counsel and conspiracy motifs, reframed as rationalization and interior self-deception.",
  },

  {
    slug: "dren-voss",
    name: "Dren Voss",
    title: "The Iron Tutor",
    faction: "The Breach Court",
    image: "/images/phylax/characters/Dren.png",

    role: "Weapon-maker and death teacher; guardian of force corrupted into method.",
    symbolicFunction:
      "Knowledge converted into organized harm.",
    emotionalTone:
      "Severe, disciplined, heavy, blunt, merciless, not chaotic.",
    visualMotif:
      "Iron fragments, polearm standard, battlefield implied without gore, black stone training ground.",
    summary:
      "Dren Voss teaches the world how to wound with intention. He is not rage. He is instruction.",

    origin:
      "Dren was once guardian of force: weight, pressure, resistance, fracture, and the lawful meeting of matter against matter.",
    preBreachPsychology:
      "He respects strength because strength survives. He has little patience for fragility unless it can be trained into usefulness.",
    wound:
      "Human vulnerability offends him. He watches hunger, beasts, weather, and violence threaten the Warm Below and decides weakness is an injustice.",
    temptation:
      "He is tempted by protection. He tells himself force is mercy if it prevents helplessness.",
    corruptedGift:
      "His teaching begins as defense, becomes method, and then becomes war.",
    relationshipToHumanity:
      "Dren sees humans as breakable bodies that need instruction. His pity is hard, and his help becomes dangerous.",
    relationshipToTheBreach:
      "Dren gives the breach discipline. He converts forbidden knowledge into training, hierarchy, and repeatable harm.",
    tragedy:
      "He confuses defense with destiny.",
    finalConsequence:
      "Dren is sealed beneath the Iron Standard, where every lesson becomes weight and every weapon returns to the hand that taught it.",
    arc: "Guardian of force → survival observer → weapon teacher → death instructor → iron exile.",
    keyLine: "I did not invent death. I gave it a handle.",
    voice:
      "Short, direct, heavy. Dren should sound like command, not poetry.",
    lyricalUse:
      "Use Dren for songs about force, instruction, violence, discipline, inherited harm, and the lie that brutality is only protection.",
    visualIdentity: [
      "Use weight. Make him feel physically and symbolically heavy.",
      "Iron should look ancient and blackened, not shiny.",
      "He should not be covered in gore. His danger is training and method.",
      "Place him around standards, fragments, and implied battlefields.",
      "His silhouette should be simple and severe.",
    ],
    symbolUse: [
      "Chain: discipline becoming system.",
      "Record: instruction preserved as method.",
      "Unsealed: force released into the world.",
    ],
    connectedLore: [
      "The Gifts",
      "The Forge of Transmission",
      "The Mass",
      "The Trial of Offices",
    ],
    relationships: [
      {
        name: "Korr Vane",
        dynamic:
          "Korr makes the instrument; Dren teaches its use.",
      },
      {
        name: "The Mass",
        dynamic:
          "Dren sees in the Mass the terrifying outcome of power without proportion.",
      },
      {
        name: "Sevrin Ash",
        dynamic:
          "Sevrin justifies the breach; Dren operationalizes it.",
      },
    ],
    pageSections: [
      {
        heading: "Original office",
        body: [
          "Dren’s office was lawful force. He understood pressure, impact, resistance, and restraint.",
          "His original purpose was not violence. It was the measured governance of strength.",
        ],
      },
      {
        heading: "The corruption of protection",
        body: [
          "Dren begins from a defensible impulse: weakness suffers.",
          "His corruption comes when he treats force as the highest form of mercy.",
        ],
      },
      {
        heading: "Character development use",
        body: [
          "Dren should dominate the heavier visual and musical moments.",
          "He belongs anywhere the album explores training, systems, violence, hierarchy, and inherited damage.",
        ],
      },
    ],
    sourceNote:
      "Source architecture draws from weapon-teacher motifs, reframed as disciplined harm rather than simple violence.",
  },

  {
    slug: "kovren",
    name: "Kovren",
    title: "The Star Divider",
    faction: "The Breach Court",
    image: "/images/phylax/characters/Kovren.png",

    role: "Star-map teacher; preserver of celestial order corrupted into divider of wonder.",
    symbolicFunction:
      "Mystery turned into usable system.",
    emotionalTone:
      "Distant, intelligent, beautiful, unsettling, sorrowfully precise.",
    visualMotif:
      "Shattered armillary sphere, star-map rings, fractured constellations, cold blue light, broken orbital diagrams.",
    summary:
      "Kovren once preserved the sky as order. After the breach, he teaches others to divide it.",

    origin:
      "Kovren served one of the cleanest offices: preservation of celestial order. The sky was not a code to him; it was obedience made luminous.",
    preBreachPsychology:
      "He is calm because he trusts pattern. Of all the Breach Court, he is most disturbed by disorder and most seduced by interpretation.",
    wound:
      "Humanity reaches him through wonder. They look upward without understanding, and that hope moves him.",
    temptation:
      "He is tempted by translation. He wants to give humanity the sky in pieces small enough to hold.",
    corruptedGift:
      "He gives signs, courses, divisions, and celestial interpretation. Once the sky becomes readable, it becomes usable. Once usable, it becomes exploitable.",
    relationshipToHumanity:
      "Kovren is moved by human wonder more than human touch. He pities their smallness beneath the heavens.",
    relationshipToTheBreach:
      "Kovren gives the breach cosmic language. He makes it feel aligned, timed, and written into the sky.",
    tragedy:
      "He turns mystery into instrument.",
    finalConsequence:
      "Kovren is sealed inside a broken armillary where every orbit completes incorrectly. He can read every sign except release.",
    arc: "Keeper of order → moved by human wonder → teacher of signs → divider of heaven → broken astronomer.",
    keyLine: "I broke the sky into meanings small enough to hold.",
    voice:
      "Elegant, distant, precise. Kovren speaks like mathematics trying to confess grief.",
    lyricalUse:
      "Use Kovren for songs about stars, signs, cycles, orbit, fate, interpretation, false certainty, and beauty broken into utility.",
    visualIdentity: [
      "Use circles, armillary rings, fractured constellations, and cold sky geometry.",
      "His imagery should be beautiful first, unsettling second.",
      "Avoid sci-fi tech; make celestial machinery feel ancient and severe.",
      "He should often appear beneath diagrams or surrounded by broken orbit lines.",
      "His color world should lean storm blue, pale silver, and restrained gold.",
    ],
    symbolUse: [
      "Hidden: the sky as concealed order.",
      "Record: signs and courses written into memory.",
      "Unsealed: mystery exposed too soon.",
    ],
    connectedLore: [
      "The Upper Watch",
      "The Gifts",
      "The Trial of Offices",
      "The Binding",
    ],
    relationships: [
      {
        name: "Korr Vane",
        dynamic:
          "Kovren divides mystery into signs; Korr turns signs into instruments.",
      },
      {
        name: "Sevrin Ash",
        dynamic:
          "Both are interpreters, but Kovren reads the heavens while Sevrin reads motive.",
      },
      {
        name: "Veyr",
        dynamic:
          "Veyr binds the oath; Kovren gives the oath a sense of cosmic timing.",
      },
    ],
    pageSections: [
      {
        heading: "Original office",
        body: [
          "Kovren preserved order as motion. He watched the sky remain faithful to its appointed course.",
          "His office was not fortune-telling. It was reverence for pattern.",
        ],
      },
      {
        heading: "The corruption of interpretation",
        body: [
          "Kovren does not hate mystery. He loves it so much he wants to translate it.",
          "His tragedy is that translation becomes reduction. The sky becomes usable and therefore vulnerable.",
        ],
      },
      {
        heading: "Character development use",
        body: [
          "Kovren should become the visual bridge between cosmic beauty and corrupted system.",
          "He belongs strongly to Course, Gifts, Trial of Offices, Echo, and Return.",
        ],
      },
    ],
    sourceNote:
      "Source architecture draws from star-teacher motifs, reframed through PHYLAX’s language of orbit, wonder, and use.",
  },
];

export function getCharacter(slug: string) {
  return characters.find((character) => character.slug === slug);
}

export function getAdjacentCharacters(slug: string) {
  const index = characters.findIndex((character) => character.slug === slug);

  return {
    previous: index > 0 ? characters[index - 1] : null,
    next:
      index >= 0 && index < characters.length - 1
        ? characters[index + 1]
        : null,
  };
}
