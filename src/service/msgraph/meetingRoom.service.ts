import axios from "axios";

import { CreateMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/create.meetingRoom.dto";
import { DeleteMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/delete.meetingRoom.dto";
import { UpdateMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/update.meetingRoom.dto";
import MS_GRAPH_PATH from "../../constants/constants";
import { MsGraphUtils } from "../../utils/msgraph/msgraph.utils";

const msGraphUtils = new MsGraphUtils();

export class MeetingRoomsService {
  static headersConfig: any;

  constructor() {
    MeetingRoomsService.headersConfig = {
      headers: {
        Authorization: `Bearer `,
        ConsistencyLevel: "eventual",
      },
    };
  }

  static async getToken() {
    const token = await msGraphUtils.getAccessToken();
    this.headersConfig.headers.Authorization = "Bearer " + token;
  }

  async getMeetingRoomById(roomId: string){
    try {
      await MeetingRoomsService.getToken();
      const meetingRooms = await axios.get(
        MS_GRAPH_PATH.USERS + roomId,
        MeetingRoomsService.headersConfig
      );
      if (meetingRooms !== undefined) return meetingRooms;
    } catch (err) {
      console.error(err);
    }
  }

  async getAllMeetingRooms(location:string) {
    try {
      await MeetingRoomsService.getToken();
      console.log(location);
      const meetingRooms = await axios.get(
        `https://graph.microsoft.com/v1.0/users?$count=true&$search="displayName:room"&$filter=startsWith(mail,'${location}')&$orderBy=displayName&$select=id,displayName,mail`,
        MeetingRoomsService.headersConfig
      );
      if (meetingRooms !== undefined) return meetingRooms;
    } catch (err) {
      // console.error(err);
    }
  }

  async createNewMeetingRoom(createMeetingRoomDto: CreateMeetingRoomDto) {
    try {
      await MeetingRoomsService.getToken();
      const newMeetingRoom = await axios.post(
        MS_GRAPH_PATH.USERS,
        createMeetingRoomDto,
        MeetingRoomsService.headersConfig
      );
      if (newMeetingRoom !== undefined) return newMeetingRoom.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteMeetingRoom(
    deleteMeetingRoomDto: DeleteMeetingRoomDto
  ): Promise<void> {
    try {
      await MeetingRoomsService.getToken();
      const deletedMeetingRoom = await axios.delete(
        MS_GRAPH_PATH.USERS + deleteMeetingRoomDto.id,
        MeetingRoomsService.headersConfig
      );
    } catch (err) {
      console.error(err);
    }
  }
  async updateMeetingRoom(
    updateMeetingRoomDto: UpdateMeetingRoomDto
  ): Promise<void> {
    try {
      await MeetingRoomsService.getToken();

      const { currentRoomData, newRoomData } = updateMeetingRoomDto;
      const updatedRoom = await axios.patch(
        MS_GRAPH_PATH.USERS + currentRoomData.id,
        newRoomData,
        MeetingRoomsService.headersConfig
      );
    } catch (err) {
      console.error(err);
    }
  }
}
