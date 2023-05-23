import { getMeetingDto } from "../dto/getMeetings.dto";
import Meetings from "../models/meetings.entity";

class MeetingsRepository {
  async createMeeting(
    name: string,
    description: string,
    startTime: Date,
    endTime: Date,
    roomId: number
  ): Promise<void> {
    await Meetings.create({
      name: name,
      description: description,
      startTime: startTime,
      endTime: endTime,
      roomId: roomId,
    });
  }

  async getAllMeetingsByRoomId(roomId: number): Promise<getMeetingDto[]> {
    const data = await Meetings.findAll({
      where: { roomId: roomId },
      raw: true,
      mapToModel: true,
    });
    return data.map((e: Meetings) => {
      const dto = {
        id: e.id,
        name: e.name,
        description: e.description,
        startTime: e.startTime,
        endTime: e.endTime,
        roomId: e.roomId,
      };
      return dto;
    });
  }

  async getMeetingById(id: number): Promise<getMeetingDto[]> {
    const data = await Meetings.findAll({
      where: { id: id },
      raw: true,
      mapToModel: true,
    });
    return data.map((e: Meetings) => {
      const dto = {
        id: e.id,
        name: e.name,
        description: e.description,
        startTime: e.startTime,
        endTime: e.endTime,
        roomId: e.roomId,
      };
      return dto;
    });
  }
}

export default MeetingsRepository;
