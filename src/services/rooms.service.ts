import Rooms from "../models/rooms.model";

export async function deleteRoomById(id: number): Promise<void> {
  await Rooms.destroy({
    where: {
      id: id,
    },
  });
}

export async function getAllRooms(): Promise<any[]> {
  const rooms = await Rooms.findAll();
  return rooms;
}

export async function getRoomById(id: number): Promise<any> {
  const room = await Rooms.findByPk(id);
  return room;
}
