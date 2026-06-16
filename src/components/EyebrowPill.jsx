import Leaf from './Leaf.jsx'

// Orris-style pill eyebrow tag above section headings (DESIGN.md §4/§5),
// kept warm: gold-tinted pill with a small leaf for the nature motif.
// Reads on both white and neutralWarm backgrounds.
export default function EyebrowPill({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accentDeep ${className}`}
    >
      <Leaf className="h-3 w-3 text-accent" />
      {children}
    </span>
  )
}
