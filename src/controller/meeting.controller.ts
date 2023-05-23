import e, { NextFunction, Request, Response } from "express";
import MeetingService from "../service/meeting.service";

const meetingService = new MeetingService();

export class MeetingController {
    
    async getAllMeetingsByRoomID(req: Request, res: Response): Promise<void> {
        try {
            const meetings = await meetingService.GetAllMeetingsByRoomId(req.body.roomId);
            res.json(meetings);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server problems...'});
        }
    }

    async getMeetingByID(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            const meeting = await meetingService.GetMeetingById(id);
            res.json(meeting);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server problems...'});
        }
    }

    async postMeeting(req: Request, res: Response): Promise<void> {
        try {
            const user = await meetingService.AddMeeting(req.body.meetingName, req.body.meetingDescription, req.body.startDate, req.body.endDate, req.body.id);
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({message: 'Internal server problems...'});
        }
    }

    // async ppostMeeting(req:Request, res:Response, next:NextFunction ){
    //     try{
    //         meetingService.AddMeeting(req.body.meetingName, req.body.meetingDescription, req.body.startDate, req.body.endDate, req.body.id);
    //     }
    //     catch(err){
    //         console.error(err);
    //         res.status(500).json({message: "Internal server problems!"});
    //     }
    // };
}