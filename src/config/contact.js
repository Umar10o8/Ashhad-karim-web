// Central contact configuration. Every section that shows contact details reads from here.
//
// Confirmed for publishing: the CV / LinkedIn details. The THE.TEAM signature details
// (ASHHAD.KARIM@THE.TEAM, +966 (50) 6334858) are not published. Do not show both sets together.
// While `confirmed` is false the site shows a visible "placeholder" tag beside the details.

const contact = {
  confirmed: true,
  email: 'karimashhad@yahoo.com',
  phone: '+971 52 260 4376',
  phoneHref: '+971522604376', // digits only, with country code, for the tel: link
  emailSubject: 'Enquiry via your portfolio',
}

export const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`
export const telHref = `tel:${contact.phoneHref}`

export default contact
