import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import BackToTop from './components/layout/BackToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import CursorFollower from './components/home/CursorFollower.jsx'
import useReveal from './hooks/useReveal.js'
import useSmoothScroll from './hooks/useSmoothScroll.js'

// Site shell: a single page with in-page section links. App holds no state, so scrolling and menu changes never
// re-render the page sections.
function App() {
  useReveal()
  useSmoothScroll()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <HomePage />
      </main>
      <Footer />
      <BackToTop />
      <CursorFollower />
    </>
  )
}

export default App
