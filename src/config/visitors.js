// Site visitor counter, backed by Abacus (https://abacus.jasoncameron.dev), a free hosted
// counter API with no sign-up. Each browser session counts once: the first page view "hits"
// the counter, later views in the same session only read it.
// Change `namespace`/`key` to start a fresh count; set `enabled: false` to hide the counter.
// Local dev, and any build made with VITE_VISITOR_KEY set, count against a separate key so
// testing never inflates the live figure.

const visitors = {
  enabled: true,
  api: 'https://abacus.jasoncameron.dev',
  namespace: 'ashhad-karim-portfolio',
  key: import.meta.env.VITE_VISITOR_KEY ?? (import.meta.env.DEV ? 'visits-dev' : 'visits'),
}

export default visitors
