import { useRef } from 'react'
import { home, sections } from '../data/content.js'
import skills from '../data/skills.js'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Section from '../components/layout/Section.jsx'
import usePointerGlow from '../hooks/usePointerGlow.js'

// Two-letter monograms for the software tiles (typographic only, no product logos).
const monograms = {
  'Adobe Illustrator': 'Ai',
  'Adobe Photoshop': 'Ps',
  'Adobe InDesign': 'Id',
  'Adobe After Effects': 'Ae',
  AutoCAD: 'Ac',
  SketchUp: 'Su',
  '3ds Max': '3d',
}

const software = skills.filter(({ wide }) => !wide).flatMap(({ group, items }) => items.map((name) => ({ name, group })))

// Home-page skills: one spotlight tile per program. The equipment list stays on the About page.
function SkillsBentoSection() {
  const gridRef = useRef(null)
  usePointerGlow(gridRef, '.bento-tile')

  return (
    <Section id="skills">
      <SectionHeader id="skills" {...sections.skills} {...home.skillsHeading} />
      <div className="bento" ref={gridRef}>
        {software.map(({ name, group }) => (
          <div className="bento-tile bento-app glass-surface" key={name} data-reveal>
            <span className="bento-mono" aria-hidden="true">{monograms[name] ?? name.slice(0, 2)}</span>
            <strong>{name.replace('Adobe ', '')}</strong>
            <small>{group}</small>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default SkillsBentoSection
