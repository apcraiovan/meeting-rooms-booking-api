import { Model } from "sequelize-typescript";
import Rooms from "../models/rooms.entity";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
class RoomsRepository {
  async getAllRooms(): Promise<Model<RoomAttributesDto>[]> {
    const rooms = await Rooms.findAll();
    return rooms;
  }

  async getRoomById(id: number): Promise<Rooms | null> {
    try {
      const room = await Rooms.findByPk(id);
      return room || null;
    } catch (error) {
      console.log(error);
      return null;
    }
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

  async createRoom(
    name: string,
    capacity: number,
    description: string
  ): Promise<Rooms> {
    try {
      const room = await Rooms.create({ name, capacity, description });
      return room;
    } catch (error) {
      // Handle any potential errors during room creation
      throw new Error("Failed to create room");
    }
  }

  async updateRoomById(
    id: number,
    roomData: RoomAttributesDto
  ): Promise<boolean> {
    try {
      const result = await Rooms.update(roomData, {
        where: {
          id: id,
        },
      });
      return result[0] === 1; // Returns true if a room was updated
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default RoomsRepository;
