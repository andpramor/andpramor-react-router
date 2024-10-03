import { Link } from '../Link.jsx'

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        You can mail me at{' '}
        <a href='mailto:andres@andrespradomorgaz.com'>
          andres@andrespradomorgaz.com
        </a>
        , contact me in{' '}
        <a href='https://www.linkedin.com/in/apradomorgaz/'>LinkedIn</a> or
        check my <a href='https://andrespradomorgaz.com'>portfolio</a>.
      </p>
      <Link to='/'>Back Home</Link>
    </>
  )
}
