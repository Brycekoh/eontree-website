# Design handoff — implementation status

`README.md` and `HANDOFF.md` in this folder are the design package as
received, kept verbatim. They are written as work *to do*; this file records
what was actually built, so the two don't get confused.

Implemented 2026-08-19. The `.dc.html` files are design references only —
prototypes with inline styles, not production code. Open one in a browser to
see the intended result. They reference a `support.js` and `public/` paths
that only resolve in the tool that produced them, so expect them to render
unstyled images; the layout and type are still readable.

## Where each design landed

| Design file | Route | Built as |
|---|---|---|
| EonTree Homepage.dc.html | `/` | `pages/Home.jsx` + `components/{Hero,TrustStrip,Systems,OneApp,Process,Work,Brands,Contact}.jsx` |
| EonTree About.dc.html | `/about` | `pages/About.jsx` |
| EonTree Pricing.dc.html | `/pricing` | `pages/Pricing.jsx` |
| EonTree Case Study.dc.html | `/case-study` | `pages/CaseStudy.jsx` |
| EonTree Support.dc.html | `/support` | `pages/Support.jsx` |
| EonTree Where We Work.dc.html | `/where-we-work` | `pages/WhereWeWork.jsx` |
| EonTree FAQ.dc.html | `/faq` | `pages/Faq.jsx` |
| EonTree Privacy.dc.html | `/privacy` | `pages/Privacy.jsx` |
| — | all | `components/{Navbar,Footer,ui}.jsx`, `data/navigation.js` |

## HANDOFF.md fix list

All items addressed:

- **P0** — the enquiry form now POSTs to `api/enquiry.js` with validation, a
  consent gate and a real error state. A failed send can no longer render the
  thank-you.
- **P1** — unverified facts (licence number, address, phone, email, install
  counts, warranty terms) returned to bracketed `muted` placeholders.
  `Testimonials` removed. `SectionNav` removed. Solutions/Features/Products
  collapsed into one `Systems` section.
- **P2** — anchor offset now measures the header instead of assuming 80px.
  The `Reveal` component was dropped entirely, so the blank-page risk is gone
  with it. Hero uses `100svh` under an overlaid nav. Newsreader replaces
  Cormorant Garamond. All 15 footer links resolve.
- **P3** — `index.html` gained a meta description, `og:` tags and a canonical.
  Section images are lazy-loaded.

## Deviations from the handoff

- **Hero H1** is "A smart home that actually works." The handoff and
  `EonTree-copy.md` both specified "Your whole home, working as one."; the
  owner rejected that line on 2026-08-19. The subhead was reworded at the
  same time to avoid repeating "actually works" directly beneath it.
- **The two oversized PNG logos** (`logo-mark.png` 961 KB,
  `logo-horizontal.png` 497 KB) are unchanged — still worth replacing with
  SVG or a resized favicon, as P3 notes.

## Still needed from the client

Nothing bracketed on the site may be filled with invented values. Outstanding:
real licence number, address/phone/email, starting prices, support response
times, warranty length, coverage list and travel terms, permissioned
testimonial and case-study quotes, confirmed brand authorisations, a real
founder portrait, and a legal review of the privacy notice against the
Malaysian PDPA 2010.

The enquiry form also needs `RESEND_API_KEY` and `ENQUIRY_TO` set in the
Vercel project before it can deliver anything; until then it returns 503 and
shows the visitor a failure rather than a false success.
