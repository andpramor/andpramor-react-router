import { Link } from '../Link.jsx'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <img
          src='/profilePic.webp'
          style={{
            borderRadius: '34% 66% 64% 36% / 37% 39% 61% 63%',
            width: '250px'
          }}
          alt='Andrés profile picture'
        />
        <p>Hi, I&apos;m Andrés Prado, and I&apos;m creating a React Router from scratch!</p>
        <Link to='/contact'>Contact</Link>
      </div>
    </>
  )
}
