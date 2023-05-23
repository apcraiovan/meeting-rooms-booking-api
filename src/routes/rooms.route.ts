const express = require("express");
import { check } from "express-validator";
import { RoomsController } from "../controller/rooms.controller";

const roomsController = new RoomsController();

const roomsRouter = express.Router();

//ROOMS ROUTER
roomsRouter.get(
  "/byid/:id",
  check("id").notEmpty().isNumeric(),
  roomsController.getRoomById
);

roomsRouter.get("", roomsController.getAllRooms);

roomsRouter.post("", roomsController.postRoom);

roomsRouter.put(
  "/:id",
  check("id").notEmpty().isNumeric(),
  roomsController.putRoom
);

roomsRouter.delete(
  "/:id",
  check("id").notEmpty().isNumeric(),
  roomsController.deleteRoom
);

roomsRouter.get("/meetings", roomsController.getAllRoomsAndMeetings);

module.exports = roomsRouter;
