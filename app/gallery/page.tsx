import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Gallery | Spottly House Cleaning",
  description:
    "Browse before-and-after photos from Spottly house cleaning jobs across Los Angeles — kitchens, bathrooms, and move-out cleans done right.",
  path: "/gallery",
});

const GALLERY_SLOTS = [
  { room: "Kitchen", service: "Deep Cleaning" },
  { room: "Bathroom", service: "Standard Cleaning" },
  { room: "Living Room", service: "Recurring Cleaning" },
  { room: "Kitchen Cabinets", service: "Move-Out Cleaning" },
  { room: "Bedroom", service: "Move-In Cleaning" },
  { room: "Office", service: "Commercial Cleaning" },
  { room: "Bathroom Tile", service: "Deep Cleaning" },
  { room: "Living Space", service: "Airbnb Turnover" },
];

// NOTE FOR LAUNCH: swap these placeholder tiles for real, unedited Spottly job
// photos before going live. Do not present stock photography as Spottly's own work.
export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]} />

      <section className="mx-auto max-w-4xl px-6 py-10 text-center sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">Our Work</h1>
        <p className="mt-4 text-lg text-[var(--color-slate)]">
          A look at real Spottly cleans across Los Angeles. Photos below are placeholders — real
          before-and-after job photos are coming soon.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_SLOTS.map((slot, i) => (
            <ImagePlaceholder
              key={i}
              alt={`Before-and-after placeholder: ${slot.room} — ${slot.service} (real photo coming soon)`}
              label={`${slot.room} · ${slot.service}`}
              seed={i}
              className="aspect-square w-full rounded-xl"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <CTASection heading="Want your home to be our next before-and-after?" />
      </section>
    </>
  );
}
