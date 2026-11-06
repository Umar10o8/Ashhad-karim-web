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
    // Figures supplied by Ashhad: first role 2004; seven employers in four countries; a team of
    // 30; up to five projects at once. The first stat is shown largest.
    stats: [
      { value: '20+', label: 'Years in print & production' },
      { value: '7', label: 'Companies across 4 countries' },
      { value: '30', label: 'Team members I lead' },
      { value: '5', label: 'Projects or tasks managed at the same time' },
    ],
    industriesTitle: 'Industries',
    industries: ['Exhibitions', 'Conferences', 'Trade shows', 'Events', 'Brand activation'],
    educationTitle: 'Education',
    education: 'Bachelor of Commerce',
  },
  cta: {
    title: 'Have a project or role in mind?',
    text: 'Get in touch to talk about production, pre-production, or project coordination.',
    primary: 'Let’s Talk',
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
    primary: 'Let’s Talk',
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
    text: 'Fill in the form and I’ll get back to you as soon as I can.',
    topics: ['Job opportunity', 'Freelance project', 'Something else'],
    submit: 'Send message',
    sending: 'Sending…',
    sent: 'Thank you, your message has been sent. I’ll be in touch soon.',
    error: 'Sorry, your message could not be sent. Please try again, or email me directly at',
    // Used while no form endpoint is set (see src/config/contact.js).
    mailtoText: 'Fill in the form and your email app opens with the message ready to send.',
    mailtoSubmit: 'Open in email app',
  },
  details: {
    title: 'Contact details',
    logoAlt: 'Karim Creative Studio',
  },
}
