import { getUsers, postEvent} from "./outlookApi/outlookApi";
import express from "express";

require('dotenv').config()

const app = express();

app.use(express.json())

app.post("/makeEvent", postEvent)
app.get("/outlookUsers", getUsers)

app.listen(3000)
