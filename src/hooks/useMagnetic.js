import { useEffect } from 'react'

// Pulls the element a little toward the pointer while it hovers, then lets it spring back.
// Writes `--tx` / `--ty`; skipped on touch-only devices and for reduced motion.
function useMagnetic(ref, strength = 0.3) {
  useEffect(() => {
    const element = ref.current
    if (!element || !window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return

    const move = (event) => {
      const rect = element.getBoundingClientRect()
      element.style.setProperty('--tx', `${(event.clientX - rect.left - rect.width / 2) * strength}px`)
      element.style.setProperty('--ty', `${(event.clientY - rect.top - rect.height / 2) * strength}px`)
    }
    const reset = () => {
      element.style.setProperty('--tx', '0px')
      element.style.setProperty('--ty', '0px')
    }

    element.addEventListener('pointermove', move)
    element.addEventListener('pointerleave', reset)
    return () => {
      element.removeEventListener('pointermove', move)
      element.removeEventListener('pointerleave', reset)
    }
  }, [ref, strength])
}

export default useMagnetic
