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
};

export default config;