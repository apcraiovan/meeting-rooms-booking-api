import express, { Express } from "express";
const router = require("./routes/routes");
const cors = require("cors");

const app: Express = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(router);

export default app;
