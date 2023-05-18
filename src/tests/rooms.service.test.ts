import { getAllRooms } from "../services/rooms.service";

describe("getAllRooms", () => {
  it("should retrieve all rooms", async () => {
    const rooms = await getAllRooms();

    expect(rooms.length).toBeGreaterThan(0);

    const expectedRooms = [
      {
        name: "Colective IQ Room",
        capacity: 6,
        description:
          "This room is located on the right side of the office, it is a large meeting room, perfect for presentations and discussing ideas",
      },

      {
        name: "High Table Room",
        capacity: 4,
        description:
          "This room is located on the right side of the office, it is a small meeting room, perfect for fast meeting calls",
      },
      {
        name: "Presentation Success Room",
        capacity: 8,
        description:
          "This room is located on the right side of the office, it is large, perfect for showing the functionality of a successfully implemented idea",
      },
      {
        name: "Focus Room",
        capacity: 3,
        description:
          "This Room is located on the left side of the office, it is small, perfect for taking some time focusing on an idea and coming up with an implementation",
      },
      {
        name: "Room for Growth",
        capacity: 4,
        description:
          "This room is located on the left side of the office, near the kitchen, it is small, perfect for debating and brainstorming for ideas",
      },
    ];

    //expect(rooms).toEqual(expect.arrayContaining(expectedRooms));
    expect(rooms).toEqual(
      expect.arrayContaining(
        expectedRooms.map((expectedRoom) =>
          expect.objectContaining(expectedRoom)
        )
      )
    );
  });
});