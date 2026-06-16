import { ArrowRight } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import Leaf from './Leaf.jsx'

// DESIGN.md §8.4 — three solutions, reimagined as an editorial list rather
// than three equal cards. Links point to #contact until solution pages exist.
const solutions = [
  {
    title: 'Home',
    link: 'Home installs',
    blurb:
      'A charger by your driveway or in the garage, sized to your panel and your car. We handle the wiring, the load check, and the paperwork — you just plug in when you get home.',
  },
  {
    title: 'Workplace',
    link: 'Workplace charging',
    blurb:
      'Give staff and visitors somewhere to charge. We scope the electrical capacity, set up access and billing if you want it, and keep the units serviced so they’re not out of order when someone needs them.',
  },
  {
    title: 'Commercial',
    link: 'Commercial projects',
    blurb:
      'Car parks, fleets, and sites that need more than a couple of points. We plan around your power supply, stage the rollout, and monitor the chargers so faults get caught before your customers do.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-pageBg">
      {/* neutralWarm (TrustStrip above) spills down into white */}
      <CurveDivider fill="#F7F4EF" />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accentDeep">
          Who we install for
        </p>

        {/* The oversized serif moment — the typographic anchor of the page. */}
        <h2 className="mt-5 max-w-4xl text-balance font-serif text-5xl leading-[0.95] text-primary sm:text-7xl lg:text-[5.5rem]">
          One team, three kinds of jobs.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Editorial list — leaf markers, staggered indents, hairline rules */}
          <ol className="lg:col-span-7">
            {solutions.map((s, i) => (
              <li
                key={s.title}
                className={[
                  'group border-t border-neutralLine py-8 first:border-t-0 first:pt-0',
                  i === 1 ? 'lg:ml-12' : '',
                  i === 2 ? 'lg:ml-24' : '',
                ].join(' ')}
              >
                <div className="flex items-start gap-4">
                  <Leaf className="mt-1.5 h-6 w-6 shrink-0 text-accent transition-transform duration-200 group-hover:-rotate-12" />
                  <div>
                    <h3 className="text-2xl text-primary">{s.title}</h3>
                    <p className="mt-2 max-w-md text-textBody">{s.blurb}</p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-accentDeep transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {s.link}
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Image bleeding off the right edge, organic leaf-cut corner */}
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
            />
            {/* TODO[ASSET]: real lifestyle/charger photo (portrait) */}
            <div className="relative ml-auto flex aspect-[3/4] w-full max-w-sm items-center justify-center rounded-[2.5rem] rounded-tr-[7rem] border border-neutralLine bg-neutralWarm lg:mr-[-6rem]">
              <div className="flex flex-col items-center gap-3 text-textBody/60">
                <Leaf className="h-12 w-12 text-accent" />
                <span className="text-sm uppercase tracking-wide">
                  Lifestyle image placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
