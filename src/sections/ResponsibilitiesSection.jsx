import { useRef } from 'react'
import { sections } from '../data/content.js'
import responsibilities from '../data/responsibilities.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import IconBadge from '../components/ui/IconBadge.jsx'
import useScrollProgress from '../hooks/useScrollProgress.js'

// Workflow stages on a line that draws itself as the reader scrolls; each stage's node lights
// up when the line reaches it (driven by `--p` from useScrollProgress, `--i` per stage).
function ResponsibilitiesSection() {
  const flowRef = useRef(null)
  useScrollProgress(flowRef)

  return (
    <Section id="responsibilities" tone="berry">
      <SectionHeader id="responsibilities" {...sections.responsibilities} />
      <ol className="flow" ref={flowRef} style={{ '--n': responsibilities.length }}>
        {responsibilities.map(({ icon, stage, items }, index) => (
          <li className="flow-stage" key={stage} style={{ '--i': index }} data-reveal>
            <span className="flow-node" aria-hidden="true" />
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
