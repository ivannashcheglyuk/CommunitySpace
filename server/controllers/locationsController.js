
import pool from '../config/database.js'

// Get all locations
export const getAllLocations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get location by ID
export const getLocationById = async (req, res) => {
  const { locationId } = req.params
  try {
    const result = await pool.query('SELECT * FROM locations WHERE id = $1', [locationId])
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}