import Image from "next/image";
import Link from "next/link";

type EditorialFeatureProps = {
  eyebrow: string;
  title: string;
  description: string;
  detail?: string;
  image: string;
  imageAlt: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  folio?: string;
  priority?: boolean;
  reverse?: boolean;
};

export default function EditorialFeature({
  eyebrow,
  title,
  description,
  detail,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  folio = "Parallax Hearts archive",
  priority = false,
  reverse = false,
}: EditorialFeatureProps) {
  return (
    <article className={reverse ? "editorial-feature is-reversed" : "editorial-feature"}>
      <div className="editorial-feature-media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 820px) 100vw, 48vw"
          className="editorial-feature-image"
        />
        <div className="editorial-feature-scrim" aria-hidden="true" />
        <p className="editorial-feature-folio">{folio}</p>
      </div>

      <div className="editorial-feature-copy">
        <p className="kicker">{eyebrow}</p>
        <h2 className="editorial-feature-title">{title}</h2>
        <p className="editorial-feature-description">{description}</p>
        {detail ? <p className="editorial-feature-detail">{detail}</p> : null}

        <div className="editorial-feature-actions">
          <Link href={primaryHref} className="primary-button">
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link href={secondaryHref} className="secondary-button">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
