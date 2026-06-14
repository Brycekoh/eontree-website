import { PlugZap } from 'lucide-react'

// DESIGN.md §8.2 — oversized serif H1, sans subhead, two CTAs, charger
// image bleeding off the right with a faint gold glow. White, airy.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pageBg">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        {/* Left — copy */}
        <div className="relative z-10">
          {/* Gold eyebrow (DESIGN.md §3) — accentDeep for AA contrast on white */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDeep">
            {/* TODO[COPY]: eyebrow label */}
            EV Charging, Installed Right
          </p>

          {/* Oversized serif H1 */}
          <h1 className="mt-5 text-5xl leading-[1.05] text-primary sm:text-6xl">
            {/* TODO[COPY]: hero headline */}
            Fast, reliable EV charging for home and business.
          </h1>

          {/* Sans subhead */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-textBody">
            {/* TODO[COPY]: hero subhead */}
            EonTree designs, installs, and supports clean-tech charging
            infrastructure — certified, future-ready, and built to last.
          </p>

          {/* CTAs — primary gold pill + secondary navy outline */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accentBright hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Book an Installation
            </a>
            <a
              href="#products"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-primary px-7 py-3.5 text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-pageBg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore Chargers
            </a>
          </div>
        </div>

        {/* Right — image bleeding off the right edge, faint gold glow behind */}
        <div className="relative">
          {/* Faint gold radial glow (DESIGN.md §6 — keep subtle) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />
          </div>

          {/*
            TODO[ASSET]: replace this placeholder with a real clean-tech /
            EV charger photo (portrait orientation reads best here). The
            negative right margin + section overflow-hidden makes it bleed
            off the right edge per DESIGN.md §8.2.
          */}
          <div className="relative z-10 ml-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-3xl border border-neutralLine bg-neutralWarm md:mr-[-3rem] lg:mr-[-6rem]">
            <div className="flex flex-col items-center gap-3 text-textBody/70">
              <PlugZap size={56} className="text-accent" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Charger image placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
