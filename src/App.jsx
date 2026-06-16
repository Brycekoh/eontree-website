// EonTree Technologies — page shell.
//
// Section components live in src/components/ and get composed here, in the
// DESIGN.md §8 order, alternating white / neutralWarm backgrounds for rhythm.
//
//   [x] Navbar
//   [x] Hero          (white)
//   [x] TrustStrip    (neutralWarm)
//   [x] Solutions     (white)
//   [x] HowItWorks    (neutralWarm)
//   [ ] Products, Stats, LogoWall, WhyUs, Testimonials, Contact, Footer
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import Solutions from './components/Solutions.jsx'
import HowItWorks from './components/HowItWorks.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-pageBg text-textBody">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Solutions />
        <HowItWorks />
      </main>
    </div>
  )
}
