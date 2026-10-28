import { ArrowUpRight } from 'lucide-react'
import IconBadge from '../ui/IconBadge.jsx'

// One contact route (email, phone) as a large link card.
function ContactMethod({ icon, label, value, href }) {
  return (
    <a className="contact-card" href={href}>
      <IconBadge icon={icon} tone="solid" />
      <span><small>{label}</small>{value}</span>
      <ArrowUpRight size={18} className="contact-arrow" aria-hidden="true" />
    </a>
  )
}

export default ContactMethod
