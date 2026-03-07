/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

/**
 * @description status type
 */
type ResStatus = 'ok' | 'error';

/**
 * @description Response interface
 */
interface iResponse<T> {
  statusCode: number;
  message: string;
  resStatus: ResStatus;
  data?: T;
}

export class ApiResponse<T> implements iResponse<T> {
  statusCode: number;
  message: string;
  resStatus: ResStatus;
  data?: T;

  constructor(statusCode: number, message: string, resStatus: ResStatus, data?: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.resStatus = resStatus;
    this.data = data;
  }
}
