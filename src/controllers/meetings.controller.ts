import { Request,Response, NextFunction } from "express";

exports.post = (req:Request, res:Response, next:NextFunction ) => {
    res.send("post_meeting");
};