// server/config/database.js
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

// --- Step 1: Debug the environment variables ---
console.log('--- Database ENV Check ---');
console.log('PGUSER:', process.env.PGUSER || 'MISSING');
console.log('PGPASSWORD:', process.env.PGPASSWORD ? 'OK' : 'MISSING');
console.log('PGHOST:', process.env.PGHOST || 'MISSING');
console.log('PGDATABASE:', process.env.PGDATABASE || 'MISSING');
console.log('PGPORT:', process.env.PGPORT || 'MISSING');
console.log('DB_SSL:', process.env.DB_SSL || 'MISSING');
console.log('--------------------------');

// --- Step 2: Create PostgreSQL pool ---
const pool = new pg.Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

// --- Step 3: Test the connection ---
pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL!'))
  .catch(err => {
    console.error('❌ Database connection error:');
    console.error(err);
  });

export default pool;