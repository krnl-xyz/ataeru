import express from 'express';
import facilityRoutes from './routes/facility.routes';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import hospitalRoutes from './routes/hospital.routes';
import bookingRoutes from './routes/booking.routes';
import requestRoutes from './routes/request.routes';
import userPreferenceRoutes from './routes/user-preference.routes';
import treatmentPreferenceRoutes from './routes/treatment-preference.routes';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';

const app = express();

// CORS configuration
const isDevelopment = process.env.NODE_ENV !== 'production';

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, or curl requests)
    if (!origin) return callback(null, true);

    // In development, allow all origins for easier testing
    if (isDevelopment) {
      return callback(null, true);
    }

    // In production, use allowed origins list
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:8080',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5174',
      'http://127.0.0.1:8080',
      // Add your production domains here when deploying
      // 'https://yourdomain.com',
    ];

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies and authorization headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Authorization'],
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  maxAge: 86400 // Cache preflight requests for 24 hours
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/users', userRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/preferences', userPreferenceRoutes);
app.use('/api/treatment-preferences', treatmentPreferenceRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;