export {};
const express = require("express");
const meetingsController = require("../controllers/meetings.controller");

const meetingRouter = express.Router();

//MEETINGS ROUTER
meetingRouter.post("/meetings", meetingsController.post);

module.exports = meetingRouter;