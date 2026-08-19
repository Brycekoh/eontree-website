import { useState } from 'react'
import { scrollToId } from '../utils/scroll.js'

const facts = [
  { value: '4', label: 'systems' },
  { value: '1', label: 'app' },
  { value: '1', label: 'team' },
]

// Full-bleed hero. The nav overlays this section, so there is no viewport
// arithmetic to get wrong; 100svh keeps mobile browser chrome out of it.
export default function Hero() {
  const [noVideo, setNoVideo] = useState(false)

  const go = (e, id) => {
    e.preventDefault()
    scrollToId(id)
  }

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-primary"
    >
      <img
        src="/images/project-holiday.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!noVideo && (
        <video
          src="/hero-smart-home.mp4"
          poster="/images/project-holiday.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Warm home exterior at dusk"
          onError={() => setNoVideo(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Light at the top so the footage reads, heavy at the bottom under type */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,44,57,0.26)_0%,rgba(28,44,57,0.06)_34%,rgba(28,44,57,0.58)_76%,rgba(28,44,57,0.86)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,44,57,0.3)_0%,rgba(28,44,57,0.06)_52%,transparent_100%)]"
      />

      <div className="relative mx-auto flex h-full max-w-content flex-col justify-end px-6 pt-[120px] sm:px-10">
        <p className="mb-[26px] text-[11.5px] font-bold uppercase tracking-[0.22em] text-accent">
          Smart home, properly installed
        </p>
        <h1 className="max-w-[20ch] text-balance font-serif text-[44px] font-light leading-[0.98] tracking-[-0.025em] text-white [text-shadow:0_2px_30px_rgba(28,44,57,0.35)] sm:text-[64px] lg:text-[92px]">
          A smart home that <em className="font-light italic">actually works.</em>
        </h1>
        <p className="mt-[30px] max-w-[52ch] text-pretty text-[17px] leading-[1.6] text-white/90 sm:text-[19px]">
          We design and install smart lighting, security, climate, and AV — then set
          them up to work together, not just side by side. One system, one app, one
          team that looks after it.
        </p>

        <div className="mt-[38px] flex flex-wrap items-center gap-3.5">
          <a
            href="#contact"
            onClick={(e) => go(e, 'contact')}
            className="inline-flex min-h-[54px] items-center whitespace-nowrap rounded-full bg-accent px-[30px] text-[15.5px] font-bold text-primary shadow-[0_16px_36px_-18px_rgba(0,0,0,0.6)] transition-colors duration-200 hover:bg-accentBright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Book a consultation
          </a>
          <a
            href="#systems"
            onClick={(e) => go(e, 'systems')}
            className="inline-flex min-h-[54px] items-center whitespace-nowrap rounded-full border border-white/60 px-7 text-[15.5px] font-semibold text-white backdrop-blur-[4px] transition-colors duration-200 hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            See what we install
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-10 border-t border-white/20 pb-[34px] pt-[22px]">
          <ul className="flex flex-wrap items-baseline gap-x-11 gap-y-3">
            {facts.map((f) => (
              <li key={f.label} className="flex items-baseline gap-2.5">
                <span className="font-serif text-[32px] leading-none text-accent">
                  {f.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                  {f.label}
                </span>
              </li>
            ))}
          </ul>
          <span className="hidden items-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white/60 sm:flex">
            Scroll
            <span
              aria-hidden="true"
              className="block h-[26px] w-px animate-cue bg-white/50"
            />
          </span>
        </div>
      </div>
    </section>
  )
}
