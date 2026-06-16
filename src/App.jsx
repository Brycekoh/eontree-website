import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

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

export default function App() {
  return (
    <div className="min-h-screen bg-pageBg text-textBody">
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}
