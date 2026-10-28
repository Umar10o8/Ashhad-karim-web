import navigation from '../../data/navigation.js'
import { currentPage } from '../../utils/paths.js'

// Links shared by the header and footer. Page links are active on their page; section links are
// active while their home-page section is in view (`activeId`).
function NavLinks({ activeId, onNavigate, linkClassName }) {
  return navigation.map(({ id, label, href, page, section }) => {
    const isPage = page === currentPage
    const isSection = section && currentPage === 'home' && activeId === id
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
