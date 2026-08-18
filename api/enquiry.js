// POST /api/enquiry — receives a consultation request and emails it on.
//
// Configure in Vercel (Project → Settings → Environment Variables):
//   RESEND_API_KEY  required, from https://resend.com/api-keys
//   ENQUIRY_TO      required, the inbox enquiries should land in
//   ENQUIRY_FROM    optional, defaults to Resend's shared testing sender.
//                   Set to an address on a domain verified with Resend
//                   before going live.
//
// Without RESEND_API_KEY the endpoint returns 503 so the client shows a
// failure. It must never report success for a message it did not send.

const MAX = { name: 120, phone: 40, email: 160, message: 2000 }

const clean = (v, limit) => (typeof v === 'string' ? v.trim().slice(0, limit) : '')

const escapeHtml = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  )

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {}

  const name = clean(body.name, MAX.name)
  const phone = clean(body.phone, MAX.phone)
  const email = clean(body.email, MAX.email)
  const message = clean(body.message, MAX.message)
  const propertyType = clean(body.propertyType, 40)
  const wants = Array.isArray(body.wants)
    ? body.wants.slice(0, 10).map((w) => clean(w, 40)).filter(Boolean)
    : []

  const errors = {}
  if (name.length < 2) errors.name = 'Please tell us your name.'
  if (phone.replace(/[^\d]/g, '').length < 7)
    errors.phone = 'Please give us a phone number we can reach you on.'
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    errors.email = "That email address doesn't look right."
  if (body.consent !== true)
    errors.consent = 'We need your permission to reply to this enquiry.'

  if (Object.keys(errors).length) {
    return res.status(400).json({ error: 'Please check the form.', errors })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.ENQUIRY_TO
  if (!apiKey || !to) {
    console.error('Enquiry not sent: RESEND_API_KEY or ENQUIRY_TO is not set.')
    return res.status(503).json({
      error:
        "Our enquiry form isn't connected yet. Please call or email us instead — sorry about that.",
    })
  }

  const lines = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email || '—'],
    ['Property type', propertyType || '—'],
    ['Looking to add', wants.join(', ') || '—'],
    ['Message', message || '—'],
  ]

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM || 'EonTree <onboarding@resend.dev>',
        to: [to],
        reply_to: email || undefined,
        subject: `New consultation request — ${name}`,
        text: lines.map(([k, v]) => `${k}: ${v}`).join('\n'),
        html: lines
          .map(
            ([k, v]) =>
              `<p style="margin:0 0 10px"><strong>${k}:</strong> ${escapeHtml(v)}</p>`,
          )
          .join(''),
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('Resend rejected the enquiry:', response.status, detail)
      return res
        .status(502)
        .json({ error: "We couldn't send that just now. Please try again." })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Enquiry send failed:', err)
    return res
      .status(502)
      .json({ error: "We couldn't send that just now. Please try again." })
  }
}

function safeParse(s) {
  try {
    return JSON.parse(s)
  } catch {
    return {}
  }
}
