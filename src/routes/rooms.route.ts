const express = require("express");
import {check} from "express-validator";

const {getRooms, postRoom, putRoom, deleteRoom} = require("../controllers/rooms.controller");

const roomRouter = express.Router();

//ROOMS ROUTER
roomRouter.get("/:id?", check('id').isNumeric(), getRooms);

roomRouter.post("", postRoom);

roomRouter.put("/:id", check('id').notEmpty().isNumeric(), putRoom);

roomRouter.delete("/:id",check('id').notEmpty().isNumeric(), deleteRoom );

module.exports = roomRouter;
