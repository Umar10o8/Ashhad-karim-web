import { useEffect } from 'react'

const MAX_STAGGER_STEPS = 4
const REVEAL_MS = 720 // matches --duration-slow; masks use --duration-image
const MASK_MS = 1100

// Reveals [data-reveal] elements once as they enter the viewport.
//   data-reveal         fade and rise (default)
//   data-reveal="mask"  image mask reveal
// Elements entering together are staggered in DOM order. When a reveal finishes the element
// gets `reveal-done`, which hands transitions back to the component's own hover styles.
// Elements added later (e.g. after a portfolio filter change) are picked up automatically.
// Content stays visible without JS and for users who prefer reduced motion.
function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const root = document.documentElement
    const timers = new Set()

    const finish = (element, delay) => {
      const duration = element.dataset.reveal === 'mask' ? MASK_MS : REVEAL_MS
      const timer = setTimeout(() => {
        element.classList.add('reveal-done')
        element.style.removeProperty('--reveal-delay')
        timers.delete(timer)
      }, duration + delay + 50)
      timers.add(timer)
    }

    const intersection = new IntersectionObserver((entries) => {
      const entering = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target)
        .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))

      entering.forEach((element, index) => {
        const delay = Math.min(index, MAX_STAGGER_STEPS) * 70
        element.style.setProperty('--reveal-delay', `${delay}ms`)
        element.classList.add('is-visible')
        intersection.unobserve(element)
        finish(element, delay)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })

    const observe = (element) => {
      if (!element.classList.contains('is-visible')) intersection.observe(element)
    }

    const mutations = new MutationObserver((records) => {
      records.forEach(({ addedNodes }) => addedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) return
        if (node.matches('[data-reveal]')) observe(node)
        node.querySelectorAll('[data-reveal]').forEach(observe)
      }))
    })

    root.classList.add('has-reveal')
    document.querySelectorAll('[data-reveal]').forEach(observe)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      intersection.disconnect()
      mutations.disconnect()
      timers.forEach(clearTimeout)
      root.classList.remove('has-reveal')
    }
  }, [])
}

export default useReveal
