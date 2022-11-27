import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';

const app: Express = express();

import businessesRouter from './routes/businesses.routes';
import projectsRouter from './routes/projects.routes';
import tripsRouter from './routes/trips.routes';
import usersRouter from './routes/users.routes';

import { csrfTokenMiddleware } from './middleware/csrf.middleware';
import { authMiddleware } from './middleware/auth.middleware';

const csurfProtection = csurf({ cookie: true })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
// app.use(csurfProtection);
app.use(helmet());

// app.all('*', csrfTokenMiddleware);
// app.all('*', authMiddleware);

app.use('/business', businessesRouter);
app.use('/project', projectsRouter);
app.use('/trip', tripsRouter);
app.use('/user', usersRouter);

export default app;