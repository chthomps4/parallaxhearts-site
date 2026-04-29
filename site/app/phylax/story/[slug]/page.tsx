import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function StorySlugRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/phylax/lore/${slug}`);
}
