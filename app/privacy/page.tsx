import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Spottly",
  description:
    "Spottly's privacy policy explains what information we collect through our website and quote forms, and how we use it to provide our cleaning services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]} />

      <article className="prose-spottly mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">Privacy Policy</h1>
        <p>
          This Privacy Policy describes how {SITE.name} (&quot;Spottly,&quot; &quot;we,&quot; &quot;us&quot;)
          collects, uses, and protects information submitted through {SITE.url}.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you request a quote or contact us, we collect the information you provide directly, such as
          your name, phone number, email address, service address, and details about the cleaning service
          you&apos;re interested in.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information you provide to respond to quote requests, schedule and deliver cleaning
          services, and communicate with you about your service. We do not sell your personal information
          to third parties.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our quote and contact forms are processed through GoHighLevel, our customer relationship
          management provider. Information submitted through our forms is stored and managed within that
          platform in order to schedule and fulfill your service request.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phone}.
        </p>
      </article>
    </>
  );
}
