import { PenTool, Box, Printer } from 'lucide-react'

// Source: supplied CV. Listed without proficiency ratings.
// The equipment group lists machinery named in the CV; it does not claim current use of every model.

const skills = [
  {
    group: 'Adobe Creative Suite',
    icon: PenTool,
    items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe After Effects'],
  },
  {
    group: 'Design and 3D',
    icon: Box,
    items: ['AutoCAD', 'SketchUp', '3ds Max'],
  },
  {
    group: 'Production equipment and machinery',
    icon: Printer,
    wide: true,
    note: 'Equipment listed in the CV across print, cutting, and fabrication roles.',
    items: [
      'UV printing equipment',
      'HP 5500',
      'HP Z6100',
      'HP Latex L26500',
      'HP DesignJet L6500',
      'HP Scitex KL 1500',
      'HP Flatbed',
      'Vutek 2360, 3300, and 3360',
      'Roland RS-640',
      'Challenger FY-3208H (Seiko)',
      'DGI Space Jet',
      'Zünd',
      'Roland Plotter Cut',
      'CNC Router',
      'CNC Laser Cut',
    ],
  },
]

export default skills
