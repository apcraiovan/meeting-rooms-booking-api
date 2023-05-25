import express, { Application } from "express";
import routerUser from "./routes/user.routes";
import bodyParser from "body-parser";
import routerMsgraph from "./routes/msgraph.routes";

const app: Application = express();
const cors = require("cors");

app.use(cors());

// middleware
app.use(bodyParser.json());

// routes
// app.use(routerUser);
app.use(routerMsgraph);

export default app;
