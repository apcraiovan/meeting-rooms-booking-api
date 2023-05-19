export {};
const express = require("express");
import { ParticipantsController } from "../controller/participants.controller";

const participantsController = new ParticipantsController();
const participantsRouter = express.Router();

//PARTICIPANTS ROUTER
participantsRouter.get('', participantsController.getParticipants);

module.exports = participantsRouter;