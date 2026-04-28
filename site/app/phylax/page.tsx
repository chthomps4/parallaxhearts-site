import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PHYLAX: The First Breach | Parallax Hearts",
  description:
    "A dark cinematic album world about watching, longing, descent, forbidden knowledge, consequence, and return.",
  openGraph: {
    title: "PHYLAX: The First Breach",
    description:
      "A dark cinematic album world about watching, longing, descent, forbidden knowledge, consequence, and return.",
    type: "website",
  },
};

type CharacterCard = {
  name: string;
  title: string;
  role: string;
  symbol: string;
  summary: string;
  image?: string;
  arc?: string;
  keyLine?: string;
};

const breachCourt: CharacterCard[] = [
  {
    name: "Veyr",
    title: "The Binding Voice",
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
    role: "Reader of atmospheric and celestial warnings.",
    symbol: "Eclipse smoke, broken astrolabe, red horizon.",
    summary:
      "Varric Quell turns warning into permission. Under his influence, every cloud becomes accusation and every eclipse becomes a command.",
    arc: "Warning-keeper → fear teacher → prophet of dread.",
    keyLine: "Every warning can become a weapon if you teach it to speak too loudly.",
  },
  {
    name: "Soryn",
    title: "The Moon Keeper",
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
    role: "Keeper of writing, language, memory, and names.",
    symbol: "Soot-black fingers over cracked tablets.",
    summary:
      "Penryn loves human language because it is mortal. He wants to preserve truth, but gives deception a body.",
    arc: "Keeper of meaning → teacher of writing → ash-scribe.",
    keyLine: "Every word remembers the wound that made it necessary.",
  },
];

const sevenMeasures: CharacterCard[] = [
  {
    name: "Oryn Deep",
    title: "Warden of the Below",
    role: "Containment and sealed consequence.",
    symbol: "An abyssal gate under black stone.",
    summary:
      "Oryn Deep places damage where it can no longer keep moving. He does not hate the fallen. Hatred would make him too human.",
    keyLine: "What crosses without measure must be held without motion.",
  },
  {
    name: "Veylan Breath",
    title: "Keeper of the Human Flame",
    role: "Protector of human interior life.",
    symbol: "A small flame cupped in both hands.",
    summary:
      "Veylan Breath guards grief, trust, conscience, and embodied tenderness. He understands what the Watchers damaged because he understands what they failed to honor.",
    keyLine: "A soul is not weak because it can be wounded.",
  },
  {
    name: "Rauk Meridian",
    title: "Redresser of Orbits",
    role: "Correction of corrupted celestial motion.",
    symbol: "Orbit rings forced back into alignment.",
    summary:
      "Rauk Meridian restores proportion. His arrival means the heavens will no longer serve appetite.",
    keyLine: "A sign is not yours because you learned to read it.",
  },
  {
    name: "Maelor Keel",
    title: "Shield Over Chaos",
    role: "Boundary against total collapse.",
    symbol: "A black circular boundary over a churning abyss.",
    summary:
      "Maelor Keel stands between collapse and remnant. He does not prevent every wound; he prevents suffering from becoming the only law.",
    keyLine: "Not all rescue is gentle.",
  },
  {
    name: "Saren Vow",
    title: "Auditor of the Inner Sin",
    role: "Judgment of motive and interior fracture.",
    symbol: "A thin celestial circle in a black reflective chamber.",
    summary:
      "Saren Vow removes every explanation until only the true motive remains. He does not accuse because the truth accuses itself.",
    keyLine: "Name the hunger without its costume.",
  },
  {
    name: "Gavren Gate",
    title: "Keeper of the Green Threshold",
    role: "Protector of living boundaries: body, garden, desire, and knowledge.",
    symbol: "A black gate with dark greenery and a subtle serpent curve.",
    summary:
      "Gavren Gate preserves the line between approach and possession. He guards beauty without making it untouchable.",
    keyLine: "The garden is not closed because it hates the hand.",
  },
  {
    name: "Revyn Rise",
    title: "Keeper of Return",
    role: "Aftermath, rising, and return after ruin.",
    symbol: "Gray dawn over a black terrace.",
    summary:
      "Revyn Rise keeps the project from becoming only doom. He preserves the possibility that consequence is not final erasure.",
    keyLine: "Ruin is not mercy, but neither is it the last language.",
  },
];

const humanChorus: CharacterCard[] = [
  {
    name: "Asha Ren",
    title: "The First Seen",
    role: "Human anchor first noticed by Veyr.",
    symbol: "Water jar, firelight, direct upward gaze.",
    summary:
      "Asha Ren is not the woman who caused the breach. She is noticed because she is fully alive. Through her, humanity stops being a category and becomes presence.",
    keyLine: "Being seen is not the same as being known.",
  },
  {
    name: "Mara of the Low Fires",
    title: "The One Who Understands Danger",
    role: "Human moral warning figure.",
    symbol: "Low fire, guarded eyes, hand near doorway.",
    summary:
      "Mara senses that awe is not safety. She understands that being desired by power is not the same as being loved.",
    keyLine: "Power that calls itself love still has to learn how to ask.",
  },
  {
    name: "Selah Reed",
    title: "The Keeper of Songs",
    role: "Preserver of memory before writing.",
    symbol: "Smoke, dusk, names carried by melody.",
    summary:
      "Selah Reed keeps the dead alive through song. She is the counterpoint to Penryn: memory kept by breath instead of inscription.",
    keyLine: "A song can carry the dead without trapping them.",
  },
  {
    name: "Iren of the Forge",
    title: "The Daughter of the Forge",
    role: "Human linked to Korr Vane’s gift.",
    symbol: "Hammer, ember, useful hands.",
    summary:
      "Iren loves the tool before she understands the blade inside it. Through her, forbidden knowledge becomes morally complicated.",
    keyLine: "A tool does not stay innocent because the first hand meant well.",
  },
  {
    name: "Nael",
    title: "The Child Who Sees the Mass",
    role: "Child witness of consequence.",
    symbol: "Small hand, smoke-light, wrong stars.",
    summary:
      "Nael sees the world is wrong before he has language for wrongness. He makes the cosmic wound human.",
    keyLine: "The sky moved, and no one believed me.",
  },
  {
    name: "Aren of the Ash Road",
    title: "The Human Witness-Scribe",
    role: "Recorder of the breach; keeper of warning.",
    symbol: "Ash road, wrapped tablets, black ink, gray dawn.",
    summary:
      "Aren gathers songs, broken tablets, survivor testimony, star errors, and names that should not be spoken too casually. His archive becomes the in-world source of PHYLAX itself.",
    keyLine: "What is buried still teaches the hand that finds it.",
  },
];

const timeline = [
  "Order",
  "Clean observation",
  "Human disturbance",
  "Study of nearness",
  "Wound of exclusion",
  "Nadir’s question",
  "Sevrin’s argument",
  "Veyr’s oath",
  "The descent",
  "The gifts",
  "The turning of gifts",
  "The Mass",
  "The earth accuses",
  "The trial of offices",
  "Binding",
  "Echo",
];

const songSpine = [
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

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-orange-300/70">
      {children}
    </p>
  );
}

function CharacterGrid({
  title,
  subtitle,
  characters,
}: {
  title: string;
  subtitle: string;
  characters: CharacterCard[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
      <div className="mb-8 max-w-3xl">
        <SectionEyebrow>Archive roster</SectionEyebrow>
        <h2 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-stone-300">{subtitle}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {characters.map((character) => (
          <article
            key={character.name}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-700/70 bg-stone-950/70 shadow-2xl shadow-black/30 transition hover:border-orange-300/40 hover:bg-stone-900/80"
          >
            <div className="relative border-b border-stone-800 bg-black">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(251,146,60,0.16),transparent_34%),linear-gradient(180deg,#120f0c,#020617)]">
                {character.image ? (
                  <Image
                    src={character.image}
                    alt={`${character.name} — ${character.title}`}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 94vw"
                    className="object-contain p-2 transition duration-700 group-hover:scale-[1.02]"
                    priority={character.name === "Veyr"}
                  />
                ) : (
                  <div className="h-full w-full bg-[radial-gradient(circle_at_50%_20%,rgba(251,146,60,0.22),transparent_30%),linear-gradient(135deg,rgba(28,25,23,1),rgba(3,7,18,1))]" />
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="min-h-[2rem] text-xs font-semibold uppercase tracking-[0.22em] text-orange-200/70">
                {character.title}
              </p>

              <h3 className="mt-2 text-2xl font-semibold leading-tight text-stone-100">
                {character.name}
              </h3>

              <p className="mt-3 min-h-[3.5rem] text-sm font-medium leading-6 text-stone-300">
                {character.role}
              </p>

              <p className="mt-4 text-sm leading-6 text-stone-400">
                {character.summary}
              </p>

              <div className="mt-5 rounded-xl border border-stone-800 bg-black/25 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Visual symbol
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  {character.symbol}
                </p>
              </div>

              <details className="mt-4 rounded-xl border border-stone-800 bg-stone-950/80 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-orange-200">
                  Character notes
                </summary>

                {character.arc ? (
                  <p className="mt-3 text-sm leading-6 text-stone-400">
                    <span className="text-stone-200">Arc:</span>{" "}
                    {character.arc}
                  </p>
                ) : (
                  <p className="mt-3 text-sm leading-6 text-stone-500">
                    Deeper arc notes will be added as this section expands.
                  </p>
                )}

                {character.keyLine && (
                  <blockquote className="mt-3 border-l border-orange-300/40 pl-4 text-sm italic leading-6 text-stone-300">
                    “{character.keyLine}”
                  </blockquote>
                )}
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function PhylaxPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-stone-100">
      {/* PHYLAX SITE NAV */}
      <header className="sticky top-0 z-50 border-b border-stone-800/80 bg-black/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <a href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-100">
            Parallax Hearts
          </a>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-300">
            <a href="/" className="transition hover:text-orange-200">Home</a>
            <a href="/about" className="transition hover:text-orange-200">About</a>
            <a href="/project" className="transition hover:text-orange-200">Project</a>
            <a href="/music" className="transition hover:text-orange-200">Music</a>
            <a href="/phylax" className="font-semibold text-orange-200">PHYLAX</a>
            <a href="/shop" className="transition hover:text-orange-200">Store</a>
            <a href="/contact" className="transition hover:text-orange-200">Contact</a>
          </div>
        </nav>
      </header>
      <section className="relative isolate overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.18),transparent_32%),radial-gradient(circle_at_20%_40%,rgba(30,64,175,0.18),transparent_35%),linear-gradient(180deg,#050506,#0c0a09_55%,#050506)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#050506] to-transparent" />

        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-orange-300/80">
              Parallax Hearts presents
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-50 sm:text-7xl">
              PHYLAX:
              <span className="block text-stone-300">The First Breach</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-300">
              A dark cinematic album world about watching, longing, descent,
              forbidden knowledge, consequence, and return.
            </p>
            <div className="mt-8 max-w-2xl border-l border-orange-300/50 pl-5 text-lg leading-8 text-stone-200">
              <p>Before the breach, there was order.</p>
              <p>Before the oath, there was distance.</p>
              <p>Before they fell, they watched.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#characters"
                className="rounded-full border border-orange-300/40 bg-orange-300/10 px-5 py-3 text-sm font-semibold text-orange-100 transition hover:bg-orange-300/20"
              >
                Enter the character archive
              </a>
              <a
                href="#descent"
                className="rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold text-stone-200 transition hover:border-stone-500 hover:bg-stone-900"
              >
                View the descent structure
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-700/70 bg-black/30 p-4 shadow-2xl shadow-black">
            <div className="aspect-[4/5] rounded-[1.5rem] border border-stone-800 bg-[radial-gradient(circle_at_50%_25%,rgba(251,146,60,0.28),transparent_28%),radial-gradient(circle_at_50%_70%,rgba(30,64,175,0.22),transparent_35%),linear-gradient(180deg,#1c1917,#020617)] p-6">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-orange-200/10 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-orange-200/70">
                    Recovered archive
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-tight text-stone-100">
                    Sacred distance collapsing under the weight of longing.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 opacity-70">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <span
                      key={index}
                      className="h-1 rounded-full bg-gradient-to-r from-transparent via-orange-200/60 to-transparent"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionEyebrow>About the world</SectionEyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
              Watching becomes longing.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-stone-300">
            <p>
              PHYLAX begins above the human world, where ancient observers keep
              distance from the lives they record. They measure stars, preserve
              cycles, maintain the architecture of order, and watch humanity
              through black glass.
            </p>
            <p>
              But humanity carries something they cannot study without being
              changed by it: warmth, touch, grief, birth, marriage, mortality,
              and the unbearable privilege of being near.
            </p>
            <p>
              The first breach does not begin with war. It begins with envy. One
              watcher wonders whether distance is truly obedience. Another gives
              the thought a reason. Another shapes the vow.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-950/50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
          <SectionEyebrow>Source inspiration note</SectionEyebrow>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
              Symbolic reservoir, original world.
            </h2>
            <p className="text-base leading-8 text-stone-300">
              PHYLAX draws from ancient apocalyptic, apocryphal, and mystical
              imagery as creative architecture: watchers, hidden books, sealed
              visions, broken cycles, celestial order, descent, judgment, and
              memory. This is not a doctrine project or a literal exposition.
              The source material is the soil. PHYLAX is the original growth.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>Story movement</SectionEyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
            The breach unfolds slowly.
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-300">
            The viewer should feel the fall before fully understanding it:
            order, observation, longing, argument, oath, descent, gift,
            corruption, binding, and echo.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-stone-800 bg-stone-950 p-4"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-orange-300/70">
                Era {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-lg font-semibold text-stone-100">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div id="characters">
        <CharacterGrid
          title="The Breach Court"
          subtitle="The Breach Court are ancient offices becoming wounded personalities. They are tragic, intelligent, jealous, dangerous, and emotionally compromised. Their primary tension is longing becoming entitlement."
          characters={breachCourt}
        />

        <CharacterGrid
          title="The Seven Measures"
          subtitle="The Seven Measures are corrective offices. They are not sentimental heroes. Their power is restraint, exactness, and terrifying calm."
          characters={sevenMeasures}
        />

        <CharacterGrid
          title="The Human Chorus"
          subtitle="The Human Chorus anchors the story in the Warm Below. These characters make the breach personal, ethical, and emotionally grounded."
          characters={humanChorus}
        />
      </div>

      <section
        id="descent"
        className="border-y border-stone-800 bg-[linear-gradient(180deg,rgba(28,25,23,0.72),rgba(5,5,6,1))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionEyebrow>The descent film</SectionEyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
                A five-minute visual descent told in thirty chapters.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-300">
                Descent is not the fall from the sky. It is the fall inside the
                watcher. The physical crossing is foreshadowed, but the first
                wound is interior: observation becomes longing.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                [
                  "The Upper Watch",
                  "The sky is correct. Black observatories stand above storm and earth.",
                ],
                [
                  "The Glass Below",
                  "A black reflective pool reveals fire, hands, water, breath, and human nearness.",
                ],
                [
                  "The Human Vow",
                  "Two fragile people choose each other under weather. Veyr watches. The wound opens.",
                ],
                [
                  "Nadir at the Threshold",
                  "A descending stair appears where no path should exist.",
                ],
                [
                  "The Internal Breach",
                  "Nothing has happened yet. Something has already been lost.",
                ],
              ].map(([title, copy]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-stone-800 bg-black/30 p-5"
                >
                  <h3 className="text-xl font-semibold text-stone-100">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-400">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>Album spine</SectionEyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
            Song-by-song canon path.
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-300">
            Each title carries one chapter of the larger wound: first attention,
            then breach, then corruption, then binding, then return.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {songSpine.map(([song, meaning]) => (
            <div
              key={song}
              className="rounded-2xl border border-stone-800 bg-stone-950/70 p-5"
            >
              <h3 className="text-2xl font-semibold text-stone-100">
                {song}
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                {meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-800 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionEyebrow>Visual archive placeholder</SectionEyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
                Concept art will live here.
              </h2>
            </div>
            <p className="text-base leading-8 text-stone-300">
              Use black stone observatories, ash-gray fog, ember-red glow, deep
              blue-black shadows, ruined celestial architecture, cracked star
              diagrams, oath circles, hidden tablets, shattered armillary
              spheres, threshold stairs, seals, cords, mirror pools, and volcanic
              horizons. Avoid obvious wings, demons, modern objects, shiny
              sci-fi, and fantasy game styling.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
