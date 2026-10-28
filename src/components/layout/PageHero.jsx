import { ChevronRight } from 'lucide-react'
import { url } from '../../utils/paths.js'
import headerSm from '../../assets/images/top-header-800.webp'
import headerLg from '../../assets/images/top-header-1600.webp'

// Banner at the top of each inner page: breadcrumb, page heading, and intro beside a framed
// outdoor-media showcase image. The page name is repeated as a large outlined word behind it.
function PageHero({ id, crumb, eyebrow, title, emphasis, intro }) {
  return (
    <section className="page-hero surface-dark" aria-labelledby={`${id}-title`}>
      <span className="page-hero-word" aria-hidden="true">{crumb}</span>
      <div className="page-wrap page-hero-inner">
        <div className="page-hero-copy">
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
        <figure className="page-hero-media">
          <img
            src={headerLg}
            srcSet={`${headerSm} 800w, ${headerLg} 1600w`}
            sizes="(min-width: 1025px) 46vw, 100vw"
            width="1600"
            height="566"
            alt="Outdoor advertising mock-up: a billboard, a wrapped bus, a bus shelter, a directory sign, and a bench"
            fetchPriority="high"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}

export default PageHero
