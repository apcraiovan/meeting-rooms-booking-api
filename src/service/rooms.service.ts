import { Model } from "sequelize";
import RoomsRepository from "../repository/rooms.repository";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
import { GetRoomsGroupedDto } from "../dto/getGroupedRooms.dto";

const roomsRepository = new RoomsRepository();

export class RoomsService {
  async getAllRooms(): Promise<Model<RoomAttributesDto>[]> {
    const data = await roomsRepository.getAllRooms();
    return data;
  }

  async getRoomById(id: number): Promise<GetRoomsGroupedDto | null> {
    const room = await roomsRepository.getRoomById(id);
    return room[0];
  }

  async deleteRoomById(id: number): Promise<boolean> {
    const data = await roomsRepository.deleteRoomById(id);
    return data;
  }

  async createRoom(
    room: RoomAttributesDto
  ): Promise<Model<RoomAttributesDto> | null> {
    const createdRoom = await roomsRepository.createRoom(room);
    return createdRoom;
  }

  async updateRoomById(
    id: number,
    room: RoomAttributesDto
  ): Promise<Model<RoomAttributesDto> | null> {
    const updatedRoom = await roomsRepository.updateRoomById(id, room);
    return updatedRoom;
  }

  async getAllRoomsAndMeetings(): Promise<GetRoomsGroupedDto[]> {
    const data = await roomsRepository.getAllRoomsAndMeetings();
    return data;
  }
}
