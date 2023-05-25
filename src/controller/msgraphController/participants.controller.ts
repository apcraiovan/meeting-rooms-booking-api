import { Request, Response } from "express";
import { ParticipantService } from "../../service/msgraph/participants.service";

const participantService = new ParticipantService();

export class ParticipantsController {
  async getAllParticipants(req: Request, res: Response): Promise<void> {
    try {
      const countryCode = req.params.countryCode;
      const participants = await participantService.getAllParticipants(
        countryCode
      );
      res.json(participants);
    } catch (err) {
      console.error(err);
      res.status(500).json("Internal Server Error...");
    }
  }

  async getParticipant(req: Request, res: Response): Promise<void> {
    try {
      const participant = await participantService.getParticipant(
        req.params._name
      );
      res.json(participant);
    } catch (err) {
      console.error(err);
      res.status(500).json("Internal Server Error...");
    }
  }
}
