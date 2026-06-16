import { Lightbulb, Camera, Thermometer, Tv, Cpu, ArrowRight } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import EyebrowPill from './EyebrowPill.jsx'

// DESIGN.md §8.7 — featured brand/category cards. Copy from EonTree-copy.md.
// MUST-REPLACE: brand names are [BRAND PLACEHOLDER] — list only brands EonTree
// is an authorised installer/reseller for. The one-line descriptions are
// composed (the copy file gives category + brand slot only); flag/replace.
const products = [
  {
    icon: Lightbulb,
    category: 'Smart lighting',
    brand: '[BRAND PLACEHOLDER]',
    line: 'Scenes, dimming, and schedules — set once, used every day.',
  },
  {
    icon: Camera,
    category: 'Security & cameras',
    brand: '[BRAND PLACEHOLDER]',
    line: 'Cameras, sensors, smart locks, and alerts to your phone.',
  },
  {
    icon: Thermometer,
    category: 'Climate & sensors',
    brand: '[BRAND PLACEHOLDER]',
    line: 'Heating, cooling, and sensors that follow your routine.',
  },
  {
    icon: Tv,
    category: 'Audio-visual',
    brand: '[BRAND PLACEHOLDER]',
    line: 'Multi-room sound and a tidy TV setup, run from one remote.',
  },
  {
    icon: Cpu,
    category: 'Hubs & control',
    brand: '[BRAND PLACEHOLDER]',
    line: 'The hub that ties everything together into one system.',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-neutralWarm">
      {/* white (Features above) spills down into neutralWarm */}
      <CurveDivider fill="#FFFFFF" />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="max-w-2xl">
          <EyebrowPill>The kit</EyebrowPill>
          <h2 className="mt-5 font-serif text-4xl text-primary sm:text-5xl">
            We install brands we’d put in our own homes.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ icon: Icon, category, brand, line }) => (
            <article
              key={category}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutralLine bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Product image placeholder */}
              <div className="flex aspect-[16/10] items-center justify-center bg-neutralWarm">
                {/* TODO[ASSET]: real product / brand photo */}
                <div className="flex flex-col items-center gap-2 text-textBody/40">
                  <Icon size={36} aria-hidden="true" />
                  <span className="text-xs uppercase tracking-wide">
                    Product image
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accentDeep">
                  {category}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-primary">{brand}</h3>
                <p className="mt-2 flex-1 text-textBody">{line}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-accentDeep transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Ask about this
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
