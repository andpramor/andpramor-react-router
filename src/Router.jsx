import { useState, useEffect } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // When path includes characters that native URL cannot parse, such as ':', we check for a match with regex using path-to-regexp:
    const matcherUrl = match(path, { decode: decodeURIComponent }) // Returns a function cappable of checking if a string matches with the first param, 'path'.
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    routeParams = matched.params // Ex: route /search/:query returns { query: 'javascript' } for /search/javascript
    return true
  })?.Component

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  )
}
