// server/server.js
import express from 'express';
import cors from 'cors';
import eventsRoutes from './routes/eventsRoutes.js';
import locationsRoutes from './routes/locationsRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Prefix all API routes
app.use('/api', eventsRoutes);
app.use('/api', locationsRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));