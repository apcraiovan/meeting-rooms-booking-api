import { Model } from "sequelize-typescript";
import Rooms from "../models/rooms.entity";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
import { GetRoomsGroupedDto } from "../dto/getGroupedRooms.dto";
import Meetings from "../models/meetings.entity";

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

  async createRoom(room: RoomAttributesDto): Promise<Rooms | null> {
    try {
      const { id, ...roomData } = room;
      const createdRoom = await Rooms.create(roomData);
      return createdRoom;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateRoomById(
    id: number,
    room: RoomAttributesDto
  ): Promise<Rooms | null> {
    try {
      const existingRoom = await Rooms.findByPk(id);
      if (existingRoom) {
        await existingRoom.update(room);
        return existingRoom;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async getAllRoomsAndMeetings(): Promise<GetRoomsGroupedDto[]> {
    const data = (await Rooms.findAll({
      include: Meetings,
    })) as unknown as GetRoomsGroupedDto[];
    const dto = data.map((e) => {
      const meeting = e.meetings.map((meetdata) => {
        return {
          name: meetdata.name,
          description: meetdata.description,
          startTime: meetdata.startTime,
          endTime: meetdata.endTime,
        };
      });
      return {
        id: e.id,
        name: e.name,
        capacity: e.capacity,
        meetings: meeting,
      };
    });
    return dto;
  }
}

export default RoomsRepository;
