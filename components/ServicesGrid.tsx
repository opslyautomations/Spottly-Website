import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { SERVICE_IMAGES } from "@/lib/images";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons";

export default function ServicesGrid({ excludeSlug }: { excludeSlug?: string }) {
  const services = SERVICES.filter((s) => s.slug !== excludeSlug);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const image = SERVICE_IMAGES[service.slug];
        return (
          <Reveal key={service.slug} delay={(i % 3) * 100} className="h-full">
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-[var(--color-dark-blue)]">{service.navLabel}</h3>
                <p className="mt-2 flex-1 text-sm text-[var(--color-slate)]">
                  {service.introHtml.replace(/<[^>]+>/g, "").slice(0, 110)}…
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-text)]">
                  Learn more <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
