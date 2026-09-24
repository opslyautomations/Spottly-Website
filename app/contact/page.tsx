import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { LOCATIONS } from "@/lib/data/locations";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import GHLForm from "@/components/GHLForm";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Contact Spottly | Get a Free Cleaning Quote",
  description:
    "Get a free house cleaning quote from Spottly. Call, email, or fill out our form — we serve Santa Monica, Beverly Hills, Venice, Koreatown, and more.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 sm:py-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
            Get a Free Cleaning Quote
          </h1>
          <p className="mt-4 text-lg text-[var(--color-slate)]">
            Tell us about your home or business and we&apos;ll get back to you with a custom quote.
            Spottly is a mobile service — we come to you.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 font-semibold text-[var(--color-dark-blue)] hover:text-[var(--color-primary-text)]">
              <PhoneIcon className="h-5 w-5 text-[var(--color-primary-blue)]" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 font-semibold text-[var(--color-dark-blue)] hover:text-[var(--color-primary-text)]">
              <MailIcon className="h-5 w-5 text-[var(--color-primary-blue)]" /> {SITE.email}
            </a>
            <p className="text-sm text-[var(--color-slate)]">{SITE.hours}</p>
          </div>

          <div className="mt-8">
            <h2 className="flex items-center gap-2 font-semibold text-[var(--color-dark-blue)]">
              <PinIcon className="h-5 w-5 text-[var(--color-primary-blue)]" /> Service Areas
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-[var(--color-slate)]">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>{l.navLabel}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <GHLForm title="Contact Spottly" />
        </div>
      </section>
    </>
  );
}
