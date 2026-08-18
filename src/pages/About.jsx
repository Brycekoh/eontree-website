import { Eyebrow, DevNote, GoldLink } from '../components/ui.jsx'
import { scrollToId } from '../utils/scroll.js'
import { useNavigate } from 'react-router-dom'

// About / Our story. One measured column for the narrative, metrics back in
// the serif/gold system, and no decorative vine pinned to pixel offsets.
const story = [
  'Ching Yang had bought the best of everything — smart lights, cameras, locks, a thermostat, speakers in every room. On paper, a smart home. In practice: a phone full of apps that didn’t talk to each other, two hubs that argued, and a light switch the family had learned never to touch.',
  'The hardware was never the problem. Every piece worked fine on its own. What nobody had done was make them work as one — and nobody was on the hook when they didn’t.',
  'So in 2026 we started EonTree to do the part most people skip: plan the whole system before buying a thing, run the wiring and network so the foundations are solid, tie it all into one app — then stay around to keep it running.',
  'We named it EonTree on purpose. A tree is only as strong as its roots; get the foundations right and everything above looks after itself.',
]

const metrics = [
  { value: '[X]', label: 'homes and sites fitted out' },
  { value: '[X]', label: 'brands we install and support' },
  { value: '[X] yrs', label: 'workmanship warranty' },
]

const beliefs = [
  {
    n: '01',
    title: 'We sell the system, not the gadget.',
    line: 'A smart home is only as good as how the parts work together — so we plan the whole system first, before anything is bought.',
  },
  {
    n: '02',
    title: 'Real installers, start to finish.',
    line: 'The people who design your system are the people who fit it. No subcontracted handoffs, no one blaming the last team.',
  },
  {
    n: '03',
    title: 'We stay after the install.',
    line: 'Warranty, monitoring, and a real person to call when something needs tuning or expanding.',
  },
  {
    n: '04',
    title: 'Brands we’d use ourselves.',
    line: 'We only fit kit we’re trained and authorised to install and support — so it’s us you call, not a helpline.',
  },
]

export default function About() {
  const navigate = useNavigate()
  const goContact = (e) => {
    e.preventDefault()
    navigate('/', { state: { scrollTo: 'contact' } })
  }

  return (
    <main>
      {/* 1. Opening */}
      <section className="mx-auto max-w-content px-6 pt-[88px] sm:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[72px]">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h1 className="mt-5 max-w-[19ch] font-serif text-[38px] font-light leading-none tracking-[-0.025em] text-primary sm:text-[56px] lg:text-[78px]">
              Technology should fit your life,{' '}
              <em className="font-light italic">not run it.</em>
            </h1>
            <p className="mt-7 max-w-[46ch] text-pretty text-[17px] leading-[1.65] text-textBody sm:text-[19px]">
              EonTree designs, installs, and looks after smart-home systems for homes
              and businesses. Here’s why we do it the way we do.
            </p>
          </div>

          {/* Founder portrait slot — awaiting a real photograph. */}
          <figure className="relative mx-auto w-full max-w-[420px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-y-[6%] -left-[4%] -right-[6%] rounded-[24px_24px_24px_96px] bg-[radial-gradient(circle_at_60%_40%,rgba(224,179,132,0.35),transparent_70%)] blur-lg"
            />
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-3 overflow-hidden rounded-[24px_24px_24px_96px] border border-neutralLine bg-[repeating-linear-gradient(135deg,#F7F4EF_0_10px,#F1ECE3_10px_20px)] px-8 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accentDeep">
                Founder portrait
              </span>
              <span className="max-w-[30ch] font-mono text-[10.5px] leading-[1.6] text-muted">
                Ching Yang — waist-up, on a real install or in a finished room.
                Natural light, warm tones, plain shirt. Drop file here.
              </span>
            </div>
            <figcaption className="mt-5 px-1">
              <span className="block font-serif text-[22px] leading-tight text-primary">
                Ching Yang
              </span>
              <span className="mt-1 block text-[13.5px] text-textBody">
                Founder, EonTree Technologies
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2. Story — one measured column */}
      <section className="mx-auto max-w-content px-6 pt-24 sm:px-10 lg:pt-[104px]">
        <div className="mx-auto max-w-[66ch]">
          <Eyebrow>How it started</Eyebrow>
          <h2 className="mt-5 font-serif text-[32px] font-light leading-[1.06] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[54px]">
            It began with a house that wouldn’t behave.
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {story.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-pretty text-[17px] leading-[1.68] text-textBody sm:text-[19px]"
              >
                {p}
              </p>
            ))}
          </div>
          <blockquote className="mt-10 border-l-2 border-accent pl-7">
            <p className="font-serif text-[24px] font-light italic leading-[1.3] text-primary sm:text-[32px]">
              Get the roots right and everything above looks after itself.
            </p>
          </blockquote>
        </div>
      </section>

      {/* 3. What we're built around */}
      <section className="relative mt-28 overflow-hidden bg-primary">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,179,132,0.18),transparent_65%)]"
        />
        <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-[104px]">
          <div>
            <Eyebrow on="dark">What we’re built around</Eyebrow>
            <blockquote className="mt-6">
              <p className="max-w-[20ch] font-serif text-[34px] font-light leading-[1.05] tracking-[-0.02em] text-neutralWarm sm:text-[46px] lg:text-[62px]">
                We sell the system, <em className="font-light italic">not the gadget.</em>
              </p>
            </blockquote>
            <p className="mt-7 max-w-[44ch] text-pretty text-[17px] leading-[1.65] text-[rgba(247,244,239,0.82)] sm:text-lg">
              A smart home is only as good as the parts you can’t see: the wiring, the
              network, and the team behind it. That’s the work EonTree is built
              around.
            </p>
          </div>

          <dl className="flex flex-col border-t border-[rgba(247,244,239,0.16)]">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-[rgba(247,244,239,0.16)] py-6"
              >
                <dd className="min-w-[132px] font-serif text-[34px] font-light leading-none text-accent sm:text-[46px]">
                  {m.value}
                </dd>
                <dt className="text-[15px] leading-[1.5] text-[rgba(247,244,239,0.78)]">
                  {m.label}
                </dt>
              </div>
            ))}
            <DevNote on="dark" className="mt-5 max-w-[46ch]">
              figures bracketed until confirmed — the company started in 2026, so keep
              the counts honest
            </DevNote>
          </dl>
        </div>
      </section>

      {/* 4. Beliefs */}
      <section className="mx-auto max-w-content px-6 pt-24 sm:px-10 lg:pt-[104px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-5 font-serif text-[32px] font-light leading-[1.06] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[54px]">
              What we believe.
            </h2>
            <p className="mt-6 max-w-[32ch] text-pretty text-[17px] leading-[1.65] text-textBody">
              The invisible parts matter most: wiring, network, handover, and support.
              These are the roots we build around.
            </p>
          </div>

          <div className="border-t border-neutralLine">
            {beliefs.map((b) => (
              <article
                key={b.n}
                className="grid grid-cols-1 gap-x-4 border-b border-neutralLine py-8 sm:grid-cols-[56px_1fr]"
              >
                <span className="font-serif text-[17px] text-accentDeep">{b.n}</span>
                <div>
                  <h3 className="max-w-[30ch] font-serif text-[24px] font-normal leading-[1.2] text-primary sm:text-[31px]">
                    {b.title}
                  </h3>
                  <p className="mt-3 max-w-[56ch] text-pretty text-[16.5px] leading-[1.65] text-textBody">
                    {b.line}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="mt-28 bg-neutralWarm">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="max-w-[24ch] font-serif text-[32px] font-light leading-[1.05] tracking-[-0.015em] text-primary sm:text-[44px] lg:text-[58px]">
                Want to see what we’d do with your space?
              </h2>
              <p className="mt-6 max-w-[46ch] text-pretty text-[17px] leading-[1.65] text-textBody">
                Tell us about the property and what you’re after, and we’ll come back
                with a plan. No obligation, no hard sell.
              </p>
            </div>

            <div className="rounded-3xl border border-neutralLine bg-white p-8">
              <GoldLink href="/#contact" onClick={goContact} className="w-full">
                Book a consultation
              </GoldLink>

              <div className="my-7 flex items-center gap-4">
                <span aria-hidden="true" className="h-px flex-1 bg-neutralLine" />
                <span className="text-xs uppercase tracking-[0.16em] text-muted">
                  or
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-neutralLine" />
              </div>

              <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-accentDeep">
                Call us directly
              </p>
              <p className="mt-2 font-serif text-[28px] leading-tight text-muted">
                [phone]
              </p>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-textBody">
                Business hours, a real person — not a queue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
