import { Request, Response } from "express";
import { MeetingRoomsService } from "../../service/msgraph/meetingRoom.service";
import { CreateMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/create.meetingRoom.dto";
import { DeleteMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/delete.meetingRoom.dto";
import { UpdateMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/update.meetingRoom.dto";
const meetingRoomsService = new MeetingRoomsService();

export class MeetingRoomsController {
  async getAllMeetingRooms(req: Request, res: Response): Promise<void> {
    try {
      const meetingRooms = await meetingRoomsService.getAllMeetingRooms();
      res.json(meetingRooms);
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
      console.error(err);
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
