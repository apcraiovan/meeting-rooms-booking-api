import { CreateMeetingDto, GetMeetingDto } from "../dto/meetings.dto";
import Meeting from "../models/meetings.model";
import { MeetingRepository } from "../repository/meetings.repository";


const meetingRepository = new MeetingRepository();

export class MeetingService {
    async getAllMeetingsByRoomID(roomID: number): Promise<GetMeetingDto[]> {
        return meetingRepository.getAllMeetingsByRoomID(roomID);
    }

    async getMeetingByID(id: number): Promise<GetMeetingDto| null> {
      return meetingRepository.getMeetingById(id);
    }

    async createMeeting(createMeetingDto: CreateMeetingDto): Promise<CreateMeetingDto> {
        const {Name, Description, StartTime, EndTime, RoomID} = createMeetingDto;
        return meetingRepository.createMeeting(Name, Description, StartTime, EndTime, RoomID);
    }
}