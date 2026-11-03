import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { home, sections } from '../data/content.js'
import experience from '../data/experience.js'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import SectionBackdrop from '../components/decor/SectionBackdrop.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import { BillboardFrame, BuildingWrap, CropTarget, ExhibitionStand, RulerLines, SwatchFan } from '../components/decor/PrintObjects.jsx'
import usePointerGlow from '../hooks/usePointerGlow.js'

const tints = ['blush', 'peach', 'lilac']
// One print/OOH object per card, cycling in this order.
const timelineObjects = [BuildingWrap, BillboardFrame, ExhibitionStand, CropTarget, SwatchFan, RulerLines]
const total = String(experience.length).padStart(2, '0')

// Home-page experience: a horizontal scroll-snap timeline. Works with touch swipes, trackpads,
// mouse drag, the arrow keys (while the track has focus), and the previous/next buttons.
function ExperienceRailSection() {
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [position, setPosition] = useState(1)
  usePointerGlow(trackRef, '.exp-card', { tilt: true })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const maximum = track.scrollWidth - track.clientWidth
      const next = maximum > 0 ? track.scrollLeft / maximum : 1
      const card = track.querySelector('.exp-card')
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
      const step = (card?.getBoundingClientRect().width ?? 1) + gap
      // At the end of the track the last card may never reach the left edge, so count it in.
      const index = next >= .995 ? experience.length : Math.min(experience.length, Math.round(track.scrollLeft / step) + 1)
      track.closest('.exp-section')?.style.setProperty('--track-progress', next.toFixed(4))
      setProgress((value) => Math.abs(value - next) < .002 ? value : next)
      setPosition(index)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    track.addEventListener('scroll', measure, { passive: true })
    measure()

    // Mouse drag. Touch and pen keep native swiping; snapping is paused while dragging.
    let drag = null
    const down = (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return
      drag = { x: event.clientX, left: track.scrollLeft, moved: false }
    }
    const move = (event) => {
      if (!drag) return
      const dx = event.clientX - drag.x
      if (!drag.moved && Math.abs(dx) < 4) return
      if (!drag.moved) {
        drag.moved = true
        track.classList.add('is-dragging')
        track.setPointerCapture(event.pointerId)
      }
      track.scrollLeft = drag.left - dx
    }
    const up = () => {
      if (!drag) return
      drag = null
      track.classList.remove('is-dragging')
    }
    track.addEventListener('pointerdown', down)
    track.addEventListener('pointermove', move)
    track.addEventListener('pointerup', up)
    track.addEventListener('pointercancel', up)
    return () => {
      observer.disconnect()
      track.removeEventListener('scroll', measure)
      track.removeEventListener('pointerdown', down)
      track.removeEventListener('pointermove', move)
      track.removeEventListener('pointerup', up)
      track.removeEventListener('pointercancel', up)
    }
  }, [])

  const scrollTrack = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.exp-card')
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || track.clientWidth) + gap), behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const handleKey = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    scrollTrack(event.key === 'ArrowRight' ? 1 : -1)
  }

  return (
    <section id="experience" className="section section-paneled exp-section" aria-labelledby="experience-title">
      <SectionBackdrop variant={1} />
      <div className="panel panel-lilac">
        <div className="page-wrap">
          <SectionHeader id="experience" {...sections.experience} />
        </div>
        <div className="exp-rail">
          <ol className="exp-track" ref={trackRef} tabIndex={0} onKeyDown={handleKey} aria-label="Career timeline, newest first">
            {experience.map(({ role, company, location, start, end, current }, index) => (
              <GlassCard
                as="li"
                key={`${company}-${start}`}
                tint={current ? 'current' : tints[index % tints.length]}
                object={timelineObjects[index % timelineObjects.length]}
                className={`exp-card${current ? ' is-current' : ''}`}
              >
                <div className="exp-top">
                  <span className="exp-years" aria-hidden="true">{start}<span>–{end === 'Present' ? 'Now' : end.slice(2)}</span></span>
                  <span className="exp-index" aria-hidden="true">
                    {String(experience.length - index).padStart(2, '0')}
                    <ArrowUpRight size={13} />
                  </span>
                </div>
                <div className="exp-body">
                  <p className="sr-only">{start} – {end}</p>
                  <h3>{role}</h3>
                  <p className="exp-company">{company}</p>
                </div>
                <p className="exp-meta">
                  {current && <span className="exp-live" aria-hidden="true" />}
                  <MapPin size={14} aria-hidden="true" /> {location}
                </p>
              </GlassCard>
            ))}
          </ol>
        </div>
        <div className="page-wrap exp-foot">
          <span className="exp-hint">{home.experienceHint} <ArrowRight size={16} aria-hidden="true" /></span>
          <span className="exp-count" aria-hidden="true"><strong>{String(position).padStart(2, '0')}</strong> / {total}</span>
          <span className="exp-bar" role="progressbar" aria-label="Experience timeline progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
            <span />
          </span>
          <span className="exp-range">{experience.at(-1).start} — Now</span>
          <div className="exp-controls">
            <button type="button" className="exp-control" onClick={() => scrollTrack(-1)} disabled={progress <= .001} aria-label="Previous experience">
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" className="exp-control" onClick={() => scrollTrack(1)} disabled={progress >= .999} aria-label="Next experience">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceRailSection
