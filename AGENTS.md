# EonTree Technologies — Landing Page

## Project
Marketing landing page for EonTree Technologies, a smart-home company
that designs, supplies, and installs full smart-home systems — lighting,
security, climate, and audio-visual — for residential AND commercial
spaces. EonTree resells and installs trusted third-party brands and
supports them afterwards. The site sells the integration (one system,
one app, one team), not just hardware.
Tagline: "rooted in nature, powered by technology."

## Stack
- React + Vite + Tailwind CSS
- Single-page, mobile-first
- Each section is its own component in src/components/

## Sources of truth
- DESIGN.md — how it looks (read it fully before styling anything).
- EonTree-copy.md — the real copy for every section (use it; honor its
  "words to avoid" list; keep bracketed [PLACEHOLDER] facts visible and
  do NOT invent numbers/brands/certifications).

## Visual vibe (summary — DESIGN.md is authoritative)
White-dominant, airy, warm, premium. Layout/structure follows the Orris
smart-home template (whitespace, clean card grids, a 2x3 feature grid,
big-number stat blocks, soft rounded "scene" image containers, pill
eyebrow tags). BUT brand stays warm: navy #1C2C39 for type + a couple of
feature bands; gold #E0B384 accent only (where Orris uses blue); serif
headings (not Orris's sans); white + warm off-white #F7F4EF bands (never
cool grey); subtle nature motif. Orris's arrangement, EonTree's warmth.

## Brand colors (tailwind.config theme.extend.colors)
- primary:      #1C2C39   (headings, nav, footer, dark bands)
- primaryAlt:   #25333E   (dark surfaces, navy cards)
- accent:       #E0B384   (buttons, links, icons, highlights)
- accentBright: #F5C18A   (hover/active, glows)
- pageBg:       #FFFFFF   (dominant page background)
- neutralWarm:  #F7F4EF   (warm off-white bands)
- neutralLine:  #E8E2D9   (hairlines, dividers, card borders)
- textBody:     #3A4650   (body text on light)

## Assets
- /logo-horizontal.png — nav + footer (transparent gold-on-clear)
- /logo-mark.png — favicon / compact spaces (transparent)

## Rules
- Vary layouts; don't render every section as a centered row of equal
  cards. Include asymmetry, a 2x3 feature grid, varied heights.
- Placeholder images + dummy data clearly flagged for replacement.
- Do NOT use real reviews, brands, certifications, or stats from any
  competitor. Use our own placeholders.
- In React, never use a raw <form> tag — use onClick handlers.
- Respect prefers-reduced-motion when animations are added later.
