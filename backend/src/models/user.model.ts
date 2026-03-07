/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

// node imports
import { Document, model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
/**
 * user document interface
 */
interface User extends Document {
  username: string;
  password: string;
  email: string;
  createdAt: Date;
}

/**
 * user schema
 */

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
    maxLength: 15,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
/**
 * user model
 */

export const User = model<User>('User', userSchema);
