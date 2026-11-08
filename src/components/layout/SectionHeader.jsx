import PillTag from '../ui/PillTag.jsx'

// Optional pill label, heading with an optional emphasis in a tinted glass highlight, and an
// optional intro.
function SectionHeader({ id, label, title, emphasis, intro }) {
  return (
    <div className="section-head" data-reveal>
      <div>
        {label && <PillTag className="section-label">{label}</PillTag>}
        <h2 id={`${id}-title`}>{title}{emphasis && <> <em className="highlight">{emphasis}</em></>}</h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

export default SectionHeader
