import { Maximize2 } from 'lucide-react'
import ResponsiveImage from '../ui/ResponsiveImage.jsx'
import PlaceholderTag from '../ui/PlaceholderTag.jsx'

const GALLERY_SIZES = '(min-width: 1025px) 33vw, (min-width: 561px) 50vw, 100vw'

function ProjectCard({ project, categoryLabel, onOpen }) {
  return (
    <button type="button" className="project-card" onClick={onOpen} aria-haspopup="dialog" aria-label={`${project.title}: view larger image`} data-reveal="mask">
      <span className="project-media reveal-mask">
        <ResponsiveImage image={project.image} alt={project.alt} ratio="4 / 3" sizes={GALLERY_SIZES} />
        <span className="project-zoom" aria-hidden="true"><Maximize2 size={18} /></span>
        {project.placeholder && <PlaceholderTag />}
      </span>
      <span className="project-caption">
        <span className="project-category">{categoryLabel}</span>
        <span className="project-title">{project.title}</span>
      </span>
    </button>
  )
}

export default ProjectCard
