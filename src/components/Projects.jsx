import CurveDivider from './CurveDivider.jsx'
import EyebrowPill from './EyebrowPill.jsx'

// DESIGN.md §8.9 — case studies. Each card is structured brief → what we did
// → result (not icon-blurb-link). Copy from EonTree-copy.md, decomposed from
// each project's paragraph into the three stages (no facts invented).
// TODO[COPY]: replace with real projects (with client sign-off) before
// launch — these are realistic samples. Photos are free Unsplash stock
// (Unsplash License) in /public/images — generic scenes, not real EonTree
// installs; swap for real project photos when available.
const projects = [
  {
    title: 'The whole-house retrofit',
    brief:
      'A family wanted lighting, security, and climate on one app without tearing the house apart.',
    did: 'We used wireless kit where we could, and ran cable only where it mattered.',
    result: 'One system that controls all three.',
    image: '/images/project-home.jpg',
    imageAlt: 'Bright family living room with fireplace and built-in shelving',
  },
  {
    title: 'The “it should just work” office',
    brief:
      'A small office was juggling four different apps for lights, locks, aircon, and meeting-room AV.',
    did: 'We consolidated it into one control system.',
    result: 'Reception runs the whole floor from a tablet.',
    image: '/images/project-office.jpg',
    imageAlt: 'Glass-walled office meeting room with a whiteboard and city view',
  },
  {
    title: 'The holiday home, run remotely',
    brief:
      'An owner two hours away wanted to check on an empty property and warm it up before arriving.',
    did: 'We set up remote cameras, climate, and alerts.',
    result: 'All from their phone, from anywhere.',
    image: '/images/project-holiday.jpg',
    imageAlt: 'Cabin in the woods glowing with warm lights at dusk',
  },
]

const stages = [
  { key: 'brief', label: 'Brief' },
  { key: 'did', label: 'What we did' },
  { key: 'result', label: 'Result' },
]

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-pageBg">
      {/* navy (Stats above) spills down into white */}
      <CurveDivider fill="#1C2C39" />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="max-w-2xl">
          <EyebrowPill>Recent work</EyebrowPill>
          <h2 className="mt-5 font-serif text-4xl text-primary sm:text-5xl">
            A few homes (and one office) we’ve wired up.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => {
            return (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutralLine bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutralWarm">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Brief → What we did → Result */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl text-primary">{p.title}</h3>
                  <dl className="mt-4 space-y-4">
                    {stages.map(({ key, label }) => (
                      <div
                        key={key}
                        className="border-l-2 border-accent/40 pl-3"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-wider text-accentDeep">
                          {label}
                        </dt>
                        <dd className="mt-1 text-textBody">{p[key]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
