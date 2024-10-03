import { Link } from '../Link.jsx'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Example home page: creating a react router from scratch.</p>
      <Link to='/about'>About</Link>
    </>
  )
}
