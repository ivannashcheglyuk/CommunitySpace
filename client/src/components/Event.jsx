// client/src/components/Event.jsx
import React, { useState, useEffect } from 'react'
import '../css/Event.css'

const Event = ({ id, title, date, time, image }) => {
  const [remaining, setRemaining] = useState('')

  useEffect(() => {
    const calculateRemaining = () => {
      const eventDate = new Date(date)
      const today = new Date()
      const diffTime = eventDate - today
      if (diffTime < 0) {
        setRemaining('Event passed')
      } else {
        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        setRemaining(`${days} day(s) remaining`)
      }
    }
    calculateRemaining()
  }, [date])

  return (
    <article className='event-information'>
      <img 
  src={image || 'https://imageio.forbes.com/specials-images/imageserve/643016813686d8eafca00875/0x0.jpg?format=jpg&width=1200'} 
  alt={title} 
/>

      <div className='event-information-overlay'>
        <div className='text'>
          <h3>{title}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {date} <br />
            {time}
          </p>
          <p id={`remaining-${id}`}>{remaining}</p>
        </div>
      </div>
    </article>
  )
}

export default Event