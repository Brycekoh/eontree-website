import { Eyebrow } from './ui.jsx'

// Typographic, not a card grid — the timeline vine and icon boxes are gone.
const steps = [
  {
    n: '1',
    title: 'We sit down with you',
    text: "Tell us what you want the space to do. We walk the property, look at your existing wiring and network, and figure out what's realistic.",
  },
  {
    n: '2',
    title: 'We design the system',
    text: 'You get a clear plan — what goes where, which brands, what it does, and what it costs. No surprises on install day.',
  },
  {
    n: '3',
    title: 'We install and integrate',
    text: 'Our team fits everything and, the important part, makes it all talk to each other through one app. Tested before we leave.',
  },
  {
    n: '4',
    title: 'We show you how, and stay',
    text: "We walk you through it until it's second nature, and we're a call away if anything needs tuning or expanding later.",
  },
]

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-content px-6 pt-24 sm:px-10 lg:pt-[104px]">
      <div className="mb-14 max-w-[44ch] lg:mb-[60px]">
        <Eyebrow>What working with us looks like</Eyebrow>
        <h2 className="mt-5 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.015em] text-primary sm:text-[42px] lg:text-[56px]">
          From idea to fully running, in four steps.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-9 border-t border-neutralLine pt-9 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n}>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="block h-[9px] w-[9px] rounded-full bg-accent"
              />
              <span className="text-[11.5px] font-bold tracking-[0.16em] text-accentDeep">
                STEP {s.n}
              </span>
            </div>
            <h3 className="mt-[18px] font-serif text-[27px] font-normal leading-[1.15] text-primary">
              {s.title}
            </h3>
            <p className="mt-3.5 text-pretty text-[15.5px] leading-[1.65] text-textBody">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
