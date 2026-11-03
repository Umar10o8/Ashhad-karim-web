import { useEffect, useRef, useState } from 'react'

// A small crimson dot that tracks the pointer exactly, and a soft ring that trails it and grows
// over links and buttons (or shows a label over elements with `data-cursor="…"`). Decorative
// only: the real cursor stays visible. Hidden until the first pointer move, so it never appears
// in the top-left corner on load. Runs only with a fine pointer and without reduced motion.
function CursorFollower() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [label, setLabel] = useState('')
  const [enabled] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!enabled || !dot || !ring) return

    // State lives in data attributes: React owns className and would reset added classes.
    const root = dot.parentElement
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let started = false
    let frame = 0

    const loop = () => {
      current.x += (target.x - current.x) * 0.18
      current.y += (target.y - current.y) * 0.18
      ring.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`
      frame = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.1 ? requestAnimationFrame(loop) : 0
    }
    const move = (event) => {
      target.x = event.clientX
      target.y = event.clientY
      dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`
      if (!started) {
        // Start the ring where the pointer is, not where it was initialised.
        started = true
        current.x = target.x
        current.y = target.y
      }
      root.dataset.active = 'true'
      if (!frame) frame = requestAnimationFrame(loop)
    }
    const over = (event) => {
      const labelled = event.target.closest('[data-cursor]')
      setLabel(labelled?.dataset.cursor ?? '')
      root.dataset.hover = String(!labelled && Boolean(event.target.closest('a, button, summary, label, [role="button"], input, textarea')))
    }
    const leave = () => { root.dataset.active = 'false' }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over)
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div className={`cursor${label ? ' has-label' : ''}`} aria-hidden="true">
      <span className="cursor-dot" ref={dotRef} />
      <span className="cursor-follow" ref={ringRef}>
        <span className="cursor-ring"><span className="cursor-label">{label}</span></span>
      </span>
    </div>
  )
}

export default CursorFollower
