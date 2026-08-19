# Handoff: EonTree Technologies website — homepage rebuild + six new pages

## Overview

EonTree Technologies is a Malaysian smart-home company that designs, supplies,
installs and supports full systems — lighting, security, climate, audio-visual —
for homes and commercial spaces. The site's job is lead generation: get a
qualified enquiry into the inbox.

This package covers two pieces of work:

1. **A rebuild of the existing homepage and About page**, restructured to remove
   redundancy and fix specific defects (detailed below).
2. **Six pages that don't exist in the repo yet**: Pricing, Case Study, Support,
   Where We Work, FAQ, Privacy — plus a nav restructure into dropdown groups.

The target repo is `github.com/Brycekoh/eontree-website` — React + Vite +
Tailwind, single-page with `react-router-dom`, one component per section in
`src/components/`. `DESIGN.md` and `EonTree-copy.md` in that repo are the
existing sources of truth and this work is consistent with both.

## About the design files

The files in `design-files/` are **design references written as HTML**. They are
prototypes showing intended layout, type, colour and behaviour — **not production
code to copy in**. They use inline styles by design (they stream progressively in
the tool that produced them); do not port that pattern.

The task is to **recreate these designs in the existing React + Vite + Tailwind
codebase**, using its established patterns: one component per section under
`src/components/`, Tailwind classes driven by the `tailwind.config.js` token
names (`primary`, `accent`, `neutralWarm`, etc.), routes registered in
`src/App.jsx`, `lucide-react` for icons.

Open any `.dc.html` file in a browser to see the intended result.

## Fidelity

**High fidelity.** Colours, type sizes, weights, spacing and copy are final and
exact — reproduce them. Every hex value, font size and radius in this README is
the intended value, not an approximation.

Two deliberate exceptions:

- **Bracketed content is real missing data**, not placeholder styling. `[X]`,
  `RM [X]`, `[phone]`, `[address]`, `[X] hours` must be filled with confirmed
  facts by the client before launch, and must NOT be invented. They are rendered
  in `#9AA3AA` (a muted grey) so they're visibly unconfirmed — keep that
  treatment until real values arrive.
- **Monospace notes in `#9AA3AA`** are instructions to the client/developer
  (e.g. "sample partners — show only brands EonTree is authorised for"). Remove
  them when the underlying content is real; don't ship them.

---

## Design tokens

### Colours

The repo's `tailwind.config.js` already defines these. Two additions/changes:

| Token | Hex | Use |
|---|---|---|
| `primary` | `#1C2C39` | Headings, dark bands, body text on light |
| `primaryAlt` | `#25333E` | Footer surface, navy card interiors |
| `accent` | `#E0B384` | Gold — buttons, numerals, eyebrows on dark |
| `accentBright` | `#F5C18A` | Button hover only |
| `accentDeep` | `#8A5A1E` | **Changed from `#9A6A22`.** Gold text on white — this passes 4.5:1; the old value was borderline |
| `pageBg` | `#FFFFFF` | Dominant background |
| `neutralWarm` | `#F7F4EF` | Alternating warm band |
| `neutralLine` | `#E8E2D9` | All hairlines, card borders, rules |
| `textBody` | `#3A4650` | Body copy on light |
| `muted` | `#9AA3AA` | **New.** Unconfirmed/bracketed data and monospace notes |

On navy surfaces, text uses `rgba(247,244,239, …)`: `0.82` for body, `0.78` for
list items and footer links, `0.7` for labels, `0.45` for notes. Rules on navy
are `rgba(247,244,239,0.16)`.

**Do not** use `slate-*` or any cool grey — DESIGN.md §3 forbids it and the old
`SectionNav` violated it.

### Typography

**Changed from the repo.** Cormorant Garamond is too light below ~24px (the old
`Features.jsx` used it at `text-xl`) and Inter is generic. Replace with:

- **Display / headings — Newsreader** (Google Fonts, weights 300/400/500, italic
  300/400). Variable optical size: load as `Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300`.
  Headings use weight **300** at display sizes, **400** below ~32px.
- **Body / UI — Manrope** (weights 400/500/600/700).

```js
// tailwind.config.js
fontFamily: {
  serif: ['Newsreader', 'Georgia', 'serif'],
  sans: ['Manrope', 'system-ui', 'sans-serif'],
}
```

Type scale as used (desktop):

| Role | Size | Weight | Line-height | Letter-spacing | Family |
|---|---|---|---|---|---|
| Hero h1 (homepage) | 92px | 300 | 0.98 | -0.025em | Newsreader |
| Page h1 (sub-pages) | 78px | 300 | 1.0 | -0.025em | Newsreader |
| Case-study h1 | 80px | 300 | 0.99 | -0.025em | Newsreader |
| Section h2 | 52–62px | 300 | 1.02–1.06 | -0.015 to -0.02em | Newsreader |
| Card / item h3 | 27–40px | 400 | 1.1–1.25 | -0.01em | Newsreader |
| Pull quote | 32–44px | 300 italic | 1.18–1.3 | -0.015em | Newsreader |
| Big numerals | 32–46px | 300 | 1 | — | Newsreader |
| Lead paragraph | 18–19px | 400 | 1.6–1.68 | — | Manrope |
| Body | 16–17.5px | 400 | 1.6–1.68 | — | Manrope |
| Small body | 15–15.5px | 400 | 1.5–1.6 | — | Manrope |
| Eyebrow | 11.5px | 700 | — | 0.22em, uppercase | Manrope |
| Label / kicker | 11–12px | 700 | — | 0.1–0.16em, uppercase | Manrope |
| Nav link | 14.5px | 500 | — | 0.01em | Manrope |
| Button | 14.5–15.5px | 700 (600 on secondary) | — | — | Manrope |
| Monospace note | 10.5–11px | 400 | 1.6 | — | monospace |

Long-form paragraphs are capped at `66–70ch`; body paragraphs in cards at
`32–56ch`. Headings are capped with `max-width` in `ch` (values given per screen
below) so line breaks are deliberate. `text-wrap: pretty` on paragraphs,
`text-wrap: balance` on the hero h1.

### Spacing, radius, shadow

- Content width: `max-width: 1240px`, `padding: 0 40px`.
- Section rhythm: `104px` top padding for light sections; `88–104px` vertical for
  banded (coloured) sections; `112px` margin-top before a colour change. Sections
  are intentionally **not** uniform — the hero, the navy bands, and the closing
  CTA are heavier than list sections.
- Radii: cards `24px`; smaller cards/panels `20–22px`; images in cards
  `20–28px`; dropdown panel `16px`; inputs `12px`; chips/buttons `999px`.
  Two signature asymmetric radii: hero image `28px 28px 28px 120px`, About
  portrait `24px 24px 24px 96px`.
- Shadows are soft and low only: `0 28px 64px -32px rgba(28,44,57,0.45)`
  (dropdown), `0 8px 20px -12px rgba(28,44,57,0.5)` (nav CTA),
  `0 16px 36px -18px rgba(0,0,0,0.6)` (CTA on photo). No harsh borders, no heavy
  drop shadows.
- Layout is **flex/grid with `gap`** throughout — never margin-spaced inline
  siblings.

---

## Global chrome

### Nav (all pages)

`position: sticky; top: 0; z-index: 50`, `background: rgba(255,255,255,0.94)`,
`backdrop-filter: blur(10px)`, `border-bottom: 1px solid #E8E2D9`.
Inner: `max-width:1240px; padding:14px 40px; display:flex; justify-content:space-between; gap:40px`.

Left: `public/logo-horizontal.png` at `height:46px` (44px in footer), linking home.

Centre: **four groups**, `gap:30px`. This replaces the old six flat links AND
removes `SectionNav` entirely (see "Defects fixed").

| Group | Target | Dropdown items (label — hint) |
|---|---|---|
| Systems ▾ | `/#systems` | Lighting — Scenes, dimming, occupancy · Security — Cameras, locks, alerts · Climate — Heating, cooling, blinds · Audio-Visual — Multi-room sound and TV · How it all connects — Four apps become one (`/#oneapp`) |
| Pricing | `/pricing` | none (no caret) |
| Work ▾ | `/#work` | Recent projects — Three homes and an office · Full case study — The whole-house retrofit, in detail (`/case-study`) · Brands we install — What we're authorised for (`/#brands`) |
| Support ▾ | `/support` | After the install — Warranty, response times, expansion · Where we work — Service areas and travel (`/where-we-work`) · Questions — Rewiring, existing kit, moving house (`/faq`) · Our story — Why EonTree exists (`/about`) |

Dropdown behaviour: opens on `mouseenter` of the `<li>`, closes on `mouseleave`.
Panel is `position:absolute; top:100%; left:-20px` with `padding-top:16px` (an
invisible bridge so the pointer can travel from label to panel without closing).
Panel: `min-width:288px`, white, `1px solid #E8E2D9`, `radius:16px`,
`padding:10px`. Each item is a block link, `padding:11px 14px`, `radius:10px`,
hover `background:#F7F4EF; color:#8A5A1E`; label 14px/600, hint 12.5px in
`#3A4650`. Caret is `▾` at 8.5px, `translateY(1px)`, only on groups with items.

**Add keyboard support when you build this** — the prototype is pointer-only.
Groups need `aria-expanded`, focus-visible rings, Escape to close, and the panel
should open on focus. Also add the mobile hamburger treatment; the repo's
existing `Navbar.jsx` pattern is fine, with groups becoming nested lists.

Active page: its group label is `#8A5A1E` instead of `#1C2C39`. About, FAQ,
Support, Where We Work all mark **Support** active; Case Study marks **Work**.

Right: gold pill CTA "Book a consultation" → `/#contact`.
`min-height:44px; padding:0 28px; white-space:nowrap; border-radius:999px;
background:#E0B384; color:#1C2C39; font-weight:700`, hover `#F5C18A`.
**`white-space:nowrap` and `min-height` (not `height`) are required** — with a
fixed height and normal wrapping this button wraps to two lines during font load
and the second line escapes the pill.

### Footer (all pages)

`background:#25333E`, `border-top:1px solid rgba(247,244,239,0.12)`.
Top: `padding:64px 40px 40px`, `grid-template-columns:1.4fr 1fr 1fr 1fr`, `gap:48px`.

Column 1: logo at 44px, then the tagline in Newsreader italic 18px,
`rgba(247,244,239,0.7)`, `max-width:30ch`: "Rooted in nature, powered by technology."

Columns 2–4 — **every link must resolve**; the repo's version had 6 of 15 dead:

- **Systems** — Lighting / Security / Climate / Audio-Visual → `/#systems`
- **Company** — Our story → `/about` · Pricing → `/pricing` · Case study →
  `/case-study` · Where we work → `/where-we-work`
- **Support** — After the install → `/support` · Questions → `/faq` ·
  Book a consultation → `/#contact` · `[phone]`

Column heading: 11.5px/700, `0.16em`, uppercase, `#E0B384`. Links 14.5px,
`rgba(247,244,239,0.78)`, hover `#E0B384`. Items with no destination yet (the
bracketed phone) render at `rgba(247,244,239,0.42)` and are not links.

Bottom bar: `border-top:1px solid rgba(247,244,239,0.12)`, `padding:24px 40px 44px`,
space-between. Left: "© 2026 EonTree Technologies." + `[License #PLACEHOLDER]` in
`rgba(247,244,239,0.4)`. Right: "Privacy notice" → `/privacy`.

---

## Screens

### 1. Homepage — `design-files/EonTree Homepage.dc.html`

Route `/`. Twelve sections in the repo became eight. Order: hero → trust strip →
systems → one app → process → work → brands → contact.

**Hero.** Full-bleed, `height:100svh; min-height:640px`, navy `#1C2C39` base.
The nav overlays it (`position:fixed`) rather than sitting above it — this is
what removes the repo's `calc(100vh - 76px)` guess.

Layers, bottom to top:
1. `<img>` poster fallback, `object-fit:cover`, currently `project-holiday.jpg`.
2. `<video>` — `src="/hero-smart-home.mp4"`, `poster` the same still, `autoplay
   muted loop playsinline preload="metadata"`, `object-fit:cover`. **On `error`,
   hide the video element** so the poster underneath is unambiguously what shows.
3. Vertical scrim: `linear-gradient(180deg, rgba(28,44,57,0.26) 0%,
   rgba(28,44,57,0.06) 34%, rgba(28,44,57,0.58) 76%, rgba(28,44,57,0.86) 100%)`.
4. Horizontal scrim: `linear-gradient(90deg, rgba(28,44,57,0.3) 0%,
   rgba(28,44,57,0.06) 52%, transparent 100%)`.

The scrim values matter: the repo's version was `0.72 → 0.05` left-to-right,
which flattened the footage and depended on the clip's composition. Light at the
top so the imagery reads, heavy at the bottom where the type sits.

Content: `max-width:1240px`, `padding:120px 40px 0`, flex column,
`justify-content:flex-end`.
- Eyebrow "Smart home, properly installed" in `#E0B384`.
- h1 "Your whole home, **working as one.**" — second phrase italic, `max-width:20ch`,
  92px/300/0.98/-0.025em, white, `text-shadow:0 2px 30px rgba(28,44,57,0.35)`.
- Sub, `max-width:52ch`, 19px, `rgba(255,255,255,0.9)`.
- Two CTAs, `gap:14px`: gold "Book a consultation" → `#contact`; outlined
  "See what we install" (`1px solid rgba(255,255,255,0.6)`, white, hover inverts
  to white bg + navy text) → `#systems`. Both `min-height:54px`, nowrap.
  **The repo dropped the second CTA — it's in `EonTree-copy.md` and belongs.**
- Bottom strip above a `1px rgba(255,255,255,0.22)` rule: three facts
  (4 systems / 1 app / 1 team) — Newsreader 32px gold numeral + 12px uppercase
  label — and a "Scroll" cue on the right: an animated 1px vertical line,
  `@keyframes` translating 0→6px and opacity .55→1 over 2.4s. Respect
  `prefers-reduced-motion` and disable it.

**Nav scroll state.** A scroll listener flips at `scrollY > innerHeight * 0.6`:
transparent nav (`rgba(28,44,57,0.28)` bg, white links,
`rgba(255,255,255,0.18)` border) → solid (`rgba(255,255,255,0.94)`, navy links,
`#E8E2D9` border), `transition: background 300ms, border-color 300ms`.
Use a passive listener.

**Trust strip.** `padding:34px 40px 0`, `border-bottom:1px solid #E8E2D9`.
Single wrapping flex row, `row-gap:18px; column-gap:40px; align-items:center`.
Label "Licensed, certified, insured" (11.5px/700/0.2em/uppercase, `#1C2C39`) then
four credential items at 14.5px `#3A4650` with their bracketed parts in `#9AA3AA`.
**Every item needs `white-space:nowrap` and `line-height:1.4`** — with baseline
alignment and internal wrapping, the flex lines sat 32px apart and collided.
No icons here; the repo's four gold icon circles were the first of four
consecutive icon-in-tinted-shape sections.

**Systems** (`#systems`). Replaces the repo's `Solutions` + `Features` + the card
half of `Products` — those three said the same thing three times.

Header row: eyebrow "What we do" / h2 "Four systems, one home." (56px) on the
left, and a 36ch paragraph right-aligned to the baseline: "Each one works on its
own. The point is that they work together — one app, one set of scenes, one team
to call."

Then four full-width cards, `gap:26px`, each `1px solid #E8E2D9`, `radius:24px`,
`min-height:360px`, and each a two-column grid **alternating image side**:
odd cards `1.05fr 1fr` with image first, even cards `1fr 1.05fr` with image
second (use CSS `order`). Photo fills its half via absolute-positioned
`object-fit:cover`.

Text half, `padding:52px`, vertically centred: `01`–`04` in Newsreader 15px
`#8A5A1E` beside an h3 at 40px/400; blurb at 17px capped `46ch`; then capability
chips — 13px/600, `#F7F4EF` bg, `1px solid #E8E2D9`, `radius:999px`,
`padding:7px 14px`, in a `gap:8px` wrapping flex row.

| # | Title | Image | Chips |
|---|---|---|---|
| 01 | Lighting | `lighting.jpg` | Scenes · Dimming · Occupancy sensing · Away mode |
| 02 | Security | `security.jpg` | Cameras · Smart locks · Motion alerts · Door sensors |
| 03 | Climate | `climate.jpg` | Zoned control · Blinds · Schedules · Energy saving |
| 04 | Audio-Visual | `av.jpg` | Multi-room audio · Cable management · Voice control · One remote |

Blurbs are verbatim from `EonTree-copy.md`.

**One app** (`#oneapp`). Navy band — **this section is new and it's the most
important addition.** The whole pitch is "one system, one app" and the repo
never showed it.

`background:#1C2C39`, decorative radial `rgba(224,179,132,0.18)` blur top-right.
`padding:104px 40px`, grid `0.95fr 1.05fr`, `gap:80px`, centred.

Left: eyebrow "The part that matters" gold; h2 "Four apps become one." 56px in
`#F7F4EF`; paragraph capped `40ch` with "Evening" inline in `#E0B384`/600; then
four numbered rows (`01`–`04`) separated by `rgba(247,244,239,0.16)` rules,
`padding:16px 0`, gold number in a `min-width:26px` column.

Right: two columns, `gap:22px`. A `3/4` photo (`hub.jpg`, radius 22px) and a
mock app panel — `radius:26px`, `1px solid rgba(247,244,239,0.18)`,
`background:#25333E`, `padding:22px`, `height:440px`, flex column. Top: "HOME"
kicker gold 10.5px + "Good evening" Newsreader 26px. Bottom (pushed by
`margin-top:auto`): four rows on `rgba(247,244,239,0.07)`, `radius:12px`,
`padding:12px 14px`, label 12.5px/600 left, state right — *Living room lights
32%* (gold), *Front door LOCKED*, *Climate 22°* (gold), *Kitchen speakers
PLAYING*. Under them, a monospace note: "app screen placeholder — drop real UI".
Replace this whole panel with a screenshot of the real control app when there is
one.

**Process** (`#process`). Light, typographic — no cards, no timeline vine.
44ch heading block, then a 4-column grid on a `1px #E8E2D9` top rule,
`gap:36px`, `padding-top:36px`. Each step: a 9px gold dot + "STEP n" (11.5px/700/
0.16em, `#8A5A1E`), h3 27px/400, body 15.5px. Copy verbatim from
`EonTree-copy.md`, except step 4's title shortened to "We show you how, and stay".

**Work** (`#work`). `background:#F7F4EF`, `padding:104px 40px`.
Header left (eyebrow "Recent work", h2 56px capped `26ch`); monospace caveat
right: "sample projects — replace with real ones, with client sign-off".
Grid `1.35fr 1fr 1fr`, `gap:24px` — the first card is deliberately wider.
Cards: white, `1px solid #E8E2D9`, `radius:22px`, flex column. Image on top
(`16/11` for the wide card, `4/3` for the others). Body `padding:28px 28px 30px`:
h3 28px/400, brief 16px, then pushed to the bottom a "RESULT" label (10.5px/700/
0.16em/`#8A5A1E`) and the result line in Newsreader 20px `#1C2C39`.
Cards link to the case study.

**Brands** (`#brands`). Grid `0.85fr 1.15fr`, `gap:72px`.
Left: eyebrow "The kit", h2 52px, paragraph capped `34ch`, monospace caveat.
Right: 4-column logo grid built as `gap:1px` over a `#E8E2D9` background with a
`1px` border and `radius:20px` — the gap reveals the line colour as hairlines.
Cells: white, `height:116px`, centred column, `gap:10px`, 26px SVG mark + name at
12.5px/600 `#1C2C39`. Eight brands: Philips Hue, Sonos, Ring, tado°, SmartThings,
Yale, Ubiquiti, Bosch.
**Full opacity, not the repo's `opacity-60`** — and these single-colour Simple
Icons glyphs undersell real partnerships; use official lockups once authorised.

**Contact** (`#contact`). Navy, `padding:104px 40px`, grid `1fr 1fr`, `gap:80px`.

Left: eyebrow "Let's talk" gold; h2 60px capped `18ch`; sub capped `40ch`; then a
2×2 `dl` on a top rule — four figures in Newsreader 38px gold with 13.5px labels
(`[X]+` homes and sites fitted out · `[X]` brands we install and support ·
`[X] yrs` workmanship warranty · `[Region]` where we work), and a monospace note
"figures flagged until real ones are confirmed".
**These replace the repo's standalone `Stats` band, whose heading "The numbers,
honestly." sat above invented figures (40+/12/2yrs).**

Right: white card, `radius:24px`, `padding:36px`, 2-column grid, `gap:16px`.
Fields, in order — Name (full width) · Phone · Email *(labelled optional)* ·
Property type · What are you looking to add? · Anything else *(optional)*.

- Inputs: `height:50px`, `padding:0 16px`, `1px solid #E8E2D9`, `radius:12px`,
  15px. Focus: `border-color:#E0B384` + `box-shadow:0 0 0 3px rgba(224,179,132,0.28)`.
- Labels: 12px/700/`0.1em`/uppercase `#1C2C39`; the word "optional" appended in
  12px/500 sentence-case `#9AA3AA`.
- Property type: **three chips, not a `<select>`** — single-select,
  `flex:1; height:44px; radius:999px`. Selected `#1C2C39` bg + white text;
  unselected white + `#E8E2D9` border + `#1C2C39` text. Default "Home".
- What to add: **six chips, multi-select**, `height:40px; padding:0 16px`, same
  colours. Default "Full system".
- Textarea: 3 rows, placeholder "Rough size of the property, timing, anything
  already installed."
- **Consent row** (new): a 22px custom checkbox (`radius:6px`; checked
  `#1C2C39` bg with a white `✓`, unchecked white with `#E8E2D9` border) beside
  13.5px text: "I'm happy for EonTree to contact me about this enquiry. We keep
  your details for that purpose only — see the privacy notice." with the last
  phrase linking to `/privacy`.
- Submit: full-width gold pill, `min-height:54px`, label "Request a
  consultation" → on success "Thanks — we'll reply within one business day".
- Under it, centred 13.5px: "We reply within one business day. Rather talk it
  through? Call `[phone]`."

**The form must actually submit.** In the repo `handleSubmit` is
`console.log(form); setSent(true)` — every enquiry is discarded while the UI
claims success. Wire a real endpoint (Vercel serverless function, Formspree, or
at minimum `mailto:`), validate name + phone, and show a failure state; a network
error must not render the thank-you. This is the single highest-value item in
this handoff.

### 2. About — `design-files/EonTree About.dc.html`

Route `/about`. Rebuild of `src/pages/About.jsx`. Nav marks **Support** active.

**Opening.** `padding:88px 40px 0`, grid `1.15fr 0.85fr`, `gap:72px`, centred.
Left: eyebrow "Our story"; h1 "Technology should fit your life, **not run it.**"
(78px/300, second phrase italic, capped `19ch`); lead 19px capped `46ch`.

Right: the **founder portrait**. `aspect-ratio:4/5`,
`radius:24px 24px 24px 96px`, `1px solid #E8E2D9`, with a soft gold radial glow
behind it (`inset:-8% -6% -4% 4%`, `blur(8px)`).

Currently a placeholder: `repeating-linear-gradient(135deg, #F7F4EF 0 10px,
#F1ECE3 10px 20px)` with two centred monospace lines — "FOUNDER PORTRAIT" in
`#8A5A1E` and the brief in `#9AA3AA`: "Ching Yang — waist-up, on a real install
or in a finished room. Natural light, warm tones, plain shirt. Drop file here."

Caption below: "Ching Yang" (Newsreader 22px) / "Founder, EonTree Technologies"
(13.5px).

**On the photo:** `private-assets/founder.jpeg` exists in the repo and is
referenced nowhere. It is not usable — a casual park snapshot in a graphic tee
with inflatable animals in frame. A real portrait is needed. Note also that
`private-assets/` sits outside `public/`, so Vite won't serve it; whatever image
is used must live in `public/`.

**Story.** Single measured column, `max-width:66ch`, centred. Eyebrow "How it
started"; h2 "It began with a house that wouldn't behave." (54px); four
paragraphs at 19px/1.68 — verbatim from `About.jsx`, with the trailing "Rooted in
nature, powered by technology." dropped from the last one (it's the footer
tagline). Then a pull quote: `border-left:2px solid #E0B384`, `padding-left:28px`,
Newsreader italic 32px/300: "Get the roots right and everything above looks
after itself."

The repo centred three consecutive sections; one column reads better and the
`66ch` measure is the point.

**Navy band.** `padding:104px 40px`, grid `1.05fr 0.95fr`, `gap:80px`, plus a
centred-top radial gold glow. Left: eyebrow "What we're built around"; the quote
"We sell the system, **not the gadget.**" as an h2-scale blockquote (62px/300,
capped `20ch`, second phrase italic); supporting paragraph capped `44ch`.
Right: three metric rows on rules — Newsreader 46px/300 gold value in a
`min-width:132px` column beside a 15px label, values bracketed `[X]`, plus the
monospace note "figures bracketed until confirmed — the company started in 2026,
so keep the counts honest".

**This replaces the repo's gradient `bg-clip-text` numerals** — `font-sans
text-6xl font-black tracking-[-0.08em]` with a three-stop gradient was the
loudest element on the site and contradicted DESIGN.md §3 (serif headings) and
§7 (no large gradient fills). It also duplicated `Stats.jsx`'s figures. And with
the company founded in 2026, "40+ homes fitted out" doesn't survive arithmetic —
either the count or the date has to move.

**Beliefs.** Grid `0.8fr 1.2fr`, `gap:80px`. Left: eyebrow "How we work", h2
"What we believe." (54px), paragraph capped `32ch`. Right: four articles on
rules, each a `56px 1fr` grid — `01`–`04` in Newsreader 17px `#8A5A1E`, h3
31px/400 capped `30ch`, body 16.5px capped `56ch`, `padding:34px 0`.
No icon boxes.

**CTA.** `#F7F4EF`, grid `1.1fr 0.9fr`. h2 "Want to see what we'd do with your
space?" (58px capped `24ch`) + paragraph. Right: a white card with the gold CTA
to `/#contact`, an "OR" divider (two 1px rules flanking 12px uppercase
`#9AA3AA`), then "Call us directly" / `[phone]` in Newsreader 28px `#9AA3AA` /
"Business hours, a real person — not a queue."
The repo's CTA button navigated to the homepage form; giving this page its own
path (and a phone number) is the point.

Also dropped: `StoryThread`, a 260×980 hand-drawn SVG vine absolutely positioned
at `top-[32rem] h-[62rem]` behind the page, plus a second decorative leaf SVG and
`leaf-breathe` animations. Pinned to pixel offsets, it drifts out of register
with its sections on any copy or viewport change.

### 3. Pricing — `design-files/EonTree Pricing.dc.html`

Route `/pricing`. **New page. The most commercially valuable addition** — nothing
anywhere on the site mentioned money, which is the top reason a considered buyer
doesn't enquire.

**Header.** Grid `1.15fr 0.85fr`, baseline-aligned. Eyebrow "What it costs"; h1
"Rough numbers, **before you ask us.**" (78px, capped `20ch`); right paragraph:
"Every property is different, so these are honest starting points — not quotes.
The consultation is free, and you get a fixed price in writing before anything is
ordered."

**Three tiers.** `grid-template-columns:repeat(3,1fr)`, `gap:24px`, stretch.
Cards `radius:24px`, `padding:36px 34px 34px`, flex column. Card 2 is **navy**
(`#1C2C39`, `#F7F4EF` text, gold price, `rgba(247,244,239,0.16)` rules) and
carries a gold "MOST COMMON" pill; cards 1 and 3 are white with `#E8E2D9`
borders. The title row has `min-height:44px` so the three headings align despite
the pill.

Structure per card: h2 28–30px/400 capped `12ch` · who-it's-for 15.5px capped
`32ch` · price row ("from" 13px + Newsreader 44px/300 value) · included list on
hairline rules, 15px, `padding:13px 0` · timing note pushed to the bottom with
`margin:auto 0 0`.

| Tier | From | Who | Included | Note |
|---|---|---|---|---|
| One room | `RM [X]` | A single room done properly — usually lighting or an AV setup. | Consultation and a written plan · One system, one room · App set up on your devices · Handover walkthrough | Typically one to two days on site. |
| Whole home *(navy, Most common)* | `RM [X]` | Two or more systems across the property, tied into one app. | Full property survey and system design · Two or more systems integrated · Network and cabling where it's needed · Scenes set up with you · `[X]`-year workmanship warranty | Typically one to two weeks, depending on size. |
| Commercial | `RM [X]` | Offices, retail, and short-stay properties with staff to think about. | Site survey with your contractor · Access control, climate, and meeting-room AV · Tablet or panel control for staff · Staged install around opening hours · Maintenance agreement available | Quoted per site after a walkthrough. |

Monospace note under the grid: "every figure bracketed — replace with real
starting prices before this page goes live".

**What moves the price.** `#F7F4EF` band, grid `0.85fr 1.15fr`, `gap:80px`.
Left: eyebrow "Why quotes differ", h2 "What moves the price." (52px capped
`18ch`), paragraph capped `32ch`. Right: five numbered rows on rules
(`56px 1fr`, `padding:30px 0`): **Retrofit or new build** · **How many systems** ·
**Wired or wireless** · **Brand tier** · **The state of your network**. Full copy
in the file — the tone is deliberately candid ("We'll tell you where spending
more actually buys you something and where it doesn't").

**How we quote.** Three columns on a top rule, same dot + kicker pattern as the
homepage process, kickers "FIRST" / "THEN" / "ONLY THEN": a free consultation ·
a written plan and fixed price · you decide.

**CTA.** Navy, grid `1.1fr 0.9fr`. h2 "Want a real number for your place?" +
paragraph; right, stacked gold "Book a consultation" and outlined "Read the
questions first" → `/faq`.

### 4. Case Study — `design-files/EonTree Case Study.dc.html`

Route `/case-study`. **New page.** The homepage's three cards are teasers; a
considered buyer wants one project in full.

**Header.** Eyebrow "Case study · Whole-house retrofit"; h1 "Three systems, one
app, **no walls opened.**" (80px capped `22ch`); then a `21/9` hero image
(`project-home.jpg`, `radius:28px`); then a four-up `dl` on a bottom rule,
`padding:34px 0` — label 11px/700/`0.16em`/gold + value Newsreader 26px:
Property `[X]`-bed family home · Systems Lighting · Security · Climate ·
Time on site `[X]` days · Project cost `RM [X]`.

**Narrative.** Grid `0.42fr 1.58fr`, `gap:72px`. Left column is
`position:sticky; top:120px`: "THE SHORT VERSION" kicker, a 16px summary, and an
outlined "Discuss a similar job" button. Right: four chapters, each h2 38px/400
plus paragraphs at 18.5px/1.68 capped `68ch`, `padding-bottom:52px`:

1. **The brief** — devices bought one at a time; each worked, together they didn't.
2. **What we found on the survey** — two competing hubs, an overloaded router,
   no cabling near the camera positions, wi-fi not reaching the far bedroom.
   The network was the real problem and was fixed first.
3. **What we did** — new access points; cable to only three positions; wireless
   elsewhere; lighting zoned then grouped into the four scenes the family
   actually named; away mode ties security and climate together; tested over a
   full day/night cycle; evening handover including the teenagers.
4. **Where it landed** — one app, four scenes, every switch still a switch. Two
   callbacks in nine months.

Full copy in the file. It's written as a real project record — plausible detail,
no invented statistics beyond the bracketed ones.

**Quote band.** Navy, grid `1.15fr 0.85fr`. Left: "WHAT THE CLIENT SAID" gold
kicker; the quote in Newsreader italic 44px/300 capped `30ch` ("The lighting
scenes alone changed how the house feels in the evening."); attribution
"Homeowner · `[sample quote — replace with a permissioned one]`".
Right: four outcome rows on rules — 15px label left, Newsreader 32px gold value
right: Apps replaced by one **4 → 1** · Rooms brought onto the system `[X]` ·
Walls opened **None** · Callouts since handover **2**.

**What went in.** h2 "What went in." (46px) with a monospace caveat "stock scenes
— swap for photos of this actual install". Grid `1.4fr 1fr 1fr`, `gap:20px`:
`lighting.jpg` (`4/3`), `hub.jpg` (`3/4`), `security.jpg` (`3/4`), each
`radius:20px` with a 14.5px caption below. Then a three-column kit summary on a
top rule: Lighting / Security / Climate, each a gold uppercase label + 16px detail.

**CTA.** `#F7F4EF`, "Got a house that needs the same treatment?" → consultation
+ `/pricing`.

### 5. Support — `design-files/EonTree Support.dc.html`

Route `/support`. **New page.** "We stay after the install" is the central
differentiator and was never specified anywhere — naming it makes it credible and
turns it into recurring revenue.

**Header.** Eyebrow "After the install"; h1 "The part most installers **skip.**"
(78px capped `20ch`); right paragraph about value being in year three, not week
one.

**Response tiers.** Navy band, `padding:88px 40px`. Header row: eyebrow "What we
commit to" + h2 "Response times, in writing." (52px capped `22ch`) left, a 32ch
line right ("Not \"we'll get to it\". Three tiers, so you know what to expect
before you need it."). Then three rows, `grid-template-columns:0.9fr 1.4fr 0.7fr`,
`gap:40px`, `padding:30px 0`, baseline-aligned, on
`rgba(247,244,239,0.16)` rules: h3 29px/400 · 16px description capped `52ch` ·
right-aligned Newsreader 34px/300 gold SLA, nowrap.

| Tier | Covers | SLA |
|---|---|---|
| Something's down | Security offline, no heating, locks not responding — anything affecting safety or making the house unusable. | `[X] hours` |
| Something's annoying | One light won't join a scene, a camera keeps dropping, the app is slow. | `[X] business days` |
| You want a change | A new scene, a room added, a device swapped, someone new needing access. | `[X] business days` |

Monospace note: "bracketed times are placeholders — commit only to what you can
genuinely hold".

**Covered / chargeable.** Two cards, `gap:24px` — "Included" (white) and
"Chargeable" (`#F7F4EF`), each h3 28px/400 plus a hairline-ruled list at 15.5px.
Five items each; full lists in the file. The chargeable card closes with "We'll
always tell you which side of this line a job falls on before we do it." Being
explicit about what *isn't* covered is what makes the covered list believable.

**Two plans.** Grid `0.85fr 1.15fr`. Left: eyebrow "Ongoing care", h2 "Two ways
to be looked after." (52px capped `18ch`), paragraph capped `32ch`. Right: two
cards — **Standard cover** (white, "Included" / "with every install":
`[X]`-year workmanship warranty · phone and remote support · response times as
above · handover documentation on file) and **Care plan** (navy, `RM [X]` /
"per month": priority response · proactive monitoring · annual on-site health
check · unlimited remote fixes and scene changes · discounted expansion rates).

**CTA.** `#F7F4EF`, "Already have a system that nobody supports?" — offers to
take over other installers' work: "Book a system audit" + "Check we cover your
area" → `/where-we-work`.

### 6. Where We Work — `design-files/EonTree Where We Work.dc.html`

Route `/where-we-work`. **New page.** The repo claimed "MY-wide, Penang to Johor
Bahru" with no coverage content; this category is won on local search.

**Header.** Eyebrow "Service areas"; h1 "Where we work, **and how far we go.**"
(78px capped `20ch`); right paragraph: "Support is only real if we can get to
you. So rather than claiming the whole country, here's where we're genuinely
quick — and where we'll still come for the right project."

**Two zones.** `grid-template-columns:1fr 1fr`, `gap:24px`, stretch.

- **Klang Valley** — navy card, "CORE COVERAGE" kicker with a gold dot. Places
  as chips on `rgba(247,244,239,0.08)`: Petaling Jaya, Kuala Lumpur, Damansara,
  Subang Jaya, Shah Alam, Puchong, Cyberjaya, Klang. Facts pinned to the bottom
  on a rule: Response — Standard times apply · Travel charge — None.
- **Wider Malaysia** — white card, "BY ARRANGEMENT". Chips on `#F7F4EF`: Penang,
  Johor Bahru, Melaka, Ipoh, Seremban, Kuantan. Facts: Minimum project size
  `[X]` · Travel — Quoted up front.

Card anatomy: dot + kicker · h2 34px/400 · line capped `40ch` · chip row
(13.5px/600, `radius:999px`, `padding:8px 15px`) · facts block with
`margin:auto 0 0` and a top rule, each fact a space-between row.

Monospace note: "confirm the real coverage list and travel terms before
publishing — and a proper service-area map would strengthen this page".
**A real map is worth building here** — geographic data rather than a drawn SVG.

**What distance changes.** `#F7F4EF`, three numbered rows: Response times, not
promises · Travel is quoted, never hidden · We'd rather turn work down. The last
one is deliberate: declining work you can't support is a trust signal.

**CTA.** Navy, "Not sure if you're in range?" — "Check your address" +
"See response times".

### 7. FAQ — `design-files/EonTree FAQ.dc.html`

Route `/faq`. **New page.** The repo's footer already linked to a nonexistent FAQ.

**Header.** Eyebrow "Questions"; h1 "The things people **actually ask us.**"
(78px capped `20ch`); right paragraph: "Straight answers, including the ones that
aren't in our favour. If yours isn't here, ask — we'll add it."

**Body.** Grid `0.55fr 1.45fr`, `gap:80px`. Left is `position:sticky; top:120px`
— an "IN THIS PAGE" kicker over six topic lines (Rewiring and existing kit ·
Internet and reliability · Moving house · Discontinued products · Timings and
access · Support and costs). These are labels, not links.

Right: nine accordion items on `#E8E2D9` rules. Trigger is a full-width button,
`padding:28px 0`, `grid-template-columns:1fr 32px`, left-aligned: question in
Newsreader 27px/400 (`#1C2C39`, or `#8A5A1E` when open) and a 32px circular
`+`/`–` toggle (`1px solid #E8E2D9`, `#8A5A1E` glyph, `#F7F4EF` fill when open).
Answer: `padding:0 72px 30px 0`, 17px/1.68 capped `62ch`.
One open at a time; item 0 open by default; clicking the open item closes it.

Questions: rewiring · existing devices · internet outage · selling the property ·
discontinued products and cloud shutdowns · install duration · whether the app is
mandatory · who to call · consultation cost. Answers are in the file and are
deliberately candid — the cloud-shutdown answer concedes it happens, the existing
-devices answer says some kit can't be integrated and shouldn't be forced.

**Build it as a real disclosure widget**: `<button aria-expanded>` +
`aria-controls`, focus-visible ring, and keep answers in the DOM (`hidden`
attribute or height animation) so they're findable and indexable.

**CTA.** `#F7F4EF`, "Still got a question we haven't answered?" — "Ask us
anything" + "See what it costs".

### 8. Privacy — `design-files/EonTree Privacy.dc.html`

Route `/privacy`. **New page.** The form collects name, phone, email and property
address with no notice and no consent — under Malaysia's PDPA 2010 that's a
compliance gap, not a nicety.

**Header.** `max-width:68ch`. Eyebrow "Legal"; h1 "Privacy notice" (66px/300);
lead: "This explains what we do with your details when you enquire, become a
client, or use this site. It's written to be read, not to cover us." Then a meta
row on a top rule: "Last updated `[date]`" and "Data controller `[EonTree
Technologies, registration no.]`".

**Body.** Grid `0.42fr 1.58fr`, `gap:72px`. Left `position:sticky; top:120px`: a
"CONTENTS" kicker with seven anchor links, then a boxed monospace note: "draft
for review — have a Malaysian legal adviser confirm this against the PDPA 2010
before publishing".

Right, `max-width:70ch`, seven sections each h2 34px/400 + paragraphs at 17.5px,
some with a hairline-ruled definition list (term in `#1C2C39`/600 followed by
description):

1. **What we collect** — contact details · property information · what you tell
   us · site records for clients · basic anonymous analytics.
2. **Why we hold it** — to answer the enquiry · to carry out the work · to meet
   obligations. States plainly that data isn't sold or passed to marketers.
3. **Your consent** — what the form's tick covers and that it can be withdrawn
   at any time, even mid-quote.
4. **Who else sees it** — installers · suppliers for warranty claims · service
   providers · "Never — advertisers, data brokers".
5. **How long we keep it** — enquiries `[X]` months; client records warranty +
   `[X]` years; financial records per tax law. Notes that camera footage and
   system logs stay in the client's system and EonTree keeps no copies and can't
   view cameras without explicit per-session access.
6. **Your rights** — see it · correct it · delete it · stop contact. Framed
   against the PDPA 2010.
7. **How it's protected** — access-controlled storage for system designs and
   network details, and a commitment to disclose breaches quickly.

**CTA.** `#F7F4EF`, "Want your data removed, or just have a question?" beside a
white card with a "DATA REQUESTS" label, `[privacy email]` in Newsreader 26px,
and "We respond within `[X]` business days."

Section 5's retention periods and the controller details are the parts that need
legal review and real values.

---

## Interactions & behaviour

| Behaviour | Detail |
|---|---|
| Nav dropdowns | Open on `mouseenter` of the group, close on `mouseleave`. Single `menu` value holds the open group's label. Panel has a 16px `padding-top` bridge so the pointer can cross the gap. **Add keyboard/ARIA when building.** |
| Nav scroll state (homepage) | Passive scroll listener; flips at `scrollY > innerHeight * 0.6`. Transparent-over-video → solid white. `transition: background 300ms ease, border-color 300ms ease`. |
| Hero video | `autoplay muted loop playsinline`. On `error`, hide the `<video>` so the poster `<img>` shows. `poster` set for first paint. |
| Scroll cue | 2.4s infinite ease-in-out; `translateY(0→6px)`, `opacity(.55→1)`. Disable under `prefers-reduced-motion`. |
| Form chips | Property type single-select (default "Home"); "looking to add" multi-select toggle (default "Full system"). |
| Consent checkbox | Custom 22px box; toggles a boolean. Gate submission on it. |
| Form submit | Sets a `sent` flag and swaps the button label. **Must be replaced with a real endpoint + validation + error state.** |
| FAQ accordion | Single-open; index in state; clicking the open item sets `-1`. Item 0 open on load. |
| Sticky side rails | FAQ topics, case-study summary, privacy contents: `position:sticky; top:120px`. |
| Hover states | Gold buttons → `#F5C18A`. Outlined buttons invert (fill navy or white, text flips). Nav links → `#E0B384` on dark, `#8A5A1E` on light. Dropdown items → `#F7F4EF` bg + `#8A5A1E` text. Footer links → `#E0B384`. |

**Never use `scrollIntoView`.** For anchor navigation, measure the header:

```js
const nav = document.querySelector('header')
const y = el.getBoundingClientRect().top + window.scrollY - (nav?.offsetHeight ?? 0) - 12
window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' })
```

The repo's `src/utils/scroll.js` and `SectionNav.jsx` both subtract a hardcoded
`80` while the header is ~88–96px, so every anchored section lands under the bar.

### Responsive

The prototypes are desktop-first at 1440. Breakpoints per DESIGN.md §9 —
375 / 768 / 1024 / 1440:

- Nav collapses to a hamburger under 768; dropdown groups become nested lists in
  the sheet. Touch targets ≥44px.
- All two-column grids (hero split, systems cards, one-app, contact, every CTA
  band, all side rails) stack to one column under 1024. Sticky rails
  become static.
- Systems cards: image above text; drop the alternation.
- Three-up grids (pricing tiers, projects, process, kit) → 1 column at 768, 2 at
  1024 where it fits. The `1.35fr 1fr 1fr` project grid becomes equal columns.
- Brand wall 4 → 2 columns.
- Display type scales down roughly: 92 → 44px, 78 → 38px, 56 → 32px,
  40 → 28px. **Never below 16px for body.**
- Section padding tightens from 104px to ~64px.
- Trust strip items keep `nowrap` and wrap as whole items; it becomes a stacked
  list under 768.

### Accessibility

- The `accentDeep` change to `#8A5A1E` is what gets gold text on white past
  4.5:1. Never put small `#E0B384` text on white.
- Navy text on gold buttons, never the reverse.
- Add a skip link, visible focus rings on every interactive element (the
  prototypes rely on hover), and `aria-expanded` on nav groups and FAQ triggers.
- Decorative layers (scrims, glows, dots) need `aria-hidden="true"`.
- Respect `prefers-reduced-motion` for the scroll cue, the nav transition, and
  any reveal animations.
- Note on the repo's `Reveal`: `index.css` sets `[data-reveal] { opacity: 0 }`
  and only JS restores it, so a failed observer leaves the page permanently
  blank. Gate the hidden state behind a class added on boot. Also use reveals
  sparingly — applying them to nearly every block flattens emphasis.

## State

Per page, small and local — no store needed.

- **Homepage**: `menu` (open nav group | null), `scrolled` (bool),
  `noVideo` (bool), `type` (string), `wants` (string[]), `consent` (bool),
  `sent` (bool).
- **FAQ**: `menu`, `open` (number, `-1` for none).
- **Other pages**: `menu` only.

Real data fetching: none, apart from the form POST.

## Assets

All from the repo, all already present in `public/`:

| File | Used for |
|---|---|
| `public/logo-horizontal.png` | Nav (46px) and footer (44px). **497 KB — export as SVG or optimise.** |
| `public/logo-mark.png` | Favicon. **961 KB for a 32px favicon — must be replaced.** |
| `public/images/lighting.jpg` | Systems 01, case-study shot |
| `public/images/security.jpg` | Systems 02, case-study shot |
| `public/images/climate.jpg` | Systems 03 |
| `public/images/av.jpg` | Systems 04 |
| `public/images/hub.jpg` | One-app section, case-study shot |
| `public/images/project-home.jpg` | Work card 1, case-study hero |
| `public/images/project-office.jpg` | Work card 2 |
| `public/images/project-holiday.jpg` | Work card 3, hero poster |
| `public/logos/*.svg` | Brand wall (8 Simple Icons marks, CC0) |
| `public/hero-smart-home.mp4` | Hero video (~2 MB, tracked in git) |

Icons: the prototypes use no icon library (the repo's `lucide-react` is still
fine for anything you add). No hand-drawn SVGs — the repo's leaf and vine
illustrations were deliberately dropped.

**Every photo is Unsplash stock of other people's houses.** For a trade selling
craft, that's the largest credibility gap on the site — larger than any
placeholder. Real install photography, the team, and a founder portrait are worth
more than any further design work.

## What still needs the client, before launch

1. **Wire the form to a real endpoint.** Enquiries are currently discarded.
2. **Confirm or bracket the licence number.** `ST #K-123456` appears as fact in
   both `Footer.jsx` and `TrustStrip.jsx`. A wrong licence number carries legal
   exposure.
3. **Replace the address, phone and email** in `Footer.jsx` (Kota Damansara /
   `+60 12-345 6789` / `hello@eontree.my`) — they read as real and aren't
   flagged.
4. **Fill every bracketed figure**: prices, response times, warranty length,
   coverage list, project counts. Don't invent them; a 2026-founded company
   claiming 40+ installs won't survive scrutiny.
5. **Get the privacy notice legally reviewed** against the PDPA 2010.
6. **Replace testimonial and case-study quotes** with permissioned real ones.
7. **Confirm brand authorisations** before showing any partner logo.
8. **Add meta description, `og:` tags and a canonical** to `index.html` —
   currently absent, on a site that lives on being found and shared.

## Files in this package

```
design-files/
  EonTree Homepage.dc.html       route /
  EonTree About.dc.html          route /about
  EonTree Pricing.dc.html        route /pricing
  EonTree Case Study.dc.html     route /case-study
  EonTree Support.dc.html        route /support
  EonTree Where We Work.dc.html  route /where-we-work
  EonTree FAQ.dc.html            route /faq
  EonTree Privacy.dc.html        route /privacy
  HANDOFF.md                     prioritised repo-side fix list (read this second)
  github.md                      repo association, site map, sync record
```

Each `.dc.html` opens directly in a browser. Structure lives in the markup;
content and behaviour live in the `class Component` script at the bottom of each
file — that's where the copy arrays, response tiers, FAQ entries and handlers
are, and it's the fastest way to read the content without wading through styles.

`HANDOFF.md` is the companion document: the defects in the *existing* repo code,
prioritised P0–P3, independent of adding these new pages.
