import { Model } from "sequelize-typescript";
import Rooms from "../models/rooms.entity";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
import { GetRoomsGroupedDto } from "../dto/getGroupedRooms.dto";
import Meetings from "../models/meetings.entity";
import { TransferMeetingsDto } from "../dto/getGroupedRooms.dto";
class RoomsRepository {
  async getAllRooms(): Promise<Model<RoomAttributesDto>[]> {
    const rooms = await Rooms.findAll();
    return rooms;
  }

  async getRoomById(id: number): Promise<GetRoomsGroupedDto[]> {
    const today = new Date();
    const data = (await Rooms.findAll({
      include: {
        model: Meetings,
        where: {
          id: id,
        },
      },
    })) as unknown as GetRoomsGroupedDto[];
    const dto = data.map((e) => {
      let meetings: TransferMeetingsDto[] = [];
      e.meetings.forEach((meetdata) => {
        const dbdate = new Date(meetdata.startTime);
        if (dbdate.toDateString() == today.toDateString()) {
          meetings.push({
            name: meetdata.name,
            description: meetdata.description,
            startTime: meetdata.startTime,
            endTime: meetdata.endTime,
          });
        }
      });
      return {
        id: e.id,
        name: e.name,
        capacity: e.capacity,
        description: e.description,
        meetings: meetings,
      };
    });
    return dto;
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
    const today = new Date();
    const data = (await Rooms.findAll({
      include: {
        model: Meetings,
      },
    })) as unknown as GetRoomsGroupedDto[];
    const dto = data.map((e) => {
      let meetings: TransferMeetingsDto[] = [];
      e.meetings.forEach((meetdata) => {
        const dbdate = new Date(meetdata.startTime);
        if (dbdate.toDateString() == today.toDateString()) {
          meetings.push({
            name: meetdata.name,
            description: meetdata.description,
            startTime: meetdata.startTime,
            endTime: meetdata.endTime,
          });
        }
      });
      return {
        id: e.id,
        name: e.name,
        capacity: e.capacity,
        description: e.description,
        meetings: meetings,
      };
    });
    return dto;
  }
}

export default RoomsRepository;
