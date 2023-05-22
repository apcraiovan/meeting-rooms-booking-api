export {};
const express = require("express");
import { MeetingController } from "../controller/meetings.controller";

const meetingController = new MeetingController();
const meetingRouter = express.Router();

//MEETINGS ROUTER
meetingRouter.post("", meetingController.postMeeting);

meetingRouter.get("", meetingController.getAllMeetingsByRoomId);

meetingRouter.get("/today", meetingController.getAllMeetingsByRoomIAndDate);

meetingRouter.get("/:id", meetingController.getMeetingById);


module.exports = meetingRouter;