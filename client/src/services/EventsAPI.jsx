const API_URL = "http://localhost:3000/api/events"

const EventsAPI = {
  getAllEvents: async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error("Failed to fetch events")
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  },

  getEventById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`)
      if (!response.ok) throw new Error("Failed to fetch event by ID")
      return await response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  },

  getEventsByLocationId: async (locationId) => {
    try {
      const response = await fetch(`${API_URL}/location/${locationId}`)
      if (!response.ok) throw new Error("Failed to fetch events for location")
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  }
}

export default EventsAPI