import express, { Application } from 'express';
import bodyParser from 'body-parser';
import routerMeeting from './routes/meeting.routes';

const app: Application = express();

// middleware
app.use(express.json());

// routes
app.use(routerMeeting);

export default app