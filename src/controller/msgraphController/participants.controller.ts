import { Request, Response } from "express";
import {ParticipantService } from "../../service/msgraph/participants.service";
const participantService = new ParticipantService();

export class ParticipantsController {
  async getAllParticipants(req: Request, res: Response): Promise<void> {
    try {
      const participants = await participantService.getAllParticipants();
      res.json(participants);
    } catch (err) {
      console.error(err);
      res.status(500).json("Internal Server Error...");
    }
  }
}


