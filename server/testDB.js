import { pool } from './config/database.js';

pool.connect()
  .then(() => {
    console.log('🎉 Database connected successfully!');
    pool.end();
  })
  .catch(err => console.error('❌ Database connection error', err));