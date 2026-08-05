import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { REVIEW_PLACEHOLDERS } from "@/lib/data/reviews";
import GHLForm from "@/components/GHLForm";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ReviewPlaceholder from "@/components/ReviewPlaceholder";
import CTASection from "@/components/CTASection";
import { CheckIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: `${SITE.name} | House Cleaning in Los Angeles`,
  description:
    "Spottly delivers detail-obsessed house cleaning across Los Angeles — standard, deep, move-in/move-out, recurring, Airbnb, and commercial cleaning. Get a free quote.",
  path: "/",
});

const TRUST_POINTS = [
  "Mobile service across the LA Westside & central neighborhoods",
  "Insured cleaning teams",
  "Detail-obsessed on every visit — not just the surface",
  "Founded and based in Los Angeles",
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-[1.1fr_1fr] lg:py-20">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-[var(--color-dark-blue)] sm:text-5xl">
            House Cleaning in Los Angeles You Can Actually Trust
          </h1>
          <p className="mt-5 text-lg text-[var(--color-slate)]">
            Spottly cleans the details other companies skip — from Santa Monica to Koreatown. Standard,
            deep, move-in/move-out, recurring, Airbnb, and commercial cleaning, all backed by a
            founder&apos;s obsession with getting the small stuff right.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[var(--color-primary-blue)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--color-primary-blue-hover)]"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-slate-300 px-8 py-3 font-semibold text-[var(--color-dark-blue)] transition hover:bg-[var(--color-pale-blue)]"
            >
              <PhoneIcon className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
        <div>
          <GHLForm />
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[var(--color-pale-blue)]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <div key={point} className="flex items-start gap-2 text-sm font-medium text-[var(--color-dark-blue)]">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary-blue)]" />
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-[var(--color-dark-blue)] sm:text-3xl">
          Our Services
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--color-slate)]">
          Whatever your home or business needs, there&apos;s a Spottly service built for it.
        </p>
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl bg-[var(--color-pale-blue)] p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-[var(--color-dark-blue)] sm:text-3xl">Why Spottly</h2>
          <p className="mt-4 text-[var(--color-ink)]">
            Spottly was born out of a simple belief: the details are the job. Founder Miguel Flores was
            born and raised in Los Angeles, and that obsession with the small stuff — the baseboard you
            didn&apos;t skip, the corner you didn&apos;t cut — is the standard every clean is held to.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block font-semibold text-[var(--color-primary-blue)] hover:text-[var(--color-primary-blue-hover)]"
          >
            Read our full story →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-[var(--color-dark-blue)] sm:text-3xl">
          Where We Clean
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--color-slate)]">
          Serving the LA Westside and central neighborhoods — find your area below.
        </p>
        <div className="mt-10">
          <ServiceAreasGrid />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-[var(--color-dark-blue)] sm:text-3xl">
          Recent Work
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <ImagePlaceholder
              key={i}
              alt="Before and after photo placeholder — real Spottly job photos coming soon"
              seed={i}
              className="aspect-square w-full rounded-xl"
            />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/gallery" className="font-semibold text-[var(--color-primary-blue)] hover:text-[var(--color-primary-blue-hover)]">
            See more of our work →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-[var(--color-dark-blue)] sm:text-3xl">
          What Clients Are Saying
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {REVIEW_PLACEHOLDERS.slice(0, 3).map((review) => (
            <ReviewPlaceholder key={review.city} text={review.text} cityLabel={review.city} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/reviews" className="font-semibold text-[var(--color-primary-blue)] hover:text-[var(--color-primary-blue-hover)]">
            Read more reviews →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <CTASection heading="Ready for a genuinely clean home?" />
      </section>
    </>
  );
}
