import { ArrowUp } from 'lucide-react'
import useScrollThreshold from '../../hooks/useScrollThreshold.js'

const scrollToTop = () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}

// Always mounted so it can fade in and out; hidden from keyboard and screen readers while invisible.
function BackToTop() {
  const visible = useScrollThreshold(900)

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
