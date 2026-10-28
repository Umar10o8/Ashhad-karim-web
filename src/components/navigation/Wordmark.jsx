import { url } from '../../utils/paths.js'

// Text-based personal wordmark (no logo artwork). Links to the top of the home page.
function Wordmark({ onClick }) {
  return (
    <a className="wordmark" href={url()} onClick={onClick}>
      Ashhad Karim<span aria-hidden="true">.</span>
    </a>
  )
}

export default Wordmark
