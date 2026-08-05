import type { Metadata } from "next";
import { SITE } from "./site";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  ogType?: "website" | "article";
}): Metadata {
  const url = `${SITE.url}${opts.path}`;
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: {
      canonical: url,
    },
    robots: opts.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: opts.ogType ?? "website",
      images: [
        {
          url: `${opts.path === "/" ? "" : opts.path}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: opts.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [`${opts.path === "/" ? "" : opts.path}/opengraph-image`],
    },
  };
}
