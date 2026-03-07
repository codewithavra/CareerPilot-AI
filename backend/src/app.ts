/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */

/**
 * node modules
 */

import e from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

/**
 * other imports
 */
import { authRouter } from './routers';

const app = e();

app.use(
  e.urlencoded({
    extended: true,
    limit: '10kb',
  }),
);

app.use(
  e.json({
    limit: '10kb',
  }),
);

app.use(helmet());
app.use(cookieParser());

// routes

app.use('/api/v1/auth', authRouter);

export default app;
