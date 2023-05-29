import request from "supertest";
import app from "../../app";
import { connectToDatabase, sequelize } from "../../config/mysql.config";

beforeAll(async () => {
  await connectToDatabase();
});

afterAll(async () => {
  await sequelize.close();
});

describe("MeetingsController", () => {
  describe("getAllMeetingsByRoomId", () => {
    it("should get all meetings by roomId", async () => {
      const response = await request(app).get("/meetings/roomid/3");

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        {
          id: 4,
          name: "meet4",
          description: "description",
          startTime: "2023-04-28T10:20:18.000Z",
          endTime: "2024-01-28T18:35:18.000Z",
          roomId: 3,
        },
        {
          id: 7,
          name: "meet7",
          description: "description",
          startTime: "2023-04-28T10:20:18.000Z",
          endTime: "2024-01-28T18:35:18.000Z",
          roomId: 3,
        },
      ]);
    });
  });

  describe("getMeetingById", () => {
    it("should get meeting by id", async () => {
      const response = await request(app).get("/meetings/1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: 1,
        name: "meet1",
        description: "description",
        startTime: "2023-04-28T10:20:18.000Z",
        endTime: "2024-01-28T18:35:18.000Z",
        roomId: 1,
      });
    });
  });

  describe("postMeeting", () => {
    it("should create a new meeting", async () => {
      const requestBody = {
        name: "test",
        description: "descriere",
        startTime: "2023-05-19T13:52:09.000Z",
        endTime: "2023-05-19T13:52:09.000Z",
        roomId: 1,
      };

      const response = await request(app).post("/meetings").send(requestBody);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        name: "test",
        description: "descriere",
        startTime: "2023-05-19T13:52:09.000Z",
        endTime: "2023-05-19T13:52:09.000Z",
        roomId: 1,
      });
    });
  });
});
