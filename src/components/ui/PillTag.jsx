// Small glass pill with a dot, set above a section heading. `number` is optional.
function PillTag({ number, children, className = '' }) {
  return (
    <p className={`pill${className ? ` ${className}` : ''}`}>
      <span className="pill-dot" aria-hidden="true" />
      {number && <span className="pill-num">{number}</span>}
      <span>{children}</span>
    </p>
  )
}

export default PillTag
