# EonTree — repo fix checklist

Written alongside `EonTree Homepage.dc.html`, which shows the visual half of
these fixes applied. This file covers the items that live in code, not design.

---

## P0 — losing real leads

**`src/components/Contact.jsx` — the form has no backend.**
`handleSubmit` is `console.log('Consultation request:', form)` + `setSent(true)`.
Every enquiry is silently discarded while the UI says "Thanks — we'll be in
touch." Wire it to something real before any traffic reaches the site:
a Vercel serverless function, Formspree, or at minimum a `mailto:` fallback.
Show a failure state — right now a network error still shows success.

---

## P1 — publishing unverified facts

These read as fact and are not bracketed like every other placeholder.

- `src/components/Footer.jsx` — address `23, Jalan PJU 5/20, Kota Damansara,
  47810 Petaling Jaya, Selangor`, phone `+60 12-345 6789`,
  email `hello@eontree.my`, and `ST Licence #K-123456` in the copyright line.
- `src/components/TrustStrip.jsx` — repeats `ST #K-123456`, plus
  "Certified installer — Philips Hue & Ring" and a "2 years" warranty.
- `src/components/Stats.jsx` — `40+` sites, `12` brands, `2 yrs` warranty,
  `MY-wide`, under the heading "The numbers, honestly."
- `src/components/PartnerWall.jsx` + `Products.jsx` — eight named brands.

A wrong licence number is the one with legal exposure. Either confirm each
or bracket it the way `EonTree-copy.md` intended.

---

## P1 — structure

**Two navigations compete.** `Navbar` (sticky top) and `SectionNav` (right-hand
dot rail) list the same eight destinations. Remove `SectionNav` from
`src/pages/Home.jsx`. If you keep it: the dots are `h-1.5 w-1.5` (6px — far
under a 44px touch target) and `bg-slate-400/50`, and `slate` is the cool grey
DESIGN.md §3 rules out.

**Three sections, one message.** `Solutions` (4 pillars) → `Features` (6 tiles
restating them) → `Products` (5 brand cards) → `PartnerWall` (the same 5 brands
as logos). `Products` also reuses the exact four images `Solutions` uses.
Collapse to one photo-led systems section plus one brand section — the design
file shows the merge.

**`Testimonials` is fake by its own admission.** Cut it until real,
permissioned reviews exist; invented reviews subtract trust rather than add it.

---

## P2 — mechanics

**Anchor offset is wrong.** `src/utils/scroll.js` and `SectionNav.jsx` both
subtract a hardcoded `80`, but the header is `py-4` + a 56–64px logo ≈ 88–96px,
so every anchored section lands under the bar. Measure it instead:

```js
const nav = document.querySelector('header')
const y = el.getBoundingClientRect().top + window.scrollY - (nav?.offsetHeight ?? 0) - 12
```

**`Reveal` can hide the page permanently.** `index.css` sets
`[data-reveal] { opacity: 0 }` and only the JS-applied `.is-visible` restores
it — if the observer never fires (JS error, old browser), content is invisible
with no fallback. Gate the hidden state behind a class the script adds on boot,
so no-JS renders visible. Also: near-everything reveals on scroll, which
flattens emphasis. Reserve it for two or three moments.

**Hero viewport math.** `min-h-[calc(100vh-76px)]` hardcodes a nav height the
nav doesn't have, and `100vh` is wrong on mobile browsers. Overlay the nav on
the hero and use `100svh` (what the design file does).

**Cormorant Garamond below ~24px.** `Features.jsx` uses it at `text-xl` and
`Solutions` h3s at `text-xl`; the face is too light at that size. Either give
the serif display sizes only (32px+, tighter tracking) or swap the face — the
design file uses Newsreader, which holds up small.

**Opacity tints instead of tokens.** `accent/15`, `textBody/60`,
`neutralWarm/70`, `white/90`, `opacity-60` on the logo wall. Several fall under
4.5:1, and stacked gold tints go muddy. Use solid tokens; `accentDeep #9A6A22`
already exists for small gold text.

---

## P2 — footer links

Six of fifteen go nowhere. Lighting / Security / Climate / Audio-Visual all
scroll to the same `#solutions` anchor; FAQ, Guides, Support, Careers are
`href="#"`. Four social icons also point at `#`. Ship three real columns
instead of four padded ones.

---

## P3 — performance and discoverability

- `public/logo-mark.png` is **961 KB** serving as a 32px favicon;
  `public/logo-horizontal.png` is **497 KB** in the nav and footer.
  ~1.5 MB of PNG for two logos — export both as SVG, or a 32px `.ico` plus a
  ~20 KB nav PNG.
- `index.html` has no `<meta name="description">`, no `og:title` / `og:image`,
  no canonical. For a business that lives on being found and shared, these are
  the cheapest wins on the list.
- Six section images load eagerly above the fold on mobile. `Projects` already
  sets `loading="lazy"` — apply it consistently.
- `public/hero-smart-home.mp4` (~2 MB) is fine in git. Past ~50 MB, move to a
  video host or LFS.
