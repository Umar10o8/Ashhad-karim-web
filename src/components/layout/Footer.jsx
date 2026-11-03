import { ArrowUp, ArrowUpRight } from 'lucide-react'
import contact, { mailtoHref, telHref } from '../../config/contact.js'
import { footer } from '../../data/content.js'
import NavLinks from '../navigation/NavLinks.jsx'
import PlaceholderTag from '../ui/PlaceholderTag.jsx'
import { url } from '../../utils/paths.js'

const currentYear = new Date().getFullYear()

// Dark closing band: a short positioning line, the menu, and direct contact links, with the
// name set across the full width as the sign-off.
function Footer() {
  return (
    <footer className="footer surface-dark">
      <div className="page-wrap footer-grid">
        <div className="footer-intro">
          <p className="footer-descriptor">{footer.descriptor}</p>
          <a className="footer-cta" href={url('contact/')}>Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <nav className="footer-col" aria-label="Footer navigation">
          <p className="footer-heading">Menu</p>
          <NavLinks linkClassName="footer-link" />
        </nav>
        <address className="footer-col">
          <p className="footer-heading">Contact</p>
          <a className="footer-link" href={mailtoHref}>{contact.email}</a>
          <a className="footer-link" href={telHref}>{contact.phone}</a>
          {!contact.confirmed && <PlaceholderTag>Awaiting confirmation</PlaceholderTag>}
        </address>
      </div>

      <div className="page-wrap">
        <p className="footer-word" aria-hidden="true" data-reveal>Ashhad Karim<span>.</span></p>
      </div>

      <div className="page-wrap footer-bottom">
        <small>© {currentYear} Ashhad Karim. All rights reserved.</small>
        <a href="#main" className="back-top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

export default Footer
