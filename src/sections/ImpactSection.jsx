import { sections } from '../data/content.js'
import { aboutPage } from '../data/pages.js'
import achievements from '../data/achievements.js'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Section from '../components/layout/Section.jsx'
import CountUp from '../components/home/CountUp.jsx'

const copy = sections.achievements
const [lead, ...stats] = aboutPage.glance.stats

// Achievements, used on the home and About pages. One focal figure ("20+ years") at display
// size, the supporting CV figures as a ruled list beside it, then the achievements as a
// numbered editorial list. Figures count up on arrival. `number` overrides the section number.
function ImpactSection({ number = copy.number }) {
  return (
    <Section id="achievements" tone="alt" className="impact-section">
      <SectionHeader id="achievements" {...copy} number={number} />

      <div className="impact-grid">
        <div className="impact-lead" data-reveal>
          <CountUp value={lead.value} className="impact-lead-value" />
          <p>{lead.label}</p>
        </div>
        <ul className="impact-stats">
          {stats.map(({ value, label }) => (
            <li key={label} className="glass-surface" data-reveal>
              <CountUp value={value} className="impact-value" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="impact-list-title" data-reveal>{copy.listTitle}</h3>
      <ol className="impact-list">
        {achievements.map(({ icon: Icon, text }, index) => (
          <li key={text} className="glass-surface" data-reveal>
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
