import { useRef, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { hero } from '../data/content.js'
import { aboutPage } from '../data/pages.js'
import Button from '../components/ui/Button.jsx'
import PlaceholderTag from '../components/ui/PlaceholderTag.jsx'
import useVisitorCount from '../hooks/useVisitorCount.js'
import useMagnetic from '../hooks/useMagnetic.js'
import useParallax from '../hooks/useParallax.js'

// Floating glass notes over the photo, taken from the CV figures: 20+ years and 4 countries.
const [yearsStat, , countriesStat] = aboutPage.glance.stats
const miniCards = [yearsStat, countriesStat]

// Repeated around the rotating badge.
const badgeText = `${hero.scrollCue.label} • `.repeat(3)

// Full-bleed photo with rotating headline slides. A hidden timer element's CSS animation drives
// the rotation (onAnimationEnd advances the slide; `key` restarts it per slide), so pausing on
// hover/focus is just `animation-play-state`, and reduced motion, which disables animations,
// stops auto-advance. Each headline line rises out of a mask when its slide becomes active.
function HeroSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const mediaRef = useRef(null)
  const softwareRef = useRef(null)
  const ctaRef = useRef(null)
  const visitorCount = useVisitorCount()
  const { slides, image } = hero
  const next = () => setActive((index) => (index + 1) % slides.length)
  useParallax(mediaRef, 28)
  useMagnetic(softwareRef, 0.3, 'li')
  useMagnetic(ctaRef, 0.22)

  return (
    <section className="hero surface-dark" id="home" aria-labelledby="home-title">
      <div className="hero-media" ref={mediaRef}>
        <picture>
          {image.avifSrcSet && <source type="image/avif" srcSet={image.avifSrcSet} sizes="100vw" />}
          <source type="image/webp" srcSet={image.srcSet} sizes="100vw" />
          <img
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className="hero-shade" aria-hidden="true" />
      {image.placeholder && <PlaceholderTag>Representative industry image</PlaceholderTag>}

      <div className="page-wrap hero-inner">
        <p className="pill pill-dark hero-eyebrow"><span className="pill-dot" aria-hidden="true" />{hero.eyebrow}</p>

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
                  {stat && <span className="hero-line hero-stat"><span>{stat}</span></span>}
                  <span className="hero-line hero-slide-title"><span>{title}</span></span>
                  {' '}
                  <span className="hero-line hero-em-line"><em className="hero-em">{emphasis}</em></span>
                </p>
                {software && (
                  <ul className="hero-software" aria-label="Software" ref={softwareRef}>
                    {hero.software.map(({ mono, name, color }) => (
                      <li key={name} title={name} style={{ '--sw-color': color }}>
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
          <div className="hero-actions">
            <Button href={hero.cta.href} icon={ArrowRight} className="hero-cta btn-magnetic" ref={ctaRef}>{hero.cta.label}</Button>
          </div>
        </div>

        <div className="hero-foot">
          {visitorCount !== null && (
            <p className="pill pill-dark hero-visitors">Site visitors: <strong>{visitorCount.toLocaleString('en')}</strong></p>
          )}
          <a className="hero-badge" href={hero.scrollCue.href} aria-label={hero.scrollCue.label}>
            <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
              <defs><path id="hero-badge-path" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" /></defs>
              <text><textPath href="#hero-badge-path" textLength="270">{badgeText}</textPath></text>
            </svg>
            <ArrowDown size={20} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Decorative repeat of figures that the Achievements section states in full. */}
      <ul className="hero-minis" aria-hidden="true">
        {miniCards.map(({ value, label }, index) => (
          <li key={label} className={`hero-mini hero-mini-${index + 1}`}>
            <strong>{value}</strong>
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <svg className="hero-curve" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 80V40C240 6 480-4 720 18s480 54 720 22v40z" />
      </svg>
    </section>
  )
}

export default HeroSection
