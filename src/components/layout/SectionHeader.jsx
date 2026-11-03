import PillTag from '../ui/PillTag.jsx'

// Pill label (number and name), two-part heading whose emphasis sits in a tinted glass
// highlight, and an optional intro.
function SectionHeader({ id, number, label, title, emphasis, intro }) {
  return (
    <div className="section-head" data-reveal>
      <div>
        <PillTag number={number} className="section-label">{label}</PillTag>
        <h2 id={`${id}-title`}>{title} <em className="highlight">{emphasis}</em></h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

export default SectionHeader
