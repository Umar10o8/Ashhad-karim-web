import { useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { about, home } from '../data/content.js'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'
import ChipList from '../components/ui/ChipList.jsx'
import useScrollProgress from '../hooks/useScrollProgress.js'

const words = home.statement.split(' ')

// Home-page About: a large statement whose words fill in as the reader scrolls past it,
// followed by the portrait, strengths, and tools. The full About section lives on /about/.
function StatementSection() {
  const statementRef = useRef(null)
  useScrollProgress(statementRef)

  return (
    <section id="about" className="section statement-section" aria-labelledby="about-title">
      <div className="page-wrap">
        <p className="section-label" data-reveal><span>{about.number}</span><span>{about.label}</span></p>
        <h2 id="about-title" className="sr-only">{about.title} {about.emphasis}</h2>
        <p className="statement" ref={statementRef} style={{ '--n': words.length }}>
          {words.map((word, index) => (
            <span key={`${word}-${index}`} style={{ '--i': index }}>{word} </span>
          ))}
        </p>

        <div className="statement-grid">
          <div className="statement-portrait" data-reveal="mask">
            <ResponsiveImage image={about.portrait} alt={about.portrait.alt} ratio="4 / 5" sizes="(min-width: 801px) 34vw, 100vw" className="reveal-mask" />
            <span className="statement-sticker" aria-hidden="true">Since<strong>2004</strong></span>
          </div>

          <div className="statement-copy">
            <p className="statement-lead" data-reveal>{about.lead}</p>
            <ul className="statement-strengths" data-reveal>
              {about.strengths.map((strength, index) => (
                <li key={strength}>
                  <span className="statement-index">{String(index + 1).padStart(2, '0')}</span>
                  {strength}
                  <Check size={16} aria-hidden="true" />
                </li>
              ))}
            </ul>
            <div className="statement-foot" data-reveal>
              <ChipList items={about.tools} tone="accent" label="Proficient in" />
              <a className="text-link" href={home.aboutLink.href}>{home.aboutLink.label} <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatementSection
