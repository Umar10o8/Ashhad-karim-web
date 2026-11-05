import { useEffect } from 'react'
import Lenis from 'lenis'

let lenis = null

// Distance to keep between the floating header and a section heading after a jump.
const headerOffset = () => -((document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0) + 16)

// Scrolls to an element or a y position, through Lenis when it is running.
// `instant` jumps without animating (used when a page opens on a #hash link).
export function smoothScrollTo(target, { instant = false } = {}) {
  const immediate = instant || window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : headerOffset(), immediate, force: true })
    return
  }
  if (typeof target === 'number') window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' })
  else target.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth' })
}

// The pages render on the client, so the browser cannot jump to a #hash target on load (the
// element does not exist yet). Do it once the page has rendered, e.g. "Let's Talk" opening
// /contact/#contact-form straight at the form.
function jumpToInitialHash() {
  if (!window.location.hash) return
  const element = document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
  if (!element) return
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  requestAnimationFrame(() => smoothScrollTo(element, { instant: true }))
}

// Eased page scrolling on wheel and trackpad (touch keeps native scrolling). In-page anchor
// links are routed through Lenis with the header offset, and their target receives focus when
// it can take it (e.g. the skip link's <main tabindex="-1">). Off for reduced motion.
function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      jumpToInitialHash()
      return
    }

    lenis = new Lenis({ lerp: .1, autoRaf: true })

    const handleClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return
      const link = event.target.closest('a[href*="#"]')
      if (!link) return
      const target = new URL(link.href, window.location.href)
      if (target.pathname !== window.location.pathname || !target.hash) return
      const element = document.getElementById(decodeURIComponent(target.hash.slice(1)))
      if (!element) return
      event.preventDefault()
      history.pushState(null, '', target.hash)
      smoothScrollTo(element)
      if (element.hasAttribute('tabindex')) element.focus({ preventScroll: true })
    }

    document.addEventListener('click', handleClick)
    jumpToInitialHash()
    return () => {
      document.removeEventListener('click', handleClick)
      lenis?.destroy()
      lenis = null
    }
  }, [])
}

export default useSmoothScroll
