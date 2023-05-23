import { Request,Response, NextFunction } from "express";
import MeetingService from "../service/meeting.service";

const meetingService = new MeetingService();

export class MeetingController{

    async getAllMeetingsByRoomIAndDate(req: Request, res: Response): Promise<void> {
        try {
            const meetings = await meetingService.GetAllMeetingsByRoomIdAndDate(req.body.roomId);
            res.json(meetings);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server problems...'});
        }
    }

    async getAllMeetingsByRoomId(req: Request, res: Response): Promise<void> {
        try {
            const meetings = await meetingService.GetAllMeetingsByRoomId(req.body.roomId);
            res.json(meetings);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server problems...'});
        }
    }

    async getMeetingById(req: Request, res: Response): Promise<void> {
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
            const user = await meetingService.AddMeeting(req.body.name, req.body.description, req.body.startTime, req.body.endTime, req.body.roomId);
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({message: 'Internal server problems...'});
        }
    }

}
