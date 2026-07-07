import CurveDivider from './CurveDivider.jsx'

// DESIGN.md §8.7 — brand logo wall, paired with the Products brand cards.
// NOTE: sample brand wordmarks (styled text, no trademarked logo art) for
// this practice/demo build — swap for real partner logos EonTree is
// authorised to show before any real launch.
const logos = [
  'Philips Hue',
  'Sonos',
  'Aqara',
  'tado°',
  'SmartThings',
  'Lutron',
  'Yale',
  'Ubiquiti',
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
          {logos.map((label) => (
            <li
              key={label}
              className="flex h-20 items-center justify-center rounded-xl border border-neutralLine bg-white font-serif text-lg tracking-wide text-textBody/60 transition-colors duration-200 hover:text-primary"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
