/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

/**
 * node modules
 */

import { Router } from 'express';
import { login, logout, register } from '../controllers';
import { verifyJWT } from '../middlewares/auth.middleware';

export const authRouter = Router();

/**
 * @route POST api/v1/auth/register
 */

authRouter.post('/register', register);

/**
 * @route POST api/v1/auth/login
 */

authRouter.post('/login', login);

/**
 * @route POST api/v1/auth/logout
 */

authRouter.post('/logout', verifyJWT , logout);
