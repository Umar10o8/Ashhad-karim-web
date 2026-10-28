import { MessagesSquare, Users, GitMerge, HardHat } from 'lucide-react'

// Documented responsibilities from the supplied CV, grouped by stage of the workflow.
const responsibilities = [
  {
    icon: MessagesSquare,
    stage: 'Brief & approval',
    items: [
      'Receives and clarifies design briefs from clients and client servicing executives.',
      'Follows up by email, WhatsApp, and telephone until designs or campaigns are approved.',
    ],
  },
  {
    icon: Users,
    stage: 'Team & workload',
    items: [
      'Leads a five-member design team and delegates work.',
      'Manages up to five projects or tasks at once under strict deadlines.',
    ],
  },
  {
    icon: GitMerge,
    stage: 'Production handoff',
    items: [
      'Coordinates approved designs with production, delivery, installation, and other departments.',
      'Helps resolve production difficulties and makes sure project requirements are met.',
    ],
  },
  {
    icon: HardHat,
    stage: 'On site',
    items: [
      'Visits sites during installation and stays involved through to completion.',
    ],
  },
]

export default responsibilities
