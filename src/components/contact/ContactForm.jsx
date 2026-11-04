import { useState } from 'react'
import { Send } from 'lucide-react'
import contact from '../../config/contact.js'
import { contactPage } from '../../data/pages.js'
import Button from '../ui/Button.jsx'

const copy = contactPage.form
const endpoint = contact.formEndpoint

// Shown under a required field once it has been left empty.
const errors = {
  name: 'Please enter your name.',
  message: 'Please write a short message.',
}

// Opens the visitor's own mail app with the message filled in. Used when no form endpoint is
// configured.
function openMailApp(data) {
  const subject = `${data.get('topic')}: ${data.get('name')}`
  const body = `${data.get('message')}\n\n${data.get('name')}${data.get('company') ? `\n${data.get('company')}` : ''}`
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

// Sends the message to the Google Apps Script web app, which adds it to a Google Sheet.
// URL-encoded form data is a "simple" request, so the browser sends it without a CORS
// preflight (which Apps Script cannot answer).
async function sendToSheet(data) {
  data.set('page', window.location.href)
  const response = await fetch(endpoint, { method: 'POST', body: new URLSearchParams(data) })
  const result = await response.json()
  if (!result.ok) throw new Error(result.error || 'Submission failed')
}

// Labels float inside the fields; required fields show an inline message after the visitor
// leaves them empty or tries to send. `headingLevel` lets the form sit under a section heading
// on the home page.
function ContactForm({ headingLevel: Heading = 'h2' }) {
  const [invalid, setInvalid] = useState({})
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle')

  const check = (field) => setInvalid((state) => ({ ...state, [field.name]: !field.validity.valid }))

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return
    const form = event.currentTarget
    const fields = Object.keys(errors).map((name) => form.elements[name])
    fields.forEach(check)
    const firstInvalid = fields.find((field) => !field.validity.valid)
    if (firstInvalid) {
      firstInvalid.focus()
      return
    }

    const data = new FormData(form)
    if (!endpoint) {
      openMailApp(data)
      return
    }

    setStatus('sending')
    try {
      await sendToSheet(data)
      form.reset()
      setInvalid({})
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const fieldProps = (name) => ({
    name,
    placeholder: ' ',
    'aria-invalid': invalid[name] || undefined,
    'aria-describedby': invalid[name] ? `${name}-error` : undefined,
    onBlur: (event) => check(event.target),
    onInput: (event) => {
      if (invalid[name]) check(event.target)
      if (status === 'sent' || status === 'error') setStatus('idle')
    },
  })

  const errorFor = (name) => invalid[name] && <small className="field-error" id={`${name}-error`}>{errors[name]}</small>

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-title" aria-busy={status === 'sending'} noValidate>
      <Heading id="contact-form-title" className="contact-form-title">{copy.title}</Heading>
      <p className="contact-form-text">{endpoint ? copy.text : copy.mailtoText}</p>
      <div className="form-row">
        <label className={`field field-float${invalid.name ? ' is-invalid' : ''}`}>
          <input type="text" autoComplete="name" required maxLength={120} {...fieldProps('name')} />
          <span>Your name</span>
          {errorFor('name')}
        </label>
        <label className="field field-float">
          <input name="company" type="text" autoComplete="organization" placeholder=" " maxLength={160} />
          <span>Company <small>(optional)</small></span>
        </label>
      </div>
      {/* Spam trap: hidden from people, but bots fill it in. The script ignores any message where it is set. */}
      <div className="form-trap" aria-hidden="true">
        <label>Website <input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
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
        <textarea rows={6} required maxLength={5000} {...fieldProps('message')} />
        <span>Message</span>
        {errorFor('message')}
      </label>
      <Button type="submit" icon={Send} disabled={status === 'sending'}>
        {!endpoint ? copy.mailtoSubmit : status === 'sending' ? copy.sending : copy.submit}
      </Button>
      <p className={`form-status${status === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">
        {status === 'sent' && copy.sent}
        {status === 'error' && <>{copy.error} <a href={`mailto:${contact.email}`}>{contact.email}</a>.</>}
      </p>
    </form>
  )
}

export default ContactForm
