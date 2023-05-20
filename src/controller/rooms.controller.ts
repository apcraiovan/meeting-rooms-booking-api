import { NextFunction, Request,Response } from "express";
import { validationResult} from "express-validator";

const RoomsService = require("../service/rooms.service");

export class RoomController {
    async getRooms(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty()){
        if(req.params.id !== ""){
            try{
            const room = RoomsService.GetRoomsById(req.params.id);
            console.log(room);
            res.json(room);
            }
            catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server problems!"});
            }
        }}
        else{
            try{
            const rooms = RoomsService.GeetAllRooms;
            res.json(rooms);}
            catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server problems!"});
            }
        }
    }

    async postRoom(req:Request, res:Response, next:NextFunction){
        
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
            const rooms = RoomsService.DeleteRoomById(req.params.id);
            res.json(rooms);
        }
        res.send({errors: result.array()});
    };
}
