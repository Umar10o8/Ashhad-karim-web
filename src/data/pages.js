// Copy for the inner pages (About, FAQ, Contact). Source: supplied CV. Do not add unverified claims.
import { responsiveAsset } from '../utils/images.js'
import billboardSm from '../assets/images/top-header-800.webp'
import billboardLg from '../assets/images/top-header-1600.webp'

export const aboutPage = {
  hero: {
    crumb: 'About',
    eyebrow: 'About me',
    title: 'From the studio to the',
    emphasis: 'production floor.',
    intro: 'Two decades of preparing artwork for print, designing exhibition stands, and coordinating the teams that take a project from approved design to installation.',
  },
  glance: {
    // Figures from the CV plus the current THE.TEAM role (experience.js): first role 2004; seven
    // employers in four countries; a five-member team at Print Works; up to five projects at once;
    // four years leading the pre-production team. The first stat is shown largest.
    stats: [
      { value: '20+', label: 'Years in print and production, since 2004' },
      { value: '7', label: 'Companies across advertising, print, and production' },
      { value: '4', label: 'Countries: Saudi Arabia, UAE, Oman, and Pakistan' },
      { value: '5', label: 'Designers in the team I led at Print Works' },
      { value: '5', label: 'Projects or tasks managed at the same time' },
      { value: '4', label: 'Years leading the pre-production team' },
    ],
    industriesTitle: 'Industries',
    industries: ['Exhibitions', 'Conferences', 'Trade shows', 'Events', 'Brand activation'],
    educationTitle: 'Education',
    education: 'Bachelor of Commerce',
  },
  cta: {
    title: 'Have a project or role in mind?',
    text: 'Get in touch to talk about production, pre-production, or project coordination.',
    primary: 'Contact me',
    secondary: 'Read the FAQ',
  },
}

export const faqPage = {
  hero: {
    crumb: 'FAQ',
    eyebrow: 'Frequently asked questions',
    title: 'Questions, answered',
    emphasis: 'plainly.',
    intro: 'What I do, the tools and machinery I work with, and how to get in touch.',
    image: {
      ...responsiveAsset({ small: billboardSm, large: billboardLg, width: 1600, height: 566 }),
      alt: 'Outdoor advertising mock-up: a billboard, a wrapped bus, a bus shelter, a directory sign, and a bench',
    },
  },
  cta: {
    title: 'Didn’t find your answer?',
    text: 'Send me a message and ask directly.',
    primary: 'Contact me',
  },
}

export const contactPage = {
  hero: {
    crumb: 'Contact',
    eyebrow: 'Get in touch',
    title: 'Let’s talk about your next',
    emphasis: 'project.',
    intro: 'Open to conversations about production, pre-production, and project coordination roles and projects.',
  },
  form: {
    title: 'Send a message',
    text: 'Fill in the form and your email app opens with the message ready to send.',
    topics: ['Job opportunity', 'Freelance project', 'Something else'],
    submit: 'Open in email app',
  },
  details: {
    title: 'Contact details',
    logoAlt: 'Karim Creative Studio',
  },
}
