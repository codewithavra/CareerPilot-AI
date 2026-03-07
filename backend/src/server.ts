/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

//  node modules
import app from './app';
import { connectDB } from './db';
import { ENV } from './ENV';
import dns from 'node:dns';

// Use Cloudflare + Google DNS
dns.setServers(['1.1.1.1', '8.8.8.8']);

connectDB()
  .then(() => {
    app.listen(ENV.PORT, (): void => {
      console.log(`Server is running @ http://localhost:${ENV.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Mongodb Connection Failed  : ${error}`);
  });
