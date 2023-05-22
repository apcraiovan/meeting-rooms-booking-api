const express = require("express");
import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
// const participantsRoutes = require("./participants.route");
const meetingRoutes = require("./meetings.route");
const roomsRoutes = require("./rooms.route");

const router = express.Router();

// router.use("/participants", participantsRoutes);
router.use("/meetings", meetingRoutes);
router.use("/rooms", roomsRoutes);

module.exports = router;
