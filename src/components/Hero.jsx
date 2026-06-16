import { House } from 'lucide-react'
import EyebrowPill from './EyebrowPill.jsx'

// DESIGN.md §8.2 — oversized serif H1, sans subhead, two CTAs, a warm
// smart-home interior scene in a soft rounded container bleeding off the
// right with a faint gold glow. White, airy.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pageBg">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        {/* Left — copy */}
        <div className="relative z-10">
          <EyebrowPill>Smart home, properly installed</EyebrowPill>

          {/* Oversized serif H1 */}
          <h1 className="mt-6 text-5xl leading-[1.05] text-primary sm:text-6xl">
            Your whole home, working as one.
          </h1>

          {/* Sans subhead */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-textBody">
            We design and install smart lighting, security, climate, and AV —
            then set it up so it actually works together. One system, one app,
            one team that looks after it.
          </p>

          {/* CTAs — primary gold pill + secondary navy outline */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accentBright hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Book a consultation
            </a>
            <a
              href="#solutions"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-primary px-7 py-3.5 text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-pageBg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              See what we install
            </a>
          </div>
        </div>

        {/* Right — smart-home scene in a soft rounded container, bleeding right */}
        <div className="relative">
          {/* Faint gold glow (DESIGN.md §7 — keep subtle) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />
          </div>

          {/*
            TODO[ASSET]: replace with a real, warm interior scene — a lit
            living room / wall panel / sleek thermostat. Avoid cold gadget
            stock. The negative right margin + section overflow-hidden makes
            it bleed off the right edge per DESIGN.md §8.2.
          */}
          <div className="relative z-10 ml-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-[2.5rem] border border-neutralLine bg-neutralWarm lg:mr-[-6rem]">
            <div className="flex flex-col items-center gap-3 text-textBody/60">
              <House size={56} className="text-accent" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Interior scene placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
