import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/metadata";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogType: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema({
            title: post.title,
            description: post.metaDescription,
            slug: post.slug,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            image: `${SITE.url}${path}/opengraph-image`,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]}
      />

      <article className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary-blue)]">
          {post.category}
        </span>
        <h1 className="mt-2 text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">{post.title}</h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-[var(--color-slate)]">
          <span>By {SITE.name}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={post.datePublished}>
            {new Date(post.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <ImagePlaceholder alt={post.title} className="mt-8 h-64 w-full rounded-2xl" />

        <div className="prose-spottly mt-8" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <CTASection heading="Ready for a genuinely clean home?" />
      </section>
    </>
  );
}
