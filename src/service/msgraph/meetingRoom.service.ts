import { MeetingRoom } from "../../models/msgraph/meetingRoom.entity";
import { MeetingRoomRepository } from "../../repository/msgraph/meetingRoom.repository";
import { CreateMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/create.meetingRoom.dto";
import { DeleteMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/delete.meetingRoom.dto";
import { UpdateMeetingRoomDto } from "../../dto/msgraph/meetingRoomDtos/update.meetingRoom.dto";

const meetingRoomRepository = new MeetingRoomRepository();

export class MeetingRoomsService {
  async getAllMeetingRooms(): Promise<MeetingRoom[]> {
    return meetingRoomRepository.getAllMeetingRooms();
  }
  async createNewMeetingRoom(
    createMeetingRoomDto: CreateMeetingRoomDto
  ): Promise<MeetingRoom> {
    const { meetingRoomName, meetingRoomCapacity, meetingRoomDescription } =
      createMeetingRoomDto;
    return meetingRoomRepository.createMeetingRoom({
      meetingRoomName,
      meetingRoomCapacity,
      meetingRoomDescription,
    });
  }
  async deleteMeetingRoom(
    deleteMeetingRoomDto: DeleteMeetingRoomDto
  ): Promise<void> {
    const { meetingRoomName, meetingRoomEmail } = deleteMeetingRoomDto;
    // return meetingRoomRepository.deleteMeetingRoom(
    //   meetingRoomName,
    //   meetingRoomEmail
    // );
  }
  async updateMeetingRoom(
    updateMeetingRoomDto: UpdateMeetingRoomDto
  ): Promise<void> {
    const { currentRoomData, newRoomData } = updateMeetingRoomDto;
    return meetingRoomRepository.updateMeetingRoom(
      currentRoomData,
      newRoomData
    );
  }
}
