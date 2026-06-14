// EonTree Technologies — page shell.
//
// Section components live in src/components/ and get composed here, in the
// DESIGN.md §8 order. They are added one at a time in a later step:
//
//   import Nav from './components/Nav.jsx'
//   import Hero from './components/Hero.jsx'
//   import TrustStrip from './components/TrustStrip.jsx'
//   import Solutions from './components/Solutions.jsx'
//   import HowItWorks from './components/HowItWorks.jsx'
//   import Products from './components/Products.jsx'
//   import Stats from './components/Stats.jsx'
//   import LogoWall from './components/LogoWall.jsx'
//   import WhyUs from './components/WhyUs.jsx'
//   import Testimonials from './components/Testimonials.jsx'
//   import Contact from './components/Contact.jsx'
//   import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-pageBg text-textBody">
      {/* Sections render here in DESIGN.md §8 order. */}
      <main className="mx-auto flex min-h-screen max-w-[1200px] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          rooted in nature, powered by technology
        </p>
        <h1 className="mt-4 text-5xl text-primary">EonTree Technologies</h1>
        <p className="mt-4 max-w-md text-textBody">
          Scaffold ready. Brand tokens, fonts, and the section shell are wired
          up — sections come next.
        </p>
      </main>
    </div>
  )
}
