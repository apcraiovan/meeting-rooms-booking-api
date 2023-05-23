export {};
const express = require("express");
import { NotEmpty } from "sequelize-typescript";
import { MeetingController } from "../controller/meetings.controller";
import {check} from "express-validator";



const meetingRouter = express.Router();
const meetingController = new MeetingController();

//MEETINGS ROUTER
meetingRouter.post("",
[check('name').notEmpty().isString(),
check('startTime').notEmpty().isString(),
check('endTime').notEmpty().isString(),
check('roomId').notEmpty().isNumeric()
],
meetingController.postMeeting);

meetingRouter.get("/:id", check('id').notEmpty().isNumeric() ,meetingController.getMeetingsByRoomId);

meetingRouter.get("/today/:id", check('id').notEmpty().isNumeric(), meetingController.getTodayMeetingsByRoomId);

module.exports = meetingRouter;