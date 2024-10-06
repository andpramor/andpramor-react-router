import { useState } from 'react'
import { Link } from '../Link.jsx'
import profile_pic from '../assets/profilePic.webp'
import { navigate } from '../utils/navigate.js'

const i18n = {
  es: {
    title: 'Hola, soy Andrés Prado',
    subtitle: '¡Y he hecho un router con React desde cero!',
    dynamic_routes_info: 'Para una demo de gestión de rutas dinámicas, prueba:',
    contact_link: 'Contacto',
    lang_link: 'Home in English',
    search_label: 'Buscar',
    search_placeholder: 'Escribe algo'
  },
  en: {
    title: "Hi, I'm Andrés Prado",
    subtitle: 'And I built a React router from scratch!',
    dynamic_routes_info: 'For a demo of dynamic routes handling, try this:',
    contact_link: 'Contact',
    lang_link: 'Home en español',
    search_label: 'Search bar',
    search_placeholder: 'Write something'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function HomePage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearchTerm(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search/${searchTerm}`)
  }

  return (
    <>
      <img
        src={profile_pic}
        style={{
          borderRadius: '34% 66% 64% 36% / 37% 39% 61% 63%',
          width: '200px',
          marginTop: '1rem'
        }}
        alt='Andrés profile picture'
      />
      <h1>{i18n.title}</h1>
      <p>{i18n.subtitle}</p>
      <Link to='/contact'>{i18n.contact_link}</Link>
      <p>
        {i18n.dynamic_routes_info}
        <form onSubmit={handleSubmit} style={{border: '1px solid #09F', padding: '1rem', marginTop: '1rem', display: 'flex', flexDirection: 'column'}}>
          <label htmlFor='searchBar'>{i18n.search_label}</label>
          <input
            value={searchTerm}
            onChange={handleChange}
            type='text'
            placeholder={i18n.search_placeholder}
            name='searchBar'
          />
          <button type='submit'>{i18n.search_label}</button>
        </form>
      </p>
      <Link to={`/${routeParams.lang === 'es' ? 'en' : 'es'}`}>
        {i18n.lang_link}
      </Link>
    </>
  )
}
