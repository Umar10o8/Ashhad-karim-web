import { useEffect, useState } from 'react'

// True once the page has scrolled past `threshold` pixels. Only re-renders the
// calling component when the boolean flips, not on every scroll event.
function useScrollThreshold(threshold) {
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    const update = () => setPassed(window.scrollY > threshold)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return passed
}

export default useScrollThreshold
