// Site copy. Sections render this text; they do not contain copy of their own.
// Source: supplied CV and LinkedIn About text. Do not add unverified claims.
import { responsiveAsset } from '../utils/images.js'
import heroSm from '../assets/images/portrait/hero-riyadh-window-800.webp'
import heroLg from '../assets/images/portrait/hero-riyadh-window-1536.webp'
import aboutSm from '../assets/images/portrait/about-office-800.webp'
import aboutLg from '../assets/images/portrait/about-office-1600.webp'
import thinkingSm from '../assets/images/portrait/portrait-thinking-600.webp'
import thinkingLg from '../assets/images/portrait/portrait-thinking-848.webp'
import nightSm from '../assets/images/portrait/riyadh-night-street-1000.webp'
import nightLg from '../assets/images/portrait/riyadh-night-street-2000.webp'
import avatar from '../assets/images/portrait/contact-avatar-480.webp'
import { localImage } from '../utils/images.js'
import { url } from '../utils/paths.js'

export const hero = {
  eyebrow: 'Production · Pre-Production · Project Coordination',
  title: 'Bringing Creative Concepts to',
  emphasis: 'Production.',
  intro: 'I’m Ashhad Karim, a production and pre-production professional experienced in exhibition stands, large-format printing, branding, and fabrication. I coordinate creative and production teams to help turn concepts into high-quality physical outcomes.',
  name: 'Ashhad Karim',
  focus: 'Production, Pre-Production & Project Coordination',
  focusAreas: ['Exhibition stands', 'Large-format printing', 'Branding', 'Fabrication'],
  // Rotating headlines. Figures come from the CV timeline in experience.js: first role 2004,
  // six employers across the UAE, Oman, and Pakistan.
  slides: [
    { stat: '20+', title: 'Years in print &', emphasis: 'production.' },
    { stat: '6', title: 'Companies across', emphasis: 'three countries.' },
    { title: 'Bringing creative concepts to', emphasis: 'production.' },
  ],
  scrollCue: { label: 'Scroll down', href: '#about' },
  primaryCta: { label: 'Get in Touch', href: url('contact/') },
  secondaryCta: { label: 'Explore My Experience', href: '#experience' },
  // Supplied portrait of Ashhad. Set `placeholder: true` (and a `credit`) only for stock images.
  image: {
    ...responsiveAsset({ small: heroSm, large: heroLg, width: 1536, height: 2752 }),
    alt: 'Ashhad Karim standing at an office window overlooking the Riyadh skyline at night',
  },
}

export const about = {
  number: '01',
  label: 'About',
  title: 'From concept development to',
  emphasis: 'final execution.',
  lead: 'Experienced Pre-Production and Design Professional with a strong background in large-format printing, exhibition stands, branding, and fabrication.',
  paragraphs: [
    'Skilled in managing projects from concept development to final execution, ensuring quality, efficiency, and client satisfaction.',
    'Adept at coordinating with client servicing, production, fabrication, and installation teams to deliver successful outcomes, with a passion for creative problem-solving and continuous professional growth.',
  ],
  portrait: {
    ...responsiveAsset({ small: aboutSm, large: aboutLg, width: 1600, height: 893 }),
    alt: 'Ashhad Karim smiling at his desk in a bright office',
  },
  // Close portrait used on the About page, so it does not repeat the home-page photo.
  portraitAlt: {
    ...responsiveAsset({ small: thinkingSm, large: thinkingLg, width: 848, height: 1264, smallWidth: 600 }),
    alt: 'Ashhad Karim, chin resting on his hand, in a light green shirt',
  },
  tools: ['Adobe Creative Suite', 'AutoCAD', 'SketchUp', '3ds Max'],
  strengths: [
    'Production coordination',
    'Pre-production workflow management',
    'Design-to-production handoff',
    'Cross-functional collaboration',
    'Quality control',
    'Deadline management',
  ],
}

// Home-page extras. Every phrase is taken from the CV-sourced copy above and in pages.js.
export const home = {
  marquee: ['Exhibition stands', 'Large-format printing', 'Branding', 'Fabrication', 'Pre-production', 'Installation'],
  marqueeIndustries: ['Exhibitions', 'Conferences', 'Trade shows', 'Events', 'Brand activation'],
  statement: 'I manage projects from concept development to final execution, coordinating client servicing, production, fabrication, and installation teams to deliver quality, efficiency, and client satisfaction.',
  aboutLink: { label: 'More about me', href: url('about/') },
  experienceHint: 'Keep scrolling',
  contactLink: { label: 'Get in touch', href: url('contact/') },
}

export const sections = {
  expertise: {
    number: '02',
    label: 'Expertise',
    title: 'Areas of',
    emphasis: 'professional expertise.',
    intro: 'The parts of the production workflow I work across, from preparing files before print to following projects through installation.',
  },
  experience: {
    number: '03',
    label: 'Experience',
    title: 'A career built in',
    emphasis: 'pre‑press and production.',
    intro: 'A career that started in the pre-press studio and grew into exhibition stand design, production coordination, and supervising pre-production.',
  },
  responsibilities: {
    number: '04',
    label: 'Responsibilities',
    title: 'From brief to site,',
    emphasis: 'start to finish.',
    intro: 'What the role involves day to day, following a project through each stage of the workflow.',
  },
  skills: {
    number: '05',
    label: 'Skills',
    title: 'Software and',
    emphasis: 'technical skills.',
    intro: 'Design software used for artwork, layout, and 3D, alongside the print, cutting, and fabrication equipment listed in my CV.',
  },
  portfolio: {
    number: '06',
    label: 'Portfolio',
    title: 'Selected',
    emphasis: 'work.',
    intro: 'A selection of exhibition stands, print, branding, and fabrication work.',
    placeholderIntro: 'The images below are generic industry photographs used as placeholders. They are not my own projects and will be replaced with verified project photography.',
  },
  achievements: {
    number: '07',
    label: 'Achievements',
    title: 'Professional',
    emphasis: 'achievements.',
  },
  testimonials: {
    number: '08',
    label: 'Testimonials',
    title: 'What people say about',
    emphasis: 'working together.',
    intro: 'Words from clients, managers, and colleagues across design, production, and installation.',
  },
  contact: {
    number: '09',
    label: 'Contact',
    title: 'Let’s discuss your next',
    emphasis: 'opportunity.',
    intro: 'Open to conversations about production, pre-production, and project coordination roles and projects.',
    cta: 'Send an Email',
    avatar: { ...localImage(avatar, 480, 480), alt: '' },
    // Decorative background photo behind the home contact section
    background: responsiveAsset({ small: nightSm, large: nightLg, width: 2000, height: 1116, smallWidth: 1000 }),
  },
}

export const footer = {
  descriptor: 'Production, Pre-Production & Project Coordination',
}
