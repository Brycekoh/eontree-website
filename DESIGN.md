# EonTree Technologies — DESIGN.md (Smart Home)

## 0. What EonTree Is
EonTree designs, supplies, and installs full smart-home systems —
lighting, security, climate, and audio-visual — for residential AND
commercial spaces. We resell and install trusted third-party brands and
support them afterwards. The site sells the INTEGRATION (one system, one
app, one team), not just gadgets.

## 1. Aesthetic Reference — "Orris layout, EonTree warmth"
Structure and polish follow the Orris smart-home template: generous
whitespace, calm uncluttered layouts, clean card grids (including a 2x3
feature grid), big-number stat blocks beside body text, soft large
rounded corners, imagery sitting in soft rounded "scene" containers,
small pill/eyebrow tags above section headings, heavy restraint —
nothing shouts.

BUT the brand stays warm and rooted — do NOT adopt Orris's cool
grey/blue tech palette or its all-sans type:
- Accent is GOLD #E0B384 everywhere Orris would use blue.
- Base is WHITE + warm off-white #F7F4EF bands (never cool grey).
- Headings stay SERIF — our deliberate difference from sans templates.
- Keep the nature motif (curved dividers, occasional leaf/branch
  accent), applied subtly at Orris's level of restraint.
Rule of thumb: Orris's arrangement, EonTree's temperature. Warm where
Orris is cool, serif where Orris is sans, gold where Orris is blue.

## 2. Visual Theme & Atmosphere
Modern, calm, premium smart-home. Light, airy, warm. White-dominant
page that breathes; NAVY and GOLD punctuate it. Trustworthy and
considered, not cold or flashy. NOT dark, NOT neon, NOT busy, NOT
chrome-tech.

## 3. Color Palette & Roles
| Name         | Hex      | Role                                                |
|--------------|----------|-----------------------------------------------------|
| primary      | #1C2C39  | Headings, nav, footer, occasional feature bands     |
| primaryAlt   | #25333E  | Dark feature-band surfaces, navy cards              |
| accent       | #E0B384  | Buttons, links, icons, key highlights, CTAs         |
| accentBright | #F5C18A  | Hover/active states, subtle glows                   |
| pageBg       | #FFFFFF  | Primary page background (dominant)                  |
| neutralWarm  | #F7F4EF  | Warm off-white for alternating section bands        |
| neutralLine  | #E8E2D9  | Hairline borders, dividers, card outlines           |
| textBody     | #3A4650  | Body text on light (navy-tinted grey, not black)    |
- White dominates. Alternate white / neutralWarm bands for rhythm.
- Gold is an ACCENT only — never large gold fills.
- Navy is for type + a FEW high-impact dark bands (stats, footer).

## 4. Typography
- Headings: elegant serif (Cormorant Garamond or Playfair Display),
  mirroring the logo wordmark. Large, airy, generous leading. Oversized
  hero H1.
- Body + UI: clean sans (Inter or Montserrat). Highly legible.
- Section header pattern: small uppercase GOLD eyebrow/pill tag, then a
  large serif H2.

## 5. Component Stylings
- Buttons: PILL-shaped. Primary = gold fill, navy text, hover to
  accentBright with soft shadow. Secondary = navy outline on white,
  fills navy on hover. cursor-pointer on all.
- Cards: white, rounded-2xl, soft low shadow, thin neutralLine border,
  gentle lift on hover. Icons in soft gold-tinted circles — but vary
  treatments so not every section is icon-in-circle-x3.
- Imagery: placed in soft, large-radius rounded "scene" containers
  (Orris-style), faint warm background, optional faint gold glow.
- Inputs: clean, generous padding, rounded, gold focus ring.
- Nav: white bar, navy text, horizontal logo left, gold pill CTA right.

## 6. Layout Principles
Mobile-first. Spacing scale 4/8/16/24/48/96/128. Wide section padding
(py-24+ desktop). Max content width ~1200px, centered. Whitespace is a
feature. Alternate white / neutralWarm backgrounds. VARY layouts — do
not render every section as a centered row of equal cards. Include at
least one asymmetric section (image bleeding off an edge), one 2x3
feature grid, varied section heights.

## 7. Depth & Elevation
Soft, low, diffuse shadows only. Cards lift gently on hover. No harsh
borders or heavy drop shadows. One or two faint gold radial glows behind
hero/feature imagery are OK — keep them subtle.

## 8. Section Structure (smart-home flow, Orris-informed)
1. Nav — logo left, links (Solutions, How It Works, Products, Projects,
   Contact), gold "Book a consultation" CTA right.
2. Hero — oversized serif headline, sub, primary + secondary CTA,
   smart-home interior scene in a soft rounded container, faint gold glow.
3. Trust strip — "Licensed, certified, insured" + credential badges.
4. Solutions — 4 cards: Lighting, Security, Climate, Audio-Visual.
5. How It Works — 4 steps: Consult → Design → Install & integrate →
   Handover & support. Nature motif: steps along a subtle branch/line.
6. Features grid (Orris "Intelligence in Every Detail" style) — a 2x3
   grid of capability tiles (one app, voice/app control, scenes,
   alerts, energy efficiency, unified control).
7. Products / Brands — featured product cards AND/OR a brand logo wall.
   Only brands EonTree is authorised for (placeholder, flagged).
8. Stats band — NAVY band: big gold numbers + labels (high impact).
9. Projects / Case Studies — 3 cards: brief → what we did → result.
10. Testimonials — 3 review cards (placeholder, NOT real until sourced).
11. Final CTA band — "Control your whole space from anywhere" + Book a
    consultation. (Use instead of an app-download block unless EonTree
    has an app.)
12. Footer — NAVY band: logo, Company / Resources / Contact columns,
    address, socials, copyright.

## 9. Responsive Behavior
Breakpoints: 375 / 768 / 1024 / 1440. Touch targets >=44px. Nav
collapses to hamburger under 768. Section padding tightens on mobile.
Text contrast >=4.5:1. Use NAVY text on gold buttons (never small gold
text on white).

## 10. Agent Prompt Guide
Build EonTree UI: white-dominant, airy, warm smart-home site. Orris-
style layout/structure (whitespace, card grids, 2x3 feature grid, stat
blocks, soft rounded scene containers, pill eyebrow tags) but with
EonTree's warmth: navy #1C2C39 for type + a couple of bands, gold
#E0B384 accent only (where Orris uses blue), serif headings, white +
#F7F4EF bands, subtle nature motif. Copy comes from EonTree-copy.md.
Logo: /logo-horizontal.png (nav + footer), /logo-mark.png (favicon).
