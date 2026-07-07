import { useNavigate } from 'react-router-dom'
import {
  Layers,
  Wrench,
  LifeBuoy,
  BadgeCheck,
  ArrowRight,
} from 'lucide-react'
import EyebrowPill from '../components/EyebrowPill.jsx'
import CurveDivider from '../components/CurveDivider.jsx'
import Leaf from '../components/Leaf.jsx'
import Reveal from '../components/Reveal.jsx'

// About / Our Story - story-driven arc: opening thesis -> mission -> origin
// narrative -> pull-quote + metrics -> values -> CTA.
// Founder/year/metrics are set from user-provided details; revise when the
// full company history is ready.
const stats = [
  { value: '1', suffix: '+', label: 'homes and sites fitted out' },
  { value: '1', suffix: '', label: 'brands installed and supported' },
  { value: '1', suffix: 'yr', label: 'workmanship warranty' },
]

const beliefs = [
  {
    icon: Layers,
    title: 'We sell the system, not the gadget.',
    line: 'A smart home is only as good as how the parts work together - so we plan the whole system first.',
  },
  {
    icon: Wrench,
    title: 'Real installers, start to finish.',
    line: 'The people who design your system are the people who fit it. No subcontracted handoffs.',
  },
  {
    icon: LifeBuoy,
    title: 'We stay after the install.',
    line: 'Warranty, monitoring, and a real person to call when something needs tuning or expanding.',
  },
  {
    icon: BadgeCheck,
    title: "Brands we'd use ourselves.",
    line: "We only fit kit we're trained and authorised to install and support.",
  },
]

function StoryThread() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[32rem] z-0 hidden h-[62rem] w-[18rem] -translate-x-1/2 text-accent/35 lg:block"
    >
      <svg
        viewBox="0 0 260 980"
        fill="none"
        className="h-full w-full overflow-visible"
      >
        <path
          pathLength="1"
          className="root-thread"
          d="M132 8 C 70 155, 220 250, 124 382 C 48 486, 188 590, 96 704 C 44 770, 112 884, 70 962"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="leaf-breathe"
          d="M119 238 C 94 220, 68 226, 54 250 C 80 262, 106 260, 119 238Z"
          fill="currentColor"
        />
        <path
          className="leaf-breathe"
          style={{ animationDelay: '900ms' }}
          d="M140 594 C 166 578, 192 588, 202 616 C 174 626, 151 618, 140 594Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default function About() {
  const navigate = useNavigate()
  const goContact = () => navigate('/', { state: { scrollTo: 'contact' } })

  return (
    <main className="relative overflow-hidden">
      <StoryThread />

      {/* 1. Opening thesis */}
      <section className="relative z-10 bg-pageBg">
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
            <Reveal>
              <EyebrowPill>Our story</EyebrowPill>
              <h1 className="mt-6 font-serif text-5xl leading-[1.04] text-primary sm:text-6xl">
                Technology should fit your life, not run it.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-textBody">
                EonTree designs, installs, and looks after smart-home systems for
                homes and businesses. Here's why we do it the way we do.
              </p>
            </Reveal>

            <Reveal variant="scale" delay={120} className="relative justify-self-center lg:justify-self-end">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -right-5 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
                <Leaf className="leaf-breathe absolute -left-6 top-10 h-10 w-10 rotate-[-18deg] text-accent/55" />
              </div>
              <figure className="relative flex aspect-[3/4] w-full max-w-sm flex-col items-center justify-center gap-6 rounded-[2rem] border border-neutralLine bg-gradient-to-b from-neutralWarm to-pageBg p-8 text-center shadow-[0_28px_70px_-44px_rgba(28,44,57,0.55)]">
                <Leaf className="h-12 w-12 text-accent" />
                <blockquote className="font-serif text-2xl italic leading-snug text-primary">
                  "Get the roots right and everything above looks after itself."
                </blockquote>
                <figcaption>
                  <p className="font-serif text-xl leading-none text-primary">
                    Ching Yang
                  </p>
                  <p className="mt-1 text-sm text-textBody/75">
                    Founder, EonTree Technologies
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Mission */}
      <section className="relative z-10 overflow-hidden bg-neutralWarm">
        <CurveDivider fill="#FFFFFF" />
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 text-center sm:pb-24 sm:pt-32">
          <Reveal className="mx-auto max-w-3xl">
            <EyebrowPill>Our mission</EyebrowPill>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-primary sm:text-5xl">
              Smart homes that actually stay smart.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-textBody">
              Not a drawer of half-working gadgets. One system that does what you
              set it to, keeps doing it, and has a real team behind it when it
              doesn't.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Origin story */}
      <section className="relative z-10 overflow-hidden bg-pageBg">
        <CurveDivider fill="#F7F4EF" />
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
          <Reveal className="mx-auto max-w-3xl">
            <EyebrowPill>How it started</EyebrowPill>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-primary sm:text-5xl">
              It began with a house that wouldn't behave.
            </h2>
          </Reveal>

          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-textBody">
            {[
              "Ching Yang had bought the best of everything - smart lights, cameras, locks, a thermostat, speakers in every room. On paper, a smart home. In practice: a phone full of apps that didn't talk to each other, two hubs that argued, and a light switch the family had learned never to touch.",
              "The hardware was never the problem. Every piece worked fine on its own. What nobody had done was make them work as one - and nobody was on the hook when they didn't.",
              'So in 2026, we started EonTree to do the part most people skip: plan the whole system before buying a thing, run the wiring and network so the foundations are solid, tie it all into one app - then stay around to keep it running.',
              'We named it EonTree on purpose. A tree is only as strong as its roots; get the foundations right and everything above looks after itself. Rooted in nature, powered by technology.',
            ].map((text, index) => (
              <Reveal as="p" key={text} delay={index * 90}>
                {text}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pull-quote + metrics (the dark moment) */}
      <section className="relative z-10 overflow-hidden bg-primary">
        <CurveDivider fill="#FFFFFF" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[7.5rem] hidden h-px w-[38rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/35 to-transparent sm:block"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <Reveal>
              <Leaf className="mx-auto h-7 w-7 text-accent" />
              <blockquote className="mt-6 font-serif text-3xl leading-snug text-neutralWarm sm:text-4xl lg:text-5xl">
                "We sell the system, not the gadget."
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                A smart home is only as good as the parts you can't see: the
                wiring, the network, and the team behind it. That is the work
                EonTree is built around.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <dl className="relative grid grid-cols-1 gap-8 py-4 sm:grid-cols-3 lg:grid-cols-1">
                <div
                  aria-hidden="true"
                  className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-accent/45 to-transparent lg:block"
                />
                {stats.map(({ value, suffix, label }, index) => (
                  <div
                    key={label}
                    className="metric-rise relative pl-0 text-left lg:pl-10"
                    style={{ '--metric-delay': `${index * 120}ms` }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-8 hidden h-3 w-3 -translate-x-[5px] rotate-45 rounded-bl-full rounded-tr-full bg-accent shadow-[0_0_24px_rgba(224,179,132,0.42)] lg:block"
                    />
                    <dd className="flex items-end gap-1 leading-none">
                      <span className="bg-gradient-to-b from-accentBright via-accent to-[#B5793C] bg-clip-text font-sans text-6xl font-black tracking-[-0.08em] text-transparent drop-shadow-[0_8px_24px_rgba(224,179,132,0.22)] sm:text-7xl">
                        {value}
                      </span>
                      {suffix && (
                        <span className="pb-1 font-serif text-3xl font-semibold italic text-accentBright sm:text-4xl">
                          {suffix}
                        </span>
                      )}
                    </dd>
                    <dt className="mt-2 text-sm font-medium leading-relaxed text-white">
                      {label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. What we believe */}
      <section className="relative z-10 overflow-hidden bg-pageBg">
        <CurveDivider fill="#1C2C39" />
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <EyebrowPill>How we work</EyebrowPill>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-primary sm:text-5xl">
                What we believe.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-textBody">
                The invisible parts matter most: wiring, network, handover, and
                support. These are the roots we build around.
              </p>
              <div
                aria-hidden="true"
                className="mt-10 hidden h-40 w-32 text-accent/35 lg:block"
              >
                <svg viewBox="0 0 140 180" fill="none" className="h-full w-full">
                  <path
                    d="M72 4 C 46 44, 102 72, 62 112 C 42 132, 46 158, 28 176"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M67 74 C 45 60, 30 64, 22 84 C 43 92, 59 88, 67 74Z"
                    fill="currentColor"
                  />
                  <path
                    d="M72 126 C 94 112, 112 120, 118 142 C 94 148, 80 142, 72 126Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Reveal>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-transparent via-accent/35 to-transparent"
              />
              <div className="space-y-10">
                {beliefs.map(({ icon: Icon, title, line }, index) => (
                  <Reveal as="article" key={title} delay={index * 90}>
                    <div className="group relative grid grid-cols-[2.75rem_1fr] gap-5">
                      <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[1rem] border border-accent/25 bg-pageBg text-accentDeep shadow-[0_14px_36px_-24px_rgba(28,44,57,0.55)] transition-transform duration-200 group-hover:-translate-y-0.5">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <div className="border-b border-neutralLine pb-9 transition-colors duration-200 group-hover:border-accent/45">
                        <h3 className="font-serif text-2xl leading-tight text-primary">
                          {title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-textBody">
                          {line}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="relative z-10 overflow-hidden bg-neutralWarm">
        <CurveDivider fill="#FFFFFF" />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-24 text-center sm:pb-28 sm:pt-32">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="font-serif text-4xl text-primary sm:text-5xl">
              Want to see what we'd do with your space?
            </h2>
            <button
              type="button"
              onClick={goContact}
              className="group mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-b from-accentBright to-accent px-8 py-3.5 text-base font-semibold text-primary shadow-[0_14px_38px_-10px_rgba(224,179,132,0.6)] ring-1 ring-inset ring-white/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-10px_rgba(224,179,132,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Plan your space
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
