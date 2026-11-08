import { ArrowUpRight } from 'lucide-react'
import IconBadge from '../ui/IconBadge.jsx'

// Long email addresses may only wrap before the "@", never mid-word.
const breakable = (value) => {
  const at = typeof value === 'string' ? value.indexOf('@') : -1
  return at > 0 ? <>{value.slice(0, at)}<wbr />{value.slice(at)}</> : value
}

// One contact route (email, phone) as a large card. With a single `value` and `href` the whole
// card is the link; with `links` (several numbers) each line is its own link.
function ContactMethod({ icon, label, value, href, links, ...rest }) {
  if (links) {
    return (
      <div className="contact-card">
        <IconBadge icon={icon} tone="solid" />
        <span>
          <small className="sr-only">{label}</small>
          {links.map((link) => <a key={link.href} className="contact-card-line" href={link.href}>{link.value}</a>)}
        </span>
        <ArrowUpRight size={18} className="contact-arrow" aria-hidden="true" />
      </div>
    )
  }

  return (
    <a className="contact-card" href={href} {...rest}>
      <IconBadge icon={icon} tone="solid" />
      <span><small className="sr-only">{label}</small>{breakable(value)}</span>
      <ArrowUpRight size={18} className="contact-arrow" aria-hidden="true" />
    </a>
  )
}

export default ContactMethod
