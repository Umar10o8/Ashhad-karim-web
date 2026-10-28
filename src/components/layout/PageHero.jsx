import { ChevronRight } from 'lucide-react'
import { url } from '../../utils/paths.js'

// Banner at the top of each inner page: breadcrumb, page heading, and intro. The page name is
// repeated as a large outlined word behind the content.
function PageHero({ id, crumb, eyebrow, title, emphasis, intro }) {
  return (
    <section className="page-hero surface-dark" aria-labelledby={`${id}-title`}>
      <span className="page-hero-word" aria-hidden="true">{crumb}</span>
      <div className="page-wrap page-hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href={url()}>Home</a><ChevronRight size={14} aria-hidden="true" /></li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <p className="eyebrow hero-eyebrow"><span aria-hidden="true" />{eyebrow}</p>
        <h1 id={`${id}-title`}>{title} <em>{emphasis}</em></h1>
        {intro && <p className="page-hero-intro">{intro}</p>}
      </div>
    </section>
  )
}

export default PageHero
