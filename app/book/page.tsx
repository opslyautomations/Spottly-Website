import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingKoalaForm from "@/components/BookingKoalaForm";
import { PhoneIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Book a Cleaning Online | Spottly",
  description:
    "Book your house cleaning with Spottly online. Pick your service, choose a time, and we'll come to you anywhere in Los Angeles.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Book", path: "/book" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Book", path: "/book" }]} />

      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
            Book Your Cleaning
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-slate)]">
            Choose your service, pick a date and time, and you&apos;re set. Prefer to talk it through?{" "}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-1 font-semibold text-[var(--color-primary-blue)] hover:underline"
            >
              <PhoneIcon className="h-4 w-4" /> {SITE.phone}
            </a>
          </p>
        </div>

        <div className="mt-10">
          <BookingKoalaForm />
        </div>
      </section>
    </>
  );
}
