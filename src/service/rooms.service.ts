import { Model } from "sequelize";
import RoomsRepository from "../repository/rooms.repository";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
const RoomsR = new RoomsRepository();
export class RoomsService {
  async GeetAllRooms(): Promise<Model<RoomAttributesDto>[]> {
    const data = await RoomsR.getAllRooms();
    return data;
  }
  async GetRoomsById(id: number): Promise<any> {
    const data = await RoomsR.getRoomById(id);
    return data;
  }
  async DeleteRoomById(id: number): Promise<boolean> {
    const data = await RoomsR.deleteRoomById(id);
    return data;
  }

  async CreateRoom(
    name: string,
    capacity: number,
    description: string
  ): Promise<Model<RoomAttributesDto>>{
    const room = await RoomsR.createRoom( name, capacity, description );
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

