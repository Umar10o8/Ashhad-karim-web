import { useEffect } from 'react'

// Tracks the pointer over a list of cards and writes its position to `--mx` / `--my`
// on the hovered card, so CSS can draw a spotlight that follows the cursor.
// One delegated listener on the container; skipped on touch-only devices.
function usePointerGlow(ref, selector) {
  useEffect(() => {
    const container = ref.current
    if (!container || !window.matchMedia('(hover: hover)').matches) return

    const update = (event) => {
      const card = event.target.closest(selector)
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      card.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }

    container.addEventListener('pointermove', update, { passive: true })
    return () => container.removeEventListener('pointermove', update)
  }, [ref, selector])
}

export default usePointerGlow
