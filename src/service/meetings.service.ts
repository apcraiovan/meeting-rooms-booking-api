import { getMeetingDto } from "../dto/getMeetings.dto";
import MeetingsRepository from "../repository/meetings.repository";

const meetingsRepository = new MeetingsRepository();

export default class MeetingsService {
  async createMeeting(
    name: string,
    description: string,
    startTime: Date,
    endTime: Date,
    roomId: number
  ): Promise<void> {
    return await meetingsRepository.createMeeting(
      name,
      description,
      startTime,
      endTime,
      roomId
    );
  }

  async getAllMeetingsByRoomId(roomId: number): Promise<getMeetingDto[]> {
    const data = await meetingsRepository.getAllMeetingsByRoomId(roomId);
    return data;
  }

  async getMeetingById(id: number): Promise<getMeetingDto> {
    const data = await meetingsRepository.getMeetingById(id);
    return data[0];
  }

  // async getAllMeetingsByRoomIdAndDate(
  //   roomId: number
  // ): Promise<getMeetingDto[]> {
  //   const data = await meetingRepository.getAllMeetingsByRoomId(roomId);
  //   return data;
  // }
}
