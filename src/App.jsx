import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Example page to create a react router from scratch.</p>
      <a href='/about'>About us</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='/profilePic.webp' width='250px' alt='Andrés profile picture' />
        <p>Hi! I&apos;m Andrés, and I&apos;m creating a React Router clone.</p>
      </div>
      <a href='/'>Home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
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
