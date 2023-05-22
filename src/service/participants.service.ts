import ParticipantsRepository from "../repository/participants.repository";
import {
  GetParticipantsDto,
  RequestParticipantsDto,
} from "../dto/getparticipants.dto";
const ParticipantsR = new ParticipantsRepository();
class ParticipantsService {
  addParticipants(participants: Number[], meetid: Number): void {
    ParticipantsR.addParticipants(participants, meetid);
  }
  async geetMetingParticipants(
    id: RequestParticipantsDto
  ): Promise<GetParticipantsDto[]> {
    const data = await ParticipantsR.getMeetingParticipants(id.id);
    return data;
  }
}
export default ParticipantsService;
