const express = require("express");
import {check} from "express-validator";

const roomsController = require("../controllers/rooms.controller");

const roomRouter = express.Router();

//ROOMS ROUTER
roomRouter.get("/rooms/:id?", check('id').isNumeric(), roomsController.get);

roomRouter.post("/rooms", roomsController.post);

roomRouter.put("/rooms/:id", check('id').notEmpty().isNumeric(), roomsController.put);

roomRouter.delete("/rooms/:id",check('id').notEmpty().isNumeric(), roomsController.delete );

module.exports = roomRouter;
