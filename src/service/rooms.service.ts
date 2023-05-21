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
    name: string,
    capacity: number,
    description: string
  ): Promise<Model<RoomAttributesDto>> {
    const room = await RoomsR.createRoom(name, capacity, description);
    return room;
  }

  async UpdateRoomById(
    id: number,
    roomData: RoomAttributesDto
  ): Promise<boolean> {
    const result = await RoomsR.updateRoomById(id, roomData);
    return result;
  }
}
export default RoomsService;
