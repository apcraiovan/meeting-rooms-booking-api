export {};
const express = require("express");
const {postMeeting} = require("../controllers/meetings.controller");

const meetingRouter = express.Router();

//MEETINGS ROUTER
meetingRouter.post("", postMeeting);

module.exports = meetingRouter;