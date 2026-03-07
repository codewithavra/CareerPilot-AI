/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

/**
 * node modules
 */
import mongoose from 'mongoose';

/**
 * other modules
 */
import { ENV } from '../ENV';


/**
 * @description connectdb function to connect to the database
 */
export const connectDB = async (): Promise<void> => {
  try {
    const connection_instance = await mongoose.connect(`${ENV.MONGODB_URI}`);
    console.log(
      `Mongodb Connection Successfull : HOST : ${connection_instance.connection.host}`,
    );
  } catch (error) {
    console.error(`Mongodb Connection Failed  : ${error}`);
    process.exit(1);
  }
};
