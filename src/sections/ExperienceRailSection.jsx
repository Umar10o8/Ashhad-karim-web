import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { home, sections } from '../data/content.js'
import experience from '../data/experience.js'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import usePointerGlow from '../hooks/usePointerGlow.js'

const artworkTransforms = [0, 18, -12, 24, -20, 12, -8, 20]

function TimelineArtwork({ index }) {
  const transform = artworkTransforms[index % artworkTransforms.length]
  const dotCount = 3 + (index % 4)

  return (
    <svg className="rail-art" viewBox="0 0 220 160" fill="none" aria-hidden="true">
      <g transform={`rotate(${transform} 110 80)`}>
        <rect x="34" y="24" width="152" height="108" rx="8" stroke="currentColor" strokeWidth="2" />
        <rect x="48" y="38" width="124" height="80" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d={`M48 ${58 + index % 5 * 5}h124M${74 + index % 6 * 8} 38v80`} stroke="currentColor" strokeWidth="1.5" />
        {Array.from({ length: dotCount }, (_, dot) => (
          <circle
            key={dot}
            cx={63 + dot * (15 + index % 3)}
            cy={83 + ((dot + index) % 3) * 8}
            r={3 + (index % 3)}
            fill="currentColor"
          />
        ))}
        <path d={`M${42 + index % 5 * 5} 18v12M28 34h12m140-16v12m2 4h12M42 130v12m-14-10h12m146-2v12m2-2h12`} stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  )
}

// Home-page experience: a horizontal scroll-snap timeline that works with touch, trackpads,
// keyboard scrolling, and the previous/next controls.
function ExperienceRailSection() {
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)
  usePointerGlow(trackRef, '.rail-card', { tilt: true })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const maximum = track.scrollWidth - track.clientWidth
      const next = maximum > 0 ? track.scrollLeft / maximum : 1
      track.style.setProperty('--track-progress', next.toFixed(4))
      setProgress((value) => Math.abs(value - next) < .002 ? value : next)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    track.addEventListener('scroll', measure, { passive: true })
    measure()
    return () => {
      observer.disconnect()
      track.removeEventListener('scroll', measure)
    }
  }, [])

  const scrollTrack = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.rail-card')
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || track.clientWidth) + gap), behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <section id="experience" className="section rail-section" aria-labelledby="experience-title">
      <div className="rail-sticky">
        <div className="page-wrap">
          <SectionHeader id="experience" {...sections.experience} />
        </div>
        <ol className="rail-track" ref={trackRef} tabIndex={0} aria-label="Career timeline, newest first">
          {experience.map(({ role, company, location, start, end, current }, index) => (
            <li className={`rail-card glass-card${current ? ' is-current' : ''}`} key={`${company}-${start}`}>
              <TimelineArtwork index={index} />
              <span className="rail-years" aria-hidden="true">{start}<span>–{end === 'Present' ? 'Now' : end.slice(2)}</span></span>
              <div className="rail-body">
                <p className="sr-only">{start} – {end}</p>
                <h3>{role}</h3>
                <p className="rail-company">{company}</p>
                <p className="rail-meta"><MapPin size={14} aria-hidden="true" /> {location}</p>
              </div>
              <span className="rail-step" aria-hidden="true">{String(experience.length - index).padStart(2, '0')}</span>
            </li>
          ))}
        </ol>
        <div className="page-wrap rail-foot">
          <span className="rail-hint">{home.experienceHint} <ArrowRight size={16} /></span>
          <button type="button" className="rail-control" onClick={() => scrollTrack(-1)} disabled={progress <= .001} aria-label="Previous experience">
            <ArrowLeft size={17} aria-hidden="true" />
          </button>
          <span className="rail-bar" role="progressbar" aria-label="Experience timeline progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
            <span />
          </span>
          <button type="button" className="rail-control" onClick={() => scrollTrack(1)} disabled={progress >= .999} aria-label="Next experience">
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          <span className="rail-range">{experience.at(-1).start} — Now</span>
        </div>
      </div>
    </section>
  )
}

export default ExperienceRailSection
