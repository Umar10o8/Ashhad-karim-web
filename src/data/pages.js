// Shared copy used by home-page sections. Source: supplied CV. Do not add unverified claims.

export const achievementStats = [
  { value: '20+', label: 'Years in print & production' },
  { value: '7', label: 'Companies across 4 countries' },
  { value: '30', label: 'Team members I lead' },
  { value: '5', label: 'Projects or tasks managed at the same time' },
]

export const contactForm = {
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
}
