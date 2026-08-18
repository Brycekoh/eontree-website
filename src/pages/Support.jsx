import { useNavigate } from 'react-router-dom'
import { Eyebrow, DevNote, GoldLink, OutlineLink, PageHeader } from '../components/ui.jsx'

// "We stay after the install" is the central differentiator and was never
// specified anywhere. Naming the commitments is what makes it credible.
const tiers = [
  {
    title: 'Something’s down',
    line: 'Security offline, no heating, locks not responding — anything that affects safety or makes the house unusable.',
    sla: '[X] hours',
  },
  {
    title: 'Something’s annoying',
    line: 'One light won’t join a scene, a camera keeps dropping, the app is slow. It works, but not properly.',
    sla: '[X] business days',
  },
  {
    title: 'You want a change',
    line: 'A new scene, a room added, a device swapped, someone new needing access.',
    sla: '[X] business days',
  },
]

const covered = [
  'Anything we installed that stops working as specified',
  'Faults caused by our workmanship, for [X] years',
  'Remote diagnosis and fixes we can do without a visit',
  'Firmware and app updates that need our involvement',
  'Re-teaching the system to a new member of the household',
]

const chargeable = [
  'New devices or new rooms added after handover',
  'Hardware failures outside the manufacturer’s warranty',
  'Damage from building work, water, or power surges',
  'Problems caused by someone else changing the setup',
  'Internet faults that sit with your provider, not the system',
]

const plans = [
  {
    title: 'Standard cover',
    cost: 'Included',
    per: 'with every install',
    items: [
      '[X]-year workmanship warranty',
      'Phone and remote support',
      'Response times as above',
      'Handover documentation kept on file',
    ],
    dark: false,
  },
  {
    title: 'Care plan',
    cost: 'RM [X]',
    per: 'per month',
    items: [
      'Priority response, ahead of the queue',
      'Proactive monitoring of the system',
      'Annual on-site health check',
      'Unlimited remote fixes and scene changes',
      'Discounted rates on expansions',
    ],
    dark: true,
  },
]

function List({ items, dark }) {
  return (
    <ul className={`mt-6 border-t ${dark ? 'border-[rgba(247,244,239,0.16)]' : 'border-neutralLine'}`}>
      {items.map((it) => (
        <li
          key={it}
          className={`border-b py-3 text-[15.5px] leading-[1.55] ${
            dark
              ? 'border-[rgba(247,244,239,0.16)] text-[rgba(247,244,239,0.88)]'
              : 'border-neutralLine text-textBody'
          }`}
        >
          {it}
        </li>
      ))}
    </ul>
  )
}

export default function Support() {
  const navigate = useNavigate()
  const goContact = (e) => {
    e.preventDefault()
    navigate('/', { state: { scrollTo: 'contact' } })
  }

  return (
    <main>
      <PageHeader
        eyebrow="After the install"
        title={
          <>
            The part most installers <em className="font-light italic">skip.</em>
          </>
        }
        lead="Plenty of companies will fit a system and disappear. The value of an integrated home is in year three, not week one — so here’s exactly what you get from us after we’ve packed up."
      />

      {/* Response tiers */}
      <section className="mt-16 bg-primary">
        <div className="mx-auto max-w-content px-6 py-[88px] sm:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
            <div>
              <Eyebrow on="dark">What we commit to</Eyebrow>
              <h2 className="mt-5 max-w-[22ch] font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-neutralWarm sm:text-[42px] lg:text-[52px]">
                Response times, in writing.
              </h2>
            </div>
            <p className="max-w-[32ch] text-pretty text-[16px] leading-[1.65] text-[rgba(247,244,239,0.82)]">
              Not “we’ll get to it”. Three tiers, so you know what to expect before you
              need it.
            </p>
          </div>

          <div className="border-t border-[rgba(247,244,239,0.16)]">
            {tiers.map((t) => (
              <div
                key={t.title}
                className="grid grid-cols-1 items-baseline gap-x-10 gap-y-3 border-b border-[rgba(247,244,239,0.16)] py-[30px] lg:grid-cols-[0.9fr_1.4fr_0.7fr]"
              >
                <h3 className="font-serif text-[26px] font-normal leading-tight text-neutralWarm sm:text-[29px]">
                  {t.title}
                </h3>
                <p className="max-w-[52ch] text-[16px] leading-[1.6] text-[rgba(247,244,239,0.78)]">
                  {t.line}
                </p>
                <span className="whitespace-nowrap font-serif text-[28px] font-light text-accent sm:text-[34px] lg:text-right">
                  {t.sla}
                </span>
              </div>
            ))}
          </div>
          <DevNote on="dark" className="mt-6">
            bracketed times are placeholders — commit only to what you can genuinely
            hold
          </DevNote>
        </div>
      </section>

      {/* Covered / chargeable */}
      <section className="mx-auto max-w-content px-6 pt-24 sm:px-10 lg:pt-[104px]">
        <div className="mb-12 max-w-[44ch]">
          <Eyebrow>The line</Eyebrow>
          <h2 className="mt-5 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[52px]">
            Covered, and not covered.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutralLine bg-white p-8">
            <h3 className="font-serif text-[28px] font-normal text-primary">Included</h3>
            <List items={covered} />
          </div>
          <div className="rounded-3xl bg-neutralWarm p-8">
            <h3 className="font-serif text-[28px] font-normal text-primary">
              Chargeable
            </h3>
            <List items={chargeable} />
            <p className="mt-6 text-[15.5px] leading-[1.6] text-textBody">
              We’ll always tell you which side of this line a job falls on before we do
              it.
            </p>
          </div>
        </div>
      </section>

      {/* Two plans */}
      <section className="mx-auto max-w-content px-6 pt-24 sm:px-10 lg:pt-[104px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow>Ongoing care</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[52px]">
              Two ways to be looked after.
            </h2>
            <p className="mt-6 max-w-[32ch] text-pretty text-[17px] leading-[1.65] text-textBody">
              Every install includes cover as standard. A care plan is for people who’d
              rather we spot problems before they do.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {plans.map((p) => (
              <article
                key={p.title}
                className={`flex flex-col rounded-3xl p-8 ${
                  p.dark
                    ? 'bg-primary text-neutralWarm'
                    : 'border border-neutralLine bg-white'
                }`}
              >
                <h3
                  className={`font-serif text-[28px] font-normal ${p.dark ? 'text-neutralWarm' : 'text-primary'}`}
                >
                  {p.title}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={`font-serif text-[34px] font-light leading-none ${p.dark ? 'text-accent' : 'text-primary'}`}
                  >
                    {p.cost}
                  </span>
                  <span
                    className={`text-[13.5px] ${p.dark ? 'text-[rgba(247,244,239,0.6)]' : 'text-muted'}`}
                  >
                    {p.per}
                  </span>
                </div>
                <List items={p.items} dark={p.dark} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 bg-neutralWarm">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="max-w-[24ch] font-serif text-[32px] font-light leading-[1.05] tracking-[-0.015em] text-primary sm:text-[44px] lg:text-[56px]">
                Already have a system that nobody supports?
              </h2>
              <p className="mt-6 max-w-[46ch] text-pretty text-[17px] leading-[1.65] text-textBody">
                We take on other people’s installs. We’ll audit what’s there, tell you
                what’s salvageable, and pick it up from whoever walked away.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              <GoldLink href="/#contact" onClick={goContact}>
                Book a system audit
              </GoldLink>
              <OutlineLink to="/where-we-work">Check we cover your area</OutlineLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
