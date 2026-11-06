import { useRef } from 'react'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import contact, { mailtoHref, phoneLinks } from '../config/contact.js'
import { hero, home, sections } from '../data/content.js'
import ContactMethod from '../components/contact/ContactMethod.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import LinkedInIcon from '../components/ui/LinkedInIcon.jsx'
import PillTag from '../components/ui/PillTag.jsx'
import PlaceholderTag from '../components/ui/PlaceholderTag.jsx'
import useMagnetic from '../hooks/useMagnetic.js'

const copy = sections.contact

// Restarts the ripple from the point that was pressed.
const ripple = (event) => {
  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  button.style.setProperty('--rx', `${event.clientX - rect.left}px`)
  button.style.setProperty('--ry', `${event.clientY - rect.top}px`)
  button.classList.remove('is-rippling')
  void button.offsetWidth
  button.classList.add('is-rippling')
}

// Closing call to action: a crimson-to-plum panel over the blurred street photo with the
// heading, the magnetic pill button, and direct email and phone links, and the message form
// on a frosted card overlapping the panel's edge.
function ContactSection() {
  const buttonRef = useRef(null)
  useMagnetic(buttonRef, 0.35)

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="contact-bg" aria-hidden="true">
        <img src={copy.background.src} srcSet={copy.background.srcSet} sizes="100vw" width={copy.background.width} height={copy.background.height} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="page-wrap contact-layout">
        <div className="contact-panel-main surface-dark" data-reveal>
          <PillTag className="pill-dark section-label">{copy.label}</PillTag>
          <h2 id="contact-title" className="contact-title">{copy.title} <em>{copy.emphasis}</em></h2>
          <a className="magnet-button" href={home.contactLink.href} ref={buttonRef} onPointerDown={ripple}>
            <span className="magnet-label">{home.contactLink.label}</span>
            <span className="magnet-core"><ArrowUpRight size={24} aria-hidden="true" /></span>
          </a>

          <div className="contact-row">
            <div className="contact-person">
              <span className="contact-person-logo">
                <img src={copy.logo.src} width={copy.logo.width} height={copy.logo.height} alt={copy.logo.alt} loading="lazy" decoding="async" />
              </span>
              <span><strong>{hero.name}</strong>{copy.intro}</span>
            </div>
            <address className="contact-cards">
              <ContactMethod icon={Mail} label="Email" value={contact.email} href={mailtoHref} />
              <ContactMethod icon={Phone} label="Phone" links={phoneLinks} />
              <ContactMethod icon={LinkedInIcon} label="LinkedIn" value="Ashhad Karim" href={contact.linkedin} target="_blank" rel="noopener noreferrer" />
              {!contact.confirmed && <PlaceholderTag>Contact details awaiting confirmation</PlaceholderTag>}
            </address>
          </div>
        </div>

        <div className="contact-form-card contact-form-float" data-reveal>
          <ContactForm headingLevel="h3" />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
