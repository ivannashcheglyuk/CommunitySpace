// client/src/pages/LocationEvents.jsx
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const LocationEvents = () => {
  const { locationId } = useParams()
  const [location, setLocation] = useState(null)
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locRes = await fetch(`http://localhost:3000/api/locations/${locationId}`)
        const locData = await locRes.json()
        setLocation(locData)

        const evRes = await fetch(`http://localhost:3000/api/events/location/${locationId}`)
        const evData = await evRes.json()
        setEvents(evData)
      } catch (error) {
        console.error('Error fetching location or events:', error)
      }
    }
    fetchData()
  }, [locationId])

  if (!location) return <p>Loading location...</p>

  return (
    <div className='location-events'>
      <header>
        <div className='location-image'>
          <img src={location.image} alt={location.name} />
        </div>
        <div className='location-info'>
          <h2>{location.name}</h2>
          <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
        </div>
      </header>

      <main>
        {events.length > 0 ? (
          events.map(ev => (
            <Event
              key={ev.id}
              id={ev.id}
              title={ev.title}
              date={ev.date}
              time={ev.time}
              image={ev.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>
            {' No events scheduled at this location yet!'}
          </h2>
        )}
      </main>
    </div>
  )
}

export default LocationEvents