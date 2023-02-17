import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';

config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

export { app };
