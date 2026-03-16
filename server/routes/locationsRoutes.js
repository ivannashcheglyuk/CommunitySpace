// server/routes/locationsRoutes.js
import express from 'express'

import pool from '../config/database.js';

const router = express.Router()

// Get all locations
router.get('/locations', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Get single location by ID
router.get('/locations/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations WHERE id = $1', [req.params.id])
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router