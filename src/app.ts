import express, { Application, Express } from 'express';
const router = require("./routes/routes");
import bodyParser from 'body-parser';

const app : Express  = express();

app.use(router);

export default app