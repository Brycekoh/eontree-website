import { Link } from 'react-router-dom'

// Small shared primitives. The new design drops the pill eyebrow for a plain
// letterspaced kicker, and gives unconfirmed data its own visible treatment.

export function Eyebrow({ children, on = 'light', className = '' }) {
  return (
    <p
      className={`text-[11.5px] font-bold uppercase tracking-[0.22em] ${
        on === 'dark' ? 'text-accent' : 'text-accentDeep'
      } ${className}`}
    >
      {children}
    </p>
  )
}

// Data the client has not confirmed yet. Deliberately visible as unfinished —
// never style this to look like fact.
export function Bracket({ children, on = 'light' }) {
  return (
    <span className={on === 'dark' ? 'text-[rgba(247,244,239,0.45)]' : 'text-muted'}>
      {children}
    </span>
  )
}

// A note to the client/developer. Remove once the underlying content is real.
export function DevNote({ children, on = 'light', className = '' }) {
  return (
    <p
      className={`font-mono text-[11px] leading-[1.6] ${
        on === 'dark' ? 'text-[rgba(247,244,239,0.45)]' : 'text-muted'
      } ${className}`}
    >
      {children}
    </p>
  )
}

const goldBase =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full bg-accent px-7 font-bold text-primary transition-colors duration-200 hover:bg-accentBright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'

export function GoldLink({ to, href, onClick, children, className = '' }) {
  const cls = `${goldBase} min-h-[54px] text-[15.5px] ${className}`
  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  return (
    <a href={href} onClick={onClick} className={cls}>
      {children}
    </a>
  )
}

export function OutlineLink({
  to,
  href,
  onClick,
  children,
  on = 'light',
  className = '',
}) {
  const tone =
    on === 'dark'
      ? 'border-white/60 text-white hover:bg-white hover:text-primary'
      : 'border-primary/25 text-primary hover:bg-primary hover:text-white'
  const cls = `inline-flex min-h-[54px] items-center justify-center whitespace-nowrap rounded-full border px-7 text-[15.5px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${tone} ${className}`
  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  return (
    <a href={href} onClick={onClick} className={cls}>
      {children}
    </a>
  )
}

// Standard page shell for sub-pages: the header is sticky there, so the
// first section carries its own top padding.
export function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <section className="mx-auto max-w-content px-6 pt-[88px] sm:px-10">
      <div className="grid grid-cols-1 items-baseline gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[20ch] font-serif text-[38px] font-light leading-[1.0] tracking-[-0.025em] text-primary sm:text-[56px] lg:text-[78px]">
            {title}
          </h1>
        </div>
        {lead && (
          <p className="max-w-[46ch] text-[17px] leading-[1.65] text-textBody sm:text-[18px]">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
