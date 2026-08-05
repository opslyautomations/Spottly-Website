import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary-blue)]">404</p>
      <h1 className="mt-3 text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-4 text-[var(--color-slate)]">
        The page you&apos;re looking for may have moved. Here are a few places to start instead.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[var(--color-primary-blue)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-primary-blue-hover)]"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-300 px-6 py-3 font-semibold text-[var(--color-dark-blue)] hover:bg-[var(--color-pale-blue)]"
        >
          Get a Free Quote
        </Link>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-[var(--color-primary-blue)] hover:bg-[var(--color-pale-blue)]"
          >
            {s.navLabel}
          </Link>
        ))}
      </div>
    </section>
  );
}
