import { Check, Mail, Phone } from 'lucide-react'
import contact, { mailtoHref, telHref } from '../config/contact.js'
import { hero as homeHero, sections } from '../data/content.js'
import { contactPage } from '../data/pages.js'
import PageHero from '../components/layout/PageHero.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactMethod from '../components/contact/ContactMethod.jsx'
import PlaceholderTag from '../components/ui/PlaceholderTag.jsx'
import { url } from '../utils/paths.js'

const { hero, details } = contactPage
const { avatar } = sections.contact

function ContactPage() {
  return (
    <>
      <PageHero id="contact-page" {...hero} />
      <section className="section contact-page" aria-labelledby="contact-form-title">
        <div className="page-wrap contact-page-grid">
          <div className="contact-form-card" data-reveal>
            <ContactForm />
          </div>

          <aside className="contact-aside" aria-label={details.title} data-reveal>
            <div className="contact-panel surface-dark">
              <div className="contact-person">
                <img src={avatar.src} width={avatar.width} height={avatar.height} alt={avatar.alt} loading="lazy" decoding="async" />
                <span><strong>{homeHero.name}</strong>{homeHero.focus}</span>
              </div>
              <address className="contact-cards">
                <ContactMethod icon={Mail} label="Email" value={contact.email} href={mailtoHref} />
                <ContactMethod icon={Phone} label="Phone" value={contact.phone} href={telHref} />
              </address>
              {!contact.confirmed && <PlaceholderTag>Contact details awaiting confirmation</PlaceholderTag>}
            </div>

            <div className="contact-help">
              <h2>{details.helpTitle}</h2>
              <ul>
                {details.help.map((item) => (
                  <li key={item}><span className="strength-icon" aria-hidden="true"><Check size={15} strokeWidth={2.5} /></span>{item}</li>
                ))}
              </ul>
              <p>Have a quick question first? <a href={url('faq/')}>Read the FAQ</a>.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default ContactPage
