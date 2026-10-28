import { Sparkle } from 'lucide-react'

// Endless ticker. The item list is rendered twice and the track slides by exactly one copy,
// so the loop is seamless. The duplicate is hidden from assistive tech. Every second item gets
// the italic serif accent style.
function Marquee({ items, label }) {
  const group = (hidden) => (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <li key={item} className={index % 2 ? 'is-alt' : undefined}><span>{item}</span><Sparkle size={16} aria-hidden="true" /></li>
      ))}
    </ul>
  )

  return (
    <div className="marquee" role="region" aria-label={label}>
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}

export default Marquee
