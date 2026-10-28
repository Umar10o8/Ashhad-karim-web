import { useEffect, useRef, useState } from 'react'

// A soft ring that trails the pointer, grows over links and buttons, and shows a label over
// elements with `data-cursor="…"`. Decorative only: the real cursor stays visible. Runs only on
// devices with a fine pointer and without a reduced-motion preference.
function CursorFollower() {
  const ref = useRef(null)
  const [label, setLabel] = useState('')
  const [enabled] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches)

  useEffect(() => {
    const element = ref.current
    if (!enabled || !element) return

    const target = { x: -100, y: -100 }
    const current = { x: -100, y: -100 }
    let frame = 0

    const loop = () => {
      current.x += (target.x - current.x) * 0.2
      current.y += (target.y - current.y) * 0.2
      element.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`
      frame = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.1 ? requestAnimationFrame(loop) : 0
    }
    const move = (event) => {
      target.x = event.clientX
      target.y = event.clientY
      element.classList.add('is-active')
      if (!frame) frame = requestAnimationFrame(loop)
    }
    const over = (event) => {
      const labelled = event.target.closest('[data-cursor]')
      setLabel(labelled?.dataset.cursor ?? '')
      element.classList.toggle('is-hovering', !labelled && Boolean(event.target.closest('a, button, summary, label')))
    }
    const leave = () => element.classList.remove('is-active')

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
    <div className={`cursor${label ? ' has-label' : ''}`} ref={ref} aria-hidden="true">
      <span className="cursor-ring"><span className="cursor-label">{label}</span></span>
    </div>
  )
}

export default CursorFollower
