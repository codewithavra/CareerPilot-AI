/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

// node modules
import 'dotenv/config';

// process.env is a Node.js object that contains environment variables.

const reqEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing Environment Variables ${key}`);
  }
  return value;
};

export const ENV = {
  MONGODB_URI: reqEnv('MONGODB_URI'),
  PORT: reqEnv('PORT') || '5000',
  NODE_ENV: reqEnv('NODE_ENV') || 'development',
  REFRESHTOKEN_SECRET: reqEnv('REFRESHTOKEN_SECRET'),
  ACCESSTOKEN_SECRET: reqEnv('ACCESSTOKEN_SECRET'),
  REFRESHTOKEN_EXPIRY: reqEnv('REFRESHTOKEN_EXPIRY'),
  ACCESSTOKEN_EXPIRY: reqEnv('ACCESSTOKEN_EXPIRY'),
};
