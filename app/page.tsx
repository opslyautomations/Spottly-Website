import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { LOCATIONS } from "@/lib/data/locations";
import { REVIEW_PLACEHOLDERS } from "@/lib/data/reviews";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import ReviewPlaceholder from "@/components/ReviewPlaceholder";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, CheckIcon, PhoneIcon, PinIcon, SparkleIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: `${SITE.name} | House Cleaning in Los Angeles`,
  description:
    "Book detail-obsessed house cleaning across Los Angeles online in minutes — standard, deep, move-in/move-out, recurring, Airbnb, and commercial cleaning from Spottly.",
  path: "/",
});

const TRUST_POINTS = [
  "Mobile service across the LA Westside & central neighborhoods",
  "Insured cleaning teams",
  "Detail-obsessed on every visit — not just the surface",
  "Founded and based in Los Angeles",
];

const HERO_POINTS = ["Insured teams", "We come to you", "Book online, no phone tag"];

const STEPS = [
  {
    title: "Choose your clean",
    body: "Standard, deep, move-in/move-out, recurring, Airbnb, or commercial — pick what your space needs.",
  },
  {
    title: "Pick a date & time",
    body: "Select a slot that works for you and book it online. No back-and-forth emails.",
  },
  {
    title: "Come home to spotless",
    body: "Our team shows up with everything needed and handles the details other cleaners skip.",
  },
];

const WHY_POINTS = [
  "Baseboards, corners, and edges — not just the surfaces you see",
  "The same standard on every visit, whether it's your first or fiftieth",
  "A local, founder-led team that takes the small stuff personally",
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const PRIMARY_BTN =
  "group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-blue)] px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-blue-hover)] hover:shadow-xl hover:shadow-blue-600/30";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[var(--color-light-blue)] opacity-30 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-16">
          <div>
            <p
              className="animate-rise inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[var(--color-primary-blue)] shadow-sm ring-1 ring-blue-100"
              style={delay(0)}
            >
              <SparkleIcon className="h-4 w-4" /> {SITE.tagline}
            </p>
            <h1
              className="animate-rise mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-dark-blue)] sm:text-5xl lg:text-6xl"
              style={delay(80)}
            >
              Los Angeles house cleaning,{" "}
              <span className="text-[var(--color-primary-blue)]">booked in minutes.</span>
            </h1>
            <p
              className="animate-rise mt-6 max-w-xl text-lg text-[var(--color-slate)]"
              style={delay(160)}
            >
              Spottly cleans the details other companies skip — from Santa Monica to Koreatown. Pick
              your service, choose a time, and come home to a genuinely clean space.
            </p>

            <div
              className="animate-rise mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={delay(240)}
            >
              <Link href="/book" className={`${PRIMARY_BTN} animate-pulse-ring`}>
                Book Your Cleaning
                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 font-semibold text-[var(--color-dark-blue)] transition hover:bg-white"
              >
                <PhoneIcon className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>

            <ul
              className="animate-rise mt-8 flex flex-wrap gap-x-6 gap-y-2"
              style={delay(320)}
            >
              {HERO_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-[var(--color-dark-blue)]">
                  <CheckIcon className="h-4 w-4 text-[var(--color-primary-blue)]" /> {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/20">
              <Image
                src={IMAGES.heroLivingRoom.src}
                alt={IMAGES.heroLivingRoom.alt}
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="animate-slow-zoom object-cover"
              />
            </div>

            <div className="animate-float absolute -bottom-8 -left-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl ring-1 ring-black/5 sm:-left-8">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                <Image src={IMAGES.heroCleaner.src} alt={IMAGES.heroCleaner.alt} fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-dark-blue)]">Detail-obsessed</p>
                <p className="text-xs text-[var(--color-slate)]">on every single visit</p>
              </div>
            </div>

            <div className="animate-float-delayed absolute -right-2 -top-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 sm:-right-6">
              <PinIcon className="h-5 w-5 text-[var(--color-primary-blue)]" />
              <p className="text-sm font-semibold text-[var(--color-dark-blue)]">
                {LOCATIONS.length} LA neighborhoods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-slate-100 bg-white/70 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point, i) => (
            <Reveal key={point} delay={i * 80}>
              <div className="flex items-start gap-2 text-sm font-medium text-[var(--color-dark-blue)]">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary-blue)]" />
                {point}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-blue)]">
            How it works
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
            A clean home in three simple steps
          </h2>
        </Reveal>
        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 120} className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-blue)] text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--color-dark-blue)]">{step.title}</h3>
                  <p className="mt-2 text-[var(--color-slate)]">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-10 text-center">
          <Link href="/book" className={PRIMARY_BTN}>
            Book Your Cleaning
            <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
            Find the right clean for your space
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--color-slate)]">
            Whatever your home or business needs, there&apos;s a Spottly service built for it.
          </p>
        </Reveal>
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </section>

      {/* Why Spottly */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={IMAGES.whyKitchen.src}
                alt={IMAGES.whyKitchen.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-blue)]">
              Why Spottly
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
              The details are the job.
            </h2>
            <p className="mt-5 text-lg text-[var(--color-slate)]">
              Founder {SITE.founder} was born and raised in Los Angeles, and that obsession with the
              small stuff — the baseboard you didn&apos;t skip, the corner you didn&apos;t cut — is the
              standard every Spottly clean is held to.
            </p>
            <ul className="mt-6 space-y-3">
              {WHY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[var(--color-ink)]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-pale-blue)]">
                    <CheckIcon className="h-4 w-4 text-[var(--color-primary-blue)]" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/book" className={PRIMARY_BTN}>
                Book Your Cleaning
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 font-semibold text-[var(--color-primary-blue)] hover:text-[var(--color-primary-blue-hover)]"
              >
                Read our story <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
            Where we clean
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--color-slate)]">
            Serving the LA Westside and central neighborhoods — find your area below.
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <ServiceAreasGrid />
        </Reveal>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-[var(--color-dark-blue)] sm:text-4xl">
            What clients are saying
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {REVIEW_PLACEHOLDERS.slice(0, 3).map((review, i) => (
            <Reveal key={review.city} delay={i * 100}>
              <ReviewPlaceholder text={review.text} cityLabel={review.city} />
            </Reveal>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/reviews" className="font-semibold text-[var(--color-primary-blue)] hover:text-[var(--color-primary-blue-hover)]">
            Read more reviews →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-4">
        <Reveal>
          <CTASection
            heading="Ready for a genuinely clean home?"
            bodyHtml="<p>Pick your service and a time that works — booking takes just a few minutes.</p>"
          />
        </Reveal>
      </section>
    </>
  );
}
