// Lifts the loading screen from index.html once the first screen is ready: the hero photo has
// loaded and the web fonts are in, and it has been visible long enough for its intro to play.
// It never waits longer than MAX_MS, so a slow photo cannot hold the site hostage.

const MIN_MS = 1300
const MAX_MS = 4000
const CURTAIN_MS = 900

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// The hero <img> only exists once React has rendered, so look for it frame by frame.
function heroImageReady() {
  return new Promise((resolve) => {
    const check = () => {
      const img = document.querySelector('.hero-media img')
      if (!img) return requestAnimationFrame(check)
      if (img.complete) return resolve()
      img.addEventListener('load', resolve, { once: true })
      img.addEventListener('error', resolve, { once: true })
    }
    check()
  })
}

export function runPreloader() {
  const root = document.documentElement
  const loader = document.getElementById('preloader')
  if (!loader) {
    root.classList.remove('is-loading')
    return
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const ready = Promise.all([heroImageReady(), document.fonts?.ready ?? Promise.resolve(), wait(reduced ? 0 : MIN_MS)])

  Promise.race([ready, wait(MAX_MS)]).then(async () => {
    loader.classList.add('is-complete')
    await wait(reduced ? 0 : 350) // let the bar finish filling
    loader.classList.add('is-done')
    root.classList.remove('is-loading') // starts the hero's entrance animations
    await wait(reduced ? 300 : CURTAIN_MS)
    loader.remove()
  })
}
