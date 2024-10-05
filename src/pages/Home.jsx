import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Hola, soy Andrés Prado',
    subtitle: '¡Y estoy creando un React router desde cero!',
    dynamic_routes_info:
      'Para una demo de gestión de rutas dinámicas, prueba a usar la url de este sitio seguida de ',
    contact_link: 'Contacto',
    lang_link: 'Home in English'
  },
  en: {
    title: "Hi, I'm Andrés Prado",
    subtitle: "And I'm creating a React router from scratch!",
    dynamic_routes_info:
      "For a demo of dynamic routes handling, try using this site's url plus ",
    contact_link: 'Contact',
    lang_link: 'Home en español'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function HomePage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')

  return (
    <>
      <img
        src='/profilePic.webp'
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
        <code>/search/{`<your_search>`}</code>
      </p>
      <Link to={routeParams.lang === 'es' ? 'en' : 'es'}>{i18n.lang_link}</Link>
    </>
  )
}
