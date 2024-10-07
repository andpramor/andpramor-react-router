import { useEffect } from "react";
import { Link } from "../components/Link.jsx";

export default function SearchPage({ routeParams }) {
  useEffect(()=>{
    document.title = `Search: ${routeParams.query}`
    return () => document.title = 'andpramor react router'
  }, [routeParams])
  return (
    <>
      <h1>Search Engine</h1>
      <p>You looked for {routeParams.query}</p>
      <Link to='/'>Back to Home</Link>
    </>
  )
}
