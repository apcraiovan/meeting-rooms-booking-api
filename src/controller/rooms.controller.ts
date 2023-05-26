import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { RoomsService } from "../service/rooms.service";

const roomsService = new RoomsService();

export class RoomsController {
  async getRoomById(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    if (result.isEmpty()) {
      try {
        const room = await roomsService.getRoomById(Number(req.params.id));
        res.json(room);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server problems!" });
      }
    } else {
      res.send({ errors: result.array() });
    }
  }

  async getAllRooms(req: Request, res: Response, next: NextFunction) {
    try {
      const rooms = await roomsService.getAllRooms();
      res.json(rooms);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server problems!" });
    }
  }

  async postRoom(req: Request, res: Response, next: NextFunction) {
    try {
      roomsService.createRoom(req.body);
      res.json(req.body);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server problems!" });
    }
  }

  async putRoom(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    if (result.isEmpty()) {
      try {
        roomsService.updateRoomById(Number(req.params.id), req.body);
        res.send("Object updated!");
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server problems!" });
      }
    } else {
      res.send({ errors: result.array() });
    }
  }

  async deleteRoom(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    if (result.isEmpty()) {
      roomsService.deleteRoomById(Number(req.params.id));
    }
    res.send({ errors: result.array() });
  }

  async getAllRoomsAndMeetings(req: Request, res: Response, nex: NextFunction) {
    try {
      const data = await roomsService.getAllRoomsAndMeetings();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ message: "Internal server problems!" });
    }
  }
}
