import { Participant } from "../../models/msgraph/participant.entity";
import { ParticipantRepository } from "../../repository/msgraph/participant.repository";

const participantRepository = new ParticipantRepository();

export class ParticipantService {
  async getAllParticipants(): Promise<Participant[]> {
    return participantRepository.getAllParticipants();
  }
}
