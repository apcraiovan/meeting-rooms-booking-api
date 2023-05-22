import { getMeetingDto } from "../dto/meeting.dto";
import MeetingRepository from "../repository/meeting.repository";

const MeetingRepo = new MeetingRepository()

class MeetingService {
    async AddMeeting(name: string, description: string, startTime: Date, endTime: Date, roomId: number): Promise<void> {
      return await MeetingRepo.AddMeeting(name, description, startTime, endTime, roomId);
    }

    async GetAllMeetingsByRoomId(roomId: number): Promise<getMeetingDto[]> {
      const data = await MeetingRepo.GetAllMeetingsByRoomId(roomId);
      return data;
    }

    async GetAllMeetingsByRoomIdAndDate(roomId: number): Promise<getMeetingDto[]> {
      const data = await MeetingRepo.GetAllMeetingsByRoomIdAndDate(roomId);
      return data;
    }

    async GetMeetingById(roomId: number): Promise<getMeetingDto> {
        const data = await MeetingRepo.GetMeetingById(roomId);
        return data[0];
      }
  }
  export default MeetingService;