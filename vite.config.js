import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'

// Social previews and search engines need absolute URLs. Once the live domain is known, set
// SITE_URL (e.g. SITE_URL=https://example.com in .env.production) and the build adds a canonical
// link and og:url for each page, and makes og:image / twitter:image absolute. Without it, nothing
// is added.
function siteUrlTags(siteUrl) {
  const base = siteUrl?.replace(/\/+$/, '')
  return {
    name: 'site-url-tags',
    transformIndexHtml(html, { path }) {
      if (!base) return html
      const pageUrl = `${base}${path.replace(/index\.html$/, '')}`
      return {
        html: html.replaceAll('content="/og-image.jpg"', `content="${base}/og-image.jpg"`),
        tags: [
          { tag: 'link', attrs: { rel: 'canonical', href: pageUrl }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: pageUrl }, injectTo: 'head' },
        ],
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), siteUrlTags(env.SITE_URL)],
    // One HTML file per page, so /about/, /faq/ and /contact/ work on any static host.
    build: {
      rollupOptions: {
        input: {
          home: resolve(import.meta.dirname, 'index.html'),
          about: resolve(import.meta.dirname, 'about/index.html'),
          faq: resolve(import.meta.dirname, 'faq/index.html'),
          contact: resolve(import.meta.dirname, 'contact/index.html'),
        },
      },
    },
  }
})
