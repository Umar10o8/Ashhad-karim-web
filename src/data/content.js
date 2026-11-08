// Site copy. Sections render this text; they do not contain copy of their own.
// Source: supplied CV and LinkedIn About text. Do not add unverified claims.
import { responsiveAsset } from '../utils/images.js'
import heroSm from '../assets/images/portrait/hero-horizontal-800.webp'
import heroLg from '../assets/images/portrait/hero-horizontal-1418.webp'
import heroSmAvif from '../assets/images/portrait/hero-horizontal-800.avif'
import heroLgAvif from '../assets/images/portrait/hero-horizontal-1418.avif'
import aboutSm from '../assets/images/portrait/about-office-800.webp'
import aboutLg from '../assets/images/portrait/about-office-1600.webp'
import nightSm from '../assets/images/portrait/riyadh-night-street-1000.webp'
import nightLg from '../assets/images/portrait/riyadh-night-street-2000.webp'
import studioLogo from '../assets/images/karim-creative-studio.svg'
import psLogo from '../assets/images/software/photoshop.svg'
import aiLogo from '../assets/images/software/illustrator.svg'
import idLogo from '../assets/images/software/indesign.svg'
import aeLogo from '../assets/images/software/after-effects.svg'
import maxLogo from '../assets/images/software/3ds-max.svg'
import cadLogo from '../assets/images/software/autocad.svg'
import suLogo from '../assets/images/software/sketchup.svg'
import { url } from '../utils/paths.js'

export const hero = {
  eyebrow: 'Out of Home Advertising',
  title: 'Bringing Creative Concepts to',
  emphasis: 'Production.',
  intro: 'I’m Ashhad Karim, a production and pre-production professional experienced in exhibition stands, large-format printing, branding, and fabrication. I coordinate creative and production teams to help turn concepts into high-quality physical outcomes.',
  name: 'Ashhad Karim',
  focus: 'Production, Pre-Production & Project Coordination',
  focusAreas: ['Exhibition stands', 'Large-format printing', 'Branding', 'Fabrication'],
  // Rotating headlines. "20+" comes from the CV timeline in experience.js (first role 2004).
  // `software` shows the program badges under that slide; `countries` lists the countries.
  slides: [
    { stat: '20+', title: 'Years in print &', emphasis: 'production.', software: true },
    { stat: 'Bringing', title: 'creative concepts to', emphasis: 'final execution.' },
    {
      stat: '7',
      title: 'Companies across',
      emphasis: 'four countries.',
      countries: ['Pakistan', 'Oman', 'United Arab Emirates', 'Kingdom of Saudi Arabia'],
    },
  ],
  // Each program's app icon (`logo`). `mono` and the colours remain for tints and fallbacks.
  software: [
    { mono: 'Ps', name: 'Adobe Photoshop', color: '#31A8FF', bg: '#001E36', logo: psLogo },
    { mono: 'Ai', name: 'Adobe Illustrator', color: '#FF9A00', bg: '#330000', logo: aiLogo },
    { mono: 'Id', name: 'Adobe InDesign', color: '#FF3366', bg: '#49021F', logo: idLogo },
    { mono: 'Ae', name: 'Adobe After Effects', color: '#9999FF', bg: '#00005B', logo: aeLogo },
    { mono: '3ds', name: '3ds Max', color: '#FFFFFF', bg: '#1F9DB5', logo: maxLogo },
    { mono: 'CAD', name: 'AutoCAD', color: '#FFFFFF', bg: '#E51050', logo: cadLogo },
    { mono: 'Su', name: 'SketchUp', color: '#FFFFFF', bg: '#005F9E', logo: suLogo },
  ],
  cta: { label: 'Let’s Talk', href: url('#contact') },
  // Supplied photo of Ashhad. Set `placeholder: true` (and a `credit`) only for stock images.
  image: {
    ...responsiveAsset({ small: heroSm, large: heroLg, width: 1418, height: 791 }),
    avifSrcSet: `${heroSmAvif} 800w, ${heroLgAvif} 1418w`,
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
  strengths: [
    'Production coordination',
    'Pre-production workflow management',
    'Design-to-production handoff',
    'Cross-functional collaboration',
    'Quality control',
    'Deadline management',
  ],
}

// Home-page extras. The About text below was supplied by Ashhad for the home page.
export const home = {
  ticker: ['Exhibitions', 'Conferences', 'Trade shows', 'Events', 'Brand activations', 'Vehicle wrap', 'Building wrap', 'Creative billboards', 'Fabrication'],
  about: {
    label: 'About',
    title: 'Meet',
    emphasis: 'Ashhad Karim.',
    paragraphs: [
      'Highly experienced Senior Graphic Designer with over 20 years of professional experience in the graphic design, advertising, printing, and production industries.',
      'My diverse industry experience allows me to work across multiple creative disciplines, manage several projects simultaneously, troubleshoot production challenges, and ensure a smooth workflow from initial concept to final execution.',
      'I combine creativity, technical expertise, and practical production knowledge to deliver professional results with speed, accuracy, and attention to detail. My goal is simple to turn ideas into impactful designs while delivering quality work efficiently and on time.',
    ],
    signature: 'Ashhad Karim',
  },
  // Home-page headings; the About page keeps the fuller versions in `sections`.
  skillsHeading: { title: 'Software', emphasis: 'skills.', intro: undefined },
  contactLink: { label: 'Let’s Talk', href: url('#contact') },
}

export const sections = {
  experience: {
    number: '02',
    label: 'Experience',
    title: 'A career built in',
    emphasis: 'Out of Home Advertising',
  },
  skills: {
    number: '03',
    label: 'Skills',
    title: 'Software and',
    emphasis: 'technical skills.',
    intro: 'Design software used for artwork, layout, and 3D, alongside the print, cutting, and fabrication equipment listed in my CV.',
  },
  portfolio: {
    number: '07',
    label: 'Portfolio',
    title: 'Selected',
    emphasis: 'work.',
    intro: 'A selection of exhibition stands, print, branding, and fabrication work.',
    placeholderIntro: 'The images below are generic industry photographs used as placeholders. They are not my own projects and will be replaced with verified project photography.',
  },
  achievements: {
    number: '04',
    label: 'Achievements',
    title: 'Two decades,',
    emphasis: 'in numbers.',
    listTitle: 'What I deliver',
  },
  testimonials: {
    number: '05',
    label: 'Testimonials',
    title: 'In their',
    emphasis: 'words.',
  },
  contact: {
    number: '06',
    label: 'Contact',
    title: 'Let’s discuss your next',
    emphasis: 'opportunity.',
    intro: 'Open to conversations about production, pre-production, and project coordination roles and projects.',
    cta: 'Let’s Talk',
    logo: { src: studioLogo, width: 602, height: 216, alt: 'Karim Creative Studio' },
    // Decorative background photo behind the home contact section
    background: responsiveAsset({ small: nightSm, large: nightLg, width: 2000, height: 1116, smallWidth: 1000 }),
  },
}
