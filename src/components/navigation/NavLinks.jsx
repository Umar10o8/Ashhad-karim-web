import navigation from '../../data/navigation.js'

// Links shared by the header and footer. A link is active while its section is on screen.
function NavLinks({ activeId, onNavigate, linkClassName }) {
  return navigation.map(({ id, label, href }) => {
    const isActive = activeId === id
    return (
      <a
        key={id}
        href={href}
        onClick={onNavigate}
        className={`${linkClassName}${isActive ? ' is-active' : ''}`}
        aria-current={isActive ? 'location' : undefined}
      >
        {label}
      </a>
    )
  })
}

export default NavLinks
