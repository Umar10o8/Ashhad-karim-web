import { sections } from '../data/content.js'
import responsibilities from '../data/responsibilities.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import IconBadge from '../components/ui/IconBadge.jsx'

function ResponsibilitiesSection() {
  return (
    <Section id="responsibilities" tone="berry">
      <SectionHeader id="responsibilities" {...sections.responsibilities} />
      <ol className="card-grid card-grid-4">
        {responsibilities.map(({ icon, stage, items }, index) => (
          <li className="resp-card" key={stage} data-reveal>
            <div className="card-top">
              <IconBadge icon={icon} tone="glass" />
              <span className="resp-step">Stage 0{index + 1}</span>
            </div>
            <h3>{stage}</h3>
            <ul>{items.map((text) => <li key={text}>{text}</li>)}</ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default ResponsibilitiesSection
