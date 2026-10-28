import { sections } from '../data/content.js'
import { aboutPage } from '../data/pages.js'
import achievements from '../data/achievements.js'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Section from '../components/layout/Section.jsx'
import CountUp from '../components/home/CountUp.jsx'

// Home-page achievements: CV figures that count up on arrival, then the achievements as a
// numbered editorial list.
function ImpactSection() {
  return (
    <Section id="achievements" tone="alt">
      <SectionHeader id="achievements" {...sections.achievements} />
      <ul className="impact-stats">
        {aboutPage.glance.stats.map(({ value, label }) => (
          <li key={label} data-reveal>
            <CountUp value={value} className="impact-value" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
      <ol className="impact-list">
        {achievements.map(({ icon: Icon, text }, index) => (
          <li key={text} data-reveal>
            <span className="impact-num">{String(index + 1).padStart(2, '0')}</span>
            <p>{text}</p>
            <Icon size={22} aria-hidden="true" />
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default ImpactSection
