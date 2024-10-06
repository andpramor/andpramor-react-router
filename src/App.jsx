import { lazy, Suspense } from 'react'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

import HomePage from './pages/Home.jsx'
const LazyContactPage = lazy(() => import('./pages/Contact.jsx')) // Dynamic imports (lazy loading)
import SearchPage from './pages/Search.jsx'
import Page404 from './pages/404.jsx'

import { Footer } from './Footer/Footer.jsx'

const appRoutes = [
  {
    path: '/andpramor-react-router/:lang',
    Component: HomePage
  },
  {
    path: '/andpramor-react-router/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <>
      <main>
        <div
          style={{ width: '100%', height: '10px', backgroundColor: '#09F', margin: '1rem 0' }}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Router routes={appRoutes} defaultComponent={Page404}>
            <Route path='/andpramor-react-router' Component={HomePage} />
            <Route path='/andpramor-react-router/contact' Component={LazyContactPage} />
          </Router>
        </Suspense>
        <div
          style={{ width: '100%', height: '10px', backgroundColor: '#09F', margin: '1rem 0' }}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
