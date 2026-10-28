import { useRef } from 'react'
import { sections } from '../data/content.js'
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
const equipment = skills.find(({ wide }) => wide)

// Home-page skills as a bento grid: a headline tile, one spotlight tile per program, a count
// tile, and the equipment list across the bottom.
function SkillsBentoSection() {
  const gridRef = useRef(null)
  usePointerGlow(gridRef, '.bento-tile')

  return (
    <Section id="skills">
      <SectionHeader id="skills" {...sections.skills} />
      <div className="bento" ref={gridRef}>
        <div className="bento-tile bento-lead surface-dark" data-reveal>
          <span className="bento-big">{software.length}</span>
          <p>Design programs for artwork, layout, and 3D</p>
        </div>
        {software.map(({ name, group }) => (
          <div className="bento-tile bento-app" key={name} data-reveal>
            <span className="bento-mono" aria-hidden="true">{monograms[name] ?? name.slice(0, 2)}</span>
            <strong>{name.replace('Adobe ', '')}</strong>
            <small>{group}</small>
          </div>
        ))}
        <div className="bento-tile bento-count" data-reveal>
          <span className="bento-big">{equipment.items.length}</span>
          <p>Machines and systems named in the CV</p>
        </div>
        <div className="bento-tile bento-equipment" data-reveal>
          <h3>{equipment.group}</h3>
          <p>{equipment.note}</p>
          <ul>{equipment.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </Section>
  )
}

export default SkillsBentoSection
