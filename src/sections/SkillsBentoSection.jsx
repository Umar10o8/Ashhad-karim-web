import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { hero, home, sections } from '../data/content.js'
import skills from '../data/skills.js'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Section from '../components/layout/Section.jsx'
import usePointerGlow from '../hooks/usePointerGlow.js'

// Letter-chips and accent tints come from the hero's software badges, so both places match
// (typographic chips, not product logos).
const chips = Object.fromEntries(hero.software.map(({ name, mono, color, bg }) => [name, { mono, color, bg }]))

const software = skills.filter(({ wide }) => !wide).flatMap(({ group, items }) => items.map((name) => ({ name, group })))

// Home-page skills: one card per program in an even bento (four Adobe programs, then three
// design/3D programs). The equipment list stays on the About page.
function SkillsBentoSection() {
  const gridRef = useRef(null)
  usePointerGlow(gridRef, '.skills-card')

  return (
    <Section id="skills" panel="peach" backdrop={2} className="skills-section">
      <SectionHeader id="skills" {...sections.skills} {...home.skillsHeading} />
      <ul className="skills-grid" ref={gridRef}>
        {software.map(({ name, group }) => {
          const { mono, color, bg } = chips[name] ?? { mono: name.slice(0, 2), color: '#C90050', bg: '#8E123F' }
          return (
            <li className="skills-card gcard gcard-glass" key={name} style={{ '--sw-color': color, '--sw-ink': bg }} data-reveal>
              <span className="skills-letter gcard-object" aria-hidden="true">{mono}</span>
              <span className="skills-chip" aria-hidden="true">{mono}</span>
              <ArrowUpRight className="skills-arrow" size={18} aria-hidden="true" />
              <strong>{name.replace('Adobe ', '')}</strong>
              <small>{group}</small>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default SkillsBentoSection
