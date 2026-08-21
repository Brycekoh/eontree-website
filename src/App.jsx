import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Seo from './components/Seo.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Support from './pages/Support.jsx'
import WhereWeWork from './pages/WhereWeWork.jsx'
import Faq from './pages/Faq.jsx'
import Privacy from './pages/Privacy.jsx'

// On route change, reset to the top — unless we're targeting a section on the
// home page (handled in Home via #hash or nav state).
function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash && !location.state?.scrollTo) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash, location.state])
  return null
}

function NotFound() {
  return (
    <main className="mx-auto max-w-content px-6 pb-28 pt-[88px] sm:px-10">
      <h1 className="font-serif text-[38px] font-light text-primary sm:text-[56px]">
        Page not found
      </h1>
      <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.65] text-textBody">
        That page doesn’t exist — it may have moved. Head back to the home page, or
        get in touch and we’ll point you the right way.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-[54px] items-center rounded-full bg-accent px-7 text-[15.5px] font-bold text-primary transition-colors hover:bg-accentBright"
      >
        Back to home
      </Link>
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-pageBg text-textBody">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-6 focus:py-3 focus:text-[15px] focus:font-bold focus:text-primary"
      >
        Skip to content
      </a>
      <Seo />
      <ScrollManager />
      <Navbar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/where-we-work" element={<WhereWeWork />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
