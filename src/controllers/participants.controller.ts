import { Request,Response, NextFunction } from "express";

exports.get = (req:Request, res:Response, next:NextFunction ) => {
    res.send("get_participants");
};