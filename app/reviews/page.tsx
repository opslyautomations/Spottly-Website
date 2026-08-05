import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { REVIEW_PLACEHOLDERS } from "@/lib/data/reviews";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewPlaceholder from "@/components/ReviewPlaceholder";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Reviews | Spottly House Cleaning",
  description:
    "See what Spottly clients across Los Angeles are saying about our house cleaning, deep cleaning, and recurring service. Read reviews from your neighborhood.",
  path: "/reviews",
});

// Import real reviews from Google Business Profile before launch.
// Fabricated reviews violate FTC rules — the entries below are clearly-labeled
// placeholders only, not real customer testimonials.
export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />

      <section className="mx-auto max-w-4xl px-6 py-10 text-center sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
          What Los Angeles Clients Say About Spottly
        </h1>
        <p className="mt-4 text-lg text-[var(--color-slate)]">
          Real reviews from real Spottly clients across our Los Angeles service areas.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEW_PLACEHOLDERS.map((review) => (
            <ReviewPlaceholder key={review.city} text={review.text} cityLabel={review.city} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <CTASection heading="Ready to become our next five-star review?" />
      </section>
    </>
  );
}
