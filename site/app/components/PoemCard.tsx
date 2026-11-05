import Image from "next/image";
import Link from "next/link";
import type { PublicPoem } from "../lib/poetry";
import Arrow from "./Arrow";

export default function PoemCard({ poem }: { poem: PublicPoem }) {
  const excerpt = poem.poemLines.slice(
    0,
    poem.poemLines.indexOf("") === -1 ? 3 : poem.poemLines.indexOf(""),
  );
  return (
    <article className="poem-card">
      {poem.heroImage && (
        <Link href={`/poetry/${poem.slug}`} tabIndex={-1} aria-hidden="true">
          <Image
            src={poem.heroImage}
            alt=""
            width={poem.imageWidth || 900}
            height={poem.imageHeight || 1125}
            sizes="(max-width: 700px) 90vw, 40vw"
            className="poem-card-art"
          />
        </Link>
      )}
      <p className="editorial-label">{poem.themes.join(" · ")}</p>
      <h3>
        <Link href={`/poetry/${poem.slug}`}>{poem.title}</Link>
      </h3>
      <p className="poem-excerpt">{excerpt.join("\n")}</p>
      <Link
        className="text-link"
        href={`/poetry/${poem.slug}`}
        aria-label={`Read ${poem.title}`}
      >
        Read the poem <Arrow />
      </Link>
    </article>
  );
}
