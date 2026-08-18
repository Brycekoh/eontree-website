import { Bracket } from './ui.jsx'

// Credentials, as a single wrapping row. Each item is nowrap with its own
// line-height so the flex lines can't collide when they wrap.
const credentials = [
  { text: 'Licensed electrical & cabling contractor', pending: '[ST #PLACEHOLDER]' },
  { text: 'Certified installer', pending: '[BRAND PLACEHOLDER]' },
  { text: 'Workmanship warranty', pending: '[X years]' },
  { text: 'Fully insured' },
]

export default function TrustStrip() {
  return (
    <section className="mx-auto max-w-content px-6 pt-[34px] sm:px-10">
      <div className="flex flex-col gap-x-10 gap-y-[18px] border-b border-neutralLine pb-[26px] sm:flex-row sm:flex-wrap sm:items-center">
        <span className="whitespace-nowrap text-[11.5px] font-bold uppercase leading-[1.4] tracking-[0.2em] text-primary">
          Licensed, certified, insured
        </span>
        {credentials.map((c) => (
          <span
            key={c.text}
            className="text-[14.5px] leading-[1.4] text-textBody sm:whitespace-nowrap"
          >
            {c.text} {c.pending && <Bracket>{c.pending}</Bracket>}
          </span>
        ))}
      </div>
    </section>
  )
}
