import express, { Application } from 'express';
//import routerUser from './routes/user.routes';
import bodyParser from 'body-parser';

const app : Express  = express();

app.use(routes);

// routes
//app.use(routerUser);

export default app