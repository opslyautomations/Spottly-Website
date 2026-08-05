import Link from "next/link";
import { LOCATIONS } from "@/lib/data/locations";
import { PinIcon } from "./icons";

export default function ServiceAreasGrid({ excludeSlug }: { excludeSlug?: string }) {
  const locations = LOCATIONS.filter((l) => l.slug !== excludeSlug);
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {locations.map((location) => (
        <Link
          key={location.slug}
          href={`/service-areas/${location.slug}`}
          className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <PinIcon className="h-5 w-5 shrink-0 text-[var(--color-primary-blue)]" />
          <span className="font-medium text-[var(--color-dark-blue)]">{location.navLabel}</span>
        </Link>
      ))}
    </div>
  );
}
