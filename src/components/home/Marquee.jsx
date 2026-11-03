// Endless ticker. The item list is rendered twice and the track slides by exactly one copy,
// so the loop is seamless. Each item carries its own trailing diamond, so separators move with
// the text and can never sit on top of a letter. The duplicate is hidden from assistive tech.
// Hover pauses it; reduced motion shows a single static, wrapping list.
function Marquee({ items, label }) {
  const group = (hidden) => (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item) => <li key={item}>{item}</li>)}
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
