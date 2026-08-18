import { Eyebrow, DevNote } from './ui.jsx'

// Simple Icons marks (CC0). Single-colour glyphs undersell a real
// partnership — swap for official lockups once authorisation is confirmed.
const brands = [
  { name: 'Philips Hue', src: '/logos/philipshue.svg' },
  { name: 'Sonos', src: '/logos/sonos.svg' },
  { name: 'Ring', src: '/logos/ring.svg' },
  { name: 'tado°', src: '/logos/tado.svg' },
  { name: 'SmartThings', src: '/logos/smartthings.svg' },
  { name: 'Yale', src: '/logos/yale.svg' },
  { name: 'Ubiquiti', src: '/logos/ubiquiti.svg' },
  { name: 'Bosch', src: '/logos/bosch.svg' },
]

export default function Brands() {
  return (
    <section id="brands" className="mx-auto max-w-content px-6 pt-24 sm:px-10 lg:pt-[104px]">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[72px]">
        <div>
          <Eyebrow>The kit</Eyebrow>
          <h2 className="mt-5 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[52px]">
            We install brands we’d put in our own homes.
          </h2>
          <p className="mt-6 max-w-[34ch] text-pretty text-[17px] leading-[1.65] text-textBody">
            We only fit kit we’re trained and authorised to install and support — so
            when something needs tuning, it’s us you call, not a helpline.
          </p>
          <DevNote className="mt-[22px] max-w-[30ch]">
            sample partners — show only brands EonTree is authorised for
          </DevNote>
        </div>

        {/* The 1px gap over a line-coloured background draws the hairlines. */}
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-neutralLine bg-neutralLine sm:grid-cols-4">
          {brands.map((b) => (
            <li
              key={b.name}
              className="flex h-[116px] flex-col items-center justify-center gap-2.5 bg-white p-3"
            >
              <img src={b.src} alt="" aria-hidden="true" className="h-[26px] w-[26px]" />
              <span className="text-center text-[12.5px] font-semibold tracking-[0.02em] text-primary">
                {b.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
