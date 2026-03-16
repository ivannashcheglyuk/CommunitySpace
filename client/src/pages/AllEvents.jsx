// client/src/pages/AllEvents.jsx
import React, { useState, useEffect } from 'react'
import Event from '../components/Event'

import '../css/AllEvents.css'
const AllEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/events')
        const data = await res.json()
        setEvents(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchEvents()
  }, [])

  if (!events.length) return <p>Loading events...</p>

  return (
    <div className='all-events'>
      {events.map((evt) => (
        <Event
          key={evt.id}
          id={evt.id}
          title={evt.title}
          date={evt.date}
          time={evt.time}
          image={evt.image}
        />
      ))}
    </div>
  )
}

export default AllEvents