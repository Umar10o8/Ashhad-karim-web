import { about, home } from '../data/content.js'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'
import SectionBackdrop from '../components/decor/SectionBackdrop.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'

const copy = home.about

// Home-page About: Ashhad's own introduction with a handwritten-style signature, beside the
// office portrait in an arched frame. The fuller CV-based About section lives on /about/.
function HomeAboutSection() {
  return (
    <section id="about" className="section section-paneled about-section" aria-labelledby="about-title">
      <SectionBackdrop variant={0} />
      <div className="panel panel-blush">
        <div className="page-wrap about-home-grid">
          <div className="about-home-copy">
            <SectionHeader id="about" title={copy.title} />
            {copy.paragraphs.map((text) => <p key={text} className="about-home-text" data-reveal>{text}</p>)}
            <p className="about-home-signature" data-reveal>{copy.signature}</p>
          </div>
          <figure className="about-home-portrait" data-reveal="mask">
            <span className="about-home-frame" aria-hidden="true" />
            <ResponsiveImage image={about.portrait} alt={about.portrait.alt} ratio="4 / 5" sizes="(min-width: 801px) 40vw, 90vw" className="reveal-mask" />
            <figcaption className="about-home-since"><span>Since</span> 2004</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutSection
