import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { hero, home, sections } from '../data/content.js'
import skills from '../data/skills.js'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Section from '../components/layout/Section.jsx'
import usePointerGlow from '../hooks/usePointerGlow.js'

// App icons and accent tints come from the hero's software list, so both places match.
// Programs whose accent is white take their brand background colour for the glow.
const chips = Object.fromEntries(hero.software.map(({ name, logo, color, bg }) => [name, { logo, color: color === '#FFFFFF' ? bg : color }]))

const software = skills.filter(({ wide }) => !wide).flatMap(({ items }) => items.map((name) => ({ name })))

// Home-page skills: one card per program in an even bento (four Adobe programs, then three
// design/3D programs). The equipment list stays on the About page.
function SkillsBentoSection() {
  const gridRef = useRef(null)
  usePointerGlow(gridRef, '.skills-card')

  return (
    <Section id="skills" panel="peach" backdrop={2} className="skills-section">
      <SectionHeader id="skills" {...sections.skills} {...home.skillsHeading} />
      <ul className="skills-grid" ref={gridRef}>
        {software.map(({ name }) => {
          const { logo, color } = chips[name] ?? {}
          return (
            <li className="skills-card gcard gcard-glass" key={name} style={{ '--sw-color': color ?? '#C90050' }} data-reveal>
              {logo && <img className="skills-mark gcard-object" src={logo} alt="" loading="lazy" decoding="async" />}
              {logo && <span className="skills-chip"><img src={logo} alt="" width="40" height="40" loading="lazy" decoding="async" /></span>}
              <ArrowUpRight className="skills-arrow" size={18} aria-hidden="true" />
              <strong>{name.replace('Adobe ', '')}</strong>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default SkillsBentoSection
