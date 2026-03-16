import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import AllEvents from './pages/AllEvents'  // <-- only one import
import './App.css'

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Locations /> },
    { path: '/location/:locationId', element: <LocationEvents /> },
    { path: '/events', element: <AllEvents /> }, // new route
  ])

  return (
    <div className='app'>
      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>
        <div className='header-buttons'>
          <Link to='/'>Home</Link>
          <Link to='/events'>Events</Link> {/* new button */}
        </div>
      </header>

      <main>{routes}</main>
    </div>
  )
}

export default App