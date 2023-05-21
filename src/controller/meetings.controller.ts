import { Request,Response, NextFunction } from "express";
import MeetingService from "../service/meeting.service";

const meetingService = new MeetingService();

export class MeetingController{

    async postMeeting(req:Request, res:Response, next:NextFunction ){
        try{
            meetingService.AddMeeting(req.body.meetingName, req.body.meetingDescription, req.body.startDate, req.body.endDate, req.body.id);
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: "Internal server problems!"});
        }
    };

}
