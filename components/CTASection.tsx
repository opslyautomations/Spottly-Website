import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTASection({
  heading,
  bodyHtml,
  ctaLabel = "Book Your Cleaning",
  ctaHref = "/book",
}: {
  heading: string;
  bodyHtml?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[var(--color-dark-blue)] px-6 py-12 text-center sm:px-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-primary-blue)] opacity-40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[var(--color-light-blue)] opacity-20 blur-3xl"
      />
      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
        {bodyHtml && (
          <div
            className="mx-auto mt-4 max-w-2xl text-base text-slate-200 [&_a]:text-white [&_a]:underline [&_p]:mb-2 [&_strong]:text-white last:[&_p]:mb-0"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={ctaHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-[var(--color-dark-blue)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--color-pale-blue)]"
          >
            {ctaLabel}
          </Link>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
