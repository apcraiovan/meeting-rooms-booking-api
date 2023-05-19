export {};
const express = require("express");
import { MeetingController } from "../controller/meetings.controller";

const meetingController = new MeetingController();
const meetingRouter = express.Router();

//MEETINGS ROUTER
meetingRouter.post("", meetingController.postMeeting);

module.exports = meetingRouter;