import { useEffect, useState } from 'react'

// Returns the id of the section under a marker line just below the floating header, or ''
// when none of `ids` is there (e.g. over the hero or a section without a menu link), so a link
// is only highlighted while its own section is on screen. Near the page bottom the last
// section wins, since it may be too short to reach the marker.
function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!ids.length) return
    let frame = 0
    const update = () => {
      frame = 0
      const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0
      const marker = Math.max(headerBottom + 24, window.innerHeight * .35)
      const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      const current = atBottom
        ? sections.filter((section) => section.getBoundingClientRect().top < window.innerHeight).at(-1)
        : sections.find((section) => {
          const rect = section.getBoundingClientRect()
          return rect.top <= marker && rect.bottom > marker
        })
      const nextActive = current?.id ?? ''
      setActive((value) => value === nextActive ? value : nextActive)
    }
    const request = () => { if (!frame) frame = requestAnimationFrame(update) }

    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [ids])

  return active
}

export default useActiveSection
