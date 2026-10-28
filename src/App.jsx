import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import BackToTop from './components/layout/BackToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import useReveal from './hooks/useReveal.js'
import { currentPage } from './utils/paths.js'

const pages = { home: HomePage, about: AboutPage, faq: FaqPage, contact: ContactPage }

// Shared shell for every page. App holds no state, so scrolling and menu changes never
// re-render the page sections.
function App() {
  useReveal()
  const Page = pages[currentPage] ?? HomePage

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Page />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
