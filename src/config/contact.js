// Central contact configuration. Every section that shows contact details reads from here.
//
// Details supplied by Ashhad for publishing: the Karim Creative Studio email and two phone
// numbers (Saudi Arabia and Pakistan). While `confirmed` is false the site shows a visible
// "placeholder" tag beside the details.

const contact = {
  confirmed: true,
  email: 'karimcreativestudio@gmail.com',
  // `href` is digits only, with country code, for the tel: link; `region` is shown after the number.
  phones: [
    { value: '+966 50 6334858', region: 'KSA', href: '+966506334858' },
    { value: '+92 301 3329228', region: 'PAK', href: '+923013329228' },
  ],
  linkedin: 'https://www.linkedin.com/in/ashhad-karim-aa41a771/',
  emailSubject: 'Enquiry via your portfolio',
  // Google Apps Script web app URL that saves form messages to a Google Sheet (see
  // google-apps-script/README.md). Leave '' to keep the old behaviour: the form opens the
  // visitor's email app instead.
  formEndpoint: 'https://script.google.com/macros/s/AKfycbyI3m4X0rWwEI8yifMmwIleB5rIDCsq9hexTNrIrAnPxXrFCseGWV_wsBwNRN5XPWd5/exec',
}

export const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`
export const phoneLinks = contact.phones.map(({ value, region, href }) => ({ value: `${value} - ${region}`, href: `tel:${href}` }))

export default contact
