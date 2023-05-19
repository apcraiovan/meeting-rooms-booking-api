import { Model } from "sequelize-typescript";
import { CreateMeetingDto, GetMeetingDto } from "../dto/meetings.dto";
import Meeting from "../models/meetings.model";

export class MeetingRepository {
    async getAllMeetingsByRoomID(roomID: number): Promise<GetMeetingDto[]> {
        const meetings = await Meeting.findAll({
            where: {
              RoomID: roomID,
            },
          });
      
          const meetingsFormat: GetMeetingDto[] = meetings.map((meeting: any) => ({
            ID: meeting.ID,
            Name: meeting.Name,
            Description: meeting.Description,
            StartTime: meeting.StartTime,
            EndTime: meeting.EndTime,
            RoomID: meeting.RoomID
          }));
      
          return meetingsFormat;
    }

    async getMeetingById(id: number): Promise<GetMeetingDto | null> {
        const meetings = await Meeting.findAll({
            where: {
              ID: id,
            },
          });
      
          const meetingsFormat: GetMeetingDto[] = meetings.map((meeting: any) => ({
            ID: meeting.ID,
            Name: meeting.Name,
            Description: meeting.Description,
            StartTime: meeting.StartTime,
            EndTime: meeting.EndTime,
            RoomID: meeting.RoomID
          }));
      
          return meetingsFormat[0];
    }
      

    async createMeeting(name: string, description: string, startTime: Date, endTime: Date, roomID: number): Promise<CreateMeetingDto> {
        await Meeting.create({ name, description, startTime, endTime, roomID });
      
        const createMeetingDto: CreateMeetingDto = {
          Name: name,
          Description: description,
          StartTime: startTime,
          EndTime: endTime,
          RoomID: roomID,
        };
      
        return createMeetingDto;
      }
      
}