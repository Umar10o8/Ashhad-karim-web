import SectionBackdrop from '../decor/SectionBackdrop.jsx'

// Page section shell: consistent spacing, background tone, and an accessible name
// taken from the section heading (`${id}-title`).
// `panel` (a tint name) sets the content on a large rounded panel inset from the viewport
// edges, with faint print shapes drifting behind it (`backdrop` picks their arrangement).
const tones = {
  default: 'section',
  alt: 'section section-alt',
  berry: 'section section-berry surface-dark',
  dark: 'section section-dark surface-dark',
}

function Section({ id, tone = 'default', panel, backdrop = 0, className = '', children }) {
  const classes = `${tones[tone]}${panel ? ' section-paneled' : ''}${className ? ` ${className}` : ''}`

  return (
    <section id={id} className={classes} aria-labelledby={`${id}-title`}>
      {panel ? (
        <>
          <SectionBackdrop variant={backdrop} />
          <div className={`panel panel-${panel}`}>
            <div className="page-wrap">{children}</div>
          </div>
        </>
      ) : (
        <div className="page-wrap">{children}</div>
      )}
    </section>
  )
}

export default Section
