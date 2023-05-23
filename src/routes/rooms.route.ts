const express = require("express");
import { check } from "express-validator";

import { RoomController } from "../controller/rooms.controller";

const roomController = new RoomController();
const roomRouter = express.Router();

//ROOMS ROUTER
roomRouter.get(
  "/byid/:id",
  check("id").notEmpty().isNumeric(),
  roomController.getRoomsById
);

roomRouter.get("", roomController.getRooms);

roomRouter.post("", roomController.postRoom);

roomRouter.put(
  "/:id",
  check("id").notEmpty().isNumeric(),
  roomController.putRoom
);

roomRouter.delete(
  "/:id",
  check("id").notEmpty().isNumeric(),
  roomController.deleteRoom
);
roomRouter.get("/meetings", roomController.getAllRoomsAndMeetings);

module.exports = roomRouter;
