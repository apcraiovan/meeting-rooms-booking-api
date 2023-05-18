import { Request,Response, NextFunction } from "express";

const getParticipants = (req:Request, res:Response, next:NextFunction ) => {
    res.send("get_participants");
};

module.exports = {getParticipants};