/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

import type { NextFunction, Request, Response } from 'express';

type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<any>;

export const asyncHandler = (requestHandler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    requestHandler(req, res, next).catch(next);
  };
};
