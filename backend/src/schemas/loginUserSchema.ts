/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

/**
 * node modules
 */
import z from 'zod';
import { passwordValidation, usernameValidation } from './registerUserSchema';

export const loginUserSchema = z
  .object({
    username: usernameValidation.optional(),
    email: z.email().optional(),
    password: passwordValidation,
  })
  .refine((data) => data.username || data.email, {
    message: 'Either username or email is required',
    path: ['username'],
  });

// export const loginUserSchema = z.union([
//   z.object({
//     username: usernameValidation,
//     password: passwordValidation,
//   }),
//   z.object({
//     email: z.email(),
//     password: passwordValidation,
//   }),
// ]);
