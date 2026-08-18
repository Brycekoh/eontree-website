import { useNavigate } from 'react-router-dom'
import { Eyebrow, DevNote, GoldLink, OutlineLink, PageHeader } from '../components/ui.jsx'

// Claiming the whole country with no coverage content wins nothing. This page
// is specific about where response times actually hold.
const zones = [
  {
    kicker: 'Core coverage',
    title: 'Klang Valley',
    line: 'Where we’re based, and where we can be on site quickly. Same response times, no travel charge.',
    places: [
      'Petaling Jaya',
      'Kuala Lumpur',
      'Damansara',
      'Subang Jaya',
      'Shah Alam',
      'Puchong',
      'Cyberjaya',
      'Klang',
    ],
    facts: [
      { label: 'Response', value: 'Standard times apply' },
      { label: 'Travel charge', value: 'None' },
    ],
    dark: true,
  },
  {
    kicker: 'By arrangement',
    title: 'Wider Malaysia',
    line: 'We travel for whole-property projects — usually new builds, holiday homes, and commercial sites.',
    places: ['Penang', 'Johor Bahru', 'Melaka', 'Ipoh', 'Seremban', 'Kuantan'],
    facts: [
      { label: 'Minimum project size', value: '[X]' },
      { label: 'Travel', value: 'Quoted up front' },
    ],
    dark: false,
  },
]

const notes = [
  {
    n: '01',
    title: 'Response times, not promises',
    line: 'Inside the Klang Valley we can be at a property the same day when something is genuinely down. Further out, the honest answer is next-day — so we lean harder on remote diagnosis and design the system to fail gracefully.',
  },
  {
    n: '02',
    title: 'Travel is quoted, never hidden',
    line: 'If a job needs us outside our core area, travel is a line on the quote you can see before you agree to anything. It never appears afterwards as an extra.',
  },
  {
    n: '03',
    title: 'We’d rather turn work down',
    line: 'If a property is too far for us to support properly, taking the install would be doing you a disservice. We’ll tell you at the consultation, not after.',
  },
]

export default function WhereWeWork() {
  const navigate = useNavigate()
  const goContact = (e) => {
    e.preventDefault()
    navigate('/', { state: { scrollTo: 'contact' } })
  }

  return (
    <main>
      <PageHeader
        eyebrow="Service areas"
        title={
          <>
            Where we work, <em className="font-light italic">and how far we go.</em>
          </>
        }
        lead="Support is only real if we can get to you. So rather than claiming the whole country, here’s where we’re genuinely quick — and where we’ll still come for the right project."
      />

      {/* Zones */}
      <section className="mx-auto max-w-content px-6 pt-16 sm:px-10">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {zones.map((z) => (
            <article
              key={z.title}
              className={`flex flex-col rounded-3xl p-8 sm:p-10 ${
                z.dark ? 'bg-primary' : 'border border-neutralLine bg-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className={`block h-[9px] w-[9px] rounded-full ${z.dark ? 'bg-accent' : 'bg-accentDeep'}`}
                />
                <span
                  className={`text-[11.5px] font-bold uppercase tracking-[0.16em] ${
                    z.dark ? 'text-accent' : 'text-accentDeep'
                  }`}
                >
                  {z.kicker}
                </span>
              </div>

              <h2
                className={`mt-4 font-serif text-[30px] font-normal leading-tight sm:text-[34px] ${
                  z.dark ? 'text-neutralWarm' : 'text-primary'
                }`}
              >
                {z.title}
              </h2>
              <p
                className={`mt-3 max-w-[40ch] text-pretty text-[16px] leading-[1.6] ${
                  z.dark ? 'text-[rgba(247,244,239,0.78)]' : 'text-textBody'
                }`}
              >
                {z.line}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {z.places.map((p) => (
                  <li
                    key={p}
                    className={`rounded-full border px-[15px] py-2 text-[13.5px] font-semibold ${
                      z.dark
                        ? 'border-[rgba(247,244,239,0.18)] bg-[rgba(247,244,239,0.08)] text-neutralWarm'
                        : 'border-neutralLine bg-neutralWarm text-primary'
                    }`}
                  >
                    {p}
                  </li>
                ))}
              </ul>

              <dl
                className={`mb-0 mt-auto flex flex-col gap-3 border-t pt-6 ${
                  z.dark ? 'mt-10 border-[rgba(247,244,239,0.16)]' : 'mt-10 border-neutralLine'
                }`}
              >
                {z.facts.map((f) => (
                  <div key={f.label} className="flex justify-between gap-4">
                    <dt
                      className={`text-[14.5px] ${z.dark ? 'text-[rgba(247,244,239,0.7)]' : 'text-textBody'}`}
                    >
                      {f.label}
                    </dt>
                    <dd
                      className={`text-right text-[14.5px] font-semibold ${
                        f.value === '[X]'
                          ? 'text-muted'
                          : z.dark
                            ? 'text-neutralWarm'
                            : 'text-primary'
                      }`}
                    >
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <DevNote className="mt-6 max-w-[70ch]">
          confirm the real coverage list and travel terms before publishing — and a
          proper service-area map would strengthen this page
        </DevNote>
      </section>

      {/* What distance changes */}
      <section className="mt-28 bg-neutralWarm">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <Eyebrow>Being straight about it</Eyebrow>
              <h2 className="mt-5 max-w-[18ch] font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[52px]">
                What distance actually changes.
              </h2>
            </div>
            <div className="border-t border-neutralLine">
              {notes.map((n) => (
                <article
                  key={n.n}
                  className="grid grid-cols-1 gap-x-4 border-b border-neutralLine py-[30px] sm:grid-cols-[56px_1fr]"
                >
                  <span className="font-serif text-[17px] text-accentDeep">{n.n}</span>
                  <div>
                    <h3 className="font-serif text-[24px] font-normal leading-[1.2] text-primary sm:text-[28px]">
                      {n.title}
                    </h3>
                    <p className="mt-3 max-w-[56ch] text-pretty text-[16.5px] leading-[1.65] text-textBody">
                      {n.line}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 bg-primary">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="max-w-[22ch] font-serif text-[32px] font-light leading-[1.05] tracking-[-0.02em] text-neutralWarm sm:text-[44px] lg:text-[56px]">
                Not sure if you’re in range?
              </h2>
              <p className="mt-6 max-w-[46ch] text-pretty text-[17px] leading-[1.65] text-[rgba(247,244,239,0.82)]">
                Send us the postcode. If we can’t look after you properly from where we
                are, we’ll say so — and point you at someone who can.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              <GoldLink href="/#contact" onClick={goContact}>
                Check your address
              </GoldLink>
              <OutlineLink to="/support" on="dark">
                See response times
              </OutlineLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
