import { useState } from 'react'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { hero } from '../data/content.js'
import Button from '../components/ui/Button.jsx'
import PlaceholderTag from '../components/ui/PlaceholderTag.jsx'

const pad = (n) => String(n).padStart(2, '0')

// Full-bleed photo with rotating headline slides. The progress bar's CSS animation drives the
// rotation (onAnimationEnd advances the slide), so pausing on hover/focus is just
// `animation-play-state`, and reduced motion, which disables animations, stops auto-advance.
function HeroSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const { slides, image } = hero
  const next = () => setActive((index) => (index + 1) % slides.length)

  return (
    <section className="hero surface-dark" id="home" aria-labelledby="home-title">
      <div className="hero-bg" aria-hidden="true">
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="100vw"
          width={image.width}
          height={image.height}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>
      {image.placeholder && <PlaceholderTag>Representative industry image</PlaceholderTag>}

      <div className="page-wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true" />{hero.eyebrow}</p>
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
            {slides.map(({ stat, title, emphasis }, index) => (
              <p
                key={title}
                className={`hero-slide${index === active ? ' is-active' : ''}`}
                aria-hidden={index !== active}
                aria-roledescription="slide"
              >
                {stat && <span className="hero-stat">{stat}</span>}
                <span className="hero-slide-title">{title} <em>{emphasis}</em></span>
              </p>
            ))}
          </div>

          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            <Button href={hero.primaryCta.href} icon={ArrowUpRight}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="ghost" icon={ArrowDown}>{hero.secondaryCta.label}</Button>
          </div>
        </div>

        <div className="hero-foot">
          {/* On desktop the arrow sits inside a spinning ring of text */}
          <a className="hero-scroll" href={hero.scrollCue.href}>
            <span className="hero-badge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs><path id="hero-badge-path" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
                <text><textPath href="#hero-badge-path" textLength="286" lengthAdjust="spacing">Production · Pre-production · Coordination · </textPath></text>
              </svg>
              <ArrowDown size={18} />
            </span>
            {hero.scrollCue.label}
          </a>
          <div className="hero-counter">
            <span className="hero-counter-num" aria-hidden="true">{pad(active + 1)}</span>
            <div className="hero-track">
              {slides.map(({ title }, index) => (
                <button
                  key={title}
                  type="button"
                  className={`hero-segment${index < active ? ' is-done' : ''}`}
                  aria-label={`Show highlight ${index + 1} of ${slides.length}`}
                  aria-current={index === active}
                  onClick={() => setActive(index)}
                >
                  {index === active && (
                    <span className={`hero-progress${paused ? ' is-paused' : ''}`} onAnimationEnd={next} />
                  )}
                </button>
              ))}
            </div>
            <span className="hero-counter-num" aria-hidden="true">{pad(slides.length)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
