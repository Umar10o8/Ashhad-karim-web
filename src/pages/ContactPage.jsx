import { Mail, Phone } from 'lucide-react'
import contact, { mailtoHref, phoneLinks } from '../config/contact.js'
import { contactPage } from '../data/pages.js'
import PageHero from '../components/layout/PageHero.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactMethod from '../components/contact/ContactMethod.jsx'
import PlaceholderTag from '../components/ui/PlaceholderTag.jsx'
import LinkedInIcon from '../components/ui/LinkedInIcon.jsx'
import studioLogo from '../assets/images/karim-creative-studio.svg'

const { hero, details } = contactPage

function ContactPage() {
  return (
    <>
      <PageHero id="contact-page" {...hero} />
      <section id="contact-form" className="section contact-page soft-mesh" aria-labelledby="contact-form-title">
        <div className="page-wrap contact-page-grid">
          <div className="contact-form-card" data-reveal>
            <ContactForm />
          </div>

          <aside className="contact-aside" aria-label={details.title} data-reveal>
            <div className="contact-panel surface-dark glass-surface-dark">
              <span className="contact-logo">
                <img src={studioLogo} alt={details.logoAlt} width="602" height="216" decoding="async" />
              </span>
              <address className="contact-cards">
                <ContactMethod icon={Mail} label="Email" value={contact.email} href={mailtoHref} />
                <ContactMethod icon={Phone} label="Phone" links={phoneLinks} />
                <ContactMethod icon={LinkedInIcon} label="LinkedIn" value="Social media link" href={contact.linkedin} target="_blank" rel="noopener noreferrer" />
              </address>
              {!contact.confirmed && <PlaceholderTag>Contact details awaiting confirmation</PlaceholderTag>}
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default ContactPage
