import CurveDivider from './CurveDivider.jsx'

// DESIGN.md §8.7 — brand logo wall, paired with the Products brand cards.
// NOTE: sample partner brands for this practice/demo build. Marks are from
// Simple Icons (CC0 icon set) in /public/logos — show only brands EonTree
// is actually authorised to install/resell before any real launch.
const logos = [
  { name: 'Philips Hue', src: '/logos/philipshue.svg' },
  { name: 'Sonos', src: '/logos/sonos.svg' },
  { name: 'Ring', src: '/logos/ring.svg' },
  { name: 'tado°', src: '/logos/tado.svg' },
  { name: 'SmartThings', src: '/logos/smartthings.svg' },
  { name: 'Yale', src: '/logos/yale.svg' },
  { name: 'Ubiquiti', src: '/logos/ubiquiti.svg' },
  { name: 'Bosch', src: '/logos/bosch.svg' },
]

export default function PartnerWall() {
  return (
    <section className="relative overflow-hidden bg-pageBg">
      {/* neutralWarm (Products above) spills down into white */}
      <CurveDivider fill="#F7F4EF" />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-primary sm:text-4xl">
            The brands behind the build.
          </h2>
          <p className="mt-4 text-lg text-textBody">
            We only fit kit we’re trained and authorised to install and support.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {logos.map(({ name, src }) => (
            <li
              key={name}
              className="flex h-20 items-center justify-center gap-3 rounded-xl border border-neutralLine bg-white px-4 opacity-60 transition-opacity duration-200 hover:opacity-100"
            >
              <img src={src} alt={`${name} logo`} className="h-7 w-7 shrink-0" />
              <span className="font-serif text-lg tracking-wide text-textBody">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
