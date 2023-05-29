import request from "supertest";
import app from "../../app";
import { connectToDatabase, sequelize } from "../../config/mysql.config";

beforeAll(async () => {
  await connectToDatabase();
});

afterAll(async () => {
  await sequelize.close();
});

describe("RoomsController", () => {
  describe("getRoomById", () => {
    it("should get room by id", async () => {
      const response = await request(app).get("/rooms/byid/1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: 1,
        name: "room1",
        capacity: 6,
        description: "descriere",
        createdAt: "2023-05-23T19:14:54.000Z",
        updatedAt: "2023-05-23T19:14:54.000Z",
      });
    });
  });

  describe("getAllRooms", () => {
    it("should get all rooms", async () => {
      const response = await request(app).get("/rooms");

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        {
          id: 1,
          name: "room1",
          capacity: 6,
          description: "descriere",
          createdAt: "2023-05-23T19:14:54.000Z",
          updatedAt: "2023-05-23T19:14:54.000Z",
        },
        {
          id: 2,
          name: "room2",
          capacity: 6,
          description: "descriere",
          createdAt: "2023-05-23T19:15:03.000Z",
          updatedAt: "2023-05-23T19:15:03.000Z",
        },
        {
          id: 3,
          name: "room3",
          capacity: 6,
          description: "descriere",
          createdAt: "2023-05-23T19:15:12.000Z",
          updatedAt: "2023-05-23T19:15:12.000Z",
        },
      ]);
    });
  });

  describe("postRoom", () => {
    it("should create a new room", async () => {
      const requestBody = {
        name: "test",
        capacity: "6",
        description: "descriere",
      };

      const response = await request(app).post("/rooms").send(requestBody);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        name: "test",
        capacity: "6",
        description: "descriere",
      });
    });
  });

  describe("putRoom", () => {
    it("should update a room", async () => {
      const requestBody = {
        id: 4,
        name: "update",
        capacity: "6",
        description: "descriere noua",
      };

      const response = await request(app).put("/rooms/4").send(requestBody);

      expect(response.status).toBe(200);
      expect(response.text).toEqual("Object updated!");
    });
  });

  describe("deleteRoom", () => {
    it("should delete a room", async () => {
      const response = await request(app).delete("/rooms/4");

      expect(response.status).toBe(200);
    });
  });

  describe("getAllRoomsAndMeetings", () => {
    it("should get all rooms and meetings", async () => {
      const response = await request(app).get("/rooms/meetings");
      expect(response.status).toBe(200);
    });
  });
});
