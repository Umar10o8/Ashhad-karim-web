import { sections } from '../data/content.js'
import achievements from '../data/achievements.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Card from '../components/ui/Card.jsx'
import IconBadge from '../components/ui/IconBadge.jsx'

// `number` overrides the section number when the section is reused on another page.
function AchievementsSection({ number }) {
  return (
    <Section id="achievements" tone="alt">
      <SectionHeader id="achievements" {...sections.achievements} number={number ?? sections.achievements.number} />
      <ul className="card-grid card-grid-3">
        {achievements.map(({ icon, text }) => (
          <Card as="li" className="achievement" key={text} data-reveal>
            <IconBadge icon={icon} shape="circle" />
            <p>{text}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}

export default AchievementsSection
