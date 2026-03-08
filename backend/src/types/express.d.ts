/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

import type { User } from '../models/user.model';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export {};
