const API_URL = "http://localhost:3000/api/locations"

const LocationsAPI = {
  getAllLocations: async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error("Failed to fetch locations")
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  },

  getLocationById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`)
      if (!response.ok) throw new Error("Failed to fetch location by ID")
      return await response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default LocationsAPI