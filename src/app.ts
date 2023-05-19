import express, { Application } from 'express';
import bodyParser from 'body-parser';
import routerMeeting from './routes/meeting.routes';

const app = express();

// middleware
app.use(express.json());

// routes
app.use(routerMeeting);

export default app