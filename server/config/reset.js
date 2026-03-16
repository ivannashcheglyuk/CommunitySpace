// server/config/reset.js

import pool from './database.js';
import dotenv from 'dotenv';

dotenv.config(); // Ensure env is loaded

const createLocationsTable = async () => {
  const query = `
    DROP TABLE IF EXISTS locations;
    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;
  await pool.query(query);
  console.log('🎉 Tables created successfully');
};

const seedLocations = async () => {
  await createLocationsTable();
  const locations = ['Unity Hall', 'Tech Plaza'];

  for (let name of locations) {
    await pool.query('INSERT INTO locations (name) VALUES ($1)', [name]);
    console.log(`✅ Location "${name}" added`);
  }

  console.log('🎉 Seed data inserted successfully');
};

seedLocations().then(() => pool.end());