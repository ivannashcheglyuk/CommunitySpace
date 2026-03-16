// server/routes/eventsRoutes.js
import express from 'express'


import pool from '../config/database.js'; 

const router = express.Router()

// Get all events
router.get('/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Get events by location
router.get('/events/location/:locationId', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [req.params.locationId])
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router