import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import contact, { mailtoHref, telHref } from '../config/contact.js'
import { hero, sections } from '../data/content.js'
import Section from '../components/layout/Section.jsx'
import Button from '../components/ui/Button.jsx'
import ContactMethod from '../components/contact/ContactMethod.jsx'
import PlaceholderTag from '../components/ui/PlaceholderTag.jsx'

const copy = sections.contact

function ContactSection() {
  return (
    <Section id="contact" tone="dark" className="contact-section">
      <div className="contact-grid">
        <div data-reveal>
          <p className="section-label"><span>{copy.number}</span><span>{copy.label}</span></p>
          <h2 id="contact-title">{copy.title} <em>{copy.emphasis}</em></h2>
          <p className="contact-text">{copy.intro}</p>
          <Button href={mailtoHref} icon={ArrowUpRight}>{copy.cta}</Button>
        </div>

        <address className="contact-cards" data-reveal>
          <div className="contact-person">
            <img src={copy.avatar.src} width={copy.avatar.width} height={copy.avatar.height} alt={copy.avatar.alt} loading="lazy" decoding="async" />
            <span><strong>{hero.name}</strong>{hero.focus}</span>
          </div>
          <ContactMethod icon={Mail} label="Email" value={contact.email} href={mailtoHref} />
          <ContactMethod icon={Phone} label="Phone" value={contact.phone} href={telHref} />
          {!contact.confirmed && <PlaceholderTag>Contact details awaiting confirmation</PlaceholderTag>}
        </address>
      </div>
    </Section>
  )
}

export default ContactSection
