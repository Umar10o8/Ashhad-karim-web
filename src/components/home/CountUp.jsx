import { useEffect, useRef, useState } from 'react'

const DURATION = 1600
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t))

// Counts a figure such as "20+" up from zero the first time it scrolls into view.
// Screen readers get the final value; reduced motion shows it straight away.
function CountUp({ value, className }) {
  const ref = useRef(null)
  const [, target = 0, suffix = ''] = /^(\d+)(.*)$/.exec(value) ?? []
  const [shown, setShown] = useState(Number(target))

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    let frame = 0
    setShown(0)
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / DURATION)
        setShown(Math.round(easeOutExpo(t) * Number(target)))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.6 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target])

  return (
    <strong className={className} ref={ref}>
      <span aria-hidden="true">{shown}{suffix}</span>
      <span className="sr-only">{value}</span>
    </strong>
  )
}

export default CountUp
