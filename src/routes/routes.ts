const express = require("express");

const meetingsRoutes = require("./meetings.route");
const roomsRoutes = require("./rooms.route");

const router = express.Router();

router.use("/meetings", meetingsRoutes);
router.use("/rooms", roomsRoutes);

module.exports = router;
