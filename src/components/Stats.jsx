import { Map } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import Leaf from './Leaf.jsx'

// DESIGN.md §8.7 — navy feature band (the page's main dark moment).
// NOTE: sample figures for this practice/demo build — replace with REAL
// numbers before any real launch. Labels are from website-copy.md.
const stats = [
  { value: '40+', label: 'homes and sites fitted out' },
  { value: '12', label: 'brands we install and support' },
  { value: '2 yrs', label: 'workmanship warranty' },
  { value: 'MY-wide', label: 'where we work' },
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

          {/* Coverage panel — sample copy; swap for a real service-area map. */}
          <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/5 px-8 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
            />
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Map size={28} aria-hidden="true" />
            </span>
            <p className="mt-5 font-serif text-2xl text-neutralWarm sm:text-3xl">
              Nationwide, Malaysia.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutralWarm/70">
              Homes, offices, and holiday properties — from Penang to Johor
              Bahru, we come to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
