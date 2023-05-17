const express = require("express");
import {Express, Router} from "express";

const router = require("./routes/routes");
const participantsRouter = require("./routes/participants.route");
const meetingRouter = require("./routes/meetings.route");
const roomsRouter = require("./routes/rooms.route");

const app : Express  = express();

app.use("/", router);
app.use("/", participantsRouter);
app.use("/", meetingRouter);
app.use("/", roomsRouter);

app.listen(3001, ()=>{
    console.log("Server started on port 3001.");
});