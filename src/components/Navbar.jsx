import { useState } from 'react'
import { Menu, X } from 'lucide-react'

// DESIGN.md §8.1 — nav links (anchors point to sections not built yet).
const links = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    // DESIGN.md §4 — white bar, navy text. Sticky with a hairline + faint blur.
    <header className="sticky top-0 z-50 border-b border-neutralLine bg-pageBg/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"
      >
        {/* Logo — left */}
        <a
          href="#top"
          className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {/* /logo-horizontal.png — transparent gold lockup, reads on white. */}
          <img
            src="/logo-horizontal.png"
            alt="EonTree Technologies"
            className="h-14 w-auto md:h-16"
          />
        </a>

        {/* Desktop links — hidden under 768px */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded text-sm font-medium text-primary transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — gold pill, right */}
        <a
          href="#contact"
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
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-primary transition-colors duration-200 hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
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
