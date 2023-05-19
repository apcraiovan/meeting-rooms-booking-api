import { CreateMeetingDto } from "../dto/meetings.dto";
import Meeting from "../models/meetings.model";
import { MeetingRepository } from "../repository/meetings.repository";


const meetingRepository = new MeetingRepository();

export class MeetingService {
    async getAllMeetingsByRoomID(roomID: number): Promise<Meeting[]> {
        return meetingRepository.getAllMeetingsByRoomID(roomID);
    }

    async getMeetingByID(id: number): Promise<Meeting| null> {
      return meetingRepository.getMeetingById(id);
    }

    async createMeeting(createMeetingDto: CreateMeetingDto): Promise<Meeting> {
        const {Name, Description, StartTime, EndTime, RoomID} = createMeetingDto;
        return meetingRepository.createMeeting(Name, Description, StartTime, EndTime, RoomID);
    }
}