import { useEffect } from 'react'
import { subscribeScroll, whileVisible } from '../utils/scrollFrame.js'

// Writes a vertical parallax offset to `--parallax-y`. Only runs while the element is near
// the viewport.
function useParallax(ref, distance = 18) {
  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let last = ''
    const subscriber = {
      read: () => element.getBoundingClientRect(),
      write: (rect) => {
        const progress = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / window.innerHeight
        const offset = Math.max(-distance, Math.min(distance, progress * distance)).toFixed(1)
        if (offset === last) return
        last = offset
        element.style.setProperty('--parallax-y', `${offset}px`)
      },
    }
    const stopVisible = whileVisible(element, subscriber)
    const unsubscribe = subscribeScroll(subscriber)
    return () => {
      stopVisible()
      unsubscribe()
    }
  }, [ref, distance])
}

export default useParallax
