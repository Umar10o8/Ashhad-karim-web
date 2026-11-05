import { useEffect, useState } from 'react'
import { subscribeScroll } from '../utils/scrollFrame.js'

// True once the page has scrolled past `threshold` pixels. Only re-renders the
// calling component when the boolean flips, not on every scroll event.
function useScrollThreshold(threshold) {
  const [passed, setPassed] = useState(false)

  useEffect(() => subscribeScroll({
    read: () => window.scrollY > threshold,
    write: setPassed,
  }), [threshold])

  return passed
}

export default useScrollThreshold
