// Numbered label, two-part heading (plain + italic emphasis), and optional intro.
function SectionHeader({ id, number, label, title, emphasis, intro }) {
  return (
    <div className="section-head" data-reveal>
      <div>
        <p className="section-label"><span>{number}</span><span>{label}</span></p>
        <h2 id={`${id}-title`}>{title} <em>{emphasis}</em></h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

export default SectionHeader
