import dotenv from 'dotenv';
dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  jwtSecret: string;
  jwtExpiresIn: string;
  // Google OAuth
  googleClientId: string;
  // Apple OAuth
  appleClientId: string;
  appleTeamId: string;
  appleKeyId: string;
  applePrivateKey: string;
  // Stripe
  stripeSecretKey: string;
  stripeWebhookSecret: string;
  stripePublishableKey: string;
  stripePaymentLink: string; // Stripe Payment Link URL (e.g., https://buy.stripe.com/test_xxx)
  // Frontend URL for Stripe redirects
  frontendUrl: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  // Google OAuth
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  // Apple OAuth
  appleClientId: process.env.APPLE_CLIENT_ID || '',
  appleTeamId: process.env.APPLE_TEAM_ID || '',
  appleKeyId: process.env.APPLE_KEY_ID || '',
  applePrivateKey: process.env.APPLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
  // Stripe
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '',
  stripePaymentLink: process.env.STRIPE_PAYMENT_LINK || '',
  // Frontend URL
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
};

export default config;