import { url } from '../utils/paths.js'

// Header and footer links. Each jumps to a section of the page and is highlighted while that
// section is on screen.
const navigation = [
  { id: 'about', label: 'About', href: url('#about'), section: true },
  { id: 'experience', label: 'Experience', href: url('#experience'), section: true },
  { id: 'skills', label: 'Skills', href: url('#skills'), section: true },
  { id: 'achievements', label: 'Achievements', href: url('#achievements'), section: true },
  { id: 'contact', label: 'Contact', href: url('#contact'), section: true },
]

export default navigation
