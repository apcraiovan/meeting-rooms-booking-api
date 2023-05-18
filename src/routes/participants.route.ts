export {};
const express = require("express");
const {getParticipants} = require("../controllers/participants.controller");

const participantsRouter = express.Router();

//PARTICIPANTS ROUTER
participantsRouter.get('', getParticipants);

module.exports = participantsRouter;