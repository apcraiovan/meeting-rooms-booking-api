export {};
const express = require("express");
const {postMeeting} = require("../controllers/meetings.controller");

const meetingRouter = express.Router();

//MEETINGS ROUTER
meetingRouter.post("/meetings", postMeeting);

module.exports = meetingRouter;