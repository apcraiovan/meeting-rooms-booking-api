import { NextFunction, Request,Response } from "express";
import { validationResult} from "express-validator";

const getRooms = (req:Request, res:Response, next:NextFunction)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
    if(req.params.id !== ""){
        res.send("room" + req.params.id);
    }}
    else{
        res.send("rooms");
    }
}

const postRoom = (req:Request, res:Response, next:NextFunction)=>{
    res.send("posted");
};

const putRoom =(req:Request, res:Response, next:NextFunction)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        return res.send("updated " + req.params.id);
    }
    res.send({errors: result.array()});
};

const deleteRoom = (req:Request, res:Response, next:NextFunction)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        return res.send("deleted " + req.params.id);
    }
    res.send({errors: result.array()});
};

module.exports = {getRooms, postRoom, putRoom, deleteRoom};