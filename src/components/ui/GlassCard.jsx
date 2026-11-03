// The site's one card. Four layers, bottom to top:
//   1. its own soft gradient fill (`tint`)
//   2. one oversized line-art object cropped by a corner (`object`)
//   3. the frosted glass surface (::before) and a cursor spotlight (::after)
//   4. the content
// Hover lifts the card and turns the object slightly; see `.gcard` in index.css.
function GlassCard({ as: Tag = 'div', tint = 'blush', object: Object, objectClassName = '', className = '', children, ...rest }) {
  return (
    <Tag className={`gcard gcard-${tint}${className ? ` ${className}` : ''}`} {...rest}>
      {Object && <Object className={`gcard-object${objectClassName ? ` ${objectClassName}` : ''}`} />}
      {children}
    </Tag>
  )
}

export default GlassCard
