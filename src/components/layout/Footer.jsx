import { ArrowUp } from 'lucide-react'
import contact, { mailtoHref, telHref } from '../../config/contact.js'
import { footer } from '../../data/content.js'
import NavLinks from '../navigation/NavLinks.jsx'
import Wordmark from '../navigation/Wordmark.jsx'
import PlaceholderTag from '../ui/PlaceholderTag.jsx'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="page-wrap footer-grid">
        <div>
          <Wordmark />
          <p className="footer-descriptor">{footer.descriptor}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <NavLinks linkClassName="footer-link" />
        </nav>
        <address className="footer-contact">
          <a className="footer-link" href={mailtoHref}>{contact.email}</a>
          <a className="footer-link" href={telHref}>{contact.phone}</a>
          {!contact.confirmed && <PlaceholderTag>Awaiting confirmation</PlaceholderTag>}
        </address>
      </div>
      <div className="page-wrap footer-bottom">
        <small>© {currentYear} Ashhad Karim</small>
        <a href="#home" className="back-top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

export default Footer
