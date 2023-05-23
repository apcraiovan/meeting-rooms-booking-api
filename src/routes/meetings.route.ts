const express = require("express");
import { check } from "express-validator";
import { MeetingsController } from "../controller/meetings.controller";

const meetingsController = new MeetingsController();

const meetingsRouter = express.Router();

//MEETINGS ROUTER
meetingsRouter.post(
  "",
  [
    check("name").notEmpty().isString(),
    check("description").notEmpty().isString(),
    check("startTime").notEmpty().isString(),
    check("endTime").notEmpty().isString(),
    check("roomId").notEmpty().isNumeric(),
  ],
  meetingsController.postMeeting
);

meetingsRouter.get(
  "/:id",
  check("id").notEmpty().isNumeric(),
  meetingsController.getMeetingById
);

meetingsRouter.get(
  "/roomid/:roomid",
  check("roomid").notEmpty().isNumeric(),
  meetingsController.getAllMeetingsByRoomId
);

// meetingsRouter.get(
//   "/today/:id",
//   check("id").notEmpty().isNumeric(),
//   meetingsController.getTodayMeetingsByRoomId
// );

module.exports = meetingsRouter;
