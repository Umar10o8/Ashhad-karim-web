import { useEffect, useRef } from 'react'

// Endless ticker. The item list is rendered twice and the track slides by exactly one copy,
// so the loop is seamless. The duplicate is hidden from assistive tech.
function Marquee({ items, label }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const element = rootRef.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let pointerX = 0
    let pointerY = 0
    const updateSpeed = (event) => {
      pointerX = event.clientX
      pointerY = event.clientY
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = element.getBoundingClientRect()
        const inLine = pointerX >= rect.left && pointerX <= rect.right
        const distance = pointerY < rect.top
          ? rect.top - pointerY
          : pointerY > rect.bottom
            ? pointerY - rect.bottom
            : 0
        element.style.setProperty('--marquee-duration', inLine && distance > 0 && distance < 120 ? '76s' : '48s')
      })
    }

    window.addEventListener('pointermove', updateSpeed, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', updateSpeed)
    }
  }, [])

  const group = (hidden) => (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )

  return (
    <div className="marquee" role="region" aria-label={label} ref={rootRef}>
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}

export default Marquee
