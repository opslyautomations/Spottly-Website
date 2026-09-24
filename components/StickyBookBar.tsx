"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { PhoneIcon } from "./icons";

const HIDDEN_ON = ["/book", "/contact"];

/** Mobile-only bottom bar keeping the booking CTA one tap away. */
export default function StickyBookBar() {
  const pathname = usePathname();
  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <>
      <div className="h-20 lg:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            aria-label={`Call ${SITE.phone}`}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-300 text-[var(--color-dark-blue)]"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <Link
            href="/book"
            className="flex h-12 flex-1 items-center justify-center rounded-lg bg-[var(--color-primary-blue)] font-semibold text-white shadow-lg shadow-blue-600/25 transition active:scale-[0.98]"
          >
            Book Your Cleaning
          </Link>
        </div>
      </div>
    </>
  );
}
