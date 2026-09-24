import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "House Cleaning Services in Los Angeles | Spottly",
  description:
    "Explore Spottly's house cleaning services in Los Angeles: standard, deep, move-in/move-out, recurring, Airbnb, and commercial cleaning. Get a free quote today.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <section className="mx-auto max-w-4xl px-6 py-10 text-center sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
          House Cleaning Services in Los Angeles
        </h1>
        <p className="mt-4 text-lg text-[var(--color-slate)]">
          From a single deep clean to a standing weekly visit, Spottly builds every service around the
          details — not just the surface. Pick the service that fits your home, or get a free quote and
          we&apos;ll help you choose.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <ServicesGrid />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <CTASection heading="Not sure which service fits your home?" ctaLabel="Get a Free Quote" ctaHref="/contact" />
      </section>
    </>
  );
}
