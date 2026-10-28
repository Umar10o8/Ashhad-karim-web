// Central contact configuration. Every section that shows contact details reads from here.
//
// ⚠ NOT YET CONFIRMED. The supplied materials contain two different sets of details that
// may belong to different professional contexts. Ashhad must approve which (if any) to
// publish before the site goes live. Do not publish both sets together.
//
//   CV / LinkedIn:           karimashhad@yahoo.com      +971 52 2604376
//   Professional signature:  ASHHAD.KARIM@THE.TEAM      +966 (50) 6334858
//                            (Production Manager, Production — THE.TEAM)
//
// Once approved: set `email`, `phone` and `phoneHref` below, then set `confirmed: true`.
// While `confirmed` is false the site shows a visible "placeholder" tag beside the details.

const contact = {
  confirmed: false,
  email: 'name@example.com',
  phone: '+000 00 000 0000',
  phoneHref: '+000000000000', // digits only, with country code, for the tel: link
  emailSubject: 'Enquiry via your portfolio',
}

export const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`
export const telHref = `tel:${contact.phoneHref}`

export default contact
