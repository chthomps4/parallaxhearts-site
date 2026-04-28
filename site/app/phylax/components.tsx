import Link from "next/link";
import type { ReactNode } from "react";
import type { Character } from "./phylax-data";

export function PhylaxShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#050506] text-stone-100">
      <header className="sticky top-0 z-50 border-b border-stone-800/80 bg-black/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-100"
          >
            Parallax Hearts
          </Link>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-300">
            <Link href="/" className="transition hover:text-orange-200">
              Home
            </Link>
            <Link href="/music" className="transition hover:text-orange-200">
              Music
            </Link>
            <Link href="/phylax" className="font-semibold text-orange-200">
              PHYLAX
            </Link>
            <Link href="/phylax/story" className="transition hover:text-orange-200">
              Story
            </Link>
            <Link href="/phylax/characters" className="transition hover:text-orange-200">
              Characters
            </Link>
            <Link href="/phylax/descent" className="transition hover:text-orange-200">
              Descent
            </Link>
            <Link href="/phylax/lore" className="transition hover:text-orange-200">
              Lore
            </Link>
            <Link href="/contact" className="transition hover:text-orange-200">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {children}
    </main>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-orange-300/70">
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-stone-800">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.18),transparent_32%),radial-gradient(circle_at_20%_40%,rgba(30,64,175,0.18),transparent_35%),linear-gradient(180deg,#050506,#0c0a09_55%,#050506)]" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-stone-50 sm:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-stone-300">
          {subtitle}
        </p>

        {children}
      </div>
    </section>
  );
}

export function LinkCard({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-stone-800 bg-stone-950/80 p-6 transition hover:border-orange-300/50 hover:bg-stone-900"
    >
      <h3 className="text-2xl font-semibold text-stone-100">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-400">{text}</p>
    </Link>
  );
}

export function NaturalPortrait({ character }: { character: Character }) {
  if (!character.image) {
    return (
      <div className="mx-auto flex h-[520px] w-full max-w-[360px] items-center justify-center rounded-2xl border border-stone-800 bg-[radial-gradient(circle_at_50%_20%,rgba(251,146,60,0.18),transparent_32%),linear-gradient(180deg,#1c1917,#020617)] p-6 text-center text-sm text-stone-500">
        Image pending
      </div>
    );
  }

  return (
    <figure className="mx-auto w-full max-w-[360px]">
      <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-stone-800 bg-black shadow-2xl shadow-black/40">
        <img
          src={character.image}
          alt={`${character.name} — ${character.title}`}
          className="block h-full w-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <figcaption className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200/80">
            {character.title}
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-stone-100">
            {character.name}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}

export function CharacterFeature({
  character,
  reverse = false,
}: {
  character: Character;
  reverse?: boolean;
}) {
  return (
    <article className="border-b border-stone-800 py-14">
      <div
        className={`mx-auto grid max-w-6xl gap-8 lg:grid-cols-[380px_1fr] lg:items-start ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <NaturalPortrait character={character} />

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200/70">
            {character.faction}
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-100">
            {character.name}
          </h2>

          <p className="mt-2 text-xl text-orange-100/80">
            {character.title}
          </p>

          <p className="mt-5 text-base font-medium leading-7 text-stone-300">
            {character.role}
          </p>

          <p className="mt-5 text-base leading-8 text-stone-400">
            {character.summary}
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-800 bg-stone-950/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                Symbol
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                {character.symbol}
              </p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-950/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                Arc
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                {character.arc ?? "Arc notes pending."}
              </p>
            </div>
          </div>

          {character.keyLine && (
            <blockquote className="mt-7 border-l border-orange-300/50 pl-5 text-lg italic leading-8 text-stone-200">
              “{character.keyLine}”
            </blockquote>
          )}
        </div>
      </div>
    </article>
  );
}

export function LoreList({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(([title, text]) => (
        <article
          key={title}
          className="rounded-2xl border border-stone-800 bg-stone-950/70 p-5"
        >
          <h3 className="text-xl font-semibold text-stone-100">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-stone-400">{text}</p>
        </article>
      ))}
    </div>
  );
}