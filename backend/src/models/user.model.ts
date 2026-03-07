/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

// node imports
import { Document, model, Schema } from 'mongoose';
import jwt, { type SignOptions } from 'jsonwebtoken';
import { ENV } from '../ENV';

/**
 * user document interface
 */
interface User extends Document {
  username: string;
  password: string;
  email: string;
  refreshToken : string
  createdAt: Date;
  generateAccessToken(): string;
  generateRefreshToken(): string;
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
  refreshToken:{
    type : String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.generateAccessToken = function generateAccessToken(
  this: User,
): string {
  return jwt.sign(
    {
      sub: this._id.toString(),
      username: this.username,
      email: this.email,
    },
    ENV.ACCESSTOKEN_SECRET,
    { expiresIn: ENV.ACCESSTOKEN_EXPIRY as SignOptions['expiresIn'] },
  );
};

userSchema.methods.generateRefreshToken = function generateRefreshToken(
  this: User,
): string {
  return jwt.sign(
    {
      sub: this._id.toString(),
    },
    ENV.REFRESHTOKEN_SECRET,
    { expiresIn: ENV.REFRESHTOKEN_EXPIRY as SignOptions['expiresIn'] },
  );
};

/**
 * user model
 */

export const User = model<User>('User', userSchema);
