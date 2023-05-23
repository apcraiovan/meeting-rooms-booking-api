import { Request,Response, NextFunction } from "express";
import MeetingService from "../service/meeting.service";
import { validationResult } from "express-validator";

const meetingService = new MeetingService();

export class MeetingController{

    async postMeeting(req:Request, res:Response, next:NextFunction ){
        try{
            console.log(req.body);
            meetingService.AddMeeting(req.body.meetingName, req.body.meetingDescription, req.body.startDate, req.body.endDate, 1);
            res.send("Meeting added!");
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: "Internal server problems!"});
        }
    };

    async getMeetings(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty())
        {
            try{
                const meetings = meetingService.GetAllMeetingsByRoomId(1);
                res.json({meetings:meetings});
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
