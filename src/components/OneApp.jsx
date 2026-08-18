import { Eyebrow, DevNote } from './ui.jsx'

const points = [
  { n: '01', text: 'One app for lights, locks, climate, and AV — not four.' },
  {
    n: '02',
    text: 'Phone, wall panel, or your voice — the same system behind all three.',
  },
  { n: '03', text: 'Scenes you set once: Morning, Evening, Movie, Away.' },
  { n: '04', text: 'Alerts that reach you wherever you are, not just at home.' },
]

const rows = [
  { label: 'Living room lights', state: '32%', gold: true },
  { label: 'Front door', state: 'LOCKED' },
  { label: 'Climate', state: '22°', gold: true },
  { label: 'Kitchen speakers', state: 'PLAYING' },
]

// The whole pitch is "one system, one app" — this is the section that shows it.
export default function OneApp() {
  return (
    <section id="oneapp" className="relative mt-28 overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[120px] -top-[160px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(224,179,132,0.18),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-[104px]">
        <div>
          <Eyebrow on="dark">The part that matters</Eyebrow>
          <h2 className="mt-5 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-neutralWarm sm:text-[42px] lg:text-[56px]">
            Four apps become one.
          </h2>
          <p className="mt-[26px] max-w-[40ch] text-pretty text-[17px] leading-[1.65] text-[rgba(247,244,239,0.82)] sm:text-lg">
            Most homes end up with a different app per brand. We integrate everything
            behind one control system, so a scene like{' '}
            <span className="font-semibold text-accent">Evening</span> dims the
            lights, locks the doors, and drops the aircon two degrees in a single tap.
          </p>
          <ul className="mt-[34px] flex flex-col border-t border-[rgba(247,244,239,0.16)]">
            {points.map((p) => (
              <li
                key={p.n}
                className="flex items-baseline gap-[18px] border-b border-[rgba(247,244,239,0.16)] py-4"
              >
                <span className="min-w-[26px] text-xs font-bold tracking-[0.1em] text-accent">
                  {p.n}
                </span>
                <span className="text-base leading-[1.55] text-[rgba(247,244,239,0.9)]">
                  {p.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 items-center gap-[22px] sm:grid-cols-2">
          <div className="aspect-[3/4] overflow-hidden rounded-[22px] bg-[rgba(247,244,239,0.06)]">
            <img
              src="/images/hub.jpg"
              alt="Wall-mounted control panel in a hallway"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Placeholder for the real control app — replace with a screenshot. */}
          <div className="flex h-[440px] flex-col rounded-[26px] border border-[rgba(247,244,239,0.18)] bg-primaryAlt p-[22px]">
            <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-accent">
              Home
            </div>
            <div className="mt-1.5 font-serif text-[26px] leading-[1.1] text-neutralWarm">
              Good evening
            </div>
            <div className="mt-auto flex flex-col gap-2.5">
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between gap-2.5 rounded-xl bg-[rgba(247,244,239,0.07)] px-3.5 py-3"
                >
                  <span className="text-[12.5px] font-semibold text-[rgba(247,244,239,0.92)]">
                    {r.label}
                  </span>
                  <span
                    className={`text-[11.5px] font-bold tracking-[0.04em] ${
                      r.gold ? 'text-accent' : 'text-[rgba(247,244,239,0.75)]'
                    }`}
                  >
                    {r.state}
                  </span>
                </div>
              ))}
              <DevNote on="dark" className="pt-1.5 text-center">
                app screen placeholder — drop real UI
              </DevNote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
