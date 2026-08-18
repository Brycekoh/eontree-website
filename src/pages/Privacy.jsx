import { Eyebrow, Bracket, DevNote, GoldLink } from '../components/ui.jsx'

// PDPA 2010-oriented draft. The form collects name, phone, email and property
// address — publishing it without a notice and a consent tick is a compliance
// gap, not a nicety. Retention periods and controller details need real values
// and a legal review before this goes live.
const sections = [
  {
    id: 'collect',
    title: 'What we collect',
    paras: ['Only what we need to quote for the work and then do it properly.'],
    items: [
      {
        term: 'Your contact details —',
        desc: 'name, phone number, and email, so we can reply to an enquiry.',
      },
      {
        term: 'Property information —',
        desc: 'address, property type, and what you want installed. We need the address to survey and to quote travel honestly.',
      },
      {
        term: 'What you tell us —',
        desc: 'anything you write in the enquiry message or discuss during the consultation.',
      },
      {
        term: 'Site records for clients —',
        desc: 'system designs, device lists, and network configuration for properties we’ve worked on, so we can support them later.',
      },
      {
        term: 'Basic site analytics —',
        desc: 'anonymous page-visit data. No profiles, no advertising trackers.',
      },
    ],
  },
  {
    id: 'why',
    title: 'Why we hold it',
    paras: [
      'Three reasons, and nothing beyond them. We do not sell your details to anyone, and we do not pass them to marketing companies.',
    ],
    items: [
      {
        term: 'To answer your enquiry —',
        desc: 'you asked us to get in touch, so we do.',
      },
      {
        term: 'To carry out the work —',
        desc: 'surveying, designing, installing, and supporting a system needs records of what’s in the property.',
      },
      {
        term: 'To meet our obligations —',
        desc: 'invoices, warranties, and electrical compliance records we’re required to keep.',
      },
    ],
  },
  {
    id: 'consent',
    title: 'Your consent',
    paras: [
      'When you submit the enquiry form you tick a box confirming we can contact you about that enquiry. That’s the only thing the tick covers — it isn’t a subscription, and we won’t add you to a mailing list off the back of it.',
      'You can withdraw consent at any time and we’ll stop contacting you, even mid-quote.',
    ],
    items: [],
  },
  {
    id: 'sharing',
    title: 'Who else sees it',
    paras: [
      'As few people as possible. Where we do share, it’s because the job can’t be done otherwise.',
    ],
    items: [
      {
        term: 'Our installers —',
        desc: 'the team fitting your system need the address and the design.',
      },
      {
        term: 'Suppliers, where required —',
        desc: 'occasionally a manufacturer needs a serial number or address to honour a warranty claim.',
      },
      {
        term: 'Service providers —',
        desc: 'our email and file storage sit with third-party providers, listed on request.',
      },
      {
        term: 'Never —',
        desc: 'advertisers, data brokers, or anyone wanting to sell you something.',
      },
    ],
  },
  {
    id: 'keep',
    title: 'How long we keep it',
    paras: [
      'Enquiries that don’t become projects: [X] months, then deleted. Client records: for the life of the warranty plus [X] years, because support and compliance depend on them. Financial records: as long as Malaysian tax law requires.',
      'Camera footage and system logs stay in your system, under your control. We don’t hold copies, and we can’t view your cameras unless you explicitly grant access for a support session.',
    ],
    items: [],
  },
  {
    id: 'rights',
    title: 'Your rights',
    paras: [
      'Under the Personal Data Protection Act 2010 you can ask us to do the following, free of charge.',
    ],
    items: [
      { term: 'See what we hold —', desc: 'we’ll send you a copy.' },
      { term: 'Correct it —', desc: 'if anything’s wrong, tell us and we’ll fix it.' },
      {
        term: 'Delete it —',
        desc: 'we’ll remove everything we’re not legally required to keep.',
      },
      {
        term: 'Stop us contacting you —',
        desc: 'immediately, and permanently if you want.',
      },
    ],
  },
  {
    id: 'security',
    title: 'How it’s protected',
    paras: [
      'Enquiry data goes to an inbox only our team can reach. System designs and network details are the sensitive ones, so those are kept in access-controlled storage rather than on laptops or phones.',
      'If we ever suffer a breach that affects your data, we’ll tell you what happened and what we’re doing about it — quickly, and in plain terms.',
    ],
    items: [],
  },
]

export default function Privacy() {
  return (
    <main>
      {/* Header */}
      <section className="mx-auto max-w-content px-6 pt-[88px] sm:px-10">
        <div className="max-w-[68ch]">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 font-serif text-[38px] font-light leading-[1.05] tracking-[-0.02em] text-primary sm:text-[52px] lg:text-[66px]">
            Privacy notice
          </h1>
          <p className="mt-6 text-pretty text-[17px] leading-[1.65] text-textBody sm:text-[19px]">
            This explains what we do with your details when you enquire, become a
            client, or use this site. It’s written to be read, not to cover us.
          </p>
          <dl className="mt-10 flex flex-col gap-4 border-t border-neutralLine pt-6 sm:flex-row sm:gap-16">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-accentDeep">
                Last updated
              </dt>
              <dd className="mt-2 text-[15px]">
                <Bracket>[date]</Bracket>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-accentDeep">
                Data controller
              </dt>
              <dd className="mt-2 text-[15px]">
                <Bracket>[EonTree Technologies, registration no.]</Bracket>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-content px-6 pt-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:gap-[72px]">
          <aside className="lg:sticky lg:top-[120px] lg:self-start">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accentDeep">
              Contents
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="rounded text-[15px] leading-[1.5] text-textBody transition-colors duration-150 hover:text-accentDeep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-neutralLine bg-neutralWarm p-4">
              <DevNote>
                draft for review — have a Malaysian legal adviser confirm this against
                the PDPA 2010 before publishing
              </DevNote>
            </div>
          </aside>

          <div className="max-w-[70ch]">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="pb-12">
                <h2 className="font-serif text-[26px] font-normal leading-tight text-primary sm:text-[34px]">
                  {s.title}
                </h2>
                {s.paras.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="mt-4 text-pretty text-[16.5px] leading-[1.68] text-textBody sm:text-[17.5px]"
                  >
                    {p}
                  </p>
                ))}
                {s.items.length > 0 && (
                  <dl className="mt-6 border-t border-neutralLine">
                    {s.items.map((it) => (
                      <div
                        key={it.term}
                        className="border-b border-neutralLine py-4 text-[16.5px] leading-[1.6]"
                      >
                        <dt className="inline font-semibold text-primary">
                          {it.term}
                        </dt>{' '}
                        <dd className="inline text-textBody">{it.desc}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 bg-neutralWarm">
        <div className="mx-auto max-w-content px-6 py-24 sm:px-10 lg:py-[104px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="max-w-[24ch] font-serif text-[32px] font-light leading-[1.05] tracking-[-0.015em] text-primary sm:text-[44px] lg:text-[52px]">
                Want your data removed, or just have a question?
              </h2>
              <p className="mt-6 max-w-[46ch] text-pretty text-[17px] leading-[1.65] text-textBody">
                Email us and we’ll action it. You don’t need to explain why, and it
                won’t affect any work we’re doing for you.
              </p>
            </div>
            <div className="rounded-3xl border border-neutralLine bg-white p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accentDeep">
                Data requests
              </p>
              <p className="mt-3 font-serif text-[26px] leading-tight text-muted">
                [privacy email]
              </p>
              <p className="mt-3 text-[14.5px] leading-[1.55] text-textBody">
                We respond within <Bracket>[X]</Bracket> business days.
              </p>
              <GoldLink to="/faq" className="mt-6 w-full">
                Read the FAQ
              </GoldLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
