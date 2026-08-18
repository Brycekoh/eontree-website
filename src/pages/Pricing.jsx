import { useNavigate } from 'react-router-dom'
import { Eyebrow, DevNote, GoldLink, OutlineLink, PageHeader } from '../components/ui.jsx'

// Nothing on the site mentioned money before this page, which is the top
// reason a considered buyer doesn't enquire. Every figure stays bracketed
// until real starting prices are confirmed.
const tiers = [
  {
    title: 'One room',
    who: 'A single room done properly — usually lighting or an AV setup.',
    from: 'RM [X]',
    includes: [
      'Consultation and a written plan',
      'One system, one room',
      'App set up on your devices',
      'Handover walkthrough',
    ],
    note: 'Typically one to two days on site.',
    dark: false,
  },
  {
    title: 'Whole home',
    who: 'Two or more systems across the property, tied into one app.',
    from: 'RM [X]',
    includes: [
      'Full property survey and system design',
      'Two or more systems integrated',
      'Network and cabling where it’s needed',
      'Scenes set up with you',
      '[X]-year workmanship warranty',
    ],
    note: 'Typically one to two weeks, depending on size.',
    dark: true,
    tag: 'Most common',
  },
  {
    title: 'Commercial',
    who: 'Offices, retail, and short-stay properties with staff to think about.',
    from: 'RM [X]',
    includes: [
      'Site survey with your contractor',
      'Access control, climate, and meeting-room AV',
      'Tablet or panel control for staff',
      'Staged install around opening hours',
      'Maintenance agreement available',
    ],
    note: 'Quoted per site after a walkthrough.',
    dark: false,
  },
]

const factors = [
  {
    n: '01',
    title: 'Retrofit or new build',
    line: 'An empty build with open walls is the cheapest time to do this. A finished home means working around plaster, so we lean on wireless kit where it makes sense.',
  },
  {
    n: '02',
    title: 'How many systems',
    line: 'Lighting alone is a small job. Lighting plus security plus climate plus AV, all talking to each other, is a system — and the integration is where the work is.',
  },
  {
    n: '03',
    title: 'Wired or wireless',
    line: 'Wireless is quicker and cheaper up front. Cable is more reliable and worth it for cameras, network, and anything you don’t want dropping out.',
  },
  {
    n: '04',
    title: 'Brand tier',
    line: 'There’s a real range between solid mid-market kit and high-end. We’ll tell you where spending more actually buys you something and where it doesn’t.',
  },
  {
    n: '05',
    title: 'The state of your network',
    line: 'Most smart-home problems are network problems. If the existing setup won’t carry it, fixing that is part of the job rather than an afterthought.',
  },
]

const quoteSteps = [
  {
    step: 'FIRST',
    title: 'A free consultation',
    line: 'We walk the property, look at the wiring and network, and talk through what you actually want it to do. No charge, no obligation.',
  },
  {
    step: 'THEN',
    title: 'A written plan and fixed price',
    line: 'What goes where, which brands, what each part does, and the total. One document you can read, question, and compare.',
  },
  {
    step: 'ONLY THEN',
    title: 'You decide',
    line: 'Nothing is ordered and nothing is charged until you say yes to the plan and the number in front of you.',
  },
]

export default function Pricing() {
  const navigate = useNavigate()
  const goContact = (e) => {
    e.preventDefault()
    navigate('/', { state: { scrollTo: 'contact' } })
  }

  return (
    <main>
      <PageHeader
        eyebrow="What it costs"
        title={
          <>
            Rough numbers, <em className="font-light italic">before you ask us.</em>
          </>
        }
        lead="Every property is different, so these are honest starting points — not quotes. The consultation is free, and you get a fixed price in writing before anything is ordered."
      />

      {/* Tiers */}
      <section className="mx-auto max-w-content px-6 pt-16 sm:px-10">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.title}
              className={`flex flex-col rounded-3xl px-[34px] pb-[34px] pt-9 ${
                t.dark
                  ? 'bg-primary text-neutralWarm'
                  : 'border border-neutralLine bg-white'
              }`}
            >
              <div className="flex min-h-[44px] flex-wrap items-center gap-3">
                <h2
                  className={`max-w-[12ch] font-serif text-[28px] font-normal leading-tight sm:text-[30px] ${
                    t.dark ? 'text-neutralWarm' : 'text-primary'
                  }`}
                >
                  {t.title}
                </h2>
                {t.tag && (
                  <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-primary">
                    {t.tag}
                  </span>
                )}
              </div>

              <p
                className={`mt-3 max-w-[32ch] text-[15.5px] leading-[1.6] ${
                  t.dark ? 'text-[rgba(247,244,239,0.72)]' : 'text-textBody'
                }`}
              >
                {t.who}
              </p>

              <div className="mt-7 flex items-baseline gap-2.5">
                <span
                  className={`text-[13px] ${t.dark ? 'text-[rgba(247,244,239,0.6)]' : 'text-textBody'}`}
                >
                  from
                </span>
                <span
                  className={`font-serif text-[44px] font-light leading-none ${
                    t.dark ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {t.from}
                </span>
              </div>

              <ul
                className={`mt-7 border-t ${t.dark ? 'border-[rgba(247,244,239,0.16)]' : 'border-neutralLine'}`}
              >
                {t.includes.map((inc) => (
                  <li
                    key={inc}
                    className={`border-b py-[13px] text-[15px] leading-[1.5] ${
                      t.dark
                        ? 'border-[rgba(247,244,239,0.16)] text-[rgba(247,244,239,0.88)]'
                        : 'border-neutralLine text-textBody'
                    }`}
                  >
                    {inc}
                  </li>
                ))}
              </ul>

              <p
                className={`mb-0 ml-0 mr-0 mt-auto pt-6 text-[14px] leading-[1.55] ${
                  t.dark ? 'text-[rgba(247,244,239,0.6)]' : 'text-muted'
                }`}
              >
                {t.note}
              </p>
            </article>
          ))}
        </div>
        <DevNote className="mt-6">
          every figure bracketed — replace with real starting prices before this page
          goes live
        </DevNote>
      </section>

      {/* What moves the price */}
      <section className="mt-28 bg-neutralWarm">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <Eyebrow>Why quotes differ</Eyebrow>
              <h2 className="mt-5 max-w-[18ch] font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[52px]">
                What moves the price.
              </h2>
              <p className="mt-6 max-w-[32ch] text-pretty text-[17px] leading-[1.65] text-textBody">
                Two homes the same size can differ by a lot. These are the five things
                that actually change the number.
              </p>
            </div>

            <div className="border-t border-neutralLine">
              {factors.map((f) => (
                <article
                  key={f.n}
                  className="grid grid-cols-1 gap-x-4 border-b border-neutralLine py-[30px] sm:grid-cols-[56px_1fr]"
                >
                  <span className="font-serif text-[17px] text-accentDeep">{f.n}</span>
                  <div>
                    <h3 className="font-serif text-[24px] font-normal leading-[1.2] text-primary sm:text-[28px]">
                      {f.title}
                    </h3>
                    <p className="mt-3 max-w-[56ch] text-pretty text-[16.5px] leading-[1.65] text-textBody">
                      {f.line}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we quote */}
      <section className="mx-auto max-w-content px-6 pt-24 sm:px-10 lg:pt-[104px]">
        <div className="mb-14 max-w-[44ch]">
          <Eyebrow>No surprises</Eyebrow>
          <h2 className="mt-5 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[52px]">
            How we quote.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-9 border-t border-neutralLine pt-9 md:grid-cols-3">
          {quoteSteps.map((s) => (
            <div key={s.step}>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="block h-[9px] w-[9px] rounded-full bg-accent"
                />
                <span className="text-[11.5px] font-bold tracking-[0.16em] text-accentDeep">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-[18px] font-serif text-[27px] font-normal leading-[1.15] text-primary">
                {s.title}
              </h3>
              <p className="mt-3.5 text-pretty text-[15.5px] leading-[1.65] text-textBody">
                {s.line}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 bg-primary">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="max-w-[22ch] font-serif text-[32px] font-light leading-[1.05] tracking-[-0.02em] text-neutralWarm sm:text-[44px] lg:text-[56px]">
                Want a real number for your place?
              </h2>
              <p className="mt-6 max-w-[46ch] text-pretty text-[17px] leading-[1.65] text-[rgba(247,244,239,0.82)]">
                Tell us the property and what you want it to do. The consultation and
                the plan cost nothing — you only pay if you go ahead.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              <GoldLink href="/#contact" onClick={goContact}>
                Book a consultation
              </GoldLink>
              <OutlineLink to="/faq" on="dark">
                Read the questions first
              </OutlineLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
