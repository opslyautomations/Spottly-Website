import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, getLocationBySlug } from "@/lib/data/locations";
import { getServiceBySlug } from "@/lib/data/services";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ReviewPlaceholder from "@/components/ReviewPlaceholder";
import GHLForm from "@/components/GHLForm";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/service-areas/${location.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const path = `/service-areas/${location.slug}`;
  const nearbyAreas = location.nearbyAreaSlugs
    .map((s) => LOCATIONS.find((l) => l.slug === s))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(location.navLabel, path),
          faqSchema(location.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: location.navLabel, path },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: location.navLabel, path },
        ]}
      />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 sm:py-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">{location.h1}</h1>
          <div className="prose-spottly mt-6" dangerouslySetInnerHTML={{ __html: location.leadHtml }} />

          <h2 className="mt-2 text-xl font-bold text-[var(--color-dark-blue)]">{location.angleHeading}</h2>
          <div className="prose-spottly mt-2" dangerouslySetInnerHTML={{ __html: location.angleHtml }} />

          <h2 className="mt-8 text-xl font-bold text-[var(--color-dark-blue)]">
            Areas We Serve in {location.navLabel}
          </h2>
          <p className="prose-spottly mt-2">{location.areasServedIntro}</p>

          {nearbyAreas.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {nearbyAreas.map((area) => (
                <Link
                  key={area!.slug}
                  href={`/service-areas/${area!.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[var(--color-primary-blue)] hover:bg-[var(--color-pale-blue)]"
                >
                  {area!.navLabel}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div>
          <GHLForm title={`Get a Free Quote — ${location.navLabel}`} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <h2 className="text-2xl font-bold text-[var(--color-dark-blue)]">
          Services Available in {location.navLabel}
        </h2>
        <ul className="mt-6 flex flex-col gap-3">
          {location.servicesAvailable.map((item) => {
            const service = getServiceBySlug(item.slug);
            if (!service) return null;
            return (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:bg-[var(--color-pale-blue)]"
                >
                  <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary-blue)] transition group-hover:translate-x-1" />
                  <span>
                    <span className="font-semibold text-[var(--color-dark-blue)]">{service.navLabel}</span>
                    <span className="text-[var(--color-slate)]"> — {item.blurb}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <h2 className="text-2xl font-bold text-[var(--color-dark-blue)]">What Neighbors Are Saying</h2>
        <div className="mt-6">
          <ReviewPlaceholder text={location.proofPlaceholder} cityLabel={location.navLabel} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <CTASection heading={`Get a Free Quote in ${location.navLabel}`} ctaLabel="Get a Free Quote" ctaHref="/contact" />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <h2 className="text-2xl font-bold text-[var(--color-dark-blue)]">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={location.faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-lg font-semibold text-[var(--color-dark-blue)]">Local Resources</h2>
        <ul className="mt-3 flex flex-col gap-1 text-sm">
          {location.localResources.map((resource) => (
            <li key={resource.url}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary-blue)] underline"
              >
                {resource.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
