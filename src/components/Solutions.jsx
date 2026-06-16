import { Lightbulb, ShieldCheck, Thermometer, Speaker } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import EyebrowPill from './EyebrowPill.jsx'

// DESIGN.md §8.4 — the four smart-home pillars. Asymmetric: heading block
// left, 2x2 card grid right (not a centered row of equal cards). Copy from
// EonTree-copy.md. Gold-tinted squircle icons (varies from circle treatments).
const solutions = [
  {
    icon: Lightbulb,
    title: 'Lighting',
    blurb:
      'Lighting that follows your day — bright for work, warm for evenings, off when the room’s empty. Set scenes once and forget the switches.',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    blurb:
      'Cameras, sensors, smart locks, and alerts that reach your phone wherever you are. See who’s at the door, lock up from bed, know the moment something’s off.',
  },
  {
    icon: Thermometer,
    title: 'Climate',
    blurb:
      'Heating, cooling, and blinds that run themselves around your schedule and the weather — comfortable when you’re home, efficient when you’re not.',
  },
  {
    icon: Speaker,
    title: 'Audio-Visual',
    blurb:
      'Music in any room, a TV setup without the cable mess, and one remote (or your voice) that controls the lot.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-pageBg">
      {/* neutralWarm (TrustStrip above) spills down into white */}
      <CurveDivider fill="#F7F4EF" />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Heading block — left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <EyebrowPill>What we do</EyebrowPill>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-primary sm:text-5xl">
              Four systems, one home.
            </h2>
            <p className="mt-5 max-w-md text-lg text-textBody">
              One system, one app, one team — across every room.
            </p>
          </div>

          {/* 2x2 card grid — right */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {solutions.map(({ icon: Icon, title, blurb }) => (
              <article
                key={title}
                className="group rounded-2xl border border-neutralLine bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accentDeep">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl text-primary">{title}</h3>
                <p className="mt-2 text-textBody">{blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
