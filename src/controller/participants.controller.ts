import { error } from "console";
import { Request,Response, NextFunction } from "express";
import { validationResult} from "express-validator";
import ParticipantsService from "../service/participants.service";
import { requestParticipantsDto } from "../dto/getparticipants.dto";

const participantsService = new ParticipantsService();

export class ParticipantsController{

    async getParticipants(req:Request, res:Response, next:NextFunction ){
        const result = validationResult(req);
        if(!result.isEmpty()){
            try{
                const participants = await participantsService.GeetMetingParticipants(Number(req.params.id));
                res.json(participants);
                }
                catch(err){ 
                    console.error(error);
                    res.status(500).json({message: "Internal server problems!"});
                }
        }
        res.send({errors: result.array()});
    };

}