# EonTree Technologies — DESIGN.md

## 1. Visual Theme & Atmosphere
Premium corporate with a calm, natural edge. Trustworthy, spacious,
confident. "Rooted in nature, powered by technology." Generous
whitespace, restrained motion. NOT neon, NOT techy-gradient, NOT busy.

## 2. Color Palette & Roles
| Name         | Hex      | Role                                        |
|--------------|----------|---------------------------------------------|
| primary      | #1C2C39  | Nav, headings, footer, dark sections        |
| primaryAlt   | #25333E  | Cards/surfaces on dark sections             |
| accent       | #E0B384  | Buttons, links, icons, key highlights       |
| accentBright | #F5C18A  | Hover/active states, glows                  |
| neutralLight | #F7F4EF  | Warm off-white page background              |
| neutralDark  | #1C2C39  | Body text on light backgrounds              |
Derive hover/pressed tints+shades from accent and primary.
Gold is an ACCENT only — never large gold fills. Navy dominates.

## 3. Typography
- Headings: an elegant serif (e.g. Cormorant Garamond / Playfair) —
  echoes the logo's serif wordmark. Large, confident, generous leading.
- Body + UI: a clean sans (Inter / Montserrat). High legibility.
- Hierarchy: oversized hero H1, clear H2 section heads, calm body.

## 4. Component Stylings
- Buttons: primary = gold fill, navy text, smooth 150–300ms hover to
  accentBright; secondary = navy outline. cursor-pointer on all.
- Cards: soft shadow, rounded corners, navy or off-white surface,
  subtle lift on hover.
- Inputs: clean, ample padding, visible focus ring in accent.
- Nav: navy bar, horizontal logo left, gold CTA right.

## 5. Layout Principles
Mobile-first. Spacing scale 4/8/16/24/48/96. Wide section padding.
Whitespace is a feature, not empty space. Max content width ~1200px.

## 6. Depth & Elevation
Soft, low shadows only. Surfaces lift gently on hover. No harsh borders.

## 7. Do's and Don'ts
DO: navy-dominant, gold accents, serif heads, lots of air, gentle motion.
DON'T: neon, heavy gradients, gold as a background fill, emoji as icons
(use SVG — Lucide/Heroicons), cramped layouts, harsh animations.

## 8. Responsive Behavior
Breakpoints: 375 / 768 / 1024 / 1440. Touch targets ≥44px. Nav
collapses to hamburger under 768. Text contrast ≥4.5:1.

## 9. Agent Prompt Guide
Build EonTree UI using the palette and rules above. Navy primary,
gold accent only, serif headings + sans body, premium corporate feel.
Logo: images/logo-horizontal.png (nav/footer), images/logo-mark.png (favicon).
