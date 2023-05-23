import { Request,Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import MeetingService from "../service/meeting.service"

const meetingService = new MeetingService();

export class MeetingController{

    async postMeeting(req:Request, res:Response, next:NextFunction ){
        const result = validationResult(req);
        if(result.isEmpty()){
        try{
            meetingService.AddMeeting(req.body.name, req.body.description, req.body.startTime, req.body.endTime, req.body.roomId);
            res.send("Meeting added!");
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: "Internal server problems!"});
        }
        }
        else{
            res.status(500).json({message:result.array()});
        }
    };

    async getMeetingsByRoomId(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty())
        {
            try{
                const meetings = await meetingService.GetAllMeetingsByRoomId(Number(req.params.id));
                res.json(meetings);
            }
            catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server problems!"});
            }
        }
        else{
            res.status(500).json({message:result.array()});
        }
    }

    async getTodayMeetingsByRoomId(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty()){
        try{
            const meetings = await meetingService.GetAllMeetingsByRoomIdAndDate(Number.parseInt(req.params.id));
            res.json(meetings);
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: "Internal server problems!"});
        }
        }
        else{
            res.status(500).json({message:result.array()});
        }
    }

}
