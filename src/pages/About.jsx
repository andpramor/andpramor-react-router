import { Link } from '../Link.jsx'

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='/profilePic.webp'
          style={{
            borderRadius: '34% 66% 64% 36% / 37% 39% 61% 63%',
            width: '250px'
          }}
          alt='Andrés profile picture'
        />
        <p>Hi! I&apos;m Andrés, and I&apos;m creating a React Router clone.</p>
        <Link to='/'>Home</Link>
      </div>
      <footer>
        <h4 style={{ marginBottom: 0 }}>Contact</h4>
        <p style={{ display: 'flex', gap: '1rem', margin: 0, fontSize: '1rem' }}>
          <a href='mailto:andres@andrespradomorgaz.com'>
            andres@andrespradomorgaz.com
          </a>
          <a href='https://www.linkedin.com/in/apradomorgaz/'>LinkedIn</a>
          <a href='https://andrespradomorgaz.com'>My portfolio</a>
        </p>
      </footer>
    </>
  )
}
