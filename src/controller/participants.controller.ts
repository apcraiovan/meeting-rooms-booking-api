import { Request,Response, NextFunction } from "express";


export class ParticipantsController{

    async getParticipants(req:Request, res:Response, next:NextFunction ){
    res.send("get_participants");
    };

}