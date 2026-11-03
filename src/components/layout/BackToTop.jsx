import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import useScrollThreshold from '../../hooks/useScrollThreshold.js'
import { smoothScrollTo } from '../../hooks/useSmoothScroll.js'

const scrollToTop = () => smoothScrollTo(0)

// Always mounted so it can fade in and out; hidden from keyboard and screen readers while invisible.
function BackToTop() {
  const beyondThreshold = useScrollThreshold(900)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('.footer')
    if (!footer || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      rootMargin: '0px 0px 64px 0px',
    })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const visible = beyondThreshold && !footerVisible

  return (
    <button
      type="button"
      className={`floating-top${visible ? ' is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={17} aria-hidden="true" />
    </button>
  )
}

export default BackToTop
