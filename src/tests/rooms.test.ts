import RoomsRepository from "../repository/rooms.repository";
import Rooms from "../models/rooms.entity"; // Import the Rooms model
import { sequelize } from "../config/mysql.config";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
beforeAll(async () => {
  // Connect to the database before running the tests
  await sequelize.authenticate();
});

afterAll(async () => {
  // Close the database connection after running the tests
  await sequelize.close();
});
// Mocked data for rooms
const mockedRooms: Rooms[] = [
  Rooms.build({
    id: 1,
    name: "Room 1",
    capacity: 10,
    description: "Description 1",
  }),
  Rooms.build({
    id: 2,
    name: "Room 2",
    capacity: 15,
    description: "Description 2",
  }),
];

describe("RoomsRepository", () => {
  let roomsRepository: RoomsRepository;

  beforeEach(() => {
    roomsRepository = new RoomsRepository();
  });

  it("should return all rooms", async () => {
    const getAllRoomsSpy = jest
      .spyOn(roomsRepository, "getAllRooms")
      .mockResolvedValue(mockedRooms);

    const rooms = await roomsRepository.getAllRooms();

    expect(getAllRoomsSpy).toHaveBeenCalled();
    expect(rooms).toEqual(mockedRooms);

    getAllRoomsSpy.mockRestore();
  });

  it("should return a room by id", async () => {
    const roomId = 1;
    const expectedRoom = mockedRooms.find((room) => room.id === roomId);

    const getRoomByIdSpy = jest
      .spyOn(roomsRepository, "getRoomById")
      .mockResolvedValue(
        Promise.resolve(expectedRoom) as Promise<Rooms | null>
      );

    const room = await roomsRepository.getRoomById(roomId);

    expect(getRoomByIdSpy).toHaveBeenCalledWith(roomId);
    expect(room).toEqual(expectedRoom);

    getRoomByIdSpy.mockRestore();
  });

  it("should delete an existing room", async () => {
    const roomId = 1;

    const deleteRoomSpy = jest
      .spyOn(roomsRepository, "deleteRoomById")
      .mockResolvedValue(true);

    const isDeleted = await roomsRepository.deleteRoomById(roomId);

    expect(deleteRoomSpy).toHaveBeenCalledWith(roomId);
    expect(isDeleted).toBe(true);

    deleteRoomSpy.mockRestore();
  });

  it("should update an existing room", async () => {
    const roomId = 1;
    const updatedRoomData: RoomAttributesDto = {
      name: "Updated Room",
      capacity: 25,
      description: "Updated Room Description",
    };

    const expectedRoom: Rooms = Rooms.build({
      id: roomId,
      ...updatedRoomData,
    });

    const updateRoomByIdSpy = jest
      .spyOn(roomsRepository, "updateRoomById")
      .mockResolvedValue(expectedRoom);

    const updatedRoom = await roomsRepository.updateRoomById(
      roomId,
      updatedRoomData
    );

    expect(updateRoomByIdSpy).toHaveBeenCalledWith(roomId, updatedRoomData);
    expect(updatedRoom).toEqual(expectedRoom);

    updateRoomByIdSpy.mockRestore();
  });

  it("should create a new room", async () => {
    const newRoom: RoomAttributesDto = {
      name: "New Room",
      capacity: 20,
      description: "New Room Description",
    };

    const expectedRoom: RoomAttributesDto = {
      name: newRoom.name,
      capacity: newRoom.capacity,
      description: newRoom.description,
    };

    const createSpy = jest
      .spyOn(Rooms, "create")
      .mockResolvedValue(expectedRoom);

    const result = await roomsRepository.createRoom(newRoom);

    expect(result).toEqual(expectedRoom);
    expect(createSpy).toHaveBeenCalledTimes(1);
    expect(createSpy).toHaveBeenCalledWith(newRoom);

    createSpy.mockRestore();
  });
});
