// Scroll to a section by id, clearing the fixed header and respecting
// reduced motion. The header height is measured rather than assumed — it
// changes with the logo, the viewport, and font loading.
export function scrollToId(id, { behavior } = {}) {
  const el = document.getElementById(id)
  if (!el) return false
  const nav = document.querySelector('header')
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const y =
    el.getBoundingClientRect().top + window.scrollY - (nav?.offsetHeight ?? 0) - 12
  window.scrollTo({ top: y, behavior: behavior || (reduce ? 'auto' : 'smooth') })
  return true
}
