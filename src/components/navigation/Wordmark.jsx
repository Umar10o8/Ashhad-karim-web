import { url } from '../../utils/paths.js'
import studioLogo from '../../assets/images/karim-creative-studio.svg'

export const wordmarkTitle = 'Senior Graphic Designer · Print Production Specialist'

// Studio logo in the header. Links to the top of the home page.
function Wordmark({ onClick }) {
  return (
    <a className="wordmark" href={url()} onClick={onClick} aria-label="Karim Creative Studio, home">
      <img className="wordmark-logo" src={studioLogo} alt="" width="602" height="216" decoding="async" />
    </a>
  )
}

export default Wordmark
