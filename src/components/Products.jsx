import { PlugZap } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'

// DESIGN.md §8.6 — charger cards. Copy from website-copy.md.
// MUST-REPLACE: product names are bracketed [PLACEHOLDER]; swap for the real
// lineup and add real product photos. Specs/lines are from the copy file.
const products = [
  {
    name: '[Charger Model A]',
    use: 'Home',
    current: 'AC',
    spec: 'Up to 7.4 kW',
    line: 'Best for overnight home charging.',
  },
  {
    name: '[Charger Model B]',
    use: 'Home / Workplace',
    current: 'AC',
    spec: 'Up to 22 kW (three-phase)',
    line: 'Faster top-ups where the supply allows it.',
  },
  {
    name: '[Charger Model C]',
    use: 'Commercial',
    current: 'DC',
    spec: '60–120 kW',
    line: 'Rapid charging for car parks and fleets.',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-pageBg">
      {/* neutralWarm (How It Works above) spills down into white */}
      <CurveDivider fill="#F7F4EF" />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accentDeep">
            The hardware
          </p>
          <h2 className="mt-4 font-serif text-4xl text-primary sm:text-5xl">
            Chargers we trust enough to install.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map(({ name, use, current, spec, line }) => (
            <article
              key={name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutralLine bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Product image placeholder + current/use tags */}
              <div className="relative flex aspect-[4/3] items-center justify-center bg-neutralWarm">
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span
                    className={
                      current === 'DC'
                        ? 'rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold tracking-wide text-primary'
                        : 'rounded-full bg-accent/25 px-2.5 py-1 text-xs font-bold tracking-wide text-accentDeep'
                    }
                  >
                    {current}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wide text-textBody/55">
                    {use}
                  </span>
                </div>
                {/* TODO[ASSET]: real product photo */}
                <div className="flex flex-col items-center gap-2 text-textBody/45">
                  <PlugZap size={40} aria-hidden="true" />
                  <span className="text-xs uppercase tracking-wide">
                    Product image
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl text-primary">{name}</h3>
                <p className="mt-1 text-lg font-semibold text-primary">{spec}</p>
                <p className="mt-2 text-textBody">{line}</p>

                <div className="mt-6 flex items-center justify-between border-t border-neutralLine pt-4">
                  <span className="text-sm font-medium text-textBody/70">
                    Price on request
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-accentBright hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    Get a quote
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
