import { useNavigate } from 'react-router-dom'
import { Layers, Wrench, LifeBuoy, BadgeCheck, ArrowRight } from 'lucide-react'
import EyebrowPill from '../components/EyebrowPill.jsx'
import CurveDivider from '../components/CurveDivider.jsx'
import Leaf from '../components/Leaf.jsx'

// About / Our Story — story-driven arc (à la HubSpot): opening thesis →
// mission → origin narrative → pull-quote + metrics → values → CTA.
// NOTE: the narrative is composed placeholder copy and hard facts are bracketed
// [PLACEHOLDER] (founder, year, numbers). Replace with EonTree's real history.
const stats = [
  { value: '[X]+', label: 'homes and sites fitted out' },
  { value: '[X]', label: 'brands installed and supported' },
  { value: '[X] yrs', label: 'workmanship warranty' },
]

const beliefs = [
  {
    icon: Layers,
    title: 'We sell the system, not the gadget.',
    line: 'A smart home is only as good as how the parts work together — so we plan the whole system first.',
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
    title: 'Brands we’d use ourselves.',
    line: 'We only fit kit we’re trained and authorised to install and support.',
  },
]

export default function About() {
  const navigate = useNavigate()
  const goContact = () => navigate('/', { state: { scrollTo: 'contact' } })

  return (
    <main>
      {/* 1. Opening thesis */}
      <section className="bg-pageBg">
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <EyebrowPill>Our story</EyebrowPill>
              <h1 className="mt-6 font-serif text-5xl leading-[1.04] text-primary sm:text-6xl">
                Technology should fit your life, not run it.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-textBody">
                EonTree designs, installs, and looks after smart-home systems for
                homes and businesses. Here’s why we do it the way we do.
              </p>
            </div>

            {/* TODO[ASSET]: real founder / team / workshop photo */}
            <div className="relative">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute right-6 top-8 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
              </div>
              <div className="relative flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-neutralLine bg-neutralWarm">
                <div className="flex flex-col items-center gap-3 text-textBody/50">
                  <Leaf className="h-12 w-12 text-accent" />
                  <span className="text-sm font-medium uppercase tracking-wide">
                    Founder / team photo placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission */}
      <section className="relative overflow-hidden bg-neutralWarm">
        <CurveDivider fill="#FFFFFF" />
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 text-center sm:pb-24 sm:pt-32">
          <div className="mx-auto max-w-3xl">
            <EyebrowPill>Our mission</EyebrowPill>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-primary sm:text-5xl">
              Smart homes that actually stay smart.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-textBody">
              Not a drawer of half-working gadgets. One system that does what you
              set it to, keeps doing it, and has a real team behind it when it
              doesn’t.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Origin story */}
      <section className="relative overflow-hidden bg-pageBg">
        <CurveDivider fill="#F7F4EF" />
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
          <div className="mx-auto max-w-3xl">
            <EyebrowPill>How it started</EyebrowPill>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-primary sm:text-5xl">
              It began with a house that wouldn’t behave.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-textBody">
              <p>
                {/* TODO[COPY]: real founder + details */}
                [Our founder] had bought the best of everything — smart lights,
                cameras, locks, a thermostat, speakers in every room. On paper, a
                smart home. In practice: a phone full of apps that didn’t talk to
                each other, two hubs that argued, and a light switch the family
                had learned never to touch.
              </p>
              <p>
                The hardware was never the problem. Every piece worked fine on its
                own. What nobody had done was make them work as one — and nobody
                was on the hook when they didn’t.
              </p>
              <p>
                So in [year], we started EonTree to do the part most people skip:
                plan the whole system before buying a thing, run the wiring and
                network so the foundations are solid, tie it all into one app —
                then stay around to keep it running.
              </p>
              <p>
                We named it EonTree on purpose. A tree is only as strong as its
                roots; get the foundations right and everything above looks after
                itself. Rooted in nature, powered by technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pull-quote + metrics (the dark moment) */}
      <section className="relative overflow-hidden bg-primary">
        <CurveDivider fill="#FFFFFF" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
          <figure className="mx-auto max-w-3xl text-center">
            <Leaf className="mx-auto h-7 w-7 text-accent" />
            <blockquote className="mt-6 font-serif text-3xl leading-snug text-neutralWarm sm:text-4xl">
              “We sell the system, not the gadget. A smart home is only as good as
              the parts you can’t see — the wiring, the network, and the team
              behind it.”
            </blockquote>
          </figure>

          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-10 text-center sm:grid-cols-3">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dd className="font-serif text-4xl text-accent sm:text-5xl">
                  {value}
                </dd>
                <dt className="mt-2 text-sm text-neutralWarm/75">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5. What we believe */}
      <section className="relative overflow-hidden bg-pageBg">
        <CurveDivider fill="#1C2C39" />
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
          <div className="max-w-2xl">
            <EyebrowPill>How we work</EyebrowPill>
            <h2 className="mt-5 font-serif text-4xl text-primary sm:text-5xl">
              What we believe.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {beliefs.map(({ icon: Icon, title, line }) => (
              <article
                key={title}
                className="rounded-2xl border border-neutralLine bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accentDeep">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-primary">{title}</h3>
                <p className="mt-2 text-textBody">{line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="relative overflow-hidden bg-neutralWarm">
        <CurveDivider fill="#FFFFFF" />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-24 text-center sm:pb-28 sm:pt-32">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="font-serif text-4xl text-primary sm:text-5xl">
              Want to see what we’d do with your space?
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
          </div>
        </div>
      </section>
    </main>
  )
}
