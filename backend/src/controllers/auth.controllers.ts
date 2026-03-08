/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

/**
 * node modules
 */
import bcrypt, { truncates } from 'bcryptjs';
import type { Request, Response } from 'express';
/**
 * other modules
 */
import { User } from '../models/user.model';
import { loginUserSchema, registerUserSchema } from '../schemas';
import { ApiError, ApiResponse, asyncHandler } from '../utils';
import { ENV } from '../ENV';

/**
 * @Route api/v1/auth/register
 * @description business logic to register new users
 */
export const register = asyncHandler(async function (
  req: Request,
  res: Response,
) {
  /**
   * get result from req.body and validate it
   */
  const result = registerUserSchema.safeParse(req.body);

  if (!result.success) {
    throw new ApiError(400, `Validation failed`, result.error.issues);
  }

  /**
   * get user from result
   */
  const { username, email, password } = result.data;

  /**
   * check if user already exists or not
   */
  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existingUser) throw new ApiError(409, `User already exists`);

  /**
   * hash password
   */
  const hashedPassword = await bcrypt.hash(password, 10);

  /**
   * create user and save
   */
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  /**
   * generating and setting tokens
   */
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  /**
   * create response and send
   */
  const options = {
    httpOnly: true,
    sameSite: 'strict' as const,
    secure: ENV.NODE_ENV === 'production',
  };
  const { username: uname, email: uemail } = user;
  const response = new ApiResponse(201, `User creation successful`, 'ok', {
    id: user._id,
    username: uname,
    email: uemail,
    accessToken,
  });

  /**
   * send response
   */
  res.status(201).cookie('refreshToken', refreshToken, options).json(response);
});

/**
 * @Route api/v1/auth/login
 * @description business logic to login existing users
 */
export const login = asyncHandler(async function (req: Request, res: Response) {
  /**
   * get the result and validate
   */
  const result = loginUserSchema.safeParse(req.body);
  if (!result.success)
    throw new ApiError(400, `Validation failed`, result.error.issues);
  /**
   * get user from result.data
   */
  const { username, email, password } = result.data;
  const identifier = username || email;

  /**
   * check if user already exists
   */
  const existingUser = await User.findOne({
    $or: [{ username: identifier }, { email: identifier }],
  });
  if (!existingUser) {
    throw new ApiError(400, `User does not exist`);
  }

  /**
   * match password with hashed password using bcrypt
   */

  const isMatched = await bcrypt.compare(password, existingUser.password);

  if (!isMatched) {
    throw new ApiError(400, `Invalid credential`);
  }

  const accessToken = existingUser.generateAccessToken();
  const refreshToken = existingUser.generateRefreshToken();

  existingUser.refreshToken = refreshToken;
  await existingUser.save({ validateBeforeSave: false });

  const { username: uname, email: uemail } = existingUser;
  const options = {
    httpOnly: true,
    sameSite: 'strict' as const,
    secure: ENV.NODE_ENV === 'production',
  };
  const response = new ApiResponse(200, `login successful`, `ok`, {
    id: existingUser._id,
    username: uname,
    email: uemail,
    accessToken,
  });
  res.status(200).json(response);
});

/**
 * @Router api/v1/auth/logout
 * @description business logic to logout existing users
 */

export const logout = asyncHandler(async function (
  req: Request,
  res: Response,
) {
  if (!req.user) {
    throw new ApiError(401, 'Unauthorized');
  }

  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      returnDocument : 'after'
    },
  );
  const options = {
    httpOnly: true,
    sameSite: 'strict' as const,
    secure: ENV.NODE_ENV === 'production',
  };
  const response = new ApiResponse(200, `Logout successful`, `ok`, {});
  res.status(200).clearCookie('refreshToken', options).json(response);
});
