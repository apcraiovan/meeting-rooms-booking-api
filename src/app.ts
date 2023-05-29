import express, { Express } from "express";
const router = require("./routes/routes");
const cors = require("cors");

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app: Application = express();

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
