import { useEffect } from 'react'

// Writes the element's scroll progress (0–1) to its `--p` custom property, once per frame.
//   'view'  0 when the top enters the lower part of the viewport, 1 as the element leaves upward
//   'pin'   0 when the top reaches the viewport top, 1 when the bottom reaches the viewport bottom
//           (for tall sections with a sticky child)
// Reduced motion pins --p at 1, so scroll-linked effects show their finished state.
function useScrollProgress(ref, mode = 'view') {
  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.style.setProperty('--p', '1')
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight
      const progress = mode === 'pin'
        ? -rect.top / Math.max(1, rect.height - viewport)
        : (viewport * 0.85 - rect.top) / (rect.height + viewport * 0.35)
      element.style.setProperty('--p', Math.min(1, Math.max(0, progress)).toFixed(4))
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
  }, [ref, mode])
}

export default useScrollProgress
