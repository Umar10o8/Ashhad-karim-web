import { url } from '../../utils/paths.js'

// Text-based personal wordmark (no logo artwork) with the job title beneath. Links to the top
// of the home page.
function Wordmark({ onClick }) {
  return (
    <a className="wordmark" href={url()} onClick={onClick}>
      <span className="wordmark-name">Ashhad Karim<span aria-hidden="true">.</span></span>
      <span className="wordmark-title">Senior Graphic Designer · Print Production Specialist</span>
    </a>
  )
}

export default Wordmark
