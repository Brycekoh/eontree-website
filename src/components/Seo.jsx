import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { byPath, pages, SITE_URL } from '../data/seo.js'

// Keeps the document head in step with the current route during client-side
// navigation. The first paint already has the right tags because each route
// is written to its own static HTML file at build time (scripts/build-seo.mjs)
// — this only handles what happens after the app takes over.
function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, name] = selector.match(/\[(?:name|property)="([^"]+)"\]/) ?? []
    if (!name) return
    el.setAttribute(selector.includes('property=') ? 'property' : 'name', name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = byPath[pathname]
    // Unknown routes (the 404) should not be indexed or claim a canonical.
    const known = Boolean(meta)
    const title = known ? meta.title : 'Page not found | EonTree Technologies'
    const description = known
      ? meta.description
      : 'That page does not exist. Browse our smart home systems, pricing and support instead.'
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', known ? url : SITE_URL)

    let robots = document.head.querySelector('meta[name="robots"]')
    if (!known) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      robots.setAttribute('content', 'noindex')
    } else if (robots) {
      robots.remove()
    }
  }, [pathname])

  return null
}

export { pages }
