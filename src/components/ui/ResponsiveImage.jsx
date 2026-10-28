// Consistent image rendering: fixed aspect ratio box, object-fit cover, responsive sources,
// and intrinsic width/height so the layout does not shift while images load.
function ResponsiveImage({ image, alt, ratio = '4 / 3', sizes = '100vw', priority = false, className = '' }) {
  return (
    <span className={`media${className ? ` ${className}` : ''}`} style={{ '--media-ratio': ratio }}>
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.srcSet ? sizes : undefined}
        width={image.width}
        height={image.height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </span>
  )
}

export default ResponsiveImage
