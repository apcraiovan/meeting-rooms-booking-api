// import { Model } from "sequelize";
// import Rooms from "../models/rooms.model";

// interface RoomAttributes {
//   id: number;
//   name: string;
//   capacity: number;
//   description: string;
// }

// export async function deleteRoomById(id: number): Promise<boolean> {
//   try {
//     const result = await Rooms.destroy({
//       where: {
//         id: id,
//       },
//     });

//     return result === 1; //(room deleted)
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// }

// export async function getAllRooms(): Promise<Model<RoomAttributes>[]> {
//   const rooms = await Rooms.findAll();
//   return rooms;
// }

// export async function getRoomById(id: number): Promise<any> {
//   const room = await Rooms.findByPk(id);
//   return room;
// }

import { Model } from "sequelize";
import Meeting from "../models/meetings.model";
//import { MeetingRepository } from "../repository/meetings.repository";
import { RoomsRepository } from "../repository/rooms.repository";

interface RoomAttributes {
  id: number;
  name: string;
  capacity: number;
  description: string;
}

const roomsRepository = new RoomsRepository();

export class RoomsService {
  async getAllRooms(): Promise<Model<RoomAttributes>[]> {
    return roomsRepository.getAllRooms();
  }

  async getRoomByID(id: number): Promise<any> {
    return roomsRepository.getRoomById(id);
  }
}
