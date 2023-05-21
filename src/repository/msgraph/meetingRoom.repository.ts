import axios from "axios";

export class MeetingRoomRepository {
  async getAllMeetingRooms() {
    try {
      const meetingRooms = await axios.get(
        "https://graph.microsoft.com/v1.0/users",
        { headers: { Authorization: process.env.AUTH_KEY } }
      );
      if(meetingRooms !== undefined)
          return meetingRooms.data;
    } catch (err) {
      console.error(err);
    }
  }

  async createMeetingRoom(newRoomData) {
    try {
      const newMeetingRoom = await axios.post(
        "https://graph.microsoft.com/v1.0/",
        newRoomData,
        { headers: { Authorization: process.env.AUTH_KEY } }
      );
      if(newMeetingRoom !== undefined)
      return newMeetingRoom.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateMeetingRoom(a:any, b:any){}
  async deleteMettingRoom(a:any, b:any){}
}
