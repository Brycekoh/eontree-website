import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SectionNav from '../components/SectionNav.jsx'
import Hero from '../components/Hero.jsx'
import TrustStrip from '../components/TrustStrip.jsx'
import Solutions from '../components/Solutions.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Features from '../components/Features.jsx'
import Products from '../components/Products.jsx'
import PartnerWall from '../components/PartnerWall.jsx'
import Stats from '../components/Stats.jsx'
import Projects from '../components/Projects.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Contact from '../components/Contact.jsx'
import { scrollToId } from '../utils/scroll.js'

// Homepage — all sections in DESIGN.md §8 order. When arrived at from another
// page with a target section (nav state or #hash), scroll to it once mounted.
export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const id = location.state?.scrollTo || location.hash.slice(1)
    if (id) {
      // Wait for layout/paint so the target has its final position.
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id)))
    }
  }, [location])

  return (
    <>
      <SectionNav />
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
    </>
  )
}
