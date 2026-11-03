import { useEffect } from 'react'

// Tracks the pointer over a list of cards and writes its position to `--mx` / `--my`
// on the hovered card, so CSS can draw a spotlight that follows the cursor.
// One delegated listener on the container; skipped on touch-only devices.
function usePointerGlow(ref, selector, { tilt = false } = {}) {
  useEffect(() => {
    const container = ref.current
    if (!container || !window.matchMedia('(hover: hover)').matches) return

    const update = (event) => {
      const card = event.target.closest(selector)
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      card.style.setProperty('--mx', `${x * rect.width}px`)
      card.style.setProperty('--my', `${y * rect.height}px`)
      if (tilt) {
        card.style.setProperty('--tilt-y', `${(x - .5) * 7}deg`)
        card.style.setProperty('--tilt-x', `${(.5 - y) * 7}deg`)
      }
    }

    const reset = (event) => {
      const card = event.target.closest(selector)
      if (!card || (event.relatedTarget && card.contains(event.relatedTarget))) return
      card.style.setProperty('--tilt-x', '0deg')
      card.style.setProperty('--tilt-y', '0deg')
    }

    container.addEventListener('pointermove', update, { passive: true })
    if (tilt) container.addEventListener('pointerout', reset)
    return () => {
      container.removeEventListener('pointermove', update)
      if (tilt) container.removeEventListener('pointerout', reset)
    }
  }, [ref, selector, tilt])
}

export default usePointerGlow
