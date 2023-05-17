const express = require("express");
import { NextFunction, Request,Response } from "express";
import {check, validationResult} from "express-validator";


const router = express.Router();

router.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.send("Welcome to Meeting Rooms Backend!");
});

module.exports = router;

