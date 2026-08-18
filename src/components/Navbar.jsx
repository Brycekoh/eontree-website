import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { scrollToId } from '../utils/scroll.js'
import { navGroups, activeGroupFor } from '../data/navigation.js'

// Fixed and transparent over the home hero, sticky and solid everywhere else.
// Groups open on hover and on focus, so the panel links are reachable by
// keyboard; focus leaving the group closes it, as does Escape.
export default function Navbar() {
  const [menu, setMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const onHome = location.pathname === '/'
  const active = activeGroupFor(location.pathname)
  const overlay = onHome && !scrolled

  useEffect(() => {
    if (!onHome) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHome])

  useEffect(() => {
    setMenu(null)
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  const goHash = (e, hash) => {
    e.preventDefault()
    setMenu(null)
    setMobileOpen(false)
    const id = hash.slice(1)
    if (onHome) scrollToId(id)
    else navigate('/', { state: { scrollTo: id } })
  }

  const closeAll = () => {
    setMenu(null)
    setMobileOpen(false)
  }

  // A nav destination is either a route or a home-page section.
  const linkProps = (item) =>
    item.to
      ? { as: Link, to: item.to, onClick: closeAll }
      : { as: 'a', href: `/${item.hash}`, onClick: (e) => goHash(e, item.hash) }

  const Destination = ({ item, className, children, ...rest }) => {
    const p = linkProps(item)
    if (p.as === Link) {
      return (
        <Link to={p.to} onClick={p.onClick} className={className} {...rest}>
          {children}
        </Link>
      )
    }
    return (
      <a href={p.href} onClick={p.onClick} className={className} {...rest}>
        {children}
      </a>
    )
  }

  const groupLabelClass = (g) => {
    const isActive = active === g.label
    if (overlay) return 'text-white hover:text-accent'
    return isActive ? 'text-accentDeep' : 'text-primary hover:text-accentDeep'
  }

  return (
    <header
      className={`${onHome ? 'fixed' : 'sticky'} inset-x-0 top-0 z-50 border-b backdrop-blur-[10px] transition-[background-color,border-color] duration-300 ${
        overlay
          ? 'border-white/20 bg-primary/30'
          : 'border-neutralLine bg-white/95'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between gap-10 px-6 py-3.5 sm:px-10"
      >
        <Link
          to="/"
          onClick={closeAll}
          className="flex shrink-0 items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <img
            src="/logo-horizontal.png"
            alt="EonTree Technologies"
            className={`h-[46px] w-auto ${overlay ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        {/* Desktop groups */}
        <ul className="hidden items-center gap-[30px] lg:flex">
          {navGroups.map((g) => {
            const open = menu === g.label
            const hasItems = g.items.length > 0
            const panelId = `nav-panel-${g.label.toLowerCase()}`
            return (
              <li
                key={g.label}
                className="relative whitespace-nowrap"
                onMouseEnter={() => hasItems && setMenu(g.label)}
                onMouseLeave={() => setMenu(null)}
                onFocus={() => hasItems && setMenu(g.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setMenu(null)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape' && open) {
                    setMenu(null)
                    e.currentTarget.querySelector('a')?.focus()
                  }
                }}
              >
                <Destination
                  item={g}
                  aria-expanded={hasItems ? open : undefined}
                  aria-controls={hasItems ? panelId : undefined}
                  aria-current={active === g.label ? 'page' : undefined}
                  className={`inline-flex items-center gap-[7px] rounded text-[14.5px] font-medium tracking-[0.01em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${groupLabelClass(g)}`}
                >
                  {g.label}
                  {hasItems && (
                    <span
                      aria-hidden="true"
                      className="translate-y-px text-[8.5px] leading-none"
                    >
                      ▾
                    </span>
                  )}
                </Destination>

                {hasItems && (
                  <div
                    id={panelId}
                    className={`absolute left-[-20px] top-full pt-4 ${open ? 'block' : 'hidden'}`}
                  >
                    <div className="min-w-[288px] rounded-2xl border border-neutralLine bg-white p-2.5 shadow-[0_28px_64px_-32px_rgba(28,44,57,0.45)]">
                      {g.items.map((it) => (
                        <Destination
                          key={it.label}
                          item={it}
                          className="block rounded-[10px] px-3.5 py-[11px] text-primary transition-colors duration-150 hover:bg-neutralWarm hover:text-accentDeep focus-visible:bg-neutralWarm focus-visible:text-accentDeep focus-visible:outline-none"
                        >
                          <span className="block text-sm font-semibold leading-[1.3]">
                            {it.label}
                          </span>
                          <span className="mt-[3px] block text-[12.5px] leading-[1.45] text-textBody">
                            {it.hint}
                          </span>
                        </Destination>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            onClick={(e) => goHash(e, '#contact')}
            className="hidden min-h-[44px] shrink-0 items-center whitespace-nowrap rounded-full bg-accent px-7 text-[14.5px] font-bold tracking-[0.01em] text-primary shadow-[0_8px_20px_-12px_rgba(28,44,57,0.5)] transition-colors duration-200 hover:bg-accentBright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:inline-flex"
          >
            Book a consultation
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden ${
              overlay ? 'text-white' : 'text-primary'
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet — groups become nested lists */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100svh-72px)] overflow-y-auto border-t border-neutralLine bg-white lg:hidden"
        >
          <ul className="mx-auto flex max-w-content flex-col gap-1 px-6 py-4">
            {navGroups.map((g) => (
              <li key={g.label} className="py-1">
                <Destination
                  item={g}
                  className={`flex min-h-[44px] items-center text-base font-semibold ${
                    active === g.label ? 'text-accentDeep' : 'text-primary'
                  }`}
                >
                  {g.label}
                </Destination>
                {g.items.length > 0 && (
                  <ul className="mb-1 ml-3 flex flex-col border-l border-neutralLine pl-4">
                    {g.items.map((it) => (
                      <li key={it.label}>
                        <Destination
                          item={it}
                          className="flex min-h-[44px] items-center text-[15px] text-textBody"
                        >
                          {it.label}
                        </Destination>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="py-2">
              <a
                href="/#contact"
                onClick={(e) => goHash(e, '#contact')}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-accent px-7 text-[15px] font-bold text-primary"
              >
                Book a consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
