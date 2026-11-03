import { about } from '../data/content.js'
import { aboutPage } from '../data/pages.js'
import PageHero from '../components/layout/PageHero.jsx'
import CtaBand from '../components/layout/CtaBand.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import ExperienceSection from '../sections/ExperienceSection.jsx'
import SkillsSection from '../sections/SkillsSection.jsx'
import ImpactSection from '../sections/ImpactSection.jsx'
import { url } from '../utils/paths.js'

const { hero, cta } = aboutPage

// Story first (who, then the career in full, then tools), the figures last as the proof.
function AboutPage() {
  return (
    <>
      <PageHero id="about-page" {...hero} image={about.portraitAlt} />
      <AboutSection number="01" />
      <ExperienceSection number="02" />
      <SkillsSection number="03" />
      <ImpactSection number="04" />
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
