import { ChevronRight } from 'lucide-react'
import { url } from '../../utils/paths.js'

// Banner at the top of each inner page, on the same charcoal as the home hero: breadcrumb,
// eyebrow, heading, and intro, with the page name as a large outlined word behind them.
// `image` is optional: a portrait shows as a tall rounded panel, a landscape as a wide one;
// without it the heading takes the full width.
function PageHero({ id, crumb, eyebrow, title, emphasis, intro, image }) {
  const shape = image && image.height > image.width ? 'portrait' : 'landscape'

  return (
    <section className={`page-hero surface-dark${image ? ` has-media media-${shape}` : ''}`} aria-labelledby={`${id}-title`}>
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
        {image && (
          <figure className="page-hero-media">
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes={shape === 'portrait' ? '(min-width: 1025px) 30vw, 80vw' : '(min-width: 1025px) 46vw, 100vw'}
              width={image.width}
              height={image.height}
              alt={image.alt}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        )}
      </div>
    </section>
  )
}

export default PageHero
