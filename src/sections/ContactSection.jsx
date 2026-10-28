import { useRef } from 'react'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import contact, { mailtoHref, telHref } from '../config/contact.js'
import { hero, home, sections } from '../data/content.js'
import Section from '../components/layout/Section.jsx'
import ContactMethod from '../components/contact/ContactMethod.jsx'
import PlaceholderTag from '../components/ui/PlaceholderTag.jsx'
import useMagnetic from '../hooks/useMagnetic.js'

const copy = sections.contact

// Closing call to action: an oversized heading with a magnetic round button to the contact
// page, and the direct email and phone links beneath.
function ContactSection() {
  const buttonRef = useRef(null)
  useMagnetic(buttonRef, 0.35)

  return (
    <Section id="contact" tone="dark" className="contact-section">
      <div className="contact-bg" aria-hidden="true">
        <img src={copy.background.src} srcSet={copy.background.srcSet} sizes="100vw" width={copy.background.width} height={copy.background.height} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="contact-hero" data-reveal>
        <p className="section-label"><span>{copy.number}</span><span>{copy.label}</span></p>
        <h2 id="contact-title" className="contact-title">{copy.title} <em>{copy.emphasis}</em></h2>
        <a className="magnet-button" href={home.contactLink.href} ref={buttonRef}>
          <span>{home.contactLink.label}<ArrowUpRight size={22} aria-hidden="true" /></span>
        </a>
      </div>

      <div className="contact-row" data-reveal>
        <div className="contact-person">
          <img src={copy.avatar.src} width={copy.avatar.width} height={copy.avatar.height} alt={copy.avatar.alt} loading="lazy" decoding="async" />
          <span><strong>{hero.name}</strong>{copy.intro}</span>
        </div>
        <address className="contact-cards">
          <ContactMethod icon={Mail} label="Email" value={contact.email} href={mailtoHref} />
          <ContactMethod icon={Phone} label="Phone" value={contact.phone} href={telHref} />
          {!contact.confirmed && <PlaceholderTag>Contact details awaiting confirmation</PlaceholderTag>}
        </address>
      </div>
    </Section>
  )
}

export default ContactSection
