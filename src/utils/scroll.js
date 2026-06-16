// Scroll to a section by id, accounting for the sticky nav and reduced motion.
export function scrollToId(id, { behavior } = {}) {
  const el = document.getElementById(id)
  if (!el) return false
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const y = el.getBoundingClientRect().top + window.scrollY - 80 // sticky nav
  window.scrollTo({ top: y, behavior: behavior || (reduce ? 'auto' : 'smooth') })
  return true
}
