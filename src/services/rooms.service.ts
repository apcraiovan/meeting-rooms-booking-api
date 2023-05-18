import { Model } from "sequelize";
import Rooms from "../models/rooms.model";

interface RoomAttributes {
  id: number;
  name: string;
  capacity: number;
  description: string;
}

export async function deleteRoomById(id: number): Promise<void> {
  await Rooms.destroy({
    where: {
      id: id,
    },
  });
}

export async function getAllRooms(): Promise<Model<RoomAttributes>[]> {
  const rooms = await Rooms.findAll();
  return rooms;
}

export async function getRoomById(id: number): Promise<any> {
  const room = await Rooms.findByPk(id);
  return room;
}

