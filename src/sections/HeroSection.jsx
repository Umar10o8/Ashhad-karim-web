import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { hero } from '../data/content.js'
import Button from '../components/ui/Button.jsx'
import PlaceholderTag from '../components/ui/PlaceholderTag.jsx'
import useVisitorCount from '../hooks/useVisitorCount.js'
import useMagnetic from '../hooks/useMagnetic.js'
import useParallax from '../hooks/useParallax.js'

// Full-bleed photo with rotating headline slides. A hidden timer element's CSS animation drives
// the rotation (onAnimationEnd advances the slide; `key` restarts it per slide), so pausing on
// hover/focus is just `animation-play-state`, and reduced motion, which disables animations,
// stops auto-advance.
function HeroSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const backgroundRef = useRef(null)
  const softwareRef = useRef(null)
  const ctaRef = useRef(null)
  const visitorCount = useVisitorCount()
  const { slides, image } = hero
  const next = () => setActive((index) => (index + 1) % slides.length)
  useParallax(backgroundRef, 22)
  useMagnetic(softwareRef, 0.12, 'li')
  useMagnetic(ctaRef, 0.18)

  return (
    <section className="hero surface-dark" id="home" aria-labelledby="home-title">
      <div className="hero-bg" aria-hidden="true" ref={backgroundRef}>
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 801px) 62vw, 100vw"
          width={image.width}
          height={image.height}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>
      {image.placeholder && <PlaceholderTag>Representative industry image</PlaceholderTag>}

      <div className="page-wrap hero-inner">
        <p className="eyebrow hero-eyebrow"><span aria-hidden="true" />{hero.eyebrow}</p>

        <div className="hero-copy">
          <h1 id="home-title" className="sr-only">{hero.name}: {hero.focus}</h1>

          <div
            className="hero-slides"
            aria-roledescription="carousel"
            aria-label="Highlights"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {slides.map(({ stat, title, emphasis, software }, index) => (
              <div
                key={title}
                className={`hero-slide${index === active ? ' is-active' : ''}`}
                aria-hidden={index !== active}
                aria-roledescription="slide"
              >
                <p className="hero-slide-text">
                  {stat && <span className="hero-stat">{stat}</span>}
                  <span className="hero-slide-title">{title} <em>{emphasis}</em></span>
                </p>
                {software && (
                  <ul className="hero-software" aria-label="Software" ref={softwareRef}>
                    {hero.software.map(({ mono, name, color, bg }) => (
                      <li key={name} title={name} style={{ '--sw-color': color, '--sw-bg': bg }}>
                        <span aria-hidden="true">{mono}</span>
                        <span className="sr-only">{name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <span key={active} className={`hero-timer${paused ? ' is-paused' : ''}`} onAnimationEnd={next} aria-hidden="true" />
          </div>
          <Button href={hero.cta.href} icon={ArrowUpRight} className="hero-cta" ref={ctaRef}>{hero.cta.label}</Button>
        </div>

        <div className="hero-foot">
          {visitorCount !== null && (
            <p className="hero-visitors">Site visitors: <strong>{visitorCount.toLocaleString('en')}</strong></p>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
