import { LayoutGrid, Mic, Sun, Bell, Gauge, Thermometer } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import EyebrowPill from './EyebrowPill.jsx'

// DESIGN.md §8.6 — Orris "Intelligence in Every Detail" 2x3 capability grid,
// kept warm/serif/gold. NOTE: EonTree-copy.md has no copy for this section —
// the eyebrow, heading, and tile lines are composed (tile titles are the
// concrete capabilities). Flag/replace with final copy.
const features = [
  {
    icon: LayoutGrid,
    title: 'Unified control',
    line: 'One app for lights, locks, climate, and AV — not four.',
  },
  {
    icon: Mic,
    title: 'App + voice control',
    line: 'Run a room from your phone, a wall panel, or just by asking.',
  },
  {
    icon: Sun,
    title: 'Lighting scenes',
    line: 'Set “morning”, “movie”, or “away” once, trigger with a tap.',
  },
  {
    icon: Bell,
    title: 'Security alerts',
    line: 'A nudge to your phone when a door opens or a camera sees motion.',
  },
  {
    icon: Gauge,
    title: 'Energy efficiency',
    line: 'Heating and lights that ease off when a room’s empty.',
  },
  {
    icon: Thermometer,
    title: 'Climate automation',
    line: 'Temperature that follows your schedule and the weather.',
  },
]

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-pageBg">
      {/* neutralWarm (How It Works above) spills down into white */}
      <CurveDivider fill="#F7F4EF" />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="max-w-2xl">
          <EyebrowPill>How it all connects</EyebrowPill>
          <h2 className="mt-5 font-serif text-4xl text-primary sm:text-5xl">
            One system, every detail handled.
          </h2>
        </div>

        {/* Bordered grid (gap-px reveals the line color) — distinct from the
            elevated, squircle-icon cards used in Solutions. */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-neutralLine bg-neutralLine sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, line }) => (
            <div key={title} className="bg-pageBg p-6 sm:p-8">
              <Icon
                className="h-8 w-8 text-accentDeep"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-4 font-serif text-xl text-primary">{title}</h3>
              <p className="mt-2 text-textBody">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
