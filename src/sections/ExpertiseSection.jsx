import { useRef } from 'react'
import { sections } from '../data/content.js'
import expertise from '../data/expertise.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Card from '../components/ui/Card.jsx'
import IconBadge from '../components/ui/IconBadge.jsx'
import usePointerGlow from '../hooks/usePointerGlow.js'

function ExpertiseSection() {
  const gridRef = useRef(null)
  usePointerGlow(gridRef, '.expertise-card')

  return (
    <Section id="expertise" tone="alt">
      <SectionHeader id="expertise" {...sections.expertise} />
      <ul className="card-grid card-grid-3" ref={gridRef}>
        {expertise.map(({ icon, title, description }, index) => (
          <Card as="li" interactive className="expertise-card" key={title} data-reveal>
            <span className="expertise-glow" aria-hidden="true" />
            <div className="card-top">
              <IconBadge icon={icon} size={22} />
              <span className="expertise-num" aria-hidden="true">0{index + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}

export default ExpertiseSection
