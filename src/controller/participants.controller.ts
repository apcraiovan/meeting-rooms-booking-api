import { error } from "console";
import { Request,Response, NextFunction } from "express";
import { validationResult} from "express-validator";

const ParticipantsService = require("../service/participants.service");

export class ParticipantsController{

    async getParticipants(req:Request, res:Response, next:NextFunction ){
        const result = validationResult(req);
        if(!result.isEmpty()){
            res.send({errors: result.array()});
        }
        try{
        const participants = await ParticipantsService.GetMeetingParticipants(req.params.id);
        res.json(participants);
        }
        catch(err){
            console.error(error);
            res.status(500).json({message: "Internal server problems!"});
        }
    };

}