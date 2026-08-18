import { Eyebrow } from './ui.jsx'

// One photo-led section covering all four systems. This replaces the old
// Solutions + Features + Products trio, which said the same thing three times.
// Blurbs are verbatim from EonTree-copy.md.
const systems = [
  {
    num: '01',
    title: 'Lighting',
    image: '/images/lighting.jpg',
    alt: 'Warm layered lighting in a living room at dusk',
    blurb:
      "Lighting that follows your day — bright for work, warm for evenings, off when the room's empty. Set scenes once and forget the switches.",
    caps: ['Scenes', 'Dimming', 'Occupancy sensing', 'Away mode'],
  },
  {
    num: '02',
    title: 'Security',
    image: '/images/security.jpg',
    alt: 'Smart lock and doorbell camera at a front entrance',
    blurb:
      "Cameras, sensors, smart locks, and alerts that reach your phone wherever you are. See who's at the door, lock up from bed, know the moment something's off.",
    caps: ['Cameras', 'Smart locks', 'Motion alerts', 'Door sensors'],
  },
  {
    num: '03',
    title: 'Climate',
    image: '/images/climate.jpg',
    alt: 'Wall thermostat beside a window with blinds half drawn',
    blurb:
      "Heating, cooling, and blinds that run themselves around your schedule and the weather — comfortable when you're home, efficient when you're not.",
    caps: ['Zoned control', 'Blinds', 'Schedules', 'Energy saving'],
  },
  {
    num: '04',
    title: 'Audio-Visual',
    image: '/images/av.jpg',
    alt: 'Living room media wall with in-ceiling speakers',
    blurb:
      'Music in any room, a TV setup without the cable mess, and one remote (or your voice) that controls the lot.',
    caps: ['Multi-room audio', 'Cable management', 'Voice control', 'One remote'],
  },
]

export default function Systems() {
  return (
    <section id="systems" className="mx-auto max-w-content px-6 pt-24 sm:px-10">
      <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-12">
        <div>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-5 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[56px]">
            Four systems, one home.
          </h2>
        </div>
        <p className="max-w-[36ch] text-pretty text-[17px] leading-[1.65] text-textBody">
          Each one works on its own. The point is that they work together — one app,
          one set of scenes, one team to call.
        </p>
      </div>

      <div className="flex flex-col gap-[26px]">
        {systems.map((s, i) => {
          const imageFirst = i % 2 === 0
          return (
            <article
              key={s.num}
              className={`grid min-h-[360px] grid-cols-1 overflow-hidden rounded-3xl border border-neutralLine bg-white lg:grid-cols-2 ${
                imageFirst
                  ? 'lg:grid-cols-[1.05fr_1fr]'
                  : 'lg:grid-cols-[1fr_1.05fr]'
              }`}
            >
              <div
                className={`relative min-h-[260px] bg-neutralWarm lg:min-h-[360px] ${
                  imageFirst ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div
                className={`flex flex-col justify-center p-8 sm:p-[52px] ${
                  imageFirst ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="flex items-baseline gap-3.5">
                  <span className="font-serif text-[15px] text-accentDeep">
                    {s.num}
                  </span>
                  <h3 className="font-serif text-[28px] font-normal leading-[1.05] tracking-[-0.01em] text-primary lg:text-[40px]">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-5 max-w-[46ch] text-pretty text-[17px] leading-[1.65] text-textBody">
                  {s.blurb}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {s.caps.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-neutralLine bg-neutralWarm px-3.5 py-[7px] text-[13px] font-semibold text-primary"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
