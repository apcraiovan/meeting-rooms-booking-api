import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import MeetingsService from "../service/meetings.service";

const meetingsService = new MeetingsService();

export class MeetingsController {
  async postMeeting(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    if (result.isEmpty()) {
      try {
        meetingsService.createMeeting(
          req.body.name,
          req.body.description,
          req.body.startTime,
          req.body.endTime,
          req.body.roomId
        );
        res.json(req.body);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server problems!" });
      }
    } else {
      res.status(500).json({ message: result.array() });
    }
  }

  async getAllMeetingsByRoomId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const result = validationResult(req);
    if (result.isEmpty()) {
      try {
        const meetings = await meetingsService.getAllMeetingsByRoomId(
          Number(req.params.roomid)
        );
        res.json(meetings);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server problems!" });
      }
    } else {
      res.status(500).json({ message: result.array() });
    }
  }

  async getMeetingById(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    if (result.isEmpty()) {
      try {
        const meetings = await meetingsService.getMeetingById(
          Number(req.params.id)
        );
        res.json(meetings);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server problems!" });
      }
    } else {
      res.status(500).json({ message: result.array() });
    }
  }

  // async getTodayMeetingsByRoomId(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) {
  //   const result = validationResult(req);
  //   if (result.isEmpty()) {
  //     try {
  //       const meetings = await meetingsService.getAllMeetingsByRoomIdAndDate(
  //         Number.parseInt(req.params.id)
  //       );
  //       res.json(meetings);
  //     } catch (err) {
  //       console.error(err);
  //       res.status(500).json({ message: "Internal server problems!" });
  //     }
  //   } else {
  //     res.status(500).json({ message: result.array() });
  //   }
  // }
}
