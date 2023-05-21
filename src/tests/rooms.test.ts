import { sequelize } from "../config/mysql.config";
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
    const roomId = 2;
    const deleteResult = await roomsService.DeleteRoomById(roomId);
    expect(deleteResult).toBe(true); // Assert that the room is successfully deleted
  });
});
