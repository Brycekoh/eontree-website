import { ArrowRight } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import Leaf from './Leaf.jsx'

// DESIGN.md §8.11 — final CTA band (navy). Heading per the brief; no app-
// download block (EonTree has no app). Its "Plan your space" button points
// to #contact (the consultation form just below).
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* neutralWarm (Testimonials above) spills down into navy */}
      <CurveDivider fill="#F7F4EF" />

      {/* faint gold glow for warmth on the dark band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-28 text-center sm:pb-28 sm:pt-36">
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <Leaf className="h-7 w-7 text-accent" />
          <h2 className="mt-6 font-serif text-4xl text-neutralWarm sm:text-5xl">
            Control your whole space from anywhere.
          </h2>
          <p className="mt-5 text-lg text-neutralWarm/75">
            One system, one app, one team — looking after every room.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-b from-accentBright to-accent px-8 py-3.5 text-base font-semibold text-primary shadow-[0_14px_38px_-10px_rgba(224,179,132,0.55)] ring-1 ring-inset ring-white/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-10px_rgba(224,179,132,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Plan your space
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
