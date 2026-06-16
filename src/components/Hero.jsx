import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

// Google Home-inspired opening: white nav above a full-bleed warm home video.
// Asset: Mixkit "The sky above the houses of an English village" (4009),
// saved locally as /hero-smart-home.mp4. Replace with EonTree-owned footage
// when available.
export default function Hero() {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section id="top" className="relative bg-pageBg">
      <div className="relative min-h-[calc(100vh-76px)] overflow-hidden sm:min-h-[calc(100vh-84px)]">
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          src="/hero-smart-home.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Warm home exterior video"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
        />

        {/* Warm illustrated fallback shown until the video can play. */}
        <div
          aria-label="Warm smart-home background fallback"
          className={`absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(28,44,57,0.38),transparent_30%),linear-gradient(180deg,rgba(245,193,138,0.48)_0%,rgba(224,179,132,0.18)_36%,rgba(28,44,57,0.22)_100%),linear-gradient(135deg,#6f8a76_0%,#e7b37d_36%,#f2d7b5_52%,#6b7b67_100%)] transition-opacity duration-700 ${
            videoReady ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,transparent_0%,rgba(28,44,57,0.26)_72%,rgba(28,44,57,0.34)_100%)]" />
          <div className="absolute bottom-[18%] left-[12%] h-[30%] w-[46%] rounded-t-[2.6rem] bg-[#f6ead8]/78 shadow-[0_32px_80px_rgba(28,44,57,0.24)]" />
          <div className="absolute bottom-[32%] left-[23%] h-[18%] w-[32%] -skew-x-12 rounded-t-[1.8rem] bg-[#4d574b]/54" />
          <div className="absolute bottom-[18%] left-[18%] h-[15%] w-[7%] rounded-t-xl bg-primary/58" />
          <div className="absolute bottom-[24%] left-[32%] h-[10%] w-[12%] rounded-2xl bg-primary/42" />
          <div className="absolute bottom-[17%] left-0 h-[18%] w-[18%] rounded-tr-[8rem] bg-primary/42 blur-[1px]" />
          <div className="absolute bottom-[15%] right-[7%] h-[24%] w-[21%] rounded-t-full bg-primary/34 blur-[1px]" />
          <div className="absolute bottom-[8%] left-[8%] right-[8%] h-[12%] rounded-[100%] bg-[#5f725a]/44 blur-sm" />
        </div>

        {/* Legibility scrim, concentrated where the headline sits. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,44,57,0.72)_0%,rgba(28,44,57,0.5)_34%,rgba(28,44,57,0.13)_72%,rgba(28,44,57,0.05)_100%)]"
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1200px] items-end px-6 pb-16 pt-24 sm:min-h-[calc(100vh-84px)] sm:pb-20 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              Smart home, properly installed
            </p>
            <h1 className="max-w-[11ch] font-serif text-6xl leading-[0.98] text-white drop-shadow-[0_5px_26px_rgba(28,44,57,0.46)] sm:text-7xl lg:text-8xl">
              Your whole home, working as one.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              We design and install smart lighting, security, climate, and AV,
              then set it up so it actually works together.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-b from-accentBright to-accent px-7 py-3.5 text-base font-semibold text-primary shadow-[0_14px_38px_-10px_rgba(224,179,132,0.7)] ring-1 ring-inset ring-white/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-10px_rgba(224,179,132,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Plan your space
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
