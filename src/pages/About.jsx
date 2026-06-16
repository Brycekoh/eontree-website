import { useNavigate } from 'react-router-dom'
import { Layers, Wrench, LifeBuoy, BadgeCheck, ArrowRight, User } from 'lucide-react'
import EyebrowPill from '../components/EyebrowPill.jsx'
import CurveDivider from '../components/CurveDivider.jsx'
import Leaf from '../components/Leaf.jsx'

// About page. NOTE: EonTree-copy.md has no About copy yet — everything here is
// composed on-brand placeholder text. Flag/replace before launch.
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

const team = [
  { name: '[Team member]', role: '[Role placeholder]' },
  { name: '[Team member]', role: '[Role placeholder]' },
  { name: '[Team member]', role: '[Role placeholder]' },
]

export default function About() {
  const navigate = useNavigate()
  const goContact = () => navigate('/', { state: { scrollTo: 'contact' } })

  return (
    <main>
      {/* Intro */}
      <section className="bg-pageBg">
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <EyebrowPill>About EonTree</EyebrowPill>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-primary sm:text-6xl">
                The team behind your smart home.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-textBody">
                EonTree designs, installs, and looks after smart-home systems for
                homes and commercial spaces. We’re not a box-shifter — we plan
                the whole system, fit it properly, and stick around to keep it
                running. One system, one app, one team.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={goContact}
                  className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-b from-accentBright to-accent px-7 py-3.5 text-base font-semibold text-primary shadow-[0_10px_30px_-10px_rgba(224,179,132,0.85)] ring-1 ring-inset ring-white/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(224,179,132,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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

            {/* Scene image placeholder */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute right-6 top-8 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
              </div>
              {/* TODO[ASSET]: real team / workshop / install photo */}
              <div className="relative flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-neutralLine bg-neutralWarm">
                <div className="flex flex-col items-center gap-3 text-textBody/50">
                  <Leaf className="h-12 w-12 text-accent" />
                  <span className="text-sm font-medium uppercase tracking-wide">
                    Team / install photo placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="relative overflow-hidden bg-neutralWarm">
        <CurveDivider fill="#FFFFFF" />
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

      {/* Team */}
      <section className="relative overflow-hidden bg-pageBg">
        <CurveDivider fill="#F7F4EF" />
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
          <div className="max-w-2xl">
            <EyebrowPill>The people</EyebrowPill>
            <h2 className="mt-5 font-serif text-4xl text-primary sm:text-5xl">
              Who you’ll be working with.
            </h2>
          </div>
          {/* TODO[CONTENT]: replace with real team members + photos */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {team.map(({ name, role }, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-neutralLine bg-white shadow-sm"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-neutralWarm text-textBody/40">
                  <User size={40} aria-hidden="true" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary">{name}</h3>
                  <p className="mt-1 text-textBody">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary">
        <CurveDivider fill="#FFFFFF" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-28 text-center sm:pb-28 sm:pt-36">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <Leaf className="h-7 w-7 text-accent" />
            <h2 className="mt-6 font-serif text-4xl text-neutralWarm sm:text-5xl">
              Want to see what we’d do with your space?
            </h2>
            <button
              type="button"
              onClick={goContact}
              className="group mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-b from-accentBright to-accent px-8 py-3.5 text-base font-semibold text-primary shadow-[0_14px_38px_-10px_rgba(224,179,132,0.55)] ring-1 ring-inset ring-white/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-10px_rgba(224,179,132,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
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
