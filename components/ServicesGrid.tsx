import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { SparkleIcon, ArrowRightIcon } from "./icons";

export default function ServicesGrid({ excludeSlug }: { excludeSlug?: string }) {
  const services = SERVICES.filter((s) => s.slug !== excludeSlug);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-pale-blue)] text-[var(--color-primary-blue)]">
            <SparkleIcon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-[var(--color-dark-blue)]">{service.navLabel}</h3>
          <p className="mt-2 flex-1 text-sm text-[var(--color-slate)]">
            {service.introHtml.replace(/<[^>]+>/g, "").slice(0, 110)}…
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-blue)]">
            Learn more <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
