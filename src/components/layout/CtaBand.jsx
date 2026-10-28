import { ArrowUpRight, MessageCircleQuestion } from 'lucide-react'
import Button from '../ui/Button.jsx'

// Closing call to action used at the end of inner pages.
function CtaBand({ title, text, primary, secondary }) {
  return (
    <section className="section cta-band" aria-label={title}>
      <div className="page-wrap">
        <div className="cta-card surface-dark" data-reveal>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <Button href={primary.href} icon={ArrowUpRight}>{primary.label}</Button>
            {secondary && <Button href={secondary.href} variant="ghost" icon={MessageCircleQuestion}>{secondary.label}</Button>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
