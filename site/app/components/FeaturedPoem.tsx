import Image from "next/image";
import Link from "next/link";
import type { PublicPoem } from "../lib/poetry";
import Arrow from "./Arrow";

export default function FeaturedPoem({
  poem,
  collectionPage = false,
}: {
  poem: PublicPoem;
  collectionPage?: boolean;
}) {
  const end = poem.poemLines.indexOf("");
  const excerpt = poem.poemLines.slice(0, end === -1 ? 6 : end);
  return (
    <section
      className="parchment-band anchor-feature"
      aria-labelledby="anchor-poem-heading"
    >
      <div className="editorial-container">
        <div className="anchor-layout">
          <div>
            <p className="editorial-label">The anchor poem · Crown of Phases</p>
            <h2 id="anchor-poem-heading">{poem.title}</h2>
            <p className="poem-excerpt">{excerpt.join("\n")}</p>
            <Link className="text-link" href={`/poetry/${poem.slug}`}>
              Read {poem.title} <Arrow />
            </Link>
          </div>
          {poem.heroImage && (
            <Link
              className="anchor-art-link"
              href={`/poetry/${poem.slug}`}
              aria-label={`Read ${poem.title}`}
            >
              <Image
                src={poem.heroImage}
                alt={poem.imageAlt}
                width={poem.imageWidth || 1254}
                height={poem.imageHeight || 1254}
                sizes="(max-width: 800px) 90vw, 48vw"
              />
            </Link>
          )}
        </div>
        <div className="anchor-caption">
          <p>Precision makes room for a human visitor.</p>
          <Link
            className="text-link"
            href={collectionPage ? "/poetry" : "/crown-of-phases"}
          >
            {collectionPage ? "Read more poetry" : "Explore the collection"}{" "}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
