import { Star, User } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import EyebrowPill from './EyebrowPill.jsx'

// DESIGN.md §8.10 — review cards. Copy from EonTree-copy.md.
// NOTE: sample reviews with sample names for this practice/demo build —
// swap in genuine, permissioned quotes before any real launch.
const testimonials = [
  {
    name: 'Sarah Lim',
    role: 'Homeowner',
    quote:
      'They didn’t oversell us. We told them what we actually use, and they designed around that. The lighting scenes alone changed how the house feels in the evening.',
  },
  {
    name: 'Marcus Tan',
    role: 'Office manager',
    quote:
      'One tablet at reception now runs the lights, locks, and the meeting rooms. Whoever’s on the desk can manage it without training.',
  },
  {
    name: 'David Ng',
    role: 'Builder',
    quote:
      'We’ve brought EonTree into three projects. They plan the smart side early so we’re not chasing cabling after the walls are closed.',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-neutralWarm"
    >
      {/* white (Projects above) spills down into neutralWarm */}
      <CurveDivider fill="#FFFFFF" />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="max-w-2xl">
          <EyebrowPill>What clients say</EyebrowPill>
          <h2 className="mt-5 font-serif text-4xl text-primary sm:text-5xl">
            In their words.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(({ name, role, quote }, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-neutralLine bg-white p-6 shadow-sm"
            >
              {/* Star row */}
              <div
                className="flex gap-0.5 text-accent"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} className="fill-accent" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-textBody">
                “{quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-neutralLine pt-4">
                {/* Avatar placeholder */}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accentDeep">
                  <User size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-primary">
                    {name}
                  </span>
                  <span className="block text-sm text-textBody/70">{role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
