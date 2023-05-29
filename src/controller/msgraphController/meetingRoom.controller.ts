import {Request, Response} from "express";
import {MeetingRoomsService} from "../../service/msgraph/meetingRoom.service";
import {CreateMeetingRoomDto} from "../../dto/msgraph/meetingRoomDtos/create.meetingRoom.dto";
import {DeleteMeetingRoomDto} from "../../dto/msgraph/meetingRoomDtos/delete.meetingRoom.dto";
import {UpdateMeetingRoomDto} from "../../dto/msgraph/meetingRoomDtos/update.meetingRoom.dto";

const meetingRoomsService = new MeetingRoomsService();

export class MeetingRoomsController {

    async getEventForMeetingRoom(req: Request, res: Response) {
        const roomId = req.params.meetingRoomId;
        const eventId = req.params.eventId;
        try {

            const event = await meetingRoomsService.getEventForMeetingRoom(roomId, eventId);
            console.log(event)
            res.status(200).json(event)
        } catch (err) {
            console.error(err);
            res.status(500).end("Internal Server Error...");
        }
    }

    async getMeetingRoomById(req: Request, res: Response): Promise<void> {
        try {
            const roomId = req.params.meetingRoomId;
            if (roomId) {
                const meetingRoom = await meetingRoomsService.getMeetingRoomById(roomId);
                res.json(meetingRoom?.data)
            } else {
                req.params.mailPatern = "TM";
            }
        } catch (err) {
            console.error(err);
            res.status(500).end("Internal Server Error...");
        }

    }

    async getAllMeetingRooms(req: Request, res: Response): Promise<void> {
        try {
            const meetingRooms = await meetingRoomsService.getAllMeetingRooms(req.params.mailPatern);
            res.json(meetingRooms?.data.value);
        } catch (err) {
            console.error(err);
            res.status(500).json("Internal Server Error...");
        }
    }

    async createNewMeetingRoom(req: Request, res: Response): Promise<void> {
        try {
            const createMeetingRoomDto: CreateMeetingRoomDto = req.body;
            const meetingRoom =
                meetingRoomsService.createNewMeetingRoom(createMeetingRoomDto);
            res.status(201).json(meetingRoom);
        } catch (err) {
            console.error(err);
            res.status(500).json("Internal Server Error...");
        }
    }

    async deleteMeetingRoom(req: Request, res: Response): Promise<void> {
        try {
            const deleteMeetingRoomDto: DeleteMeetingRoomDto = req.body;
            const meetingRoom =
                meetingRoomsService.deleteMeetingRoom(deleteMeetingRoomDto);
            res.status(201).json(meetingRoom);
        } catch (err) {
            console.error("err");
            res.status(500).json("Internal Server Error...");
        }
    }

    async updateMeetingRoom(req: Request, res: Response): Promise<void> {
        try {
            const updateMeetingRoomDto: UpdateMeetingRoomDto = req.body;
            const meetingRoom =
                meetingRoomsService.updateMeetingRoom(updateMeetingRoomDto);
            res.status(201).json(meetingRoom);
        } catch (err) {
            console.error(err);
            res.status(500).json("Internal Server Error...");
        }
    }
}