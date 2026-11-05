import { useEffect, useState } from 'react'
import { subscribeScroll } from '../utils/scrollFrame.js'

// Returns the id of the section under a marker line just below the floating header, or ''
// when none of `ids` is there (e.g. over the hero or a section without a menu link), so a link
// is only highlighted while its own section is on screen. Near the page bottom the last
// section wins, since it may be too short to reach the marker.
function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!ids.length) return
    // Reads layout in the shared frame; the state setter bails out when the id is unchanged.
    return subscribeScroll({
      read: () => {
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
        return current?.id ?? ''
      },
      write: (nextActive) => setActive((value) => value === nextActive ? value : nextActive),
    })
  }, [ids])

  return active
}

export default useActiveSection
