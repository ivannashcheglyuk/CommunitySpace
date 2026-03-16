import pool from './database.js';
import dotenv from 'dotenv';

dotenv.config();

const createEventsTable = async () => {
  const query = `
    DROP TABLE IF EXISTS events;
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      time VARCHAR(20) NOT NULL,
      location_id INTEGER REFERENCES locations(id),
      image VARCHAR(255)
    );
  `;
  await pool.query(query);
  console.log('🎉 Events table created successfully');
};

const seedEvents = async () => {
  await createEventsTable();

  const events = [
    {
      title: 'Tech Expo 2026',
      date: '2026-04-10',
      time: '10:00 AM',
      location_id: 1,
      image: 'https://tse2.mm.bing.net/th/id/OIP.-d4a10yMHgmzOh8XZs9G7AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      title: 'AI Conference',
      date: '2026-04-15',
      time: '09:00 AM',
      location_id: 1,
      image: 'https://www.expostandservice.com/wp-content/uploads/2020/12/Trade-Show-Management.png',
    },
    {
      title: 'Startup Pitch Night',
      date: '2026-04-20',
      time: '06:00 PM',
      location_id: 2,
      image: 'https://www.eventbrite.co.uk/blog/wp-content/uploads/2022/06/image13-min.png',
    },
    {
      title: 'Coding Bootcamp',
      date: '2026-04-25',
      time: '08:00 AM',
      location_id: 2,
      image: 'https://as2.ftcdn.net/v2/jpg/05/63/86/67/1000_F_563866769_7tp6YIWJXj8lr6ReqrTHCKMjZXcP6Jjq.jpg',
    }
  ];

  for (let ev of events) {
    await pool.query(
      'INSERT INTO events (title, date, time, location_id, image) VALUES ($1, $2, $3, $4, $5)',
      [ev.title, ev.date, ev.time, ev.location_id, ev.image]
    );
    console.log(`✅ Event "${ev.title}" added`);
  }

  console.log('🎉 All events seeded successfully');
};

seedEvents().then(() => pool.end());