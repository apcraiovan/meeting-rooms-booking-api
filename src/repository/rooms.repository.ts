import { Model } from "sequelize";
import Meeting from "../models/meetings.model";
import Rooms from "../models/rooms.model";
interface RoomAttributes {
  id: number;
  name: string;
  capacity: number;
  description: string;
}
export class RoomsRepository {
  async getAllRooms(): Promise<Model<RoomAttributes>[]> {
    return Rooms.findAll();
  }

  async getRoomById(id: number): Promise<any> {
    const room = await Rooms.findByPk(id);
    return room;
  }
}
