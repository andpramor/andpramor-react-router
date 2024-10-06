import { Link } from '../Link.jsx'

export default function Page404() {
  return (
    <>
      <h1>404</h1>
      <p>
        Sorry! This page doesn&apos;t exist quite yet.{' '}
        <Link to='/andpramor-react-router'>Go back home</Link>.
      </p>
    </>
  )
}
