import { useEffect, useState } from 'react'

// Homey-style scroll-spy: a fixed vertical column of dots, one per section.
// The dot of the section at the viewport centre is highlighted (gold), and its
// name shows; other names appear on hover. Click a dot to scroll to it.
// Desktop only (mobile uses the hamburger nav). Respects reduced-motion.
const sections = [
  { id: 'top', label: 'Home' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'features', label: 'Features' },
  { id: 'products', label: 'Products' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionNav() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    // The -45% top/bottom margins collapse the root to a thin band at the
    // vertical centre, so "active" = whichever section crosses the middle.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const go = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const y = el.getBoundingClientRect().top + window.scrollY - 80 // sticky nav
    window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => go(id)}
            aria-label={`Go to ${label}`}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center gap-2.5 py-0.5"
          >
            {/* Name — black text on a transparent background, only on hover.
                Subtle light text-shadow keeps it legible over dark sections. */}
            <span className="pointer-events-none whitespace-nowrap text-sm font-medium text-black opacity-0 [text-shadow:0_1px_3px_rgba(255,255,255,0.7)] transition-opacity duration-200 group-hover:opacity-100">
              {label}
            </span>
            {/* Small dot — subtle current marker; lights up gold on hover */}
            <span
              className={`block h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200 group-hover:h-2 group-hover:w-2 group-hover:bg-accentDeep ${
                isActive ? 'bg-primary/70' : 'bg-slate-400/50'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
