// DESIGN.md §8.7 — brand / compatibility logo wall (part of Products/Brands).
// PENDING STEP 2: still EV-era content; the smart-home brand wall replaces this.
// MUST-REPLACE: greyscale placeholder tiles — use only brand logos EonTree is
// actually entitled to display.
const logos = Array.from({ length: 8 }, (_, i) => `[Logo ${i + 1}]`)

export default function PartnerWall() {
  return (
    <section className="bg-pageBg">
      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-8 sm:pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl text-primary sm:text-5xl">
            Works with every EV on the road.
          </h2>
          <p className="mt-4 text-lg text-textBody">
            Whatever you drive, our chargers speak its language.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {logos.map((label) => (
            <li
              key={label}
              className="flex h-20 items-center justify-center rounded-xl border border-neutralLine bg-white text-sm font-semibold uppercase tracking-wide text-textBody/40 grayscale transition-colors duration-200 hover:text-textBody/70"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
