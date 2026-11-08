// Site URLs, prefixed with Vite's base path so the site still works if it is deployed under a
// sub-folder.
export const url = (path = '') => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
