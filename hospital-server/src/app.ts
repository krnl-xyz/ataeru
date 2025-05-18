import express from 'express';
import facilityRoutes from './routes/facility.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/facilities', facilityRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;