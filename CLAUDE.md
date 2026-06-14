# EonTree Technologies — Website

Marketing/company website for EonTree Technologies. Brand: "rooted in nature, powered by technology" — premium corporate, calm, navy-dominant with gold accents.

Logos live in `images/` (`logo-horizontal.png` for nav/footer, `logo-mark.png` for favicon).

## Design sources & precedence

Three sources of design guidance exist in this repo and can disagree. Resolve conflicts in this order:

1. **`DESIGN.md` is the source of truth.** Its palette (navy `#1C2C39` dominant, gold `#E0B384` as accent only), typography (elegant serif headings + clean sans body), spacing scale, breakpoints, and "do/don't" rules are non-negotiable. When anything else suggests otherwise, DESIGN.md wins.

2. **`ui-ux-pro-max` skill is subordinate — use it for *how*, not *what color*.** Consult it for accessibility, interaction states, component/UX patterns, responsive behavior, and stack-specific tips. **Ignore its color, font, and style recommendations** — its `--design-system` search returns generic palettes (e.g. amber/purple for "dashboard") that conflict with the brand. If you query it for design direction, treat its UX rules as advice and discard its visual picks in favor of DESIGN.md. (Run its scripts with `python`, not `python3`, on this machine.)

3. **`frontend-design` skill is a craft lens applied *within* the brand.** Use its push for distinctive, non-templated execution to raise quality — but inside DESIGN.md's constraints, not as license to redesign the palette or pick a different aesthetic direction.

One-liner: **DESIGN.md decides the look; the skills help execute it well and accessibly.**
