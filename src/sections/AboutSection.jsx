import { Check, GraduationCap } from 'lucide-react'
import { about } from '../data/content.js'
import { aboutPage } from '../data/pages.js'
import Section from '../components/layout/Section.jsx'
import ChipList from '../components/ui/ChipList.jsx'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'

const { industries, industriesTitle, education, educationTitle } = aboutPage.glance

// About page story: CV summary with industries and education, beside the office portrait and
// core strengths. `number` overrides the section number when the section is reused.
function AboutSection({ number = about.number }) {
  const portrait = about.portrait
  return (
    <Section id="about" className="about-page-section soft-mesh">
      <div className="about-grid">
        <div className="about-copy" data-reveal>
          <p className="section-label"><span>{number}</span><span>{about.label}</span></p>
          <h2 id="about-title">{about.title} <em>{about.emphasis}</em></h2>
          <p className="about-lead" data-reveal>{about.lead}</p>
          {about.paragraphs.map((text) => <p key={text} data-reveal>{text}</p>)}
          <dl className="about-facts">
            <div>
              <dt>{industriesTitle}</dt>
              <dd><ChipList items={industries} tone="accent" label={industriesTitle} /></dd>
            </div>
            <div>
              <dt>{educationTitle}</dt>
              <dd className="about-education"><GraduationCap size={18} aria-hidden="true" />{education}</dd>
            </div>
          </dl>
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
