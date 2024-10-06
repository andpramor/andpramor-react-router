import { useState, useEffect, Children } from 'react'
import { EVENTS } from './utils/consts'
import { match } from 'path-to-regexp'
import { getCurrentPath } from './utils/getCurrentPath'

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // Add routes from children
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type

    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const allRoutes = routesFromChildren ? routesFromChildren.concat(routes).filter(Boolean) : routes

  const Page = allRoutes.find(({ path }) => {
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
