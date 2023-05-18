import { Request,Response, NextFunction } from "express";

const postMeeting = (req:Request, res:Response, next:NextFunction ) => {
    res.send("post_meeting");
};

module.exports = {postMeeting};