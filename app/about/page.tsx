import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "About Spottly | Detail-First House Cleaning in LA",
  description:
    "Meet Spottly, founded by Miguel Flores in Los Angeles on a simple belief: the details are the job. Learn the story behind our detail-first cleaning standard.",
  path: "/about",
});

const COMMITMENTS = [
  "Detail-first — the small stuff is never skipped",
  "Insured cleaning teams",
  "Local — born and built in Los Angeles",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <article className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <h1 className="text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">About Spottly</h1>

        <div className="prose-spottly mt-8">
          <p>
            Spottly was born out of a simple belief: the details are the job. Founder Miguel Flores was
            born and raised in Los Angeles, so when he set out to build something new in home cleaning, he
            wasn&apos;t serving a market he&apos;d read about — he was serving the neighborhoods he grew up
            in, from the Westside to Koreatown.
          </p>
          <p>
            Before cleaning, Miguel ran a different business, and it taught him a lesson that carries over
            completely: the work you notice is rarely the work that matters. Clients remember the
            baseboard you didn&apos;t skip, the corner you didn&apos;t cut, the fixture that actually
            shines instead of just looking wiped. That obsession with the small stuff is the whole reason
            Spottly exists — and it&apos;s the standard every clean is held to.
          </p>
          <p>
            Today, Spottly cleans homes, apartments, and offices across Los Angeles the way Miguel would
            want his own place cleaned: thoroughly, consistently, and with attention paid to the things
            most people never think to check. Whether it&apos;s a one-time deep clean, a move-out that has
            to pass a landlord&apos;s inspection, or a recurring visit that keeps your week clear, the goal
            is the same — a space that&apos;s genuinely done, not just surface-tidy.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-[var(--color-pale-blue)] p-6">
          <h2 className="text-lg font-bold text-[var(--color-dark-blue)]">Why homeowners choose Spottly</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {COMMITMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-medium text-[var(--color-dark-blue)]">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary-blue)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <CTASection heading="See what a detail-first clean looks like." />
      </section>
    </>
  );
}
