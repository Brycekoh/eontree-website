// Shared navigation model for the header and footer.
// `hash` targets a section on the home page; `to` is a route.

export const navGroups = [
  {
    label: 'Systems',
    hash: '#systems',
    items: [
      { label: 'Lighting', hint: 'Scenes, dimming, occupancy', hash: '#systems' },
      { label: 'Security', hint: 'Cameras, locks, alerts', hash: '#systems' },
      { label: 'Climate', hint: 'Heating, cooling, blinds', hash: '#systems' },
      { label: 'Audio-Visual', hint: 'Multi-room sound and TV', hash: '#systems' },
      { label: 'How it all connects', hint: 'Four apps become one', hash: '#oneapp' },
    ],
  },
  { label: 'Pricing', to: '/pricing', items: [] },
  {
    label: 'Work',
    hash: '#work',
    items: [
      { label: 'Recent projects', hint: 'Three homes and an office', hash: '#work' },
      {
        label: 'Full case study',
        hint: 'The whole-house retrofit, in detail',
        to: '/case-study',
      },
      { label: 'Brands we install', hint: "What we're authorised for", hash: '#brands' },
    ],
  },
  {
    label: 'Support',
    to: '/support',
    items: [
      {
        label: 'After the install',
        hint: 'Warranty, response times, expansion',
        to: '/support',
      },
      { label: 'Where we work', hint: 'Service areas and travel', to: '/where-we-work' },
      { label: 'Questions', hint: 'Rewiring, existing kit, moving house', to: '/faq' },
      { label: 'Our story', hint: 'Why EonTree exists', to: '/about' },
    ],
  },
]

// Which nav group reads as active for a given route.
const activeByPath = {
  '/pricing': 'Pricing',
  '/case-study': 'Work',
  '/support': 'Support',
  '/where-we-work': 'Support',
  '/faq': 'Support',
  '/about': 'Support',
}

export function activeGroupFor(pathname) {
  return activeByPath[pathname] ?? null
}

export const footerColumns = [
  {
    title: 'Systems',
    items: [
      { label: 'Lighting', hash: '#systems' },
      { label: 'Security', hash: '#systems' },
      { label: 'Climate', hash: '#systems' },
      { label: 'Audio-Visual', hash: '#systems' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'Our story', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Case study', to: '/case-study' },
      { label: 'Where we work', to: '/where-we-work' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'After the install', to: '/support' },
      { label: 'Questions', to: '/faq' },
      { label: 'Book a consultation', hash: '#contact' },
      // No destination until a real number is confirmed — rendered as text.
      { label: '[phone]', unconfirmed: true },
    ],
  },
]
