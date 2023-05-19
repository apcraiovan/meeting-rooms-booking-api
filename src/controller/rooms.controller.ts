import { NextFunction, Request,Response } from "express";
import { validationResult} from "express-validator";


export class RoomController {
    async getRooms(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty()){
        if(req.params.id !== ""){
            res.send("room" + req.params.id);
        }}
        else{
            res.send("rooms");
        }
    }

    async postRoom(req:Request, res:Response, next:NextFunction){
        res.send("posted");
    };

    async putRoom(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty()){
            return res.send("updated " + req.params.id);
        }
        res.send({errors: result.array()});
    };

    async deleteRoom(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty()){
            return res.send("deleted " + req.params.id);
        }
        res.send({errors: result.array()});
    };
}
