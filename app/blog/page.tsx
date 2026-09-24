import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS, readingMinutes, type BlogPost } from "@/lib/data/blog";
import { BLOG_IMAGES } from "@/lib/images";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "House Cleaning Tips & Guides | Spottly Blog",
  description:
    "Practical guides on house cleaning, move-outs, Airbnb turnovers, and neighborhood-specific cleaning tips across Los Angeles, from the team at Spottly.",
  path: "/blog",
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <p className="text-xs text-[var(--color-slate)]">
      <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
      <span aria-hidden="true"> · </span>
      {readingMinutes(post)} min read
    </p>
  );
}

export default function BlogIndexPage() {
  const [featured, ...rest] = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
  const featuredImage = BLOG_IMAGES[featured.slug]?.hero;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <section className="mx-auto max-w-4xl px-6 py-10 text-center sm:py-14">
        <p className="animate-rise text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-blue)]">
          The Spottly Blog
        </p>
        <h1 className="animate-rise mt-3 text-4xl font-bold tracking-tight text-[var(--color-dark-blue)] sm:text-5xl">
          House Cleaning Tips &amp; Guides
        </h1>
        <p className="animate-rise mx-auto mt-4 max-w-2xl text-lg text-[var(--color-slate)]">
          Practical advice on cleaning frequency, move-outs, Airbnb turnovers, and neighborhood-specific
          tips from across Spottly&apos;s Los Angeles service area.
        </p>
      </section>

      {/* Featured (latest) post */}
      <section className="mx-auto max-w-6xl px-6">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl lg:grid-cols-[1.25fr_1fr]"
        >
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[380px]">
            {featuredImage ? (
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                fill
                preload
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            ) : (
              <ImagePlaceholder alt={featured.title} className="h-full w-full" />
            )}
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <span className="w-fit rounded-full bg-[var(--color-pale-blue)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary-blue)]">
              Latest · {featured.category}
            </span>
            <h2 className="mt-4 text-2xl font-bold text-[var(--color-dark-blue)] sm:text-3xl">{featured.title}</h2>
            <p className="mt-3 text-[var(--color-slate)]">{featured.excerpt}</p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <PostMeta post={featured} />
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-blue)]">
                Read article <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* All other posts */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => {
            const image = BLOG_IMAGES[post.slug]?.hero;
            return (
              <Reveal key={post.slug} delay={(i % 3) * 100} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <ImagePlaceholder alt={post.title} seed={i} className="h-full w-full" />
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-primary-blue)] shadow-sm backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold leading-snug text-[var(--color-dark-blue)] group-hover:text-[var(--color-primary-blue)]">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-[var(--color-slate)]">{post.excerpt}</p>
                    <div className="mt-5">
                      <PostMeta post={post} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <CTASection
            heading="Rather leave the cleaning to us?"
            bodyHtml="<p>Book a detail-obsessed Spottly clean online in just a few minutes.</p>"
          />
        </Reveal>
      </section>
    </>
  );
}
