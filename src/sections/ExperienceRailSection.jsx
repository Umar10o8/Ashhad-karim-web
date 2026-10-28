import { useEffect, useRef } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { home, sections } from '../data/content.js'
import experience from '../data/experience.js'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import useScrollProgress from '../hooks/useScrollProgress.js'

// Home-page experience: on wide screens the section pins and vertical scrolling drives the
// career cards sideways (newest first). `--distance` is how far the track must travel; CSS
// makes the section that much taller than the viewport. On narrow screens and for reduced
// motion the track is a swipeable, snap-scrolling row instead.
function ExperienceRailSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  useScrollProgress(sectionRef, 'pin')

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return
    const measure = () => section.style.setProperty('--distance', `${Math.max(0, track.scrollWidth - track.clientWidth)}px`)
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="section rail-section" aria-labelledby="experience-title" ref={sectionRef}>
      <div className="rail-sticky">
        <div className="page-wrap">
          <SectionHeader id="experience" {...sections.experience} />
        </div>
        <ol className="rail-track" ref={trackRef} tabIndex={0} aria-label="Career timeline, newest first">
          {experience.map(({ role, company, location, start, end, current }, index) => (
            <li className={`rail-card${current ? ' is-current' : ''}`} key={`${company}-${start}`}>
              <span className="rail-years" aria-hidden="true">{start}<span>–{end === 'Present' ? 'Now' : end.slice(2)}</span></span>
              <div className="rail-body">
                <p className="rail-date">
                  <span><time dateTime={start}>{start}</time> – {end === 'Present' ? end : <time dateTime={end}>{end}</time>}</span>
                  {current && <span className="badge">Current</span>}
                </p>
                <h3>{role}</h3>
                <p className="rail-meta">{company} <span aria-hidden="true">·</span> <MapPin size={14} aria-hidden="true" /> {location}</p>
              </div>
              <span className="rail-step" aria-hidden="true">{String(experience.length - index).padStart(2, '0')}</span>
            </li>
          ))}
        </ol>
        <div className="page-wrap rail-foot" aria-hidden="true">
          <span className="rail-hint">{home.experienceHint} <ArrowRight size={16} /></span>
          <span className="rail-bar"><span /></span>
          <span className="rail-range">{experience.at(-1).start} — Now</span>
        </div>
      </div>
    </section>
  )
}

export default ExperienceRailSection
