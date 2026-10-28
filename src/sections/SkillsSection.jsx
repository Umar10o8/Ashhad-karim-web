import { sections } from '../data/content.js'
import skills from '../data/skills.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Card from '../components/ui/Card.jsx'
import ChipList from '../components/ui/ChipList.jsx'
import IconBadge from '../components/ui/IconBadge.jsx'

// `number` overrides the section number when the section is reused on another page.
function SkillsSection({ number }) {
  return (
    <Section id="skills" tone="alt">
      <SectionHeader id="skills" {...sections.skills} number={number ?? sections.skills.number} />
      <div className="card-grid card-grid-2">
        {skills.map(({ group, icon, note, items, wide }) => (
          <Card className={`skill-card${wide ? ' card-span-full' : ''}`} key={group} data-reveal>
            <div className="skill-head">
              <IconBadge icon={icon} />
              <div>
                <h3>{group}</h3>
                {note && <p>{note}</p>}
              </div>
            </div>
            <ChipList items={items} label={group} />
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default SkillsSection
