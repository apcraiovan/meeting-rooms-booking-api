import e, { Request, Response } from "express";
import { MeetingService } from "../service/meetings.service";
import { CreateMeetingDto } from "../dto/meetings.dto";

const meetingService = new MeetingService();

export class MeetingController {
    
    async getAllMeetingsByRoomID(req: Request, res: Response): Promise<void> {
        try {
            const meetings = await meetingService.getAllMeetingsByRoomID(req.body.RoomID);
            res.json(meetings);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server problems...'});
        }
    }

    async getMeetingByID(req: Request, res: Response): Promise<void> {
        try {
            const meeting = await meetingService.getMeetingByID(req.body.ID);
            res.json(meeting);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server problems...'});
        }
    }

    async createMeeting(req: Request, res: Response): Promise<void> {
        try {
            const createMeetingDto: CreateMeetingDto = req.body;
            const user = await meetingService.createMeeting(createMeetingDto);
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({message: 'Internal server problems...'});
        }
    }
}