import { Building2, Layers, Users } from 'lucide-react'
import { sections } from '../data/content.js'
import { achievementStats } from '../data/pages.js'
import achievements from '../data/achievements.js'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Section from '../components/layout/Section.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import CountUp from '../components/home/CountUp.jsx'
import { CmykDots, CropCorner, Skyline } from '../components/decor/PrintObjects.jsx'

const copy = sections.achievements
const [lead, ...stats] = achievementStats
// One line icon per supporting figure, in the order of achievementStats:
// companies, team, projects at once.
const statIcons = [Building2, Users, Layers]
const deliverTints = ['blush', 'peach', 'lilac', 'peach', 'lilac', 'blush']

// Achievements, used on the home and About pages. A bento: the "20+ years" figure on a dark
// focal card, the supporting CV figures as glass rows on a crimson card, then the achievements
// as tinted glass cards. Figures count up on arrival. `number` overrides the section number.
function ImpactSection({ number = copy.number }) {
  return (
    <Section id="achievements" panel="blush" backdrop={0} className="impact-section">
      <SectionHeader id="achievements" {...copy} number={number} />

      <div className="impact-bento">
        <div className="impact-focus" data-reveal>
          <span className="impact-glow" aria-hidden="true" />
          <Skyline className="impact-skyline" />
          <CountUp value={lead.value} className="impact-lead-value" />
          <p>{lead.label}</p>
        </div>

        <div className="impact-figures" data-reveal>
          <ul className="impact-stats">
            {stats.map(({ value, label }, index) => {
              const Icon = statIcons[index % statIcons.length]
              return (
                <li key={label}>
                  <Icon className="impact-icon" size={22} strokeWidth={1.5} aria-hidden="true" />
                  <CountUp value={value} className="impact-value" />
                  <span className="impact-label">{label}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <h3 className="impact-list-title pill" data-reveal><span className="pill-dot" aria-hidden="true" />{copy.listTitle}</h3>
      <ol className="impact-list">
        {achievements.map(({ icon: Icon, text }, index) => (
          <GlassCard
            as="li"
            key={text}
            tint={deliverTints[index % deliverTints.length]}
            object={index % 2 ? CropCorner : CmykDots}
            className="impact-card"
            data-reveal
          >
            <span className="impact-num">{String(index + 1).padStart(2, '0')}</span>
            <p>{text}</p>
            <Icon className="impact-card-icon" size={22} aria-hidden="true" />
          </GlassCard>
        ))}
      </ol>
    </Section>
  )
}

export default ImpactSection
