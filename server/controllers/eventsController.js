import pool from '../config/database.js'

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get events by location
export const getEventsByLocation = async (req, res) => {
  const { locationId } = req.params
  try {
    const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [locationId])
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get event by ID
export const getEventById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await pool.query('SELECT * FROM events WHERE id = $1', [id])
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}