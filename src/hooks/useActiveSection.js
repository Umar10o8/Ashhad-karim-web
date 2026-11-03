import { useEffect, useState } from 'react'

// Returns the id of the section currently crossing the middle of the viewport.
function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0
      const marker = Math.min(window.innerHeight * .42, headerBottom + 44)
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .map((section) => ({ id: section.id, rect: section.getBoundingClientRect() }))
      const current = sections
        .filter(({ rect }) => rect.top <= marker && rect.bottom > marker)
        .at(-1)
      const previous = sections.filter(({ rect }) => rect.top <= marker).at(-1)
      const next = sections.find(({ rect }) => rect.top > marker)
      const nextActive = current?.id ?? next?.id ?? previous?.id ?? ''
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
