// Site URLs, prefixed with Vite's base path so the site still works if it is deployed under a
// sub-folder. Each page is its own HTML file (see vite.config.js), so links are plain hrefs.
export const url = (path = '') => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

// Which page is rendering, from <body data-page="…"> in that page's HTML file.
export const currentPage = document.body.dataset.page ?? 'home'
