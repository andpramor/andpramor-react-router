import { useEffect, useState } from 'react'

const NAVIGATION_EVENT = 'pushstate'

function navigate(href) {
  window.history.pushState({}, '', href) // Updates the url without reloading the page.
  // Personalized event that makes the browser tell us when url changes:
  const navigationEvent = new Event(NAVIGATION_EVENT) // There's no native way of listening for a forward navigation event (although there is for backwards navigation).
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Example page to create a react router from scratch.</p>
      <button onClick={() => navigate('/about')}>About us</button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='/profilePic.webp'
          width='250px'
          alt='Andrés profile picture'
        />
        <p>Hi! I&apos;m Andrés, and I&apos;m creating a React Router clone.</p>
      </div>
      <button onClick={() => navigate('/')}>Home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <>
      <main>
        {currentPath === '/' && <HomePage />}
        {currentPath === '/about' && <AboutPage />}
      </main>
    </>
  )
}

export default App
