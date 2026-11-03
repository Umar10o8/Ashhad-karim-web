import { about, home } from '../data/content.js'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'
import { useRef } from 'react'
import useParallax from '../hooks/useParallax.js'

const copy = home.about

// Home-page About: Ashhad's own introduction with a handwritten signature, beside the office
// portrait. The fuller CV-based About section lives on /about/.
function HomeAboutSection() {
  const headingRef = useRef(null)
  useParallax(headingRef, 14)

  return (
    <section id="about" className="section home-about soft-mesh" aria-labelledby="about-title">
      <div className="page-wrap home-about-grid">
        <div className="home-about-copy">
          <h2 id="about-title" className="home-about-label" data-reveal ref={headingRef}>{copy.label}</h2>
          {copy.paragraphs.map((text) => <p key={text} data-reveal>{text}</p>)}
          <p className="home-about-signature" data-reveal>{copy.signature}</p>
        </div>
        <div className="home-about-portrait" data-reveal="mask">
          <ResponsiveImage image={about.portrait} alt={about.portrait.alt} ratio="1 / 1" sizes="(min-width: 801px) 44vw, 100vw" className="reveal-mask" />
          <svg className="home-about-seal" viewBox="0 0 80 80" aria-hidden="true">
            <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="27" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 4" />
            <path d="M25 42h30M40 27v30M29 29l22 22m0-22L29 51" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutSection
