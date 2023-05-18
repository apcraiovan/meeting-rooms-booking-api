const express = require("express");
import {check} from "express-validator";

const {getRooms, postRoom, putRoom, deleteRoom} = require("../controllers/rooms.controller");

const roomRouter = express.Router();

//ROOMS ROUTER
roomRouter.get("/rooms/:id?", check('id').isNumeric(), getRooms);

roomRouter.post("/rooms", postRoom);

roomRouter.put("/rooms/:id", check('id').notEmpty().isNumeric(), putRoom);

roomRouter.delete("/rooms/:id",check('id').notEmpty().isNumeric(), deleteRoom );

module.exports = roomRouter;
