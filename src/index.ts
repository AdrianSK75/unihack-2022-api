import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

const app: Express = express();

import indexRouter from './routes/index';
import businessesRouter from './routes/businesses';
import projectsRouter from './routes/projects';
import tripsRouter from './routes/trips';
import usersRouter from './routes/users';

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/business', businessesRouter);
app.use('/project', projectsRouter);
app.use('/trip', tripsRouter);
app.use('/user', usersRouter);
app.use('/', indexRouter);

export default app;