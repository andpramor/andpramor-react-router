import HomePage from './pages/Home.jsx'
import ContactPage from './pages/Contact.jsx'
import Page404 from './pages/404.jsx'

import { Router } from './Router.jsx'
import SearchPage from './pages/Search.jsx'
import { Route } from './Route.jsx'

const appRoutes = [
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
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/contact' Component={ContactPage} />
        </Router>
        <div
          style={{ width: '100%', height: '10px', backgroundColor: '#09F' }}
        />
      </main>
    </>
  )
}

export default App
