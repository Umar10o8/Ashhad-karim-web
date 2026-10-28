import { Quote } from 'lucide-react'
import { sections } from '../data/content.js'
import testimonials from '../data/testimonials.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import PlaceholderTag from '../components/ui/PlaceholderTag.jsx'

const initials = (name) => name.split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase()

function TestimonialsSection() {
  return (
    <Section id="testimonials" className="testimonials-section">
      <SectionHeader id="testimonials" {...sections.testimonials} />
      <ul className="card-grid card-grid-3 testimonial-grid">
        {testimonials.map(({ quote, name, role, placeholder }) => (
          <li className="testimonial-card" key={name} data-reveal>
            <figure>
              <div className="testimonial-top">
                <span className="testimonial-mark" aria-hidden="true"><Quote size={22} strokeWidth={1.75} /></span>
                {placeholder && <PlaceholderTag>Awaiting testimonial</PlaceholderTag>}
              </div>
              <blockquote><p>{quote}</p></blockquote>
              <figcaption>
                <span className="testimonial-avatar" aria-hidden="true">{initials(name)}</span>
                <span><strong>{name}</strong><small>{role}</small></span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default TestimonialsSection
