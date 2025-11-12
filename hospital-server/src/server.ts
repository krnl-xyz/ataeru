import app from './app';
import config from './config/config';

// For Vercel serverless functions
export default app;

// For local development
if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
}
