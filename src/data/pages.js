// Copy for the inner pages (About, FAQ, Contact). Source: supplied CV. Do not add unverified claims.
import { Briefcase, Building2, Globe2, Users, Layers, Award } from 'lucide-react'

export const aboutPage = {
  hero: {
    crumb: 'About',
    eyebrow: 'About Ashhad',
    title: 'From the pre-press studio to the',
    emphasis: 'production floor.',
    intro: 'Two decades of preparing artwork for print, designing exhibition stands, and coordinating the teams that take a project from approved design to installation.',
  },
  glance: {
    number: '02',
    label: 'At a glance',
    title: 'The career in',
    emphasis: 'numbers.',
    intro: 'Figures taken from the CV timeline and role description.',
    // Figures from the CV: first role 2004; six employers in three countries; a five-member team;
    // up to five projects at once; four years leading the pre-production team.
    stats: [
      { icon: Briefcase, value: '20+', label: 'Years in pre-press and production, since 2004' },
      { icon: Building2, value: '6', label: 'Companies in advertising, print, and fabrication' },
      { icon: Globe2, value: '3', label: 'Countries: UAE, Oman, and Pakistan' },
      { icon: Users, value: '5', label: 'Members in the design team he leads' },
      { icon: Layers, value: '5', label: 'Projects or tasks managed at the same time' },
      { icon: Award, value: '4', label: 'Years leading the pre-production team' },
    ],
    industriesTitle: 'Industries',
    industries: ['Exhibitions', 'Conferences', 'Trade shows', 'Events', 'Brand activation'],
    educationTitle: 'Education',
    education: 'Bachelor of Commerce',
  },
  cta: {
    title: 'Have a project or role in mind?',
    text: 'Get in touch to talk about production, pre-production, or project coordination.',
    primary: 'Contact Ashhad',
    secondary: 'Read the FAQ',
  },
}

export const faqPage = {
  hero: {
    crumb: 'FAQ',
    eyebrow: 'Frequently asked questions',
    title: 'Questions, answered',
    emphasis: 'plainly.',
    intro: 'What Ashhad does, the tools and machinery he works with, and how to get in touch.',
  },
  cta: {
    title: 'Didn’t find your answer?',
    text: 'Send a message and ask directly.',
    primary: 'Contact Ashhad',
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
    topics: ['Job opportunity', 'Project enquiry', 'Exhibition or event', 'Something else'],
    submit: 'Open in email app',
  },
  details: {
    title: 'Contact details',
    helpTitle: 'Areas to talk about',
    help: [
      'Pre-production and artwork preparation',
      'Exhibition stand design coordination',
      'Large-format print production',
      'Fabrication and installation coordination',
    ],
  },
}
