import { useEffect } from 'react'

function useParallax(ref, distance = 18) {
  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const progress = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / window.innerHeight
      const offset = Math.max(-distance, Math.min(distance, progress * distance))
      element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`)
    }
    const request = () => { if (!frame) frame = requestAnimationFrame(update) }

    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [ref, distance])
}

export default useParallax
