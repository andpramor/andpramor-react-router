import { basePath, EVENTS } from './consts'

export function navigate(href) {
  window.history.pushState({}, '', `${basePath}${href}`) // Updates the url without reloading the page.
  // Custom event that makes the browser tell us when url changes:
  const navigationEvent = new Event(EVENTS.PUSHSTATE) // There's no native way of listening for a forward navigation event (although there is for backwards navigation).
  window.dispatchEvent(navigationEvent)
}
