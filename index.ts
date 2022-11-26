import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { db } from './firebase';
import { getDocs, collection } from 'firebase/firestore';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// temporary routes
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

app.get('/:slug', (req: Request, res: Response) => {
    res.send(`${req.params.slug}`);
});

app.get('/animals', async (req: Request, res: Response) => {
  const animalsCollectionRef = collection(db, "temporary");
  // const animals = await getDocs();
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));