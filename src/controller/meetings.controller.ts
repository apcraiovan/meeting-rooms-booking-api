import { Request,Response, NextFunction } from "express";
import MeetingService from "../service/meeting.service";

const meetingService = new MeetingService();

export class MeetingController{

    async postMeeting(req:Request, res:Response, next:NextFunction ){
        try{
            console.log(req.body);
            meetingService.AddMeeting(req.body.name, req.body.description, req.body.startTime, req.body.endTime, req.body.id);
            res.send("Meeting added!");
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: "Internal server problems!"});
        }
    };

    async getMeetings(req:Request, res:Response, next:NextFunction){
        try{
            const meetings = meetingService.GetAllMeetingsByRoomId(1);
            res.json({meetings:meetings});
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: "Internal server problems!"});
        }
    }

}
