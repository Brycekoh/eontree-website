import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eyebrow, DevNote } from './ui.jsx'

const propertyTypes = ['Home', 'Commercial', 'New build']
const wantOptions = [
  'Lighting',
  'Security',
  'Climate',
  'AV',
  'Full system',
  'Not sure yet',
]

// Figures stay bracketed until the client confirms real ones.
const facts = [
  { value: '[X]+', label: 'homes and sites fitted out' },
  { value: '[X]', label: 'brands we install and support' },
  { value: '[X] yrs', label: 'workmanship warranty' },
  { value: '[Region]', label: 'where we work' },
]

const chipClass = (active) =>
  `cursor-pointer rounded-full border text-[13.5px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
    active
      ? 'border-primary bg-primary text-white'
      : 'border-neutralLine bg-white text-primary hover:border-primary/40'
  }`

const fieldClass =
  'w-full rounded-xl border border-neutralLine bg-white px-4 text-[15px] text-primary outline-none transition-shadow duration-150 placeholder:text-muted focus:border-accent focus:ring-[3px] focus:ring-accent/30'

function Label({ children, optional }) {
  return (
    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-primary">
      {children}{' '}
      {optional && (
        <span className="font-medium normal-case tracking-[0.02em] text-muted">
          optional
        </span>
      )}
    </span>
  )
}

// No <form> element (project rule) — submission runs through onClick.
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Home',
    wants: ['Full system'],
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [serverError, setServerError] = useState('')

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const toggleWant = (label) =>
    setForm((f) => ({
      ...f,
      wants: f.wants.includes(label)
        ? f.wants.filter((w) => w !== label)
        : [...f.wants, label],
    }))

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please tell us your name.'
    if (form.phone.replace(/[^\d]/g, '').length < 7)
      next.phone = 'Please give us a number we can reach you on.'
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim()))
      next.email = "That email address doesn't look right."
    if (!form.consent) next.consent = 'We need your permission to reply.'
    return next
  }

  const submit = async () => {
    const found = validate()
    setErrors(found)
    setServerError('')
    if (Object.keys(found).length) return

    setStatus('sending')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        // A failed send must never render as success.
        setStatus('error')
        setServerError(data.error || 'Something went wrong. Please try again.')
        if (data.errors) setErrors(data.errors)
        return
      }
      setStatus('sent')
    } catch {
      setStatus('error')
      setServerError(
        "We couldn't reach the server. Please check your connection and try again.",
      )
    }
  }

  const err = (key) =>
    errors[key] ? (
      <span className="mt-1.5 block text-[12.5px] text-[#B4322B]">{errors[key]}</span>
    ) : null

  return (
    <section id="contact" className="mt-28 bg-primary">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow on="dark">Let’s talk</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-serif text-[34px] font-light leading-[1.02] tracking-[-0.02em] text-neutralWarm sm:text-[46px] lg:text-[60px]">
              Tell us what you want your space to do.
            </h2>
            <p className="mt-[26px] max-w-[40ch] text-[17px] leading-[1.65] text-[rgba(247,244,239,0.82)] sm:text-lg">
              A quick chat is the best start. Tell us about the property and what
              you’re after, and we’ll come back with a plan.
            </p>
            <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-[rgba(247,244,239,0.16)] pt-8 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label}>
                  <dd className="font-serif text-[38px] leading-none text-accent">
                    {f.value}
                  </dd>
                  <dt className="mt-2.5 text-[13.5px] leading-[1.5] text-[rgba(247,244,239,0.7)]">
                    {f.label}
                  </dt>
                </div>
              ))}
            </dl>
            <DevNote on="dark" className="mt-[26px]">
              figures flagged until real ones are confirmed
            </DevNote>
          </div>

          <div className="rounded-3xl bg-white p-6 sm:p-9">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <Label>Name</Label>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={set('name')}
                  aria-invalid={Boolean(errors.name)}
                  className={`${fieldClass} h-[50px]`}
                />
                {err('name')}
              </label>

              <label className="block">
                <Label>Phone</Label>
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="Mobile"
                  value={form.phone}
                  onChange={set('phone')}
                  aria-invalid={Boolean(errors.phone)}
                  className={`${fieldClass} h-[50px]`}
                />
                {err('phone')}
              </label>

              <label className="block">
                <Label optional>Email</Label>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={set('email')}
                  aria-invalid={Boolean(errors.email)}
                  className={`${fieldClass} h-[50px]`}
                />
                {err('email')}
              </label>

              <div className="sm:col-span-2">
                <span
                  id="property-type-label"
                  className="mb-2.5 block text-xs font-bold uppercase tracking-[0.1em] text-primary"
                >
                  Property type
                </span>
                <div
                  role="radiogroup"
                  aria-labelledby="property-type-label"
                  className="flex gap-2"
                >
                  {propertyTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      role="radio"
                      aria-checked={form.propertyType === t}
                      onClick={() => setForm((f) => ({ ...f, propertyType: t }))}
                      className={`h-11 flex-1 ${chipClass(form.propertyType === t)}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <span
                  id="wants-label"
                  className="mb-2.5 block text-xs font-bold uppercase tracking-[0.1em] text-primary"
                >
                  What are you looking to add?
                </span>
                <div
                  role="group"
                  aria-labelledby="wants-label"
                  className="flex flex-wrap gap-2"
                >
                  {wantOptions.map((w) => (
                    <button
                      key={w}
                      type="button"
                      aria-pressed={form.wants.includes(w)}
                      onClick={() => toggleWant(w)}
                      className={`h-10 px-4 ${chipClass(form.wants.includes(w))}`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block sm:col-span-2">
                <Label optional>Anything else</Label>
                <textarea
                  rows={3}
                  placeholder="Rough size of the property, timing, anything already installed."
                  value={form.message}
                  onChange={set('message')}
                  className={`${fieldClass} resize-y py-3.5 leading-[1.55]`}
                />
              </label>

              <div className="sm:col-span-2">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, consent: e.target.checked }))
                    }
                    aria-invalid={Boolean(errors.consent)}
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`mt-px flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md border text-[13px] font-bold text-white peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-1 ${
                      form.consent
                        ? 'border-primary bg-primary'
                        : 'border-neutralLine bg-white'
                    }`}
                  >
                    {form.consent ? '✓' : ''}
                  </span>
                  <span className="text-[13.5px] leading-[1.5] text-textBody">
                    I’m happy for EonTree to contact me about this enquiry. We keep
                    your details for that purpose only — see the{' '}
                    <Link
                      to="/privacy"
                      className="text-accentDeep underline underline-offset-2 hover:text-primary"
                    >
                      privacy notice
                    </Link>
                    .
                  </span>
                </label>
                {err('consent')}
              </div>

              {(status === 'error' || serverError) && (
                <p
                  role="alert"
                  className="rounded-xl bg-[#FBEDEC] px-4 py-3 text-[13.5px] leading-[1.5] text-[#8A2B24] sm:col-span-2"
                >
                  {serverError || 'Something went wrong. Please try again.'}
                </p>
              )}

              {status === 'sent' ? (
                <p
                  role="status"
                  className="rounded-xl bg-neutralWarm px-4 py-4 text-center text-[15px] leading-[1.5] text-primary sm:col-span-2"
                >
                  Thanks — we’ll reply within one business day.
                </p>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={status === 'sending'}
                  className="min-h-[54px] cursor-pointer whitespace-nowrap rounded-full bg-accent px-6 text-[15.5px] font-bold text-primary transition-colors duration-200 hover:bg-accentBright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
                >
                  {status === 'sending' ? 'Sending…' : 'Request a consultation'}
                </button>
              )}

              <p className="mt-0.5 text-center text-[13.5px] leading-[1.5] text-textBody sm:col-span-2">
                We reply within one business day. Rather talk it through? Call{' '}
                <span className="text-muted">[phone]</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
