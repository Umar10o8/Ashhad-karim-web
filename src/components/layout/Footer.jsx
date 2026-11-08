import { ArrowUp, ArrowUpRight } from 'lucide-react'
import contact, { mailtoHref, phoneLinks } from '../../config/contact.js'
import NavLinks from '../navigation/NavLinks.jsx'
import PlaceholderTag from '../ui/PlaceholderTag.jsx'
import { url } from '../../utils/paths.js'

const currentYear = new Date().getFullYear()

// Dark plum closing band behind a soft wave: a Let's Talk link, the menu, and direct
// contact links, with the name set across the full width as an outline that fills with
// crimson as it scrolls in (or on hover).
function Footer() {
  return (
    <footer className="footer surface-dark">
      <svg className="footer-wave" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0v28c240 34 480 40 720 22S1200 0 1440 18V0z" />
      </svg>
      <div className="page-wrap footer-grid">
        <div className="footer-intro">
          <a className="footer-cta" href={url('#contact')}>Let’s Talk <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <nav className="footer-col" aria-label="Footer navigation">
          <p className="footer-heading">Menu</p>
          <NavLinks linkClassName="footer-link" />
        </nav>
        <address className="footer-col">
          <p className="footer-heading">Contact</p>
          <a className="footer-link" href={mailtoHref}>{contact.email}</a>
          {phoneLinks.map(({ value, href }) => <a key={href} className="footer-link" href={href}>{value}</a>)}
          <a className="footer-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {!contact.confirmed && <PlaceholderTag>Awaiting confirmation</PlaceholderTag>}
        </address>
      </div>

      <div className="page-wrap">
        <p className="footer-word" aria-hidden="true" data-reveal data-text="Ashhad Karim.">Ashhad Karim<span>.</span></p>
      </div>

      <div className="page-wrap footer-bottom">
        <small>© {currentYear} Ashhad Karim. All rights reserved.</small>
        <a href="#main" className="back-top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

export default Footer
