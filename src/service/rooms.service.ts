import { Model } from "sequelize";
import RoomsRepository from "../repository/rooms.repository";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
import { GetRoomsGroupedDto } from "../dto/getGroupedRooms.dto";
const Roomsrepository = new RoomsRepository();
export class RoomsService {
  async GeetAllRooms(): Promise<Model<RoomAttributesDto>[]> {
    const data = await Roomsrepository.getAllRooms();
    return data;
  }

  async GetRoomById(id: number): Promise<Model<RoomAttributesDto> | null> {
    const room = await Roomsrepository.getRoomById(id);
    return room;
  }

  async DeleteRoomById(id: number): Promise<boolean> {
    const data = await Roomsrepository.deleteRoomById(id);
    return data;
  }

  async CreateRoom(
    room: RoomAttributesDto
  ): Promise<Model<RoomAttributesDto> | null> {
    const createdRoom = await Roomsrepository.createRoom(room);
    return createdRoom;
  }

  async UpdateRoomById(
    id: number,
    room: RoomAttributesDto
  ): Promise<Model<RoomAttributesDto> | null> {
    const updatedRoom = await Roomsrepository.updateRoomById(id, room);
    return updatedRoom;
  }
  async getAllRoomsAndMeetings(): Promise<GetRoomsGroupedDto[]> {
    const data = await Roomsrepository.getAllRoomsAndMeetings();
    return data;
  }
}
