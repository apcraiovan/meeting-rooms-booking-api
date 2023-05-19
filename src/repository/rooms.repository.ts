import { Model } from "sequelize-typescript";
import Rooms from "../models/rooms.entity";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
class RoomsRepository {
  async getAllRooms(): Promise<Model<RoomAttributesDto>[]> {
    const rooms = await Rooms.findAll();
    return rooms;
  }

  async getRoomById(id: number): Promise<any> {
    const room = await Rooms.findByPk(id);
    return room;
  }

  async deleteRoomById(id: number): Promise<boolean> {
    try {
      const result = await Rooms.destroy({
        where: {
          id: id,
        },
      });
      return result === 1; //(room deleted)
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default RoomsRepository;
