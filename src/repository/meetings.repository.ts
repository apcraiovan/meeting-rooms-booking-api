import Meeting from "../models/meetings.model";

export class MeetingRepository {
    async getAllMeetingsByRoomID(roomID: number): Promise<Meeting[]> {
        return Meeting.findAll({where:{
            RoomID: roomID
        }});
    }

    async getMeetingById(id: number): Promise<Meeting | null> {
        return Meeting.findByPk(id);
    }

    async createMeeting(name: string, description: string, startTime: Date, endTime: Date, roomID: number): Promise<Meeting> {
        return Meeting.create({name, description, startTime, endTime, roomID});
    }
}