import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { SITE, COMPANY_LINKS, LEGAL_LINKS } from "@/lib/site";
import { PhoneIcon, MailIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[var(--color-dark-blue)] text-slate-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-xl font-bold text-white">{SITE.name}</div>
          <p className="mt-3 text-sm text-slate-300">{SITE.tagline}</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 hover:text-white">
              <PhoneIcon className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white">
              <MailIcon className="h-4 w-4" /> {SITE.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Service Areas</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link href={`/service-areas/${l.slug}`} className="hover:text-white">
                  {l.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
