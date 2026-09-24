import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts, readingMinutes } from "@/lib/data/blog";
import { BLOG_IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/metadata";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

/** Splits article HTML before its middle <h2>, so a supporting photo can sit between sections. */
function splitAtMiddleHeading(html: string): [string, string] {
  const starts = [...html.matchAll(/<h2[\s>]/g)].map((m) => m.index);
  if (starts.length < 3) return [html, ""];
  const at = starts[Math.floor(starts.length / 2)];
  return [html.slice(0, at), html.slice(at)];
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

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
  const images = BLOG_IMAGES[post.slug];
  const [firstHalf, secondHalf] = splitAtMiddleHeading(post.contentHtml);
  const related = getRelatedPosts(post);

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
            image: images ? `${SITE.url}${images.hero.src}` : `${SITE.url}${path}/opengraph-image`,
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

      <article>
        <header className="mx-auto max-w-3xl px-6 pt-10 text-center sm:pt-14">
          <span className="animate-rise inline-block rounded-full bg-[var(--color-pale-blue)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary-text)]">
            {post.category}
          </span>
          <h1 className="animate-rise mt-4 text-3xl font-bold leading-tight tracking-tight text-[var(--color-dark-blue)] sm:text-5xl">
            {post.title}
          </h1>
          <p className="animate-rise mx-auto mt-4 max-w-2xl text-lg text-[var(--color-slate)]">{post.excerpt}</p>
          <div className="animate-rise mt-5 flex items-center justify-center gap-3 text-sm text-[var(--color-slate)]">
            <span>By {SITE.name}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{readingMinutes(post)} min read</span>
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-5xl px-6">
          {images ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                preload
                sizes="(min-width: 1024px) 976px, 100vw"
                className="animate-slow-zoom object-cover"
              />
            </div>
          ) : (
            <ImagePlaceholder alt={post.title} className="aspect-[16/9] w-full rounded-3xl" />
          )}
        </div>

        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="prose-spottly text-[1.05rem]" dangerouslySetInnerHTML={{ __html: firstHalf }} />

          {secondHalf && images && (
            <Reveal className="my-10">
              <figure>
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={images.inline.src}
                    alt={images.inline.alt}
                    fill
                    sizes="(min-width: 768px) 720px, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            </Reveal>
          )}

          {secondHalf && (
            <div className="prose-spottly text-[1.05rem]" dangerouslySetInnerHTML={{ __html: secondHalf }} />
          )}

          <aside className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-light-blue/40 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-[var(--color-dark-blue)]">Skip the scrubbing this week.</p>
              <p className="mt-1 text-sm text-[var(--color-slate)]">Book a Spottly clean online in a few minutes.</p>
            </div>
            <Link
              href="/book"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-blue)] px-6 py-3 font-semibold text-white shadow-md shadow-primary-blue/20 transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-blue-hover)]"
            >
              Book Your Cleaning
            </Link>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <Reveal>
            <h2 className="text-2xl font-bold text-[var(--color-dark-blue)] sm:text-3xl">Keep reading</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => {
              const hero = BLOG_IMAGES[r.slug]?.hero;
              return (
                <Reveal key={r.slug} delay={i * 100} className="h-full">
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {hero ? (
                        <Image
                          src={hero.src}
                          alt={hero.alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <ImagePlaceholder alt={r.title} seed={i} className="h-full w-full" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary-text)]">
                        {r.category}
                      </span>
                      <h3 className="mt-2 flex-1 font-semibold leading-snug text-[var(--color-dark-blue)] group-hover:text-[var(--color-primary-text)]">
                        {r.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-text)]">
                        Read article <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <CTASection heading="Ready for a genuinely clean home?" />
        </Reveal>
      </section>
    </>
  );
}
