# EonTree Technologies — DESIGN.md

## 1. Visual Theme & Atmosphere
Modern clean-tech corporate. Light, airy, premium. Inspired by
contemporary EV/clean-tech design (AISUN-style): generous whitespace,
big confident headlines, soft rounded cards, calm restrained motion.
Brand identity: "rooted in nature, powered by technology." The page is
white-dominant and breathes; NAVY and GOLD punctuate it. NOT dark, NOT
neon, NOT busy, NOT heavy gradients.

## 2. Color Palette & Roles
| Name         | Hex      | Role                                                |
|--------------|----------|-----------------------------------------------------|
| primary      | #1C2C39  | Headings, nav bar, footer, occasional feature bands |
| primaryAlt   | #25333E  | Dark feature-band surfaces, navy cards              |
| accent       | #E0B384  | Buttons, links, icons, key highlights, CTAs         |
| accentBright | #F5C18A  | Hover/active states, subtle glows                   |
| pageBg       | #FFFFFF  | Primary page background (dominant)                  |
| neutralWarm  | #F7F4EF  | Warm off-white for alternating section bands        |
| neutralLine  | #E8E2D9  | Hairline borders, dividers, card outlines           |
| textBody     | #3A4650  | Body text on light (navy-tinted grey, not pure black)|
- White dominates. Use neutralWarm to alternate section backgrounds so
  the page has rhythm. Gold is an ACCENT only — never large gold fills.
- Navy is for type and a FEW high-impact dark bands (e.g. a stats
  strip or the footer), not the default background.

## 3. Typography
- Headings: elegant serif (Cormorant Garamond or Playfair Display) —
  mirrors the logo's serif wordmark. Large, airy, generous leading.
  Hero H1 oversized.
- Body + UI: clean sans (Inter or Montserrat). Highly legible.
- Big type, lots of breathing room. Section headers centered or
  left-aligned with a short gold eyebrow label above.

## 4. Component Stylings
- Buttons: PILL-shaped. Primary = gold fill, navy text, hover lifts to
  accentBright with soft shadow. Secondary = navy outline on white,
  fills navy on hover. cursor-pointer on all clickable elements.
- Cards: white, rounded-2xl, soft low shadow, thin neutralLine border,
  gentle lift + shadow on hover. Icon in a soft gold-tinted circle.
- Inputs: clean, generous padding, rounded, gold focus ring.
- Nav: navy bar OR white bar with navy text (pick white for max
  airiness); horizontal logo left, gold pill CTA right.
- Section eyebrow: small uppercase gold label above each section H2.

## 5. Layout Principles
Mobile-first. Spacing scale 4/8/16/24/48/96/128. Wide section padding
(py-24 desktop). Max content width ~1200px, centered. Whitespace is a
feature. Alternate white / neutralWarm section backgrounds for rhythm.

## 6. Depth & Elevation
Soft, low, diffuse shadows only. Cards lift gently on hover. No harsh
borders or heavy drop shadows. One or two subtle gold radial glows
behind hero/feature imagery are OK — keep them faint.

## 7. Do's and Don'ts
DO: white-dominant airy layout, serif headings + sans body, pill
buttons, soft rounded cards, gold accents, navy type, one or two navy
feature bands, lots of air, gentle 150–300ms transitions, SVG icons
(Lucide).
DON'T: dark page background, neon, large gold fills, pure-black text,
emoji as icons, cramped sections, harsh/fast animations, busy gradients.

## 8. Section Structure (from proven EV-installer layout)
1. Nav — logo left, links, gold "Get a Quote" pill CTA right.
2. Hero — oversized serif headline, sub, primary + secondary CTA,
   charger/clean-tech image bleeding off one side, faint gold glow.
3. Trust strip — certification / credential badges (placeholder).
4. Solutions — 3 cards: Home, Workplace, Commercial.
5. How It Works — 4 steps: Enquire → Site assessment → Installation → Support.
6. Products — 3–4 charger cards (image, name, AC/DC, spec, price-on-request).
7. Stats / coverage — a NAVY feature band with big numbers + map (high impact).
8. Partner / compatibility logo wall — greyscale logos on white.
9. Why Us — 4–6 feature items with gold icons.
10. Testimonials — 3 review cards (generic placeholder, NOT real reviews).
11. Contact / quote form — name, email, phone, property-type dropdown, message.
12. Footer — NAVY band: logo, nav links, contact, socials, copyright.

## 9. Responsive Behavior
Breakpoints: 375 / 768 / 1024 / 1440. Touch targets ≥44px. Nav
collapses to a hamburger menu under 768. Body text contrast ≥4.5:1 on
all backgrounds. Hero image stacks below the headline on mobile; navy
feature bands and card grids reflow to a single column. Maintain wide
section padding by scaling it down gracefully (e.g. py-16 mobile,
py-24 desktop).

## 10. Logo & Assets
Logos live in `public/` and are served from the site root.
- `/logo-horizontal.png` — nav (use the version that reads on a white or
  navy bar) and footer.
- `/logo-mark.png` — favicon and compact/avatar placements.
- Give the logo clear space; never stretch, recolor, or place gold-on-gold.
- Visual reference for the target look: `references/aisun-reference.webp`
  (light, airy clean-tech EV layout the design direction is based on).
