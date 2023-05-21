import { Model } from "sequelize";
import RoomsRepository from "../repository/rooms.repository";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
const RoomsR = new RoomsRepository();
class RoomsService {
  async GeetAllRooms(): Promise<Model<RoomAttributesDto>[]> {
    const data = await RoomsR.getAllRooms();
    return data;
  }

  async GetRoomById(id: number): Promise<Model<RoomAttributesDto> | null> {
    const room = await RoomsR.getRoomById(id);
    return room;
  }

  async DeleteRoomById(id: number): Promise<boolean> {
    const data = await RoomsR.deleteRoomById(id);
    return data;
  }

  async CreateRoom(
    room: RoomAttributesDto
  ): Promise<Model<RoomAttributesDto> | null> {
    const createdRoom = await RoomsR.createRoom(room);
    return createdRoom;
  }

  async UpdateRoomById(
    id: number,
    room: RoomAttributesDto
  ): Promise<Model<RoomAttributesDto> | null> {
    const updatedRoom = await RoomsR.updateRoomById(id, room);
    return updatedRoom;
  }
}
export default RoomsService;
