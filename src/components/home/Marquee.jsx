import { Sparkle } from 'lucide-react'

// Endless ticker. The item list is rendered twice and the track slides by exactly one copy,
// so the loop is seamless. The duplicate is hidden from assistive tech.
function Marquee({ items, reverse = false, outline = false, label }) {
  const group = (hidden) => (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item}><span>{item}</span><Sparkle size={22} aria-hidden="true" /></li>
      ))}
    </ul>
  )

  return (
    <div className={`marquee${reverse ? ' marquee-reverse' : ''}${outline ? ' marquee-outline' : ''}`} aria-label={label} role={label ? 'region' : undefined}>
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}

export default Marquee
