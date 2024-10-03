import HomePage from './pages/Home.jsx'
import ContactPage from './pages/Contact.jsx'
import Page404 from './pages/404.jsx'

import { Router } from './Router.jsx'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/contact',
    Component: ContactPage
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
