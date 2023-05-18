const express = require("express");
import {Express, Router} from "express";

const routes = require("./routes/routes");
const participantsRoutes = require("./routes/participants.route");
const meetingRoutes = require("./routes/meetings.route");
const roomsRoutes = require("./routes/rooms.route");

const app : Express  = express();

app.use(routes);
app.use(participantsRoutes);
app.use(meetingRoutes);
app.use(roomsRoutes);

app.listen(3001, ()=>{
    console.log("Server started on port 3001.");
});