import { useEffect, useRef, useState } from 'react'
import navigation from '../../data/navigation.js'
import useActiveSection from '../../hooks/useActiveSection.js'
import useScrollThreshold from '../../hooks/useScrollThreshold.js'
import NavLinks from '../navigation/NavLinks.jsx'
import Wordmark from '../navigation/Wordmark.jsx'
import Button from '../ui/Button.jsx'
import { currentPage, url } from '../../utils/paths.js'

// Scroll-spy only runs on the home page, where the section links point.
const observedIds = currentPage === 'home' ? ['home', ...navigation.filter(({ section }) => section).map(({ id }) => id)] : []

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const scrolled = useScrollThreshold(8)
  const activeId = useActiveSection(observedIds)
  const closeMenu = () => setMenuOpen(false)

  // Close the mobile menu on Escape (returning focus to the toggle) or when the viewport grows
  // to the desktop layout.
  useEffect(() => {
    if (!menuOpen) return
    const desktop = window.matchMedia('(min-width: 1025px)')
    const handleKey = (event) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
    const handleResize = () => { if (desktop.matches) setMenuOpen(false) }
    window.addEventListener('keydown', handleKey)
    desktop.addEventListener('change', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKey)
      desktop.removeEventListener('change', handleResize)
    }
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="header-inner page-wrap">
        <Wordmark onClick={closeMenu} />
        {/* The toggle precedes the nav so that, on mobile, Tab moves from it straight into the open menu. */}
        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className="menu-icon" aria-hidden="true"><span /><span /></span>
        </button>
        <nav id="main-nav" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <NavLinks activeId={activeId} onNavigate={closeMenu} linkClassName="nav-link" />
          <Button href={url('contact/')} className="nav-cta" onClick={closeMenu}>Contact Me</Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
