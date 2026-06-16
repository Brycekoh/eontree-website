import CurveDivider from './CurveDivider.jsx'
import Leaf from './Leaf.jsx'

// DESIGN.md §8.5 — four steps that flow along a growing branch rather than
// sitting as four equal boxes. The order is a real sequence, so the numerals
// carry meaning. TODO[COPY]: blurbs are placeholder.
const steps = [
  {
    n: '01',
    title: 'You enquire',
    blurb:
      'Tell us your address, your car, and where you’d like the charger. A quick call sorts out the rest.',
  },
  {
    n: '02',
    title: 'We assess the site',
    blurb:
      'An electrician checks your board, your load, and the cable run — so the quote we give you is the price you pay.',
  },
  {
    n: '03',
    title: 'We install',
    blurb:
      'Usually a single visit. We mount the unit, run the wiring properly, test it, and tidy up after ourselves.',
  },
  {
    n: '04',
    title: 'We stick around',
    blurb:
      'Your charger’s covered by warranty, and if anything plays up, you call us — not a hotline in another country.',
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accentDeep">
            What working with us looks like
          </p>
          <h2 className="mt-4 font-serif text-4xl text-primary sm:text-5xl">
            Four steps, no surprises.
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
