repo: Brycekoh/eontree-website
branch: main

## Last sync
date: 2026-08-19T00:00:00Z

### Updated in this project
- Rebuilt the homepage as a design file: video hero re-treated, 12 sections down to 8, "Four apps become one" added, fake testimonials dropped.
- Rebuilt the About page: founder portrait slot, single-column story, metrics back in the serif/gold system.
- Added six new pages the repo doesn't have: Pricing, FAQ, Support, Where We Work, Case Study, Privacy.
- Nav restructured into four dropdown groups (Systems / Pricing / Work / Support), consistent across all eight pages.
- Enquiry form: consent checkbox, privacy link, one-business-day response promise.
- HANDOFF.md carries the code-level fix list for the repo.

## Site map
| Page | Nav group | Notes |
|---|---|---|
| EonTree Homepage.dc.html | — | hero, systems, one app, process, work, brands, contact |
| EonTree Pricing.dc.html | Pricing | 3 tiers, what moves the price, how we quote |
| EonTree Case Study.dc.html | Work | the whole-house retrofit in full |
| EonTree Support.dc.html | Support | response tiers, covered/chargeable, care plans |
| EonTree Where We Work.dc.html | Support | Klang Valley core + wider Malaysia |
| EonTree FAQ.dc.html | Support | 9 questions, accordion |
| EonTree About.dc.html | Support | founder story |
| EonTree Privacy.dc.html | footer | PDPA-oriented draft notice |

## Screen map
| Screen | Built from |
|---|---|
| EonTree Homepage.dc.html | DESIGN.md, EonTree-copy.md, src/components/*.jsx, tailwind.config.js, public/images, public/logos |
| EonTree About.dc.html | src/pages/About.jsx, DESIGN.md, private-assets/founder.jpeg (rejected — unusable snapshot) |
| New pages (Pricing/FAQ/Support/Areas/Case Study/Privacy) | no repo source — written new against DESIGN.md and EonTree-copy.md voice rules |
| HANDOFF.md | src/components/Contact.jsx, Footer.jsx, TrustStrip.jsx, Stats.jsx, SectionNav.jsx, Reveal.jsx, src/utils/scroll.js, index.html, index.css |

## Sync history
- 2026-08-18T14:03:34Z — About page rebuild.
- 2026-08-18T14:00:59Z — footer/form fixes, HANDOFF.md checklist.
- 2026-08-18T13:54:38Z — first import; homepage rebuild.
