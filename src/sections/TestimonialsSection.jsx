import { useState } from 'react'
import { sections } from '../data/content.js'
import testimonials from '../data/testimonials.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'

// Only real, approved quotes are shown. While every entry in testimonials.js is still a
// placeholder the section renders nothing, so the live site never shows invented praise.
const published = testimonials.filter(({ placeholder }) => !placeholder)

// Editorial quote layout: one large quote at a time, with the speakers listed as a numbered
// index that switches between them.
function TestimonialsSection() {
  const [active, setActive] = useState(0)
  if (!published.length) return null
  const { quote, name, role } = published[active]

  return (
    <Section id="testimonials" className="testimonials-section">
      <SectionHeader id="testimonials" {...sections.testimonials} />
      <div className="quote-layout">
        <figure className="quote-feature" data-reveal>
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote key={active} className="quote-text" aria-live="polite"><p>{quote}</p></blockquote>
          <figcaption><strong>{name}</strong><span>{role}</span></figcaption>
        </figure>

        {published.length > 1 && (
          <ol className="quote-index" aria-label="Choose a testimonial" data-reveal>
            {published.map((item, index) => (
              <li key={item.name}>
                <button type="button" aria-pressed={index === active} onClick={() => setActive(index)}>
                  <span className="quote-index-num">{String(index + 1).padStart(2, '0')}</span>
                  <span><strong>{item.name}</strong><small>{item.role}</small></span>
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </Section>
  )
}

export default TestimonialsSection
