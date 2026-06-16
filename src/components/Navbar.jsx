import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { scrollToId } from '../utils/scroll.js'

// Section links scroll within the home page; About is a separate route.
const links = [
  { label: 'Solutions', id: 'solutions' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Products', id: 'products' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  // Section links: smooth-scroll when on home; otherwise go home then scroll.
  const onSection = (e, id) => {
    e.preventDefault()
    setOpen(false)
    if (onHome) scrollToId(id)
    else navigate('/', { state: { scrollTo: id } })
  }

  const onLogo = (e) => {
    setOpen(false)
    if (onHome) {
      e.preventDefault()
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    }
  }

  const renderItem = (l, className) =>
    l.to ? (
      <Link to={l.to} onClick={() => setOpen(false)} className={className}>
        {l.label}
      </Link>
    ) : (
      <a href={`/#${l.id}`} onClick={(e) => onSection(e, l.id)} className={className}>
        {l.label}
      </a>
    )

  return (
    // DESIGN.md §4 — white bar, navy text. Sticky with a hairline + faint blur.
    <header className="sticky top-0 z-50 border-b border-neutralLine bg-pageBg/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"
      >
        {/* Logo — left */}
        <Link
          to="/"
          onClick={onLogo}
          className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {/* /logo-horizontal.png — transparent gold lockup, reads on white. */}
          <img
            src="/logo-horizontal.png"
            alt="EonTree Technologies"
            className="h-14 w-auto md:h-16"
          />
        </Link>

        {/* Desktop links — hidden under 768px */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              {renderItem(
                l,
                'rounded text-sm font-medium text-primary transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA — gold pill, right */}
        <a
          href="/#contact"
          onClick={(e) => onSection(e, 'contact')}
          className="hidden cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-accentBright to-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-[0_8px_22px_-8px_rgba(224,179,132,0.85)] ring-1 ring-inset ring-white/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(224,179,132,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:inline-flex"
        >
          Plan your space
        </a>

        {/* Hamburger — shown under 768px; ≥44px touch target */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-neutralLine bg-pageBg md:hidden"
        >
          <ul className="mx-auto flex max-w-[1200px] flex-col px-6 py-2">
            {links.map((l) => (
              <li key={l.label}>
                {renderItem(
                  l,
                  'block py-3 text-base font-medium text-primary transition-colors duration-200 hover:text-accent',
                )}
              </li>
            ))}
            <li className="py-3">
              <a
                href="/#contact"
                onClick={(e) => onSection(e, 'contact')}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-accentBright to-accent px-5 py-3 text-base font-semibold text-primary shadow-[0_8px_22px_-8px_rgba(224,179,132,0.85)] ring-1 ring-inset ring-white/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                Plan your space
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
