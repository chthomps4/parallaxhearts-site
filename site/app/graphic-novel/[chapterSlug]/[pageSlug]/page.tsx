import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import NovelPageView from "../../../components/NovelPageView";
import { breadcrumbSchema, creativeWorkSchema, SITE_URL } from "../../../lib/seo";
import {
  getNovelChapter,
  getNovelPage,
  getNovelPageNeighbors,
  getVisibleNovelPages,
} from "../../../lib/novel/chapter-one";

type PageParams = {
  chapterSlug: string;
  pageSlug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

function siteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export const dynamicParams = false;

export function generateStaticParams(): PageParams[] {
  return getVisibleNovelPages().map((page) => ({
    chapterSlug: page.chapterSlug,
    pageSlug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { chapterSlug, pageSlug } = await params;
  const page = getNovelPage(chapterSlug, pageSlug);

  if (!page) {
    return {};
  }

  const title = `${page.title} | ${page.chapterTitle} | What the Town Keeps`;
  const imageUrl = page.image.src ? siteUrl(page.image.src) : undefined;

  return {
    title,
    description: page.seoDescription,
    alternates: {
      canonical: siteUrl(page.path),
    },
    openGraph: {
      title,
      description: page.seoDescription,
      url: siteUrl(page.path),
      type: "article",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: page.image.width ?? 1000,
              height: page.image.height ?? 1414,
              alt: page.image.alt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.seoDescription,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function GraphicNovelPageRoute({ params }: PageProps) {
  const { chapterSlug, pageSlug } = await params;
  const chapter = getNovelChapter(chapterSlug);
  const page = getNovelPage(chapterSlug, pageSlug);

  if (!chapter || !page) {
    notFound();
  }

  const neighbors = getNovelPageNeighbors(chapterSlug, pageSlug);
  const pageJsonLd = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Graphic Novel", path: "/graphic-novel" },
      { name: chapter.title, path: chapter.path },
      { name: page.title, path: page.path },
    ]),
    creativeWorkSchema({
      name: page.title,
      description: page.seoDescription,
      path: page.path,
      image: page.image.src,
    }),
  ];

  return (
    <>
      <JsonLd data={pageJsonLd} />
      <NovelPageView chapter={chapter} page={page} {...neighbors} />
    </>
  );
}
