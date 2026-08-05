import { getBlogPostBySlug, BLOG_POSTS } from "@/lib/data/blog";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  return renderOgImage(post?.title ?? "Spottly Blog", post?.category ?? "House Cleaning Tips");
}
