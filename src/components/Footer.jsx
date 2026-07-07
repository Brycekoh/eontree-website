import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { scrollToId } from '../utils/scroll.js'

// DESIGN.md §8.12 — navy footer. Columns from EonTree-copy.md.
// NOTE: sample contact details and license number for this practice/demo
// build — fill with EonTree's real address / phone / email / license before
// any real launch. Social links and Careers/Resources point to # until real
// pages exist.
const columns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Lighting', id: 'solutions' },
      { label: 'Security', id: 'solutions' },
      { label: 'Climate', id: 'solutions' },
      { label: 'Audio-Visual', id: 'solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How it works', id: 'how-it-works' },
      { label: 'Projects', id: 'projects' },
      { label: 'About', to: '/about' },
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
      { label: '23, Jalan PJU 5/20, Kota Damansara, 47810 Petaling Jaya, Selangor', href: '#' },
      { label: '+60 12-345 6789', href: 'tel:+60123456789' },
      { label: 'hello@eontree.my', href: 'mailto:hello@eontree.my' },
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
  const location = useLocation()
  const navigate = useNavigate()

  const onSection = (e, id) => {
    e.preventDefault()
    if (location.pathname === '/') scrollToId(id)
    else navigate('/', { state: { scrollTo: id } })
  }

  const linkClass =
    'rounded text-sm text-neutralWarm/70 transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'

  const renderLink = (l) => {
    if (l.to)
      return (
        <Link to={l.to} className={linkClass}>
          {l.label}
        </Link>
      )
    if (l.id)
      return (
        <a href={`/#${l.id}`} onClick={(e) => onSection(e, l.id)} className={linkClass}>
          {l.label}
        </a>
      )
    return (
      <a href={l.href} className={linkClass}>
        {l.label}
      </a>
    )
  }

  return (
    <footer className="border-t border-white/10 bg-primary text-neutralWarm">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <img
                src="/logo-horizontal.png"
                alt="EonTree Technologies"
                className="h-12 w-auto"
              />
            </Link>
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
                  <li key={l.label}>{renderLink(l)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-neutralWarm/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} EonTree Technologies. ST Licence #K-123456</p>
          <p>rooted in nature, powered by technology</p>
        </div>
      </div>
    </footer>
  )
}
