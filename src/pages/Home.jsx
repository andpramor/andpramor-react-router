import { Link } from '../Link.jsx'

export default function HomePage() {
  return (
    <>
      <img
        src='/profilePic.webp'
        style={{
          borderRadius: '34% 66% 64% 36% / 37% 39% 61% 63%',
          width: '250px',
          marginTop: '1rem'
        }}
        alt='Andrés profile picture'
      />
      <h1>Hi, I&apos;m Andrés Prado</h1>
      <p>And I&apos;m creating a React router from scratch!</p>
      <Link to='/contact'>Contact</Link>
      <p>
        For a demo of dynamic routes handling, try using this site&apos;s url plus{' '}
        <code>/search/{`<your_search>`}</code>
      </p>
    </>
  )
}
