import { EVENTS } from './consts'

export function navigate(href) {
  window.history.pushState({}, '', href) // Updates the url without reloading the page.
  // Personalized event that makes the browser tell us when url changes:
  const navigationEvent = new Event(EVENTS.PUSHSTATE) // There's no native way of listening for a forward navigation event (although there is for backwards navigation).
  window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0 // Primary click (default: left click)
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    // SPA navigation:
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
