import axios from "axios";

import { CreateMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/create.meetingRoom.dto";
import { DeleteMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/delete.meetingRoom.dto";
import { UpdateMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/update.meetingRoom.dto";
import MS_GRAPH_PATH from "../../constants/constants";

export class MeetingRoomsService {
  async getAllMeetingRooms() {
    try {
      const meetingRooms = await axios.get(MS_GRAPH_PATH.USERS, {
        headers: { Authorization: process.env.AUTH_KEY },
      });
      if (meetingRooms !== undefined) return meetingRooms;
    } catch (err) {
      console.error(err);
    }
  }

  async createNewMeetingRoom(createMeetingRoomDto: CreateMeetingRoomDto) {
    try {
      const newMeetingRoom = await axios.post(
        MS_GRAPH_PATH.USERS,
        createMeetingRoomDto,
        { headers: { Authorization: process.env.AUTH_KEY } }
      );
      if (newMeetingRoom !== undefined) return newMeetingRoom.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteMeetingRoom(
    deleteMeetingRoomDto: DeleteMeetingRoomDto
  ): Promise<void> {} //TODO
  async updateMeetingRoom(
    updateMeetingRoomDto: UpdateMeetingRoomDto
  ): Promise<void> {
    const { currentRoomData, newRoomData } = updateMeetingRoomDto;
  } //TODO
}
