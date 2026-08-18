import { useNavigate } from 'react-router-dom'
import { Eyebrow, Bracket, DevNote, GoldLink, OutlineLink } from '../components/ui.jsx'

// One project in full. The homepage cards are teasers; a considered buyer
// wants the detail. Written as a project record — no invented statistics
// beyond the bracketed ones.
const facts = [
  { label: 'Property', value: '[X]-bed family home', pending: true },
  { label: 'Systems', value: 'Lighting · Security · Climate' },
  { label: 'Time on site', value: '[X] days', pending: true },
  { label: 'Project cost', value: 'RM [X]', pending: true },
]

const chapters = [
  {
    title: 'The brief',
    paras: [
      'The family had lived in the house for years and had picked up smart devices one at a time — a couple of lamps here, a doorbell there, a thermostat someone had installed badly. Each piece worked. Together they didn’t.',
      'What they asked for was simple to say and harder to deliver: lighting, security, and climate on one app, with no major building work, and nothing that would need a manual to operate.',
    ],
  },
  {
    title: 'What we found on the survey',
    paras: [
      'Two hubs quietly competing, a router in a cupboard doing more work than it could manage, and no cabling anywhere near where the cameras needed to go. The wi-fi didn’t reach the far bedroom, which explained why half the existing devices dropped out at night.',
      'The network was the real problem. Anything we added on top of it would have inherited the same faults, so fixing that came first — before a single new device was specified.',
    ],
  },
  {
    title: 'What we did',
    paras: [
      'We replaced the network with proper access points, then ran cable only to the three places that genuinely needed it: two exterior camera positions and the hallway panel. Everything else went wireless, which kept the walls intact and the cost down.',
      'Lighting was zoned room by room, then grouped into four scenes the family actually described to us in the consultation — morning, evening, movie, and away. Security and climate came onto the same system, so away mode locks up, arms the cameras, and drops the temperature in one action.',
      'We tested it for a full day and night cycle before handover, then spent an evening walking the whole household through it — including the two teenagers, who were the real test.',
    ],
  },
  {
    title: 'Where it landed',
    paras: [
      'One app, four scenes, and every switch in the house still works as a switch. Nine months on we’ve been back twice: once to add a camera, once to change a scene after they rearranged the living room.',
    ],
  },
]

const outcomes = [
  { label: 'Apps replaced by one', value: '4 → 1' },
  { label: 'Rooms brought onto the system', value: '[X]', pending: true },
  { label: 'Walls opened', value: 'None' },
  { label: 'Callouts since handover', value: '2' },
]

const shots = [
  {
    src: '/images/lighting.jpg',
    ratio: 'aspect-[4/3]',
    alt: 'Living room in a warm evening lighting scene',
    caption: 'Evening scene — zoned per room, one tap.',
  },
  {
    src: '/images/hub.jpg',
    ratio: 'aspect-[3/4]',
    alt: 'Wall-mounted control panel in a hallway',
    caption: 'Hallway panel, the only cabled interior run.',
  },
  {
    src: '/images/security.jpg',
    ratio: 'aspect-[3/4]',
    alt: 'Exterior camera mounted above a doorway',
    caption: 'Two exterior camera positions, hard-wired.',
  },
]

const kit = [
  {
    system: 'Lighting',
    detail:
      'Zoned dimming across [X] rooms, four scenes, occupancy sensing in the hallway and utility.',
  },
  {
    system: 'Security',
    detail:
      'Two exterior cameras, smart lock on the front door, contact sensors on ground-floor windows.',
  },
  {
    system: 'Climate',
    detail:
      'Zoned control upstairs and down, tied to the away scene and the family’s schedule.',
  },
]

export default function CaseStudy() {
  const navigate = useNavigate()
  const goContact = (e) => {
    e.preventDefault()
    navigate('/', { state: { scrollTo: 'contact' } })
  }

  return (
    <main>
      {/* Header */}
      <section className="mx-auto max-w-content px-6 pt-[88px] sm:px-10">
        <Eyebrow>Case study · Whole-house retrofit</Eyebrow>
        <h1 className="mt-5 max-w-[22ch] font-serif text-[38px] font-light leading-[0.99] tracking-[-0.025em] text-primary sm:text-[56px] lg:text-[80px]">
          Three systems, one app,{' '}
          <em className="font-light italic">no walls opened.</em>
        </h1>

        <div className="mt-12 aspect-[21/9] overflow-hidden rounded-[28px] bg-neutralWarm">
          <img
            src="/images/project-home.jpg"
            alt="Bright family living room with fireplace and built-in shelving"
            className="h-full w-full object-cover"
          />
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-b border-neutralLine py-[34px] lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-accentDeep">
                {f.label}
              </dt>
              <dd
                className={`mt-2 font-serif text-[22px] leading-tight sm:text-[26px] ${
                  f.pending ? 'text-muted' : 'text-primary'
                }`}
              >
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Narrative */}
      <section className="mx-auto max-w-content px-6 pt-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:gap-[72px]">
          <aside className="lg:sticky lg:top-[120px] lg:self-start">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accentDeep">
              The short version
            </p>
            <p className="mt-4 text-[16px] leading-[1.65] text-textBody">
              A family wanted lighting, security, and climate on one app without
              tearing the house apart. Wireless where possible, cable only where it
              mattered.
            </p>
            <OutlineLink
              href="/#contact"
              onClick={goContact}
              className="mt-6 w-full sm:w-auto"
            >
              Discuss a similar job
            </OutlineLink>
          </aside>

          <div>
            {chapters.map((c) => (
              <article key={c.title} className="pb-[52px]">
                <h2 className="font-serif text-[28px] font-normal leading-tight text-primary sm:text-[38px]">
                  {c.title}
                </h2>
                <div className="mt-5 flex flex-col gap-5">
                  {c.paras.map((p) => (
                    <p
                      key={p.slice(0, 24)}
                      className="max-w-[68ch] text-pretty text-[17px] leading-[1.68] text-textBody sm:text-[18.5px]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-primary">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                What the client said
              </p>
              <blockquote className="mt-6">
                <p className="max-w-[30ch] font-serif text-[28px] font-light italic leading-[1.18] text-neutralWarm sm:text-[36px] lg:text-[44px]">
                  The lighting scenes alone changed how the house feels in the evening.
                </p>
              </blockquote>
              <p className="mt-6 text-[14.5px] text-[rgba(247,244,239,0.7)]">
                Homeowner ·{' '}
                <Bracket on="dark">
                  [sample quote — replace with a permissioned one]
                </Bracket>
              </p>
            </div>

            <dl className="border-t border-[rgba(247,244,239,0.16)]">
              {outcomes.map((o) => (
                <div
                  key={o.label}
                  className="flex items-baseline justify-between gap-6 border-b border-[rgba(247,244,239,0.16)] py-5"
                >
                  <dt className="text-[15px] leading-[1.5] text-[rgba(247,244,239,0.78)]">
                    {o.label}
                  </dt>
                  <dd
                    className={`whitespace-nowrap font-serif text-[26px] sm:text-[32px] ${
                      o.pending ? 'text-[rgba(247,244,239,0.45)]' : 'text-accent'
                    }`}
                  >
                    {o.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* What went in */}
      <section className="mx-auto max-w-content px-6 pt-24 sm:px-10 lg:pt-[104px]">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[46px]">
            What went in.
          </h2>
          <DevNote className="max-w-[30ch]">
            stock scenes — swap for photos of this actual install
          </DevNote>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr]">
          {shots.map((s) => (
            <figure key={s.src}>
              <div className={`${s.ratio} overflow-hidden rounded-[20px] bg-neutralWarm`}>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[14.5px] leading-[1.5] text-textBody">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-neutralLine pt-9 sm:grid-cols-3">
          {kit.map((k) => (
            <div key={k.system}>
              <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-accentDeep">
                {k.system}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.6] text-textBody">{k.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 bg-neutralWarm">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="max-w-[24ch] font-serif text-[32px] font-light leading-[1.05] tracking-[-0.015em] text-primary sm:text-[44px] lg:text-[56px]">
                Got a house that needs the same treatment?
              </h2>
              <p className="mt-6 max-w-[46ch] text-pretty text-[17px] leading-[1.65] text-textBody">
                The survey and the plan are free. You’ll know what it costs and how
                long it takes before anything is ordered.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              <GoldLink href="/#contact" onClick={goContact}>
                Book a consultation
              </GoldLink>
              <OutlineLink to="/pricing">See starting prices</OutlineLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
