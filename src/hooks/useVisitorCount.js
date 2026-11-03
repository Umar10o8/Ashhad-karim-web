import { useEffect, useState } from 'react'
import visitors from '../config/visitors.js'

const sessionFlag = 'visitor-counted'

// Reads the shared visitor count, adding one the first time it runs in a browser session.
// Returns null until the count arrives, and stays null if the counter service is unreachable,
// so callers can simply render nothing.
function useVisitorCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    if (!visitors.enabled) return
    let counted = false
    try { counted = sessionStorage.getItem(sessionFlag) === '1' } catch { /* storage blocked */ }
    const action = counted ? 'get' : 'hit'
    const controller = new AbortController()

    fetch(`${visitors.api}/${action}/${visitors.namespace}/${visitors.key}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (typeof data?.value !== 'number') return
        setCount(data.value)
        try { sessionStorage.setItem(sessionFlag, '1') } catch { /* storage blocked */ }
      })
      .catch(() => {})

    return () => controller.abort()
  }, [])

  return count
}

export default useVisitorCount
