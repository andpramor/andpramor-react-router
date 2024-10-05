import { Link } from '../Link.jsx'

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <p style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1rem' }}>
        <a href='mailto:andres@andrespradomorgaz.com'>
          andres@andrespradomorgaz.com
        </a>
        <a href='https://www.linkedin.com/in/apradomorgaz/'>LinkedIn</a>
        <span>Check my <a href='https://andrespradomorgaz.com'>portfolio</a>!</span>
      </p>
      <Link to='/'>Back Home</Link>
    </>
  )
}
