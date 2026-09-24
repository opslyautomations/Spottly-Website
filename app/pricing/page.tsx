import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Pricing | Spottly House Cleaning",
  description:
    "Spottly quotes every clean by home size, condition, and service type — no flat rates. See how our pricing works and get a free, custom quote today.",
  path: "/pricing",
});

const FACTORS = [
  {
    title: "Home size",
    body: "Square footage and number of bedrooms and bathrooms are the biggest drivers of how long a visit takes.",
  },
  {
    title: "Condition",
    body: "A home that's been maintained regularly takes less time than one that hasn't seen a professional clean in a while — which is why condition matters as much as size.",
  },
  {
    title: "Service type",
    body: "A one-time deep clean, an empty-home move-out clean, and a recurring maintenance visit all involve different scopes of work, so each is quoted differently.",
  },
  {
    title: "Frequency",
    body: "Recurring visits (weekly, biweekly, monthly) carry a lower per-visit rate than one-off cleans, since regular upkeep means less buildup to tackle each time.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />

      <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
          Pricing Built Around Your Home, Not a Flat Rate
        </h1>
        <p className="prose-spottly mt-6 text-lg">
          There&apos;s no single number that makes sense for every home. A tidy one-bedroom condo and a
          long-overdue four-bedroom house aren&apos;t the same job, so Spottly doesn&apos;t price them the
          same way. Instead, every quote is built around your specific home, its current condition, and
          the service you need — so you&apos;re never paying for more (or less) than the job actually
          requires.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[var(--color-dark-blue)]">How We Quote a Clean</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FACTORS.map((factor) => (
            <div key={factor.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-[var(--color-dark-blue)]">{factor.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-slate)]">{factor.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-bold text-[var(--color-dark-blue)]">
          Why a Custom Quote Beats a Flat Rate
        </h2>
        <p className="prose-spottly mt-4">
          Flat-rate pricing sounds simple, but it usually means someone is overpaying — either the
          homeowner with a small, easy home subsidizing bigger jobs, or the cleaning team rushing through a
          large home to hit a rate that was never realistic for it. A custom quote means the price
          actually reflects the work, every time.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[var(--color-dark-blue)]">What&apos;s Included</h2>
        <p className="prose-spottly mt-4">
          Every service has its own scope, from the everyday upkeep of a{" "}
          <Link href="/services/standard-cleaning">standard cleaning</Link> to the top-to-bottom reset of a{" "}
          <Link href="/services/deep-cleaning">deep cleaning</Link> or the empty-home detail of a{" "}
          <Link href="/services/move-in-move-out-cleaning">move-in/move-out clean</Link>. Visit each
          service page for a full breakdown of what&apos;s covered, or just tell us about your home and
          we&apos;ll recommend the right fit.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <CTASection
          heading="Get a custom quote for your home."
          bodyHtml="<p>Tell us your home's size, condition, and the service you're after — we'll take it from there.</p>"
          ctaLabel="Get a Free Quote"
          ctaHref="/contact"
        />
      </section>
    </>
  );
}
