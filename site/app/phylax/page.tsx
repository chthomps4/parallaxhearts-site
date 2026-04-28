import type { Metadata } from "next";
import Link from "next/link";
import { breachCourt, songSpine } from "./phylax-data";
import {
  CharacterFeature,
  Eyebrow,
  LinkCard,
  PageHero,
  PhylaxShell,
} from "./components";

export const metadata: Metadata = {
  title: "PHYLAX: The First Breach | Parallax Hearts",
  description:
    "A dark cinematic album world about watching, longing, descent, forbidden knowledge, consequence, and return.",
};

export default function PhylaxPage() {
  const featuredCharacters = breachCourt.slice(0, 3);

  return (
    <PhylaxShell>
      <PageHero
        eyebrow="Parallax Hearts presents"
        title="PHYLAX: The First Breach"
        subtitle="A dark cinematic album world about watching, longing, descent, forbidden knowledge, consequence, and return."
      >
        <div className="mt-8 max-w-2xl border-l border-orange-300/50 pl-5 text-lg leading-8 text-stone-200">
          <p>Before the breach, there was order.</p>
          <p>Before the oath, there was distance.</p>
          <p>Before they fell, they watched.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/phylax/story"
            className="rounded-full border border-orange-300/40 bg-orange-300/10 px-5 py-3 text-sm font-semibold text-orange-100 transition hover:bg-orange-300/20"
          >
            Read the story
          </Link>

          <Link
            href="/phylax/characters"
            className="rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold text-stone-200 transition hover:border-stone-500 hover:bg-stone-900"
          >
            View characters
          </Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Core thesis</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
              Sacred distance collapses under longing.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-300">
            <p>
              PHYLAX is not the story of monsters invading humanity. It is the
              story of ancient observers who were made to witness without
              possession, then slowly become wounded by what they are forbidden
              to experience.
            </p>

            <p>
              Humanity carries what they cannot study cleanly: warmth, touch,
              grief, birth, marriage, mortality, and the unbearable privilege of
              being near.
            </p>

            <p>
              The first breach does not begin with war. It begins with envy. One
              watcher asks the question. Another gives it a reason. Another
              speaks the vow.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-950/50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <Eyebrow>Explore the archive</Eyebrow>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <LinkCard
              href="/phylax/story"
              title="Story"
              text="The full breach timeline: order, observation, longing, oath, descent, gifts, corruption, binding, and echo."
            />

            <LinkCard
              href="/phylax/characters"
              title="Characters"
              text="The Breach Court, the Seven Measures, and the Human Chorus."
            />

            <LinkCard
              href="/phylax/descent"
              title="Descent"
              text="The first song chapter: the interior fall before the physical crossing."
            />

            <LinkCard
              href="/phylax/lore"
              title="Lore"
              text="Cosmology, locations, artifacts, source inspiration, and visual language."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <Eyebrow>Featured figures</Eyebrow>

        <h2 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
          The first fractures.
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
          These are not villains introduced for spectacle. They are offices of
          attention becoming wounded personalities.
        </p>

        <div className="mt-4">
          {featuredCharacters.map((character, index) => (
            <CharacterFeature
              key={character.name}
              character={character}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-stone-800 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <Eyebrow>Album spine</Eyebrow>

          <h2 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
            Song-by-song canon path.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
            Each title carries one chapter of the larger wound: first attention,
            then breach, then corruption, then binding, then return.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </section>
    </PhylaxShell>
  );
}
