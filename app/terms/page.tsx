import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Spottly",
  description:
    "Read Spottly's terms of service, covering how our house cleaning quotes, scheduling, and website use work for clients across Los Angeles.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms" }]} />

      <article className="prose-spottly mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">Terms of Service</h1>
        <p>
          These Terms of Service govern your use of {SITE.url} and any quote request or booking made with{" "}
          {SITE.name}.
        </p>

        <h2>Quotes and Scheduling</h2>
        <p>
          Quotes provided through our website or by phone are estimates based on the information you
          provide about your home or business. Final pricing is confirmed before your appointment is
          booked. Spottly is a mobile, service-area business — we travel to you rather than operating from
          a storefront.
        </p>

        <h2>Cancellations and Rescheduling</h2>
        <p>
          We ask for as much notice as possible if you need to reschedule or cancel a visit so we can
          adjust our team&apos;s schedule accordingly.
        </p>

        <h2>Website Use</h2>
        <p>
          The content on this website is provided for general informational purposes about Spottly&apos;s
          services and service areas. We do not guarantee that any specific service outcome will match
          every example described on this site.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about these terms can be directed to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
          or {SITE.phone}.
        </p>
      </article>
    </>
  );
}
