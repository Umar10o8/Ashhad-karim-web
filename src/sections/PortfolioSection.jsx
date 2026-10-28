import { useState } from 'react'
import { sections } from '../data/content.js'
import projects, { categories } from '../data/projects.js'
import Section from '../components/layout/Section.jsx'
import SectionHeader from '../components/layout/SectionHeader.jsx'
import CategoryFilter from '../components/portfolio/CategoryFilter.jsx'
import ProjectCard from '../components/portfolio/ProjectCard.jsx'
import Lightbox from '../components/portfolio/Lightbox.jsx'

const categoryLabel = Object.fromEntries(categories.map(({ id, label }) => [id, label]))
// Only offer filters that have at least one project.
const availableCategories = categories.filter(({ id }) => id === 'all' || projects.some((project) => project.category === id))
const hasPlaceholders = projects.some((project) => project.placeholder)

function PortfolioSection() {
  const [filter, setFilter] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)
  const visible = filter === 'all' ? projects : projects.filter((project) => project.category === filter)
  const { placeholderIntro, intro, ...heading } = sections.portfolio

  return (
    <Section id="portfolio">
      <SectionHeader id="portfolio" {...heading} intro={hasPlaceholders ? placeholderIntro : intro} />
      <CategoryFilter categories={availableCategories} selected={filter} onSelect={setFilter} />
      <p className="sr-only" role="status">Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}</p>
      <ul className="gallery">
        {visible.map((project, index) => (
          <li key={project.id}>
            <ProjectCard project={project} categoryLabel={categoryLabel[project.category]} onOpen={() => setOpenIndex(index)} />
          </li>
        ))}
      </ul>
      <Lightbox items={visible} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
    </Section>
  )
}

export default PortfolioSection
