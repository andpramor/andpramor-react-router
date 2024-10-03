import HomePage from './pages/Home.jsx'
import ContactPage from './pages/Contact.jsx'
import Page404 from './pages/404.jsx'

import { Router } from './Router.jsx'
import SearchPage from './pages/Search.jsx'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/contact',
    Component: ContactPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <>
      <main>
        <div
          style={{ width: '100%', height: '10px', backgroundColor: '#09F' }}
        />
        <Router routes={appRoutes} defaultComponent={Page404} />
      </main>
    </>
  )
}

export default App
