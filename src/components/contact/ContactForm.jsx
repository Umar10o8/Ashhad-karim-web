import { useState } from 'react'
import { Send } from 'lucide-react'
import contact from '../../config/contact.js'
import { contactPage } from '../../data/pages.js'
import Button from '../ui/Button.jsx'

const copy = contactPage.form

// Shown under a required field once it has been left empty.
const errors = {
  name: 'Please enter your name.',
  message: 'Please write a short message.',
}

// There is no server, so the form composes an email in the visitor's own mail app (mailto:)
// rather than pretending to send anything itself. Labels float inside the fields; required
// fields show an inline message after the visitor leaves them empty or tries to send.
// `headingLevel` lets the form sit under a section heading on the home page.
function ContactForm({ headingLevel: Heading = 'h2' }) {
  const [invalid, setInvalid] = useState({})

  const check = (field) => setInvalid((state) => ({ ...state, [field.name]: !field.validity.valid }))

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const fields = Object.keys(errors).map((name) => form.elements[name])
    fields.forEach(check)
    const firstInvalid = fields.find((field) => !field.validity.valid)
    if (firstInvalid) {
      firstInvalid.focus()
      return
    }
    const data = new FormData(form)
    const subject = `${data.get('topic')}: ${data.get('name')}`
    const body = `${data.get('message')}\n\n${data.get('name')}${data.get('company') ? `\n${data.get('company')}` : ''}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const fieldProps = (name) => ({
    name,
    placeholder: ' ',
    'aria-invalid': invalid[name] || undefined,
    'aria-describedby': invalid[name] ? `${name}-error` : undefined,
    onBlur: (event) => check(event.target),
    onInput: (event) => { if (invalid[name]) check(event.target) },
  })

  const errorFor = (name) => invalid[name] && <small className="field-error" id={`${name}-error`}>{errors[name]}</small>

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-title" noValidate>
      <Heading id="contact-form-title" className="contact-form-title">{copy.title}</Heading>
      <p className="contact-form-text">{copy.text}</p>
      <div className="form-row">
        <label className={`field field-float${invalid.name ? ' is-invalid' : ''}`}>
          <input type="text" autoComplete="name" required {...fieldProps('name')} />
          <span>Your name</span>
          {errorFor('name')}
        </label>
        <label className="field field-float">
          <input name="company" type="text" autoComplete="organization" placeholder=" " />
          <span>Company <small>(optional)</small></span>
        </label>
      </div>
      <fieldset className="field topic-field">
        <legend>What is it about?</legend>
        <div className="topic-options">
          {copy.topics.map((topic, index) => (
            <label key={topic} className="topic-option">
              <input type="radio" name="topic" value={topic} defaultChecked={index === 0} />
              <span>{topic}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className={`field field-float${invalid.message ? ' is-invalid' : ''}`}>
        <textarea rows={6} required {...fieldProps('message')} />
        <span>Message</span>
        {errorFor('message')}
      </label>
      <Button type="submit" icon={Send}>{copy.submit}</Button>
    </form>
  )
}

export default ContactForm
