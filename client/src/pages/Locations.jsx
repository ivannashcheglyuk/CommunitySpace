import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/Locations.css'

const Locations = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/locations')
        const data = await res.json()
        setLocations(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchLocations()
  }, [])

  if (!locations.length) {
    return <p>Loading locations...</p>
  }

  return (
    <div className='available-locations'>
      {locations.map((loc) => (
        <Link key={loc.id} to={`/location/${loc.id}`} className='location-card'>
          {/* fallback image if database image is empty */}
          <img src={loc.image || "https://cdn.mos.cms.futurecdn.net/74pCXBPyfCvb7HWEdm57HE-1200-80.jpg"} alt={loc.name} />
          <h3>{loc.name}</h3>
        </Link>
      ))}
    </div>
  )
}

export default Locations