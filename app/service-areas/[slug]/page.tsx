import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, getLocationBySlug } from "@/lib/data/locations";
import { getServiceBySlug } from "@/lib/data/services";
import { buildMetadata } from "@/lib/metadata";
import { LOCATION_IMAGES, SERVICE_IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import { localBusinessSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ReviewPlaceholder from "@/components/ReviewPlaceholder";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, CheckIcon, PhoneIcon, PinIcon } from "@/components/icons";

const BOOKING_STEPS = ["Pick your service", "Choose a date & time", "We come to you"];

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
  const image = LOCATION_IMAGES[location.slug];

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

      {/* Neighborhood photo banner */}
      <section className="mx-auto max-w-7xl px-4 pt-2 sm:px-6">
        <figure className="relative isolate overflow-hidden rounded-3xl bg-[var(--color-dark-blue)] shadow-2xl shadow-blue-900/20">
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              sizes="(min-width: 1280px) 1232px, 100vw"
              className="animate-slow-zoom -z-10 object-cover"
            />
          )}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b2545]/95 via-[#0b2545]/60 to-[#0b2545]/20 sm:bg-gradient-to-r sm:from-[#0b2545]/90 sm:via-[#0b2545]/55 sm:to-transparent"
          />
          <div className="flex min-h-[460px] flex-col justify-end px-6 pb-10 pt-32 sm:min-h-[520px] sm:justify-center sm:px-12 sm:py-16">
            <p className="animate-rise inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur">
              <PinIcon className="h-4 w-4" /> Now serving {location.navLabel}
            </p>
            <h1 className="animate-rise mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {location.h1}
            </h1>
            <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-lg font-semibold text-[var(--color-dark-blue)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--color-pale-blue)]"
              >
                Book in {location.navLabel}
                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          {image && (
            <figcaption className="absolute bottom-2 right-3 text-[10px] text-white/70 sm:text-xs">
              Photo:{" "}
              <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                {image.credit}
              </a>
              ,{" "}
              <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline hover:text-white">
                {image.license}
              </a>
              , cropped
            </figcaption>
          )}
        </figure>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <div className="prose-spottly" dangerouslySetInnerHTML={{ __html: location.leadHtml }} />

          <h2 className="mt-2 text-2xl font-bold text-[var(--color-dark-blue)]">{location.angleHeading}</h2>
          <div className="prose-spottly mt-3" dangerouslySetInnerHTML={{ __html: location.angleHtml }} />

          <h2 className="mt-8 text-2xl font-bold text-[var(--color-dark-blue)]">
            Areas We Serve in {location.navLabel}
          </h2>
          <p className="prose-spottly mt-3">{location.areasServedIntro}</p>

          {nearbyAreas.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {nearbyAreas.map((area) => (
                <Link
                  key={area!.slug}
                  href={`/service-areas/${area!.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[var(--color-primary-blue)] transition hover:-translate-y-0.5 hover:bg-[var(--color-pale-blue)]"
                >
                  <PinIcon className="h-3.5 w-3.5" /> {area!.navLabel}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Booking card (replaces the old quote form) */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-blue)]">
              Book online
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--color-dark-blue)]">
              Your {location.navLabel} clean, booked in minutes
            </h2>
            <ol className="mt-6 space-y-3">
              {BOOKING_STEPS.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-[var(--color-ink)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-pale-blue)] text-sm font-bold text-[var(--color-primary-blue)]">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <Link
              href="/book"
              className="animate-pulse-ring mt-7 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-blue)] px-6 py-3.5 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-blue-hover)]"
            >
              Book Your Cleaning <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-sm text-[var(--color-slate)]">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-[var(--color-primary-blue)]" /> Insured cleaning teams
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-[var(--color-primary-blue)]" /> Mobile service — we come to you
              </li>
            </ul>
            <p className="mt-5 text-sm text-[var(--color-slate)]">
              Need a custom scope?{" "}
              <Link href="/contact" className="font-semibold text-[var(--color-primary-blue)] hover:underline">
                Get a free quote
              </Link>{" "}
              or call{" "}
              <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-[var(--color-primary-blue)] hover:underline">
                {SITE.phone}
              </a>
              .
            </p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-[var(--color-dark-blue)] sm:text-3xl">
            Services Available in {location.navLabel}
          </h2>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {location.servicesAvailable.map((item, i) => {
            const service = getServiceBySlug(item.slug);
            if (!service) return null;
            const serviceImage = SERVICE_IMAGES[item.slug];
            return (
              <li key={item.slug}>
                <Reveal delay={(i % 3) * 100} className="h-full">
                  <Link
                    href={`/services/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {serviceImage && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={serviceImage.src}
                          alt={serviceImage.alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <span className="font-semibold text-[var(--color-dark-blue)]">{service.navLabel}</span>
                      <span className="mt-1 flex-1 text-sm text-[var(--color-slate)]">
                        {item.blurb.charAt(0).toUpperCase() + item.blurb.slice(1)}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-blue)]">
                        Learn more <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
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
        <Reveal>
          <CTASection
            heading={`Ready for a spotless ${location.navLabel} home?`}
            bodyHtml="<p>Pick your service and a time that works — booking takes just a few minutes.</p>"
          />
        </Reveal>
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
