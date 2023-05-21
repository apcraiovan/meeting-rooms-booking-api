import { sequelize } from "../config/mysql.config";
import { RoomAttributesDto } from "../dto/getAllRooms.dto";
import RoomsService from "../service/rooms.service";

const roomsService = new RoomsService();

beforeAll(async () => {
  // Connect to the database before running the tests
  await sequelize.authenticate();
});

afterAll(async () => {
  // Close the database connection after running the tests
  await sequelize.close();
});

describe("Rooms", () => {
  it("should retrieve all rooms from the database", async () => {
    const rooms = await roomsService.GeetAllRooms();
    expect(rooms).toBeDefined(); // Assert that rooms are defined (not null or undefined)
    expect(rooms.length).toBeGreaterThan(0); // Assert that at least one room is returned
  });

  it("should retrieve a room by ID", async () => {
    const roomId = 5;
    const room = await roomsService.GetRoomById(roomId);

    expect(room).toBeDefined(); // Assert that the room is defined (not null or undefined)
    expect(room?.getDataValue("id")).toBe(roomId); // Assert that the retrieved room has the correct ID
  });

  it("should delete a room by ID", async () => {
    // Assuming there is at least one room in the database
    const roomId = 3;
    const deleteResult = await roomsService.DeleteRoomById(roomId);
    expect(deleteResult).toBe(true); // Assert that the room is successfully deleted
  });
  it("should create a new room", async () => {
    const newRoom: RoomAttributesDto = {
      name: "New Room3",
      capacity: 10,
      description: "A newly created room",
    };

    const createdRoom = await roomsService.CreateRoom(newRoom);

    expect(createdRoom).toBeDefined(); // Assert that the created room is defined (not null or undefined)
    expect(createdRoom?.getDataValue("name")).toBe(newRoom.name); // Assert that the created room has the correct name
    expect(createdRoom?.getDataValue("capacity")).toBe(newRoom.capacity); // Assert that the created room has the correct capacity
    expect(createdRoom?.getDataValue("description")).toBe(newRoom.description); // Assert that the created room has the correct description
  });

  it("should update an existing room", async () => {
    const roomId = 1;
    const updatedRoomData: RoomAttributesDto = {
      name: "Updated Room",
      capacity: 20,
      description: "An updated room",
    };

    const updatedRoom = await roomsService.UpdateRoomById(
      roomId,
      updatedRoomData
    );

    expect(updatedRoom).toBeDefined(); // Assert that the updated room is defined (not null or undefined)
    expect(updatedRoom?.getDataValue("id")).toBe(roomId); // Assert that the updated room has the correct ID
    expect(updatedRoom?.getDataValue("name")).toBe(updatedRoomData.name); // Assert that the updated room has the correct name
    expect(updatedRoom?.getDataValue("capacity")).toBe(
      updatedRoomData.capacity
    ); // Assert that the updated room has the correct capacity
    expect(updatedRoom?.getDataValue("description")).toBe(
      updatedRoomData.description
    ); // Assert that the updated room has the correct description
  });
});
