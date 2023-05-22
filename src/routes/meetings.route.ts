export {};
const express = require("express");
import { NotEmpty } from "sequelize-typescript";
import { MeetingController } from "../controller/meetings.controller";
import {check} from "express-validator";


const meetingController = new MeetingController();
const meetingRouter = express.Router();

//MEETINGS ROUTER
meetingRouter.post("", meetingController.postMeeting);

meetingRouter.get("/:id",
[
    check('id').notEmpty().isNumeric(),
    check('name').notEmpty().isString(),
    check('description').notEmpty().isString(),
    check('startTime').notEmpty().toDate().isDate(),
    check('endTime').notEmpty().isString()
], 
meetingController.getMeetings);

module.exports = meetingRouter;