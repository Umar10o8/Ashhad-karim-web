// Page section shell: consistent spacing, background tone, and an accessible name
// taken from the section heading (`${id}-title`).
const tones = {
  default: 'section',
  alt: 'section section-alt',
  berry: 'section section-berry surface-dark',
  dark: 'section section-dark surface-dark',
}

function Section({ id, tone = 'default', className = '', children }) {
  return (
    <section id={id} className={`${tones[tone]}${className ? ` ${className}` : ''}`} aria-labelledby={`${id}-title`}>
      <div className="page-wrap">{children}</div>
    </section>
  )
}

export default Section
