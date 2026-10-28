import { responsiveAsset } from '../utils/images.js'
import autoShowSm from '../assets/images/portfolio/exhibition-stand-auto-show-800.webp'
import autoShowLg from '../assets/images/portfolio/exhibition-stand-auto-show-1600.webp'
import rollUpSm from '../assets/images/portfolio/exhibition-roll-up-banners-800.webp'
import rollUpLg from '../assets/images/portfolio/exhibition-roll-up-banners-1600.webp'
import arenaSm from '../assets/images/portfolio/event-arena-stage-800.webp'
import arenaLg from '../assets/images/portfolio/event-arena-stage-1600.webp'
import screensSm from '../assets/images/portfolio/event-immersive-screens-800.webp'
import screensLg from '../assets/images/portfolio/event-immersive-screens-1600.webp'
import uvFlatbedSm from '../assets/images/portfolio/print-uv-flatbed-aluminium-800.webp'
import uvFlatbedLg from '../assets/images/portfolio/print-uv-flatbed-aluminium-1600.webp'
import rollPrintSm from '../assets/images/portfolio/print-wide-format-textile-800.webp'
import rollPrintLg from '../assets/images/portfolio/print-wide-format-textile-1600.webp'
import billboardsSm from '../assets/images/portfolio/branding-outdoor-billboards-800.webp'
import billboardsLg from '../assets/images/portfolio/branding-outdoor-billboards-1600.webp'
import laserSm from '../assets/images/portfolio/fabrication-laser-cutter-800.webp'
import laserLg from '../assets/images/portfolio/fabrication-laser-cutter-1600.webp'
import grindingSm from '../assets/images/portfolio/fabrication-metal-grinding-800.webp'
import grindingLg from '../assets/images/portfolio/fabrication-metal-grinding-1600.webp'
import credits from './imageCredits.js'

// Portfolio gallery data.
//
// Every entry below is a PLACEHOLDER: openly licensed industry photography (Wikimedia Commons,
// Unsplash), stored locally in src/assets/images/portfolio. None of it is Ashhad's own work.
// To add a verified project:
//   1. Export the photo at 800px and 1600px wide (WebP, ~75% quality) into src/assets/images/portfolio/.
//   2. Import both files above and set `image` with responsiveAsset({ small, large, width, height }).
//   3. Write an accurate `title` and `alt`, set `placeholder: false`, and remove `credit` (own photo).
// `category` must match one of the ids in `categories`.

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'exhibitions', label: 'Exhibition stands' },
  { id: 'events', label: 'Events' },
  { id: 'print', label: 'Printing' },
  { id: 'branding', label: 'Branding' },
  { id: 'fabrication', label: 'Fabrication' },
]

const projects = [
  {
    id: 'exhibition-stand-auto-show',
    category: 'exhibitions',
    title: 'Automotive exhibition stand',
    image: responsiveAsset({ small: autoShowSm, large: autoShowLg, width: 1600, height: 1067 }),
    alt: 'Placeholder: large white automotive exhibition stand with a branded fascia, overhead lighting truss, and visitors around display cars',
    credit: credits.autoShow,
    placeholder: true,
  },
  {
    id: 'exhibition-roll-up-banners',
    category: 'exhibitions',
    title: 'Roll-up banner display stand',
    image: responsiveAsset({ small: rollUpSm, large: rollUpLg, width: 1600, height: 1068 }),
    alt: 'Placeholder: compact exhibition stand with printed roll-up banners, a draped counter, and a presentation screen',
    credit: credits.rollUp,
    placeholder: true,
  },
  {
    id: 'event-arena-stage',
    category: 'events',
    title: 'Arena stage and screens',
    image: responsiveAsset({ small: arenaSm, large: arenaLg, width: 1600, height: 866 }),
    alt: 'Placeholder: large arena audience facing a lit stage with screens and lighting',
    credit: credits.unsplash,
    placeholder: true,
  },
  {
    id: 'event-immersive-screens',
    category: 'events',
    title: 'Immersive screen installation',
    image: responsiveAsset({ small: screensSm, large: screensLg, width: 1600, height: 1066 }),
    alt: 'Placeholder: event space wrapped in large-format screens around a central stage',
    credit: credits.unsplash,
    placeholder: true,
  },
  {
    id: 'print-uv-flatbed-aluminium',
    category: 'print',
    title: 'UV flatbed printing on aluminium',
    image: responsiveAsset({ small: uvFlatbedSm, large: uvFlatbedLg, width: 1600, height: 1067 }),
    alt: 'Placeholder: UV flatbed printer printing large black numbers onto a brushed aluminium sheet, with media rolls racked behind',
    credit: credits.uvFlatbed,
    placeholder: true,
  },
  {
    id: 'print-wide-format-textile',
    category: 'print',
    title: 'Wide-format roll printing',
    image: responsiveAsset({ small: rollPrintSm, large: rollPrintLg, width: 1600, height: 1087 }),
    alt: 'Placeholder: wide-format printer feeding a printed patterned roll through its take-up unit',
    credit: credits.rollPrint,
    placeholder: true,
  },
  {
    id: 'branding-outdoor-billboards',
    category: 'branding',
    title: 'Outdoor brand billboards',
    image: responsiveAsset({ small: billboardsSm, large: billboardsLg, width: 1600, height: 1067 }),
    alt: 'Placeholder: city street lined with large-format illuminated billboards',
    credit: credits.unsplash,
    placeholder: true,
  },
  {
    id: 'fabrication-laser-cutter',
    category: 'fabrication',
    title: 'CNC laser cutting',
    image: responsiveAsset({ small: laserSm, large: laserLg, width: 1600, height: 1200 }),
    alt: 'Placeholder: industrial CNC laser cutting machine on a fabrication shop floor',
    credit: credits.laser,
    placeholder: true,
  },
  {
    id: 'fabrication-metal-grinding',
    category: 'fabrication',
    title: 'Metal fabrication',
    image: responsiveAsset({ small: grindingSm, large: grindingLg, width: 1600, height: 1066 }),
    alt: 'Placeholder: fabricator grinding a metal frame with sparks flying',
    credit: credits.unsplash,
    placeholder: true,
  },
]

export default projects
