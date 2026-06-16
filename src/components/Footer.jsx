import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

// DESIGN.md §8.12 — navy footer. Columns from EonTree-copy.md.
// MUST-REPLACE: contact details and the license number are [PLACEHOLDER];
// fill with EonTree's real address / phone / email / license. Social links
// point to # until real profiles exist.
const columns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Lighting', href: '#solutions' },
      { label: 'Security', href: '#solutions' },
      { label: 'Climate', href: '#solutions' },
      { label: 'Audio-Visual', href: '#solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Projects', href: '#projects' },
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '[Address placeholder]', href: '#' },
      { label: '[Phone placeholder]', href: '#' },
      { label: '[Email placeholder]', href: '#' },
    ],
  },
]

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-primary text-neutralWarm">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <img
              src="/logo-horizontal.png"
              alt="EonTree Technologies"
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-neutralWarm/70">
              Smart-home design, installation, and support — one system, one
              app, one team.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-neutralWarm/70 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutralWarm">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="rounded text-sm text-neutralWarm/70 transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-neutralWarm/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} EonTree Technologies. [License #PLACEHOLDER]</p>
          <p>rooted in nature, powered by technology</p>
        </div>
      </div>
    </footer>
  )
}
