import CurveDivider from './CurveDivider.jsx'
import Leaf from './Leaf.jsx'
import EyebrowPill from './EyebrowPill.jsx'

// DESIGN.md §8.5 — four steps that flow along a growing branch rather than
// sitting as four equal boxes. The order is a real sequence, so the numerals
// carry meaning. Copy from EonTree-copy.md.
const steps = [
  {
    n: '01',
    title: 'We sit down with you',
    blurb:
      'Tell us what you want the space to do. We walk the property, look at your existing wiring and network, and figure out what’s realistic.',
  },
  {
    n: '02',
    title: 'We design the system',
    blurb:
      'You get a clear plan — what goes where, which brands, what it does, and what it costs. No surprises on install day.',
  },
  {
    n: '03',
    title: 'We install and integrate',
    blurb:
      'Our team fits everything and, the important part, makes it all talk to each other through one app. Tested before we leave.',
  },
  {
    n: '04',
    title: 'We show you how, and stick around',
    blurb:
      'We walk you through it until it’s second nature, and we’re a call away if anything needs tuning or expanding later.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-neutralWarm"
    >
      {/* white (Solutions above) spills down into neutralWarm */}
      <CurveDivider fill="#FFFFFF" />

      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div className="max-w-2xl">
          <EyebrowPill>What working with us looks like</EyebrowPill>
          <h2 className="mt-5 font-serif text-4xl text-primary sm:text-5xl">
            From idea to fully running, in four steps.
          </h2>
        </div>

        {/* The signature: a growing branch the steps bud from. */}
        <ol className="relative mx-auto mt-16 max-w-4xl sm:mt-20">
          {/* Stem — gradient from tender (top) to rooted (bottom). */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[23px] top-2 w-[3px] rounded-full bg-gradient-to-b from-accent/30 via-accent/70 to-accentDeep lg:left-1/2 lg:-translate-x-1/2"
          />

          {steps.map(({ n, title, blurb }, i) => {
            const leftSide = i % 2 === 0
            return (
              <li
                key={n}
                className="relative mb-14 pl-16 last:mb-0 lg:mb-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0"
              >
                {/* Leaf bud sitting on the stem */}
                <span
                  aria-hidden="true"
                  className="absolute left-[23px] top-1 -translate-x-1/2 lg:left-1/2"
                >
                  <Leaf className="h-7 w-7 text-accent drop-shadow-sm" />
                </span>

                {/* Content alternates sides on desktop, like leaves on a branch */}
                <div
                  className={
                    leftSide
                      ? 'lg:col-start-1 lg:pr-16 lg:text-right'
                      : 'lg:col-start-2 lg:pl-16'
                  }
                >
                  <span className="font-serif text-4xl leading-none text-accentDeep sm:text-5xl">
                    {n}
                  </span>
                  <h3 className="mt-3 text-2xl text-primary">
                    <span className="sr-only">{`Step ${n}: `}</span>
                    {title}
                  </h3>
                  <p
                    className={`mt-2 max-w-sm text-textBody ${
                      leftSide ? 'lg:ml-auto' : ''
                    }`}
                  >
                    {blurb}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
