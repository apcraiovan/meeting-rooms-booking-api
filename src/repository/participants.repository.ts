import Participants from "../models/participants.entity";
import { GetParticipantsDto } from "../dto/getparticipants.dto";
class ParticipantsRepository {
  async addParticipants(participants: Number[], meetid: Number): Promise<void> {
    participants.forEach(async (id) => {
      await Participants.create({ userid: id, meetid: meetid });
    });
  }
  async getMeetingParticipants(id: number): Promise<GetParticipantsDto[]> {
    const data = await Participants.findAll({
      where: { meetid: id },
      raw: true,
    });
    return data.map((e: Participants) => {
      const dto = {
        userId: e.userId,
      };
      return dto;
    });
  }
}

export default ParticipantsRepository;
