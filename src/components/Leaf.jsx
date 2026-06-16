// EonTree signature glyph — a single leaf. Used as branch-bud nodes and as
// list markers in place of the generic icon-in-a-circle treatment. Inherits
// color via currentColor (set text-accent / text-accentDeep on the parent).
export default function Leaf({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2C6.8 7 5.2 13 12 22C18.8 13 17.2 7 12 2Z" fill="currentColor" />
      {/* midrib — a hairline of navy so the leaf reads as drawn, not a blob */}
      <path
        d="M12 5.5V19.5"
        stroke="#1C2C39"
        strokeOpacity="0.3"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}
