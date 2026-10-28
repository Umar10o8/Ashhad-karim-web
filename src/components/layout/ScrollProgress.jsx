import { useEffect, useRef } from 'react'

// Thin brand-gradient bar under the header showing how far down the page the reader is.
function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      ref.current?.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : '0')
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
  }, [])

  return <span className="scroll-progress" ref={ref} aria-hidden="true" />
}

export default ScrollProgress
