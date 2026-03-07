/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

/**
 * node modules
 */
import z from 'zod';

export const usernameValidation = z.string().min(5).max(15);
export const passwordValidation = z
.string()
.min(8)
.regex(/[A-Z]/,"must contain uppercase letter")
.regex(/[a-z]/,"must contain lowercase letter")
.regex(/[0-9]/,"must contain number")
.regex(/[^A-Za-z0-9]/,"must contain special character")


export const registerUserSchema = z.object({
  username: usernameValidation,
  email: z.email(),
  password: passwordValidation,
});
