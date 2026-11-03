import { url } from '../utils/paths.js'

// Header and footer links. `page` links go to their own HTML page; `section` links jump to a
// section of the home page and are highlighted while that section is on screen.
// The FAQ and Contact pages still exist but are not linked from the menu for now
// (the header's Contact Me button still opens the contact page).
const navigation = [
  { id: 'about', label: 'About', href: url('about/'), page: 'about' },
  { id: 'experience', label: 'Experience', href: url('#experience'), section: true },
  { id: 'skills', label: 'Skills', href: url('#skills'), section: true },
  { id: 'achievements', label: 'Achievements', href: url('#achievements'), section: true },
  { id: 'contact', label: 'Contact', href: url('#contact'), section: true },
]

export default navigation
