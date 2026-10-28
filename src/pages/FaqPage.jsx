import { Plus } from 'lucide-react'
import faq from '../data/faq.js'
import { faqPage } from '../data/pages.js'
import PageHero from '../components/layout/PageHero.jsx'
import CtaBand from '../components/layout/CtaBand.jsx'
import { url } from '../utils/paths.js'

const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const { hero, cta } = faqPage

function FaqPage() {
  return (
    <>
      <PageHero id="faq-page" {...hero} />
      <section className="section faq-section" aria-label="Questions and answers">
        <div className="page-wrap faq-layout">
          <nav className="faq-toc" aria-label="FAQ topics">
            <p className="section-label"><span>{String(faq.length).padStart(2, '0')}</span><span>Topics</span></p>
            <ul>
              {faq.map(({ group, items }) => (
                <li key={group}><a href={`#${slug(group)}`}>{group}<span>{items.length}</span></a></li>
              ))}
            </ul>
          </nav>
          <div className="faq-groups">
            {faq.map(({ group, items }) => (
              <div className="faq-group" id={slug(group)} key={group}>
                <h2>{group}</h2>
                {items.map(({ q, a }, index) => (
                  <details className="faq-item" key={q} open={index === 0} data-reveal>
                    <summary>
                      <span>{q}</span>
                      <span className="faq-icon" aria-hidden="true"><Plus size={18} /></span>
                    </summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={cta.title} text={cta.text} primary={{ label: cta.primary, href: url('contact/') }} />
    </>
  )
}

export default FaqPage
