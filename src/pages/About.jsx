import { Link } from '../Link.jsx'

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='/profilePic.webp'
          style={{borderRadius: '34% 66% 64% 36% / 37% 39% 61% 63%', width: '250px'}}
          alt='Andrés profile picture'
        />
        <p>Hi! I&apos;m Andrés, and I&apos;m creating a React Router clone.</p>
      </div>
      <Link to='/'>Home</Link>
    </>
  )
}
