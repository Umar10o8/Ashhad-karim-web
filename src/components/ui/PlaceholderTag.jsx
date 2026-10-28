// Visible marker for content that still needs to be replaced or confirmed before publishing.
function PlaceholderTag({ children = 'Placeholder' }) {
  return <span className="placeholder-tag">{children}</span>
}

export default PlaceholderTag
