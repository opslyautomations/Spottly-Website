import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/lib/data/services";
import { buildMetadata } from "@/lib/metadata";
import { SERVICE_IMAGES } from "@/lib/images";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ServicesGrid from "@/components/ServicesGrid";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const image = SERVICE_IMAGES[service.slug];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service.navLabel, service.metaDescription, path),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.navLabel, path },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.navLabel, path },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">{service.h1}</h1>
        <div
          className="prose-spottly mt-6 text-lg"
          dangerouslySetInnerHTML={{ __html: service.introHtml }}
        />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/book"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[var(--color-primary-blue)] px-6 py-3 font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-blue-hover)]"
          >
            Book {service.navLabel}
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-300 px-6 py-3 font-semibold text-[var(--color-dark-blue)] transition hover:bg-[var(--color-pale-blue)]"
          >
            Get a Free Quote
          </Link>
        </div>

        {image && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              sizes="(min-width: 896px) 848px, 100vw"
              className="animate-slow-zoom object-cover"
            />
          </div>
        )}

        <div className="prose-spottly mt-10" dangerouslySetInnerHTML={{ __html: service.bodyHtml }} />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <CTASection heading={service.ctaHeading} bodyHtml={service.ctaHtml} />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <h2 className="text-2xl font-bold text-[var(--color-dark-blue)]">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-bold text-[var(--color-dark-blue)]">Explore Our Other Services</h2>
        <div className="mt-6">
          <ServicesGrid excludeSlug={service.slug} />
        </div>
      </section>
    </>
  );
}
