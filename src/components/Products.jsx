import { ArrowRight } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import EyebrowPill from './EyebrowPill.jsx'

// DESIGN.md §8.7 — featured brand/category cards. Copy from EonTree-copy.md.
// NOTE: sample brand names for this practice/demo build — swap for the
// brands EonTree is actually authorised to install/resell before any real
// launch. The one-line descriptions are composed.
// Images: free Unsplash stock (Unsplash License, commercial use OK) in
// /public/images — generic category scenes, no competitor brands shown.
const products = [
  {
    category: 'Smart lighting',
    brand: 'Philips Hue',
    line: 'Scenes, dimming, and schedules — set once, used every day.',
    image: '/images/lighting.jpg',
    imageAlt: 'Warm filament pendant bulbs glowing in a brick-walled room',
  },
  {
    category: 'Security & cameras',
    brand: 'Ring',
    line: 'Cameras, sensors, smart locks, and alerts to your phone.',
    image: '/images/security.jpg',
    imageAlt: 'White wireless security camera mounted on an exterior wall',
  },
  {
    category: 'Climate & sensors',
    brand: 'tado°',
    line: 'Heating, cooling, and sensors that follow your routine.',
    image: '/images/climate.jpg',
    imageAlt: 'Modern black smart thermostat mounted on a wall',
  },
  {
    category: 'Audio-visual',
    brand: 'Sonos',
    line: 'Multi-room sound and a tidy TV setup, run from one remote.',
    image: '/images/av.jpg',
    imageAlt: 'Minimal living room with wall-mounted TV and floor-standing speaker',
  },
  {
    category: 'Hubs & control',
    brand: 'Samsung SmartThings',
    line: 'The hub that ties everything together into one system.',
    image: '/images/hub.jpg',
    imageAlt: 'Finger adjusting a smart control panel set into a wooden wall',
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
          {products.map(({ category, brand, line, image, imageAlt }) => (
            <article
              key={category}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutralLine bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutralWarm">
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
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
