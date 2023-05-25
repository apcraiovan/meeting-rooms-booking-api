import express, { Application } from "express";
import routerUser from "./routes/user.routes";
import bodyParser from "body-parser";
import routerMsgraph from "./routes/msgraph.routes";
import dotenv from 'dotenv';

const app: Application = express();
dotenv.config(); // This should load the vars from .env file

// middleware
app.use(bodyParser.json());

// routes
// app.use(routerUser);
app.use(routerMsgraph);

export default app;
