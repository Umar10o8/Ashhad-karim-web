import { Send } from 'lucide-react'
import contact from '../../config/contact.js'
import { contactPage } from '../../data/pages.js'
import Button from '../ui/Button.jsx'

const copy = contactPage.form

// There is no server, so the form composes an email in the visitor's own mail app (mailto:)
// rather than pretending to send anything itself.
function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `${data.get('topic')}: ${data.get('name')}`
    const body = `${data.get('message')}\n\n${data.get('name')}${data.get('company') ? `\n${data.get('company')}` : ''}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-title">
      <h2 id="contact-form-title">{copy.title}</h2>
      <p className="contact-form-text">{copy.text}</p>
      <div className="form-row">
        <label className="field">
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="field">
          <span>Company <small>(optional)</small></span>
          <input name="company" type="text" autoComplete="organization" />
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
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={6} required />
      </label>
      <Button type="submit" icon={Send}>{copy.submit}</Button>
    </form>
  )
}

export default ContactForm
