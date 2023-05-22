import { getMeetingDto } from "../dto/meeting.dto";
import Meeting from "../models/meeting.entity";

class MeetingRepository {
    async AddMeeting(name: string, description: string, startTime: Date, endTime: Date, roomId: number): Promise<void> {
      await Meeting.create({ name: name, description: description, startTime: startTime, endTime:endTime, roomId: roomId });
    }

    async GetAllMeetingsByRoomId(roomId: number):Promise<getMeetingDto[]> {
      const data = await Meeting.findAll({ where: { roomId: roomId }, raw: true, mapToModel: true});
      return data.map((e: Meeting)=>{
          const dto={
              id: e.id,
              name: e.name,
              description: e.description,
              startTime: e.startTime,
              endTime: e.endTime,
              roomId: e.roomId
          }
          return dto;
      })
    }

    async GetAllMeetingsByRoomIdAndDate(roomId: number):Promise<getMeetingDto[]> {
        const today = new Date();
        const data = await Meeting.findAll({ where: { roomId: roomId }, raw: true, mapToModel: true});

        const filteredData = data.filter((e: Meeting) => {
            const startTime = new Date(e.startTime);
            return (
              startTime.getDate() === today.getDate() &&
              startTime.getMonth() === today.getMonth() &&
              startTime.getFullYear() === today.getFullYear()
            );
          });

        return filteredData.map((e: Meeting)=>{
            const dto={
                id: e.id,
                name: e.name,
                description: e.description,
                startTime: e.startTime,
                endTime: e.endTime,
                roomId: e.roomId
            }
            return dto;
        })
      }

    async GetMeetingById(id: number):Promise<getMeetingDto[]> {
        const data = await Meeting.findAll({ where: { id: id }, raw: true, mapToModel: true});
        return data.map((e: Meeting)=>{
            const dto={
                id: e.id,
                name: e.name,
                description: e.description,
                startTime: e.startTime,
                endTime: e.endTime,
                roomId: e.roomId
            }
            return dto;
        })
      }

  }
  
  export default MeetingRepository;
  