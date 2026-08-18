import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoldLink, OutlineLink, PageHeader } from '../components/ui.jsx'

const topics = [
  'Rewiring and existing kit',
  'Internet and reliability',
  'Moving house',
  'Discontinued products',
  'Timings and access',
  'Support and costs',
]

const faqs = [
  {
    q: 'Do I have to rewire the house?',
    a: 'Usually not. In a finished home we lean on wireless kit and only run cable where it genuinely matters — cameras, network points, and anything you don’t want dropping out. If we think a job needs cabling, we’ll show you where and why before you commit.',
  },
  {
    q: 'Will it work with the smart devices I already own?',
    a: 'Often yes, and we’ll tell you honestly when it doesn’t. Most mainstream lights, locks, and speakers can be brought into one system. Older or off-brand devices sometimes can’t be, and forcing them in tends to be the thing that makes a setup unreliable — in that case we’ll say so rather than bodge it.',
  },
  {
    q: 'What happens when the internet goes down?',
    a: 'Everything physical still works. Switches, locks, and thermostats keep functioning locally — you lose remote access from outside the house and voice control, not the ability to turn the lights on. We design it that way deliberately; a house that stops working without wi-fi is a badly designed house.',
  },
  {
    q: 'What if I sell the property?',
    a: 'The system stays with the house, and we’ll do a handover for the new owner the same way we did for you — walkthrough, app transfer, and the documentation. Buyers generally treat it as a feature. If you want anything removed instead, we can do that.',
  },
  {
    q: 'What if a brand discontinues a product or shuts down its servers?',
    a: 'It happens, and it’s the main reason we plan the system before buying anything. We favour kit that can run locally rather than depending on one company’s cloud, and we avoid designs where a single brand going away breaks everything. If a product is discontinued, replacing that one piece shouldn’t mean redoing the system.',
  },
  {
    q: 'How long does an install take?',
    a: 'A single room is usually one to two days. A whole home is typically one to two weeks depending on size and how much cabling is involved. Commercial jobs get staged around your opening hours. You get a schedule with the quote, not a vague window.',
  },
  {
    q: 'Do I have to use an app for everything?',
    a: 'No — and we’d push back if you wanted that. Every switch still works as a switch. The app, panels, and voice are extra ways in, not replacements. Anyone in the house should be able to use the place without being taught anything.',
  },
  {
    q: 'Who do I call when something stops working?',
    a: 'Us. Not a brand helpline, not the electrician who fitted it, not a call centre. We installed it, so it’s ours to fix — response times and what’s covered are set out on the support page.',
  },
  {
    q: 'Do you charge for the consultation?',
    a: 'No. The visit, the survey, and the written plan cost nothing, and there’s no obligation attached. You only pay once you’ve agreed a fixed quote and we start work.',
  },
]

// A real disclosure widget: one open at a time, answers stay in the DOM so
// they remain findable and indexable when collapsed.
export default function Faq() {
  const [open, setOpen] = useState(0)
  const navigate = useNavigate()
  const goContact = (e) => {
    e.preventDefault()
    navigate('/', { state: { scrollTo: 'contact' } })
  }

  return (
    <main>
      <PageHeader
        eyebrow="Questions"
        title={
          <>
            The things people <em className="font-light italic">actually ask us.</em>
          </>
        }
        lead="Straight answers, including the ones that aren’t in our favour. If yours isn’t here, ask — we’ll add it."
      />

      <section className="mx-auto max-w-content px-6 pt-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-accentDeep">
              In this page
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {topics.map((t) => (
                <li key={t} className="text-[15px] leading-[1.5] text-textBody">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-neutralLine">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q} className="border-b border-neutralLine">
                  <h2>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                      className="grid w-full grid-cols-[1fr_32px] items-start gap-4 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span
                        className={`font-serif text-[22px] font-normal leading-[1.25] transition-colors duration-150 sm:text-[27px] ${
                          isOpen ? 'text-accentDeep' : 'text-primary'
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutralLine text-lg leading-none text-accentDeep ${
                          isOpen ? 'bg-neutralWarm' : 'bg-white'
                        }`}
                      >
                        {isOpen ? '–' : '+'}
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    hidden={!isOpen}
                  >
                    <p className="max-w-[62ch] pb-[30px] pr-0 text-pretty text-[16px] leading-[1.68] text-textBody sm:pr-16 sm:text-[17px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 bg-neutralWarm">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="max-w-[24ch] font-serif text-[32px] font-light leading-[1.05] tracking-[-0.015em] text-primary sm:text-[44px] lg:text-[56px]">
                Still got a question we haven’t answered?
              </h2>
              <p className="mt-6 max-w-[46ch] text-pretty text-[17px] leading-[1.65] text-textBody">
                Ask it directly — you’ll get a real answer from someone who installs
                these systems, not a sales reply.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              <GoldLink href="/#contact" onClick={goContact}>
                Ask us anything
              </GoldLink>
              <OutlineLink to="/pricing">See what it costs</OutlineLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
