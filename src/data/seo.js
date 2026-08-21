// Per-route metadata, shared by the runtime <Seo> component and the
// post-build script that writes a static HTML file per route.
// Keep titles under ~60 characters and descriptions under ~160, or search
// engines truncate them in results.

export const SITE_URL = 'https://eontree.vercel.app'
export const SITE_NAME = 'EonTree Technologies'
export const DEFAULT_IMAGE = `${SITE_URL}/images/project-home.jpg`

export const pages = [
  {
    path: '/',
    title: 'Smart Home Installation Malaysia | EonTree Technologies',
    description:
      'We design, install and support complete smart home systems — lighting, security, climate and AV — for homes and businesses across Malaysia. One app, one team.',
    priority: '1.0',
  },
  {
    path: '/about',
    title: 'About EonTree — Smart Home Installers in Malaysia',
    description:
      'Why EonTree exists: we plan the whole system before buying anything, run the wiring and network properly, then stay on to support it. Our story and how we work.',
    priority: '0.7',
  },
  {
    path: '/pricing',
    title: 'Smart Home Installation Cost in Malaysia | EonTree',
    description:
      'Honest starting points for one-room, whole-home and commercial smart home installations — plus the five things that actually change the price of a quote.',
    priority: '0.9',
  },
  {
    path: '/case-study',
    title: 'Whole-House Smart Home Retrofit — Case Study | EonTree',
    description:
      'How we brought lighting, security and climate onto one app in a family home without opening a single wall. The survey, the work, and where it landed.',
    priority: '0.8',
  },
  {
    path: '/support',
    title: 'Smart Home Support & Warranty | EonTree Technologies',
    description:
      'Response times in writing, what is covered and what is chargeable, and two levels of ongoing care. The part most installers skip, set out plainly.',
    priority: '0.8',
  },
  {
    path: '/where-we-work',
    title: 'Service Areas — Klang Valley & Malaysia | EonTree',
    description:
      'Where we are genuinely quick: Petaling Jaya, Kuala Lumpur, Damansara, Subang Jaya and the wider Klang Valley — plus where we travel for the right project.',
    priority: '0.8',
  },
  {
    path: '/faq',
    title: 'Smart Home Questions Answered | EonTree FAQ',
    description:
      'Do you need to rewire? What happens when the internet drops? Will it work with devices you already own? Straight answers, including the unflattering ones.',
    priority: '0.7',
  },
  {
    path: '/privacy',
    title: 'Privacy Notice | EonTree Technologies',
    description:
      'What we do with your details when you enquire or become a client, written to be read. Covers collection, retention, sharing and your rights under the PDPA.',
    priority: '0.3',
  },
]

export const byPath = Object.fromEntries(pages.map((p) => [p.path, p]))
