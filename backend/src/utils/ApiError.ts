/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

type Status = 'error';

export class ApiError extends Error {
  statusCode: number;
  status: Status;
  errors?: any[];

  constructor(statusCode: number, message: string, errors: any[] = []) {
    super(message);

    this.statusCode = statusCode;
    this.status = 'error';
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
  }
}
