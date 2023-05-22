import express, { Application } from 'express';
//import routerUser from './routes/user.routes';
import bodyParser from 'body-parser';

const app = express();

// middleware
app.use(bodyParser.json());

// routes
//app.use(routerUser);

export default app