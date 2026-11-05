import { useEffect, useRef } from 'react'
import { subscribeScroll } from '../../utils/scrollFrame.js'

// Thin brand-gradient bar under the header showing how far down the page the reader is.
function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => subscribeScroll({
    read: () => document.documentElement.scrollHeight - window.innerHeight,
    write: (max) => ref.current?.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : '0'),
  }), [])

  return <span className="scroll-progress" ref={ref} aria-hidden="true" />
}

export default ScrollProgress
