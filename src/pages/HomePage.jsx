import { home } from '../data/content.js'
import HeroSection from '../sections/HeroSection.jsx'
import StatementSection from '../sections/StatementSection.jsx'
import ExpertiseSection from '../sections/ExpertiseSection.jsx'
import ExperienceRailSection from '../sections/ExperienceRailSection.jsx'
import ResponsibilitiesSection from '../sections/ResponsibilitiesSection.jsx'
import SkillsBentoSection from '../sections/SkillsBentoSection.jsx'
import PortfolioSection from '../sections/PortfolioSection.jsx'
import ImpactSection from '../sections/ImpactSection.jsx'
import TestimonialsSection from '../sections/TestimonialsSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import Marquee from '../components/home/Marquee.jsx'
import CursorFollower from '../components/home/CursorFollower.jsx'

// Work areas alternating with industries: "Exhibition stands · Exhibitions · Large-format printing · …"
const tickerItems = home.marquee.flatMap((area, index) => [area, home.marqueeIndustries[index]]).filter(Boolean)

// The home page uses its own, more animated takes on About, Experience, Skills, and
// Achievements; the About page keeps the fuller static versions.
function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="marquee-band">
        <Marquee items={tickerItems} label="Areas of work and industries" />
      </div>
      <StatementSection />
      <ExpertiseSection />
      <ExperienceRailSection />
      <ResponsibilitiesSection />
      <SkillsBentoSection />
      <PortfolioSection />
      <ImpactSection />
      <TestimonialsSection />
      <ContactSection />
      <CursorFollower />
    </>
  )
}

export default HomePage
