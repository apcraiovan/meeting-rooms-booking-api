import app from "./app";
import dotenv from "dotenv";

dotenv.config(); // This should load the vars from .env file

const PORT = process.env.PORT || 4000;

app.listen(PORT);
