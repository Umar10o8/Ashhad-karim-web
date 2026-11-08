import { url } from '../../utils/paths.js'

export const wordmarkTitle = 'Senior Graphic Designer · Print Production Specialist'

// Text wordmark in the header: name with the job title beneath. Links to the top of the home page.
function Wordmark({ onClick }) {
  return (
    <a className="wordmark" href={url()} onClick={onClick}>
      <span className="wordmark-name">Ashhad Karim<span aria-hidden="true">.</span></span>
      <span className="wordmark-title">{wordmarkTitle}</span>
    </a>
  )
}

export default Wordmark
