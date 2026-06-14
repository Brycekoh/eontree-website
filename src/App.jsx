// EonTree Technologies — page shell.
//
// Section components live in src/components/ and get composed here, in the
// DESIGN.md §8 order. Added one batch at a time:
//
//   [x] Navbar
//   [x] Hero
//   [ ] TrustStrip, Solutions, HowItWorks, Products, Stats, LogoWall,
//       WhyUs, Testimonials, Contact, Footer
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-pageBg text-textBody">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}
