import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Los Angeles Service Areas | Spottly House Cleaning",
  description:
    "Spottly provides house cleaning across the LA Westside and central neighborhoods — from Santa Monica to Koreatown. Find your area and get a free quote.",
  path: "/service-areas",
});

export default function ServiceAreasIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas" }]} />

      <section className="mx-auto max-w-4xl px-6 py-10 text-center sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
          Serving the LA Westside &amp; Central Neighborhoods
        </h1>
        <p className="mt-4 text-lg text-[var(--color-slate)]">
          Spottly cleans homes, apartments, and offices across eleven Los Angeles neighborhoods — from
          the beach cities of the Westside to the dense apartment corridors of Mid-City and Koreatown.
          Find your area below.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <ServiceAreasGrid />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <CTASection heading="Don't see your neighborhood listed?" bodyHtml="<p>We may still serve your area — reach out and we'll let you know.</p>" ctaLabel="Get a Free Quote" ctaHref="/contact" />
      </section>
    </>
  );
}
