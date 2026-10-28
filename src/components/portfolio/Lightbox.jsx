import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import PlaceholderTag from '../ui/PlaceholderTag.jsx'
import ImageCredit from '../ui/ImageCredit.jsx'

// Native <dialog>: focus is trapped while open, Escape closes it, and focus returns
// to the project that opened it.
function Lightbox({ items, index, onClose, onNavigate }) {
  const dialogRef = useRef(null)
  const item = index === null ? null : items[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (item && !dialog.open) dialog.showModal()
    if (!item && dialog.open) dialog.close()
  }, [item])

  const step = (direction) => onNavigate((index + direction + items.length) % items.length)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') step(1)
    if (event.key === 'ArrowLeft') step(-1)
  }

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={item ? item.title : 'Image viewer'}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={(event) => { if (event.target === dialogRef.current) onClose() }}
    >
      {item && (
        <figure className="lightbox-figure">
          <img key={item.id} className="lightbox-image" src={item.image.src} srcSet={item.image.srcSet} sizes="(min-width: 1100px) 1100px, 100vw" width={item.image.width} height={item.image.height} alt={item.alt} />
          <figcaption>
            <span>{item.title}</span>
            {item.placeholder && <PlaceholderTag>Placeholder image</PlaceholderTag>}
            <ImageCredit credit={item.credit} />
            <span className="lightbox-count">{index + 1} / {items.length}</span>
          </figcaption>
        </figure>
      )}
      <button type="button" className="lightbox-btn lightbox-close" onClick={onClose} aria-label="Close image viewer"><X size={20} aria-hidden="true" /></button>
      {items.length > 1 && (
        <>
          <button type="button" className="lightbox-btn lightbox-prev" onClick={() => step(-1)} aria-label="Previous image"><ChevronLeft size={22} aria-hidden="true" /></button>
          <button type="button" className="lightbox-btn lightbox-next" onClick={() => step(1)} aria-label="Next image"><ChevronRight size={22} aria-hidden="true" /></button>
        </>
      )}
    </dialog>
  )
}

export default Lightbox
