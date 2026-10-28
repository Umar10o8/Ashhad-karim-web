import { MapPin } from 'lucide-react'
import { sections } from '../data/content.js'
import experience from '../data/experience.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import Card from '../components/ui/Card.jsx'

function TimelineEntry({ role, company, location, start, end, current }) {
  return (
    <li className={`timeline-item${current ? ' is-current' : ''}`} data-reveal="slide">
      <p className="timeline-date">
        <time dateTime={start}>{start}</time> – {end === 'Present' ? end : <time dateTime={end}>{end}</time>}
      </p>
      <Card as="div" className="timeline-card">
        <div className="timeline-card-top">
          <h3>{role}</h3>
          {current && <span className="badge">Current</span>}
        </div>
        <p className="timeline-meta">
          {company} <span aria-hidden="true">·</span> <MapPin size={14} aria-hidden="true" /> {location}
        </p>
      </Card>
    </li>
  )
}

// `number` overrides the section number when the section is reused on another page.
function ExperienceSection({ number }) {
  return (
    <Section id="experience">
      <SectionHeader id="experience" {...sections.experience} number={number ?? sections.experience.number} />
      <ol className="timeline">
        {experience.map((item) => <TimelineEntry key={`${item.company}-${item.start}`} {...item} />)}
      </ol>
    </Section>
  )
}

export default ExperienceSection
