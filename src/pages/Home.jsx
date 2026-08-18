import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import TrustStrip from '../components/TrustStrip.jsx'
import Systems from '../components/Systems.jsx'
import OneApp from '../components/OneApp.jsx'
import Process from '../components/Process.jsx'
import Work from '../components/Work.jsx'
import Brands from '../components/Brands.jsx'
import Contact from '../components/Contact.jsx'
import { scrollToId } from '../utils/scroll.js'

// Homepage — eight sections: hero, trust, systems, one app, process, work,
// brands, contact. Arriving from another page with a target section (nav state
// or #hash) scrolls to it once mounted.
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
    <main>
      <Hero />
      <TrustStrip />
      <Systems />
      <OneApp />
      <Process />
      <Work />
      <Brands />
      <Contact />
    </main>
  )
}
