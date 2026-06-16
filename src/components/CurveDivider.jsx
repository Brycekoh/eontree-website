// Organic curved transition between sections (EonTree nature motif — no flat
// straight edges). Render as the first child of a `relative overflow-hidden`
// section; `fill` is the color of the section ABOVE, so it appears to spill
// down into this one across a soft, asymmetric curve.
//
// Tokens (DESIGN.md §2): pageBg #FFFFFF, neutralWarm #F7F4EF.
export default function CurveDivider({ fill, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 leading-[0] ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-20"
      >
        {/* Asymmetric edge — deliberately not a symmetric wave. */}
        <path
          d="M0,0 H1440 V54 C1180,112 880,20 560,66 C360,94 160,88 0,58 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
