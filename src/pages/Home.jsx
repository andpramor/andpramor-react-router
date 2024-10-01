import { Link } from '../Link.jsx'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Example page to create a react router from scratch.</p>
      <Link to='/about'>About us</Link>
    </>
  )
}
