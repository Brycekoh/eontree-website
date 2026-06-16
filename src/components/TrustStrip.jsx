import { ShieldCheck, BadgeCheck, FileCheck2, Umbrella } from 'lucide-react'

// DESIGN.md §8.3 — subtle credential strip on neutralWarm.
// MUST-REPLACE: the bracketed text below is real-world fact (license #,
// partner brand, warranty term, insurance figure). Fill with EonTree's
// genuine credentials and ideally swap the Lucide marks for real cert logos.
// If a credential doesn't exist yet, list what's true instead.
const badges = [
  { icon: ShieldCheck, label: 'Licensed electrical / cabling contractor — #[PLACEHOLDER]' },
  { icon: BadgeCheck, label: 'Certified installer — [BRAND PARTNER]' },
  { icon: FileCheck2, label: 'Workmanship warranty — [X] years' },
  { icon: Umbrella, label: 'Fully insured' },
]

export default function TrustStrip() {
  return (
    <section className="bg-neutralWarm">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-textBody/60">
          Licensed, certified, and insured.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {badges.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-textBody">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accentDeep">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
