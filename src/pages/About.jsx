import { Link } from '../Link.jsx'

export default function AboutPage() {
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
      <Link to='/'>Home</Link>
    </>
  )
}
