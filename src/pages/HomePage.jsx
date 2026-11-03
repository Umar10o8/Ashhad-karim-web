import { home } from '../data/content.js'
import HeroSection from '../sections/HeroSection.jsx'
import HomeAboutSection from '../sections/HomeAboutSection.jsx'
import ExperienceRailSection from '../sections/ExperienceRailSection.jsx'
import SkillsBentoSection from '../sections/SkillsBentoSection.jsx'
import ImpactSection from '../sections/ImpactSection.jsx'
import TestimonialsSection from '../sections/TestimonialsSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import Marquee from '../components/home/Marquee.jsx'

// The home page uses its own, more animated takes on About, Experience, Skills, and
// Achievements; the About page keeps the fuller static versions.
function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="marquee-band">
        <Marquee items={home.ticker} label="Areas of work" />
      </div>
      <HomeAboutSection />
      <ExperienceRailSection />
      <SkillsBentoSection />
      <ImpactSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

export default HomePage
