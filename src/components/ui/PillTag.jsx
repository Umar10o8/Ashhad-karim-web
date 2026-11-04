// Small glass pill with a dot, set above a section heading.
function PillTag({ children, className = '' }) {
  return (
    <p className={`pill${className ? ` ${className}` : ''}`}>
      <span className="pill-dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

export default PillTag
