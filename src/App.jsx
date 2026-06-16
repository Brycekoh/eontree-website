// EonTree Technologies — page shell.
//
// Sections composed in DESIGN.md §8 order. Backgrounds alternate
// white / neutralWarm with navy bands for Stats, Final CTA, and Footer.
//
//   1.  Navbar
//   2.  Hero          (white)
//   3.  TrustStrip    (neutralWarm)
//   4.  Solutions     (white)
//   5.  HowItWorks    (neutralWarm)
//   6.  Features     (white) — 2x3 capability grid
//   7.  Products + PartnerWall (neutralWarm / white) — brand cards + logo wall
//   8.  Stats         (navy)
//   9.  Projects      (white)
//   10. Testimonials  (neutralWarm)
//   11. FinalCTA      (navy)
//   11b. Contact      (neutralWarm) — consultation form, id="contact"
//   12. Footer        (navy)
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import Solutions from './components/Solutions.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Features from './components/Features.jsx'
import Products from './components/Products.jsx'
import PartnerWall from './components/PartnerWall.jsx'
import Stats from './components/Stats.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-pageBg text-textBody">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Solutions />
        <HowItWorks />
        <Features />
        <Products />
        <PartnerWall />
        <Stats />
        <Projects />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
