"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { SITE } from "@/lib/site";
import { PhoneIcon } from "./icons";

const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

function Dropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className="flex min-h-[48px] items-center gap-1 px-1 font-medium text-[var(--color-dark-blue)] hover:text-[var(--color-primary-text)]"
        aria-expanded={open}
      >
        {label}
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      {open && (
        <div className="absolute left-0 top-full z-40 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block min-h-[48px] rounded-lg px-3 py-3 text-sm text-[var(--color-ink)] hover:bg-[var(--color-pale-blue)] hover:text-[var(--color-primary-text)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const serviceItems = SERVICES.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` }));
  const areaItems = LOCATIONS.map((l) => ({ label: l.navLabel, href: `/service-areas/${l.slug}` }));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${SITE.name} home`}>
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={822}
            height={385}
            className="h-11 w-auto"
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/" className="min-h-[48px] flex items-center font-medium text-[var(--color-dark-blue)] hover:text-[var(--color-primary-text)]">
            Home
          </Link>
          <Dropdown label="Services" href="/services" items={serviceItems} />
          <Dropdown label="Service Areas" href="/service-areas" items={areaItems} />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-[48px] flex items-center font-medium text-[var(--color-dark-blue)] hover:text-[var(--color-primary-text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 font-semibold text-[var(--color-dark-blue)] hover:text-[var(--color-primary-text)]"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2 font-semibold text-[var(--color-dark-blue)] transition hover:bg-[var(--color-pale-blue)]"
          >
            Get a Quote
          </Link>
          <Link
            href="/book"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[var(--color-primary-blue)] px-5 py-2.5 font-semibold text-white shadow-md shadow-primary-blue/20 transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-blue-hover)]"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-lg text-[var(--color-dark-blue)] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" className="min-h-[48px] flex items-center font-medium text-[var(--color-dark-blue)]">
              Home
            </Link>
            <details className="group">
              <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between font-medium text-[var(--color-dark-blue)]">
                Services
              </summary>
              <div className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">
                <Link href="/services" className="min-h-[44px] flex items-center text-sm font-semibold text-[var(--color-primary-text)]">
                  All Services
                </Link>
                {serviceItems.map((item) => (
                  <Link key={item.href} href={item.href} className="min-h-[44px] flex items-center text-sm text-[var(--color-ink)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="group">
              <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between font-medium text-[var(--color-dark-blue)]">
                Service Areas
              </summary>
              <div className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">
                <Link href="/service-areas" className="min-h-[44px] flex items-center text-sm font-semibold text-[var(--color-primary-text)]">
                  All Service Areas
                </Link>
                {areaItems.map((item) => (
                  <Link key={item.href} href={item.href} className="min-h-[44px] flex items-center text-sm text-[var(--color-ink)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="min-h-[48px] flex items-center font-medium text-[var(--color-dark-blue)]">
                {link.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phoneRaw}`} className="min-h-[48px] flex items-center gap-2 font-semibold text-[var(--color-dark-blue)]">
              <PhoneIcon className="h-4 w-4" />
              {SITE.phone}
            </a>
            <Link
              href="/book"
              className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[var(--color-primary-blue)] px-5 py-3 text-center font-semibold text-white"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-[var(--color-dark-blue)]"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
