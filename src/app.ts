import express, { Application } from "express";
import routerUser from "./routes/user.routes";
import bodyParser from "body-parser";
import routerMsgraph from "./routes/msgraph.routes";

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app: Application = express();

app.use(cors());

// middleware
app.use(bodyParser.json());

// routes
// app.use(routerUser);
app.use(routerMsgraph);

export default app;
