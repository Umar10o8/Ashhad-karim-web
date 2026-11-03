import { useEffect } from 'react'

// Pulls the element a little toward the pointer while it hovers, then lets it spring back.
// Writes `--tx` / `--ty`; skipped on touch-only devices and for reduced motion.
function useMagnetic(ref, strength = 0.3, selector) {
  useEffect(() => {
    const element = ref.current
    if (!element || !window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return

    const targetFor = (event) => {
      const target = selector ? event.target.closest(selector) : element
      return target && element.contains(target) ? target : null
    }

    const move = (event) => {
      const target = targetFor(event)
      if (!target) return
      const rect = target.getBoundingClientRect()
      target.style.setProperty('--tx', `${(event.clientX - rect.left - rect.width / 2) * strength}px`)
      target.style.setProperty('--ty', `${(event.clientY - rect.top - rect.height / 2) * strength}px`)
    }
    const reset = (event) => {
      const target = targetFor(event)
      if (!target || (event.relatedTarget && target.contains(event.relatedTarget))) return
      target.style.setProperty('--tx', '0px')
      target.style.setProperty('--ty', '0px')
    }

    element.addEventListener('pointermove', move)
    element.addEventListener(selector ? 'pointerout' : 'pointerleave', reset)
    return () => {
      element.removeEventListener('pointermove', move)
      element.removeEventListener(selector ? 'pointerout' : 'pointerleave', reset)
    }
  }, [ref, strength, selector])
}

export default useMagnetic
