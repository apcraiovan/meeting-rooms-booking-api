import { NextFunction, Request,Response } from "express";
import { validationResult} from "express-validator";

exports.get = (req:Request, res:Response, next:NextFunction)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
    if(req.params.id !== ""){
        res.send("room" + req.params.id);
    }}
    else{
        res.send("rooms");
    }
}

exports.post = (req:Request, res:Response, next:NextFunction)=>{
    res.send("posted");
};

exports.put =(req:Request, res:Response, next:NextFunction)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        return res.send("updated " + req.params.id);
    }
    res.send({errors: result.array()});
};

exports.delete = (req:Request, res:Response, next:NextFunction)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        return res.send("deleted " + req.params.id);
    }
    res.send({errors: result.array()});
};