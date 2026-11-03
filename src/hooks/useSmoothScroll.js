import { useEffect } from 'react'
import Lenis from 'lenis'

let lenis = null

// Distance to keep between the floating header and a section heading after a jump.
const headerOffset = () => -((document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0) + 16)

// Scrolls to an element or a y position, through Lenis when it is running.
export function smoothScrollTo(target) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : headerOffset(), immediate: reduceMotion })
    return
  }
  if (typeof target === 'number') window.scrollTo({ top: target, behavior: reduceMotion ? 'auto' : 'smooth' })
  else target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
}

// Eased page scrolling on wheel and trackpad (touch keeps native scrolling). In-page anchor
// links are routed through Lenis with the header offset, and their target receives focus when
// it can take it (e.g. the skip link's <main tabindex="-1">). Off for reduced motion.
function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
    return () => {
      document.removeEventListener('click', handleClick)
      lenis?.destroy()
      lenis = null
    }
  }, [])
}

export default useSmoothScroll
