import { Link } from 'react-router-dom'
import { Eyebrow, DevNote } from './ui.jsx'

const projects = [
  {
    title: 'The whole-house retrofit',
    image: '/images/project-home.jpg',
    alt: 'Bright family living room with fireplace and built-in shelving',
    ratio: 'aspect-[16/11]',
    brief:
      'A family wanted lighting, security, and climate on one app without tearing the house apart. We used wireless kit where we could and ran cable only where it mattered.',
    result: 'One system that controls all three.',
  },
  {
    title: 'The “it should just work” office',
    image: '/images/project-office.jpg',
    alt: 'Glass-walled office meeting room with a city view',
    ratio: 'aspect-[4/3]',
    brief:
      'A small office was juggling four apps for lights, locks, aircon, and meeting-room AV. We consolidated it into one control system.',
    result: 'Reception runs the floor from a tablet.',
  },
  {
    title: 'The holiday home, run remotely',
    image: '/images/project-holiday.jpg',
    alt: 'Cabin in the woods glowing with warm lights at dusk',
    ratio: 'aspect-[4/3]',
    brief:
      'An owner two hours away wanted to check on an empty property and warm it up before arriving. We set up remote cameras, climate, and alerts.',
    result: 'All from their phone, from anywhere.',
  },
]

export default function Work() {
  return (
    <section id="work" className="mt-28 bg-neutralWarm">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
          <div>
            <Eyebrow>Recent work</Eyebrow>
            <h2 className="mt-5 max-w-[26ch] font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[56px]">
              A few homes (and one office) we’ve wired up.
            </h2>
          </div>
          <DevNote className="max-w-[24ch]">
            sample projects — replace with real ones, with client sign-off
          </DevNote>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:grid-cols-[1.35fr_1fr_1fr]">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col overflow-hidden rounded-[22px] border border-neutralLine bg-white"
            >
              <Link to="/case-study" className="block overflow-hidden">
                <div className={`${p.ratio} overflow-hidden bg-neutralWarm`}>
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
              </Link>
              <div className="flex flex-1 flex-col px-7 pb-[30px] pt-7">
                <h3 className="font-serif text-[28px] font-normal leading-[1.12] text-primary">
                  <Link
                    to="/case-study"
                    className="rounded transition-colors duration-200 hover:text-accentDeep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-4 text-pretty text-base leading-[1.62] text-textBody">
                  {p.brief}
                </p>
                <div className="mt-auto pt-[22px]">
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-accentDeep">
                    Result
                  </div>
                  <div className="mt-2 font-serif text-xl leading-[1.35] text-primary">
                    {p.result}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
