import { Check } from 'lucide-react'
import { about } from '../data/content.js'
import Section from '../components/layout/Section.jsx'
import ChipList from '../components/ui/ChipList.jsx'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'

// `number` overrides the section number when the section is reused on another page.
// The About page uses the close portrait (about.portraitAlt).
function AboutSection({ number = about.number }) {
  const portrait = about.portraitAlt
  return (
    <Section id="about">
      <div className="about-grid">
        <div className="about-copy" data-reveal>
          <p className="section-label"><span>{number}</span><span>{about.label}</span></p>
          <h2 id="about-title">{about.title} <em>{about.emphasis}</em></h2>
          <p className="about-lead">{about.lead}</p>
          {about.paragraphs.map((text) => <p key={text}>{text}</p>)}
          <div className="about-tools">
            <span aria-hidden="true">Proficient in</span>
            <ChipList items={about.tools} tone="accent" label="Proficient in" />
          </div>
        </div>

        <div className="about-aside">
          <div className="about-portrait" data-reveal="mask">
            <ResponsiveImage image={portrait} alt={portrait.alt} ratio="4 / 5" sizes="(min-width: 801px) 32vw, 100vw" className="reveal-mask" />
          </div>
          <div className="strengths-card" data-reveal>
            <h3 id="strengths-title">Core strengths</h3>
            <ul>
              {about.strengths.map((strength) => (
                <li key={strength}><span className="strength-icon" aria-hidden="true"><Check size={15} strokeWidth={2.5} /></span>{strength}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection
