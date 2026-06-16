import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import CurveDivider from './CurveDivider.jsx'
import EyebrowPill from './EyebrowPill.jsx'
import Leaf from './Leaf.jsx'

// DESIGN.md §8 / EonTree-copy.md — consultation form. Carries id="contact" so
// the nav "Contact" link and every "Book a consultation" CTA resolve here.
// No <form> tag (CLAUDE.md rule) — controlled inputs + an onClick handler.
// Mock handler only: logs the payload, no backend.
const propertyTypes = ['Home', 'Commercial', 'New build']
const additions = ['Lighting', 'Security', 'Climate', 'AV', 'Full system', 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    lookingToAdd: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  // Mock submit — no backend. Logs the request and shows a confirmation.
  const handleSubmit = () => {
    console.log('Consultation request:', form)
    setSent(true)
  }

  const fieldClass =
    'w-full rounded-xl border border-neutralLine bg-white px-4 py-3 text-textBody placeholder:text-textBody/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40'
  const labelClass = 'block text-sm font-medium text-primary'

  return (
    <section id="contact" className="relative overflow-hidden bg-neutralWarm">
      {/* navy (Final CTA above) spills down into neutralWarm */}
      <CurveDivider fill="#1C2C39" />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Heading */}
          <div className="lg:pt-4">
            <EyebrowPill>Let’s talk</EyebrowPill>
            <h2 className="mt-5 font-serif text-4xl text-primary sm:text-5xl">
              Tell us what you want your space to do.
            </h2>
            <p className="mt-5 max-w-md text-lg text-textBody">
              A quick chat is the best start. Tell us about the property and what
              you’re after, and we’ll come back with a plan.
            </p>
          </div>

          {/* Form card (soft rounded "scene" container) */}
          <div className="rounded-3xl border border-neutralLine bg-white p-6 shadow-sm sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <Leaf className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-serif text-2xl text-primary">
                  Thanks — we’ll be in touch.
                </h3>
                <p className="mt-2 max-w-sm text-textBody">
                  We’ll review your details and come back with next steps.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    className={`mt-1.5 ${fieldClass}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    className={`mt-1.5 ${fieldClass}`}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    className={`mt-1.5 ${fieldClass}`}
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className={labelClass}>
                    Property type
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      id="propertyType"
                      value={form.propertyType}
                      onChange={update('propertyType')}
                      className={`${fieldClass} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {propertyTypes.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-textBody/50"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="lookingToAdd" className={labelClass}>
                    What are you looking to add?
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      id="lookingToAdd"
                      value={form.lookingToAdd}
                      onChange={update('lookingToAdd')}
                      className={`${fieldClass} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {additions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-textBody/50"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className={`mt-1.5 resize-y ${fieldClass}`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accentBright hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto"
                  >
                    Request a consultation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
