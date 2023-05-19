import e, { Request, Response } from "express";
//import { MeetingService } from "../service/meetings.service";
//import { CreateMeetingDto } from "../dto/meetings.dto";
import { RoomsService } from "../services/rooms.service";

const roomsService = new RoomsService();

export class RoomsController {
  async getAllRooms(req: Request, res: Response): Promise<void> {
    try {
      const rooms = await roomsService.getAllRooms();
      res.json(rooms);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server problems..." });
    }
  }

  async getRoomByID(req: Request, res: Response): Promise<void> {
    try {
      const rooms = await roomsService.getRoomByID(req.body.ID);
      res.json(rooms);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server problems..." });
    }
  }
}
