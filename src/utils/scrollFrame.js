// One shared scroll/resize loop for every scroll-linked effect. Each subscriber gives a `read`
// (layout reads only, e.g. getBoundingClientRect) and a `write` (style writes only). All reads
// run before any write in the same frame, so the browser lays the page out once per frame
// instead of once per effect.
const subscribers = new Set()
let frame = 0

function run() {
  frame = 0
  const pending = []
  subscribers.forEach((subscriber) => { if (subscriber.active !== false) pending.push([subscriber, subscriber.read()]) })
  pending.forEach(([subscriber, value]) => subscriber.write(value))
}

export function requestScrollFrame() {
  if (!frame) frame = requestAnimationFrame(run)
}

export function subscribeScroll(subscriber) {
  if (!subscribers.size) {
    window.addEventListener('scroll', requestScrollFrame, { passive: true })
    window.addEventListener('resize', requestScrollFrame)
  }
  subscribers.add(subscriber)
  requestScrollFrame()
  return () => {
    subscribers.delete(subscriber)
    if (!subscribers.size) {
      window.removeEventListener('scroll', requestScrollFrame)
      window.removeEventListener('resize', requestScrollFrame)
      cancelAnimationFrame(frame)
      frame = 0
    }
  }
}

// Marks the subscriber inactive while `element` is off screen, so off-screen effects cost nothing.
export function whileVisible(element, subscriber, margin = '20% 0px') {
  if (!('IntersectionObserver' in window)) return () => {}
  const observer = new IntersectionObserver(([entry]) => {
    subscriber.active = entry.isIntersecting
    if (entry.isIntersecting) requestScrollFrame()
  }, { rootMargin: margin })
  observer.observe(element)
  return () => observer.disconnect()
}
