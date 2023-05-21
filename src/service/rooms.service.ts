import { Model } from "sequelize";
import RoomsRepository from "../repository/rooms.repository";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
const RoomsR = new RoomsRepository();
export class RoomsService {
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
<<<<<<< HEAD
    name: string,
    capacity: number,
    description: string
  ): Promise<Model<RoomAttributesDto>>{
    const room = await RoomsR.createRoom( name, capacity, description );
    return room;
=======
    room: RoomAttributesDto
  ): Promise<Model<RoomAttributesDto> | null> {
    const createdRoom = await RoomsR.createRoom(room);
    return createdRoom;
>>>>>>> 14ccc5b64ad2e19b9bce955a45eaf4cd60e87671
  }

  async UpdateRoomById(
    id: number,
    room: RoomAttributesDto
  ): Promise<Model<RoomAttributesDto> | null> {
    const updatedRoom = await RoomsR.updateRoomById(id, room);
    return updatedRoom;
  }
}

