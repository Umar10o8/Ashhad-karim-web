import { sections } from '../data/content.js'
import expertise from '../data/expertise.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'

// Editorial index: one full-width row per area. On hover a brand-gradient fill wipes up
// from the bottom and the row's text turns white. All content is always visible.
function ExpertiseSection() {
  return (
    <Section id="expertise" tone="alt">
      <SectionHeader id="expertise" {...sections.expertise} />
      <ol className="expertise-index">
        {expertise.map(({ icon: Icon, title, description }, index) => (
          <li className="expertise-row" key={title} data-reveal>
            <span className="expertise-row-num">{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="expertise-row-icon" aria-hidden="true"><Icon size={24} /></span>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default ExpertiseSection
