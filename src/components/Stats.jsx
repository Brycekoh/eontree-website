import { Map } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import Leaf from './Leaf.jsx'

// DESIGN.md §8.7 — navy feature band (the page's main dark moment).
// MUST-REPLACE: every figure here is a bracketed [PLACEHOLDER]. Fill with REAL
// numbers — do not invent install counts. Labels are from website-copy.md.
const stats = [
  { value: '[X]+', label: 'homes and sites fitted out' },
  { value: '[X]', label: 'brands we install and support' },
  { value: '[X] yrs', label: 'workmanship warranty' },
  { value: '[Region]', label: 'where we work' },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* white (Products above) spills down into navy */}
      <CurveDivider fill="#FFFFFF" />

      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Numbers */}
          <div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                By the numbers
              </span>
            </div>
            <h2 className="mt-4 font-serif text-4xl text-neutralWarm sm:text-5xl">
              The numbers, honestly.
            </h2>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dd className="font-serif text-4xl leading-none text-accent sm:text-5xl">
                    {value}
                  </dd>
                  <dt className="mt-2 text-sm text-neutralWarm/75">{label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Coverage map placeholder */}
          {/* TODO[ASSET]: replace with a real map of EonTree's service area. */}
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
            />
            <div className="flex flex-col items-center gap-3 text-neutralWarm/55">
              <Map size={48} aria-hidden="true" />
              <span className="text-sm uppercase tracking-wide">
                Coverage map placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
