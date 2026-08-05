import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/data/blog";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = buildMetadata({
  title: "House Cleaning Tips & Guides | Spottly Blog",
  description:
    "Practical guides on house cleaning, move-outs, Airbnb turnovers, and neighborhood-specific cleaning tips across Los Angeles, from the team at Spottly.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <section className="mx-auto max-w-4xl px-6 py-10 text-center sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
          House Cleaning Tips &amp; Guides
        </h1>
        <p className="mt-4 text-lg text-[var(--color-slate)]">
          Practical advice on cleaning frequency, move-outs, Airbnb turnovers, and neighborhood-specific
          tips from across Spottly&apos;s Los Angeles service area.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <ImagePlaceholder alt={post.title} seed={i} className="h-40 w-full" />
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary-blue)]">
                  {post.category}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-[var(--color-dark-blue)]">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-[var(--color-slate)]">{post.excerpt}</p>
                <time dateTime={post.datePublished} className="mt-4 text-xs text-[var(--color-slate)]">
                  {new Date(post.datePublished).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
