export {};
const express = require("express");
const participantsController = require("../controllers/participants.controller");

const participantsRouter = express.Router();

//PARTICIPANTS ROUTER
participantsRouter.get('/participants', participantsController.get);

module.exports = participantsRouter;