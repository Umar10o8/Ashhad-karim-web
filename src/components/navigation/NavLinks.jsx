import navigation from '../../data/navigation.js'
import { currentPage } from '../../utils/paths.js'

// Links shared by the header and footer. Links are active on their page or matching home section.
function NavLinks({ activeId, onNavigate, linkClassName }) {
  return navigation.map(({ id, label, href, page }) => {
    const isPage = page === currentPage
    const isSection = currentPage === 'home' && activeId === id
    const isActive = isPage || isSection
    return (
      <a
        key={id}
        href={href}
        onClick={onNavigate}
        className={`${linkClassName}${isActive ? ' is-active' : ''}`}
        aria-current={isPage ? 'page' : isSection ? 'location' : undefined}
      >
        {label}
      </a>
    )
  })
}

export default NavLinks
