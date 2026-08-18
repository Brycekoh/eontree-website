import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToId } from '../utils/scroll.js'
import { footerColumns } from '../data/navigation.js'

// Navy footer. Every link resolves; anything without a confirmed destination
// (the phone number, the licence) renders as dimmed text rather than a dead
// link, so unfinished data stays visible as unfinished.
export default function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const goHash = (e, hash) => {
    e.preventDefault()
    const id = hash.slice(1)
    if (location.pathname === '/') scrollToId(id)
    else navigate('/', { state: { scrollTo: id } })
  }

  const linkClass =
    'rounded text-[14.5px] leading-[1.45] text-[rgba(247,244,239,0.78)] transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'

  return (
    <footer className="border-t border-[rgba(247,244,239,0.12)] bg-primaryAlt">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 pb-10 pt-16 sm:grid-cols-2 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src="/logo-horizontal.png"
            alt="EonTree Technologies"
            className="h-11 w-auto"
          />
          <p className="mt-[22px] max-w-[30ch] font-serif text-lg italic leading-[1.5] text-[rgba(247,244,239,0.7)]">
            Rooted in nature, powered by technology.
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h2 className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-accent">
              {col.title}
            </h2>
            <ul className="mt-[18px] flex flex-col gap-[11px]">
              {col.items.map((it) => (
                <li key={it.label}>
                  {it.unconfirmed ? (
                    <span className="text-[14.5px] leading-[1.45] text-[rgba(247,244,239,0.42)]">
                      {it.label}
                    </span>
                  ) : it.to ? (
                    <Link to={it.to} className={linkClass}>
                      {it.label}
                    </Link>
                  ) : (
                    <a
                      href={`/${it.hash}`}
                      onClick={(e) => goHash(e, it.hash)}
                      className={linkClass}
                    >
                      {it.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-5 border-t border-[rgba(247,244,239,0.12)] px-6 pb-11 pt-6 sm:px-10">
        <span className="text-[13px] text-[rgba(247,244,239,0.55)]">
          © {year} EonTree Technologies.{' '}
          <span className="text-[rgba(247,244,239,0.4)]">[License #PLACEHOLDER]</span>
        </span>
        <Link
          to="/privacy"
          className="rounded text-[13px] text-[rgba(247,244,239,0.55)] transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Privacy notice
        </Link>
      </div>
    </footer>
  )
}
