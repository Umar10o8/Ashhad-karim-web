import { url } from '../utils/paths.js'

// Header and footer links. `page` links go to their own HTML page; `section` links jump to a
// section of the home page and are highlighted while that section is on screen.
const navigation = [
  { id: 'about', label: 'About', href: url('about/'), page: 'about' },
  { id: 'expertise', label: 'Expertise', href: url('#expertise'), section: true },
  { id: 'experience', label: 'Experience', href: url('#experience'), section: true },
  { id: 'portfolio', label: 'Portfolio', href: url('#portfolio'), section: true },
  { id: 'faq', label: 'FAQ', href: url('faq/'), page: 'faq' },
  { id: 'contact', label: 'Contact', href: url('contact/'), page: 'contact' },
]

export default navigation
