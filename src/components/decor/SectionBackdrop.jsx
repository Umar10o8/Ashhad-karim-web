import { useRef } from 'react'
import useParallax from '../../hooks/useParallax.js'

// Print-floor shapes floating behind a section panel at very low opacity: billboard panels,
// crop marks, a registration target, and a halftone cluster. `variant` mirrors the layout so
// neighbouring sections do not repeat. Moves with a slow parallax (transform only).
function SectionBackdrop({ variant = 0 }) {
  const ref = useRef(null)
  useParallax(ref, 36)

  return (
    <div className={`backdrop backdrop-${variant % 3}`} aria-hidden="true" ref={ref}>
      <span className="backdrop-panel backdrop-panel-a" />
      <span className="backdrop-panel backdrop-panel-b" />
      <svg className="backdrop-marks" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 0v22M0 30h22M90 0v22M120 30H98M30 120V98M0 90h22M90 120V98M120 90H98" />
        <circle cx="60" cy="60" r="16" />
        <path d="M60 36v48M36 60h48" />
      </svg>
      <svg className="backdrop-dots" viewBox="0 0 100 100" fill="currentColor">
        {Array.from({ length: 25 }, (_, index) => {
          const row = Math.floor(index / 5)
          const col = index % 5
          return <circle key={index} cx={10 + col * 20} cy={10 + row * 20} r={6 - Math.hypot(row - 2, col - 2) * 1.4} />
        })}
      </svg>
    </div>
  )
}

export default SectionBackdrop
