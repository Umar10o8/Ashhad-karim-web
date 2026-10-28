import { GraduationCap } from 'lucide-react'
import { aboutPage } from '../data/pages.js'
import PageHero from '../components/layout/PageHero.jsx'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import CtaBand from '../components/layout/CtaBand.jsx'
import IconBadge from '../components/ui/IconBadge.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import ExperienceSection from '../sections/ExperienceSection.jsx'
import SkillsSection from '../sections/SkillsSection.jsx'
import AchievementsSection from '../sections/AchievementsSection.jsx'
import { url } from '../utils/paths.js'

const { hero, glance, cta } = aboutPage

function AtAGlance() {
  return (
    <Section id="glance" tone="alt">
      <SectionHeader id="glance" {...glance} />
      <ul className="stat-grid">
        {glance.stats.map(({ icon, value, label }) => (
          <li className="stat-card" key={label} data-reveal>
            <IconBadge icon={icon} size={20} />
            <strong className="stat-value">{value}</strong>
            <span className="stat-label">{label}</span>
          </li>
        ))}
      </ul>
      <div className="glance-extra" data-reveal>
        <div>
          <h3>{glance.industriesTitle}</h3>
          <ul className="industry-list">
            {glance.industries.map((industry) => <li key={industry}>{industry}</li>)}
          </ul>
        </div>
        <div className="education">
          <IconBadge icon={GraduationCap} tone="solid" size={20} />
          <span><small>{glance.educationTitle}</small>{glance.education}</span>
        </div>
      </div>
    </Section>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero id="about-page" {...hero} />
      <AboutSection number="01" />
      <AtAGlance />
      <ExperienceSection number="03" />
      <SkillsSection number="04" />
      <AchievementsSection number="05" />
      <CtaBand
        title={cta.title}
        text={cta.text}
        primary={{ label: cta.primary, href: url('contact/') }}
        secondary={{ label: cta.secondary, href: url('faq/') }}
      />
    </>
  )
}

export default AboutPage
