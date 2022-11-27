import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
// import csurf from 'csurf';
import cookieParser from 'cookie-parser';

const app: Express = express();

import businessesRouter from './routes/business.routes';
import projectsRouter from './routes/projects.routes';
import tripsRouter from './routes/trips.routes';
import usersRouter from './routes/users.routes';
import AiRouter from './routes/ai.routes';

// import { csrfTokenMiddleware } from './middleware/csrf.middleware';
// import { authMiddleware } from './middleware/auth.middleware';

// const csurfProtection = csurf({ cookie: true })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
// app.use(csurfProtection);
app.use(helmet());

// app.all('*', csrfTokenMiddleware);
// app.all('*', authMiddleware);

app.use('/business', businessesRouter);
app.use('/business/:businessId/project', projectsRouter);
app.use('/business/:businessId/project/:projectId/trip', tripsRouter);
app.use('/business/:businessId/project/:projectId/trip/:tripId/user', usersRouter);

app.get('*', (req: Request, res: Response) => {
        res.status(404).json({
            "status": "404",
            "message": "not found"
        })
    })

export default app;